const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'prism_secure_jwt_secret_key_2026';

app.use(helmet());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rate limiting against brute-force attacks
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // limit each IP to 20 requests per windowMs
  message: { error: 'Too many authentication attempts, please try again later.' }
});
app.use('/api/auth/', authLimiter);

// Database Setup
const db = new sqlite3.Database('./prism_settlement.sqlite', (err) => {
  if (err) console.error('Database connection error:', err.message);
  else console.log('Connected to SQLite database.');
});

db.run(`CREATE TABLE IF NOT EXISTS operators (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE,
  passcode TEXT,
  totp_secret TEXT,
  is_2fa_enabled INTEGER DEFAULT 0
)`);

// Register New Node / Operator
app.post('/api/auth/register', async (req, res) => {
  const { email, passcode } = req.body;
  if (!email || !passcode) return res.status(400).json({ error: 'Email and passcode required.' });

  try {
    const hashedPassword = await bcrypt.hash(passcode, 10);
    const tempSecret = speakeasy.generateSecret({ name: `PrisM-Settlement (${email})` });

    db.run(`INSERT INTO operators (email, passcode, totp_secret, is_2fa_enabled) VALUES (?, ?, ?, 0)`,
      [email, hashedPassword, tempSecret.base32],
      async function(err) {
        if (err) return res.status(400).json({ error: 'Operator email already registered.' });
        
        const qrCodeUrl = await QRCode.toDataURL(tempSecret.otpauth_url);
        res.json({ 
          success: true, 
          message: 'Node registered successfully. Scan QR code to setup 2FA.',
          totpSecret: tempSecret.base32,
          qrCode: qrCodeUrl 
        });
      }
    );
  } catch (err) {
    res.status(500).json({ error: 'Server error during registration.' });
  }
});

// Enable 2FA Verification
app.post('/api/auth/verify-setup', (req, res) => {
  const { email, token } = req.body;
  db.get(`SELECT * FROM operators WHERE email = ?`, [email], (err, operator) => {
    if (err || !operator) return res.status(404).json({ error: 'Operator not found.' });

    const verified = speakeasy.totp.verify({
      secret: operator.totp_secret,
      encoding: 'base32',
      token: token
    });

    if (verified) {
      db.run(`UPDATE operators SET is_2fa_enabled = 1 WHERE email = ?`, [email], () => {
        res.json({ success: true, message: '2FA security enabled successfully.' });
      });
    } else {
      res.status(400).json({ error: 'Invalid verification code.' });
    }
  });
});

// Initialize Session (Login)
app.post('/api/auth/login', (req, res) => {
  const { email, passcode, token } = req.body;
  db.get(`SELECT * FROM operators WHERE email = ?`, [email], async (err, operator) => {
    if (err || !operator) return res.status(400).json({ error: 'Invalid credentials.' });

    const validPass = await bcrypt.compare(passcode, operator.passcode);
    if (!validPass) return res.status(400).json({ error: 'Invalid credentials.' });

    if (operator.is_2fa_enabled === 1) {
      if (!token) return res.status(205).json({ require2fa: true, message: 'TOTP 2FA token required.' });
      const verified = speakeasy.totp.verify({
        secret: operator.totp_secret,
        encoding: 'base32',
        token: token
      });
      if (!verified) return res.status(400).json({ error: 'Invalid 2FA code.' });
    }

    const jwtToken = jwt.sign({ email: operator.email, id: operator.id }, JWT_SECRET, { expiresIn: '12h' });
    res.json({ success: true, token: jwtToken, message: 'Session initialized securely.' });
  });
});

app.listen(PORT, () => {
  console.log(`PrisM-Settlement gateway active on port ${PORT}`);
});

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { ethers } = require('ethers');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

const settlementLedger = {
    accounts: {},
    orders: [],
    transactions: []
};

app.post('/api/v1/auth/verify', async (req, res) => {
    try {
        const { address, signature, message } = req.body;
        const recoveredAddress = ethers.verifyMessage(message, signature);

        if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
            if (!settlementLedger.accounts[address]) {
                settlementLedger.accounts[address] = { balanceETH: 0.0, lockedETH: 0.0, assets: [] };
            }
            return res.json({ status: 'SUCCESS', message: 'Authorized in PrisM-Settlement CEX', address });
        } else {
            return res.status(401).json({ status: 'ERROR', message: 'Signature verification failed' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'ERROR', message: error.message });
    }
});

app.post('/api/v1/settle/order', (req, res) => {
    const { buyer, seller, tokenId, priceETH } = req.body;
    
    const settlementRecord = {
        txId: ethers.id(Date.now().toString()),
        buyer,
        seller,
        tokenId,
        priceETH,
        timestamp: new Date().toISOString(),
        status: 'SETTLED_INTERNAL_CEX'
    };

    settlementLedger.transactions.push(settlementRecord);
    
    console.log(`[PrisM-CEX Settlement] Executed Trade: Token ${tokenId} transferred from ${seller} to ${buyer} for ${priceETH} ETH`);
    
    res.json({ status: 'SETTLED', settlementRecord });
});

app.get('/api/v1/account/:address', (req, res) => {
    const { address } = req.params;
    const accountData = settlementLedger.accounts[address] || { balanceETH: 0.0, lockedETH: 0.0, assets: [] };
    res.json({ address, ...accountData, activeOrders: settlementLedger.orders.filter(o => o.address === address) });
});

app.listen(PORT, () => {
    console.log(`PrisM-Settlement CEX Engine active on port ${PORT}`);
});

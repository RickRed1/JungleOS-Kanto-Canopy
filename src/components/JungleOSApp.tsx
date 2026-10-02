import React, { useState } from 'react';
import { Smartphone, Clipboard, Mail, Camera, Gamepad2, Globe, Zap, Laptop, Battery } from 'lucide-react';

export default function JungleOSApp() {
  const [initialized, setInitialized] = useState(false);
  const [trainerName, setTrainerName] = useState('Trainer Red');
  const [starter, setStarter] = useState('Charmander');
  const [activeWindow, setActiveWindow] = useState<string | null>('desktop');

  if (!initialized) {
    return (
      <div style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', backgroundColor: '#07130e', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', fontFamily: 'monospace', userSelect: 'none', overflowY: 'auto' }}>
        <div style={{ maxWidth: '400px', width: '100%', backgroundColor: '#112219', border: '2px solid #e89438', borderRadius: '16px', padding: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)', position: 'relative', margin: 'auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
            <div style={{ padding: '12px', backgroundColor: '#173826', border: '1px solid #236b43', borderRadius: '50%', color: '#45cc7c' }}>
              <Zap size={32} />
            </div>
          </div>
          
          <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', textAlign: 'center', letterSpacing: '0.05em', color: '#e89438', marginBottom: '4px' }}>PROFESSOR OAK'S LAB</h1>
          <p style={{ fontSize: '0.75rem', textAlign: 'center', color: '#9bcab0', marginBottom: '20px' }}>Welcome to JungleOS: Kanto Canopy Edition! Register Trainer Identity.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#e89438', fontWeight: 'bold', marginBottom: '4px' }}>Trainer Name</label>
              <input 
                type="text" 
                value={trainerName}
                onChange={(e) => setTrainerName(e.target.value)}
                style={{ width: '100%', backgroundColor: '#091811', border: '2px solid #236b43', borderRadius: '12px', padding: '8px 12px', fontSize: '0.875rem', color: 'white', fontWeight: 'bold', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#e89438', fontWeight: 'bold', marginBottom: '8px' }}>CHOOSE STARTER POKÉMON:</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px' }}>
                <button
                  onClick={() => setStarter('Bulbasaur')}
                  style={{ padding: '10px 4px', fontSize: '12px', fontWeight: 'bold', borderRadius: '12px', border: starter === 'Bulbasaur' ? '2px solid white' : '2px solid #236b43', backgroundColor: '#3b9c62', color: 'white', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', transform: starter === 'Bulbasaur' ? 'scale(1.05)' : 'scale(1)' }}
                >
                  🌿 Bulbasaur
                </button>
                <button
                  onClick={() => setStarter('Charmander')}
                  style={{ padding: '10px 4px', fontSize: '12px', fontWeight: 'bold', borderRadius: '12px', border: starter === 'Charmander' ? '2px solid white' : '2px solid #e89438', backgroundColor: '#d15826', color: 'white', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', transform: starter === 'Charmander' ? 'scale(1.05)' : 'scale(1)' }}
                >
                  🔥 Charmander
                </button>
                <button
                  onClick={() => setStarter('Squirtle')}
                  style={{ padding: '10px 4px', fontSize: '12px', fontWeight: 'bold', borderRadius: '12px', border: starter === 'Squirtle' ? '2px solid white' : '2px solid #327ba8', backgroundColor: '#327ba8', color: 'white', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', transform: starter === 'Squirtle' ? 'scale(1.05)' : 'scale(1)' }}
                >
                  💧 Squirtle
                </button>
              </div>
            </div>

            <button
              onClick={() => setInitialized(true)}
              style={{ width: '100%', marginTop: '8px', backgroundColor: '#3b9c62', color: 'white', fontWeight: 'extrabold', padding: '12px 16px', borderRadius: '12px', fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase', border: '1px solid #45cc7c', cursor: 'pointer' }}
            >
              INITIALIZE JUNGLE OS
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', overflow: 'hidden', backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', userSelect: 'none', fontFamily: 'monospace', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      
      {/* Desktop Grid Icons */}
      <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', flexDirection: 'column', gap: '24px', zIndex: 10 }}>
        <button onClick={() => setActiveWindow('terminal')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80px' }}>
          <div style={{ width: '48px', height: '48px', backgroundColor: '#173023', border: '2px solid #236b43', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#45cc7c', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)' }}>
            <Laptop size={24} />
          </div>
          <span style={{ color: 'white', fontSize: '11px', marginTop: '4px', fontWeight: 'bold', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>PokéTerm</span>
        </button>

        <button onClick={() => setActiveWindow('pokedex')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80px' }}>
          <div style={{ width: '48px', height: '48px', backgroundColor: '#173023', border: '2px solid #236b43', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e89438', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)' }}>
            <Smartphone size={24} />
          </div>
          <span style={{ color: 'white', fontSize: '11px', marginTop: '4px', fontWeight: 'bold', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Pokédex</span>
        </button>

        <button onClick={() => setActiveWindow('notes')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80px' }}>
          <div style={{ width: '48px', height: '48px', backgroundColor: '#173023', border: '2px solid #236b43', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9bcab0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)' }}>
            <Clipboard size={24} />
          </div>
          <span style={{ color: 'white', fontSize: '11px', marginTop: '4px', fontWeight: 'bold', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Notes</span>
        </button>
      </div>

      {/* Active Modal / Window View */}
      {activeWindow && activeWindow !== 'desktop' && (
        <div style={{ position: 'absolute', inset: '40px', backgroundColor: '#0c1c14', border: '2px solid #236b43', borderRadius: '16px', display: 'flex', flexDirection: 'column', zIndex: 30, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)', margin: 'auto' }}>
          <div style={{ backgroundColor: '#173023', padding: '12px 16px', borderBottom: '2px solid #236b43', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopLeftRadius: '14px', borderTopRightRadius: '14px' }}>
            <span style={{ color: '#e89438', fontSize: '12px', fontWeight: 'extrabold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>JungleOS::{activeWindow}</span>
            <button onClick={() => setActiveWindow('desktop')} style={{ color: 'white', fontWeight: 'bold', padding: '2px 8px', fontSize: '12px', backgroundColor: '#a83812', border: '1px solid #d15826', borderRadius: '8px', cursor: 'pointer' }}>✕</button>
          </div>
          <div style={{ padding: '24px', flex: 1, overflowY: 'auto', color: '#9bcab0', fontSize: '0.875rem' }}>
            {activeWindow === 'terminal' && (
              <div>
                <p style={{ color: '#e89438', fontWeight: 'bold', marginBottom: '8px' }}>PokéTerm v1.0.4 - CLI Environment</p>
                <p style={{ fontSize: '0.75rem', color: '#9bcab0', marginBottom: '16px' }}>Connected to trainer: <span style={{ color: 'white', fontWeight: 'bold' }}>{trainerName}</span> | Starter: <span style={{ color: '#e89438', fontWeight: 'bold' }}>{starter}</span></p>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.9)', padding: '16px', borderRadius: '12px', border: '1px solid #236b43', fontFamily: 'monospace', fontSize: '12px' }}>
                  <p style={{ color: '#45cc7c' }}>$ system-status --canopy</p>
                  <p style={{ color: '#9bcab0', marginTop: '4px' }}>CPU: Kanto Canopy Node active</p>
                  <p style={{ color: '#9bcab0' }}>Memory: 6.2 / 16 GB allocated</p>
                  <p style={{ color: '#e89438', marginTop: '8px' }}>$ _</p>
                </div>
              </div>
            )}
            {activeWindow === 'pokedex' && (
              <div>
                <h2 style={{ fontSize: '1.125rem', fontWeight: 'extrabold', color: '#e89438', marginBottom: '12px' }}>Trainer Registry & Pokedex</h2>
                <p style={{ fontSize: '0.75rem', color: '#9bcab0', marginBottom: '16px' }}>Active Trainer: <span style={{ color: 'white', fontWeight: 'bold' }}>{trainerName}</span></p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
                  <div style={{ padding: '16px', backgroundColor: '#173023', border: '2px solid #236b43', borderRadius: '12px' }}>
                    <p style={{ fontSize: '12px', color: '#e89438', fontWeight: 'bold', marginBottom: '4px' }}>Starter Unit</p>
                    <p style={{ fontSize: '1rem', fontWeight: 'extrabold', color: 'white' }}>{starter}</p>
                  </div>
                  <div style={{ padding: '16px', backgroundColor: '#173023', border: '2px solid #236b43', borderRadius: '12px' }}>
                    <p style={{ fontSize: '12px', color: '#e89438', fontWeight: 'bold', marginBottom: '4px' }}>Network Status</p>
                    <p style={{ fontSize: '1rem', fontWeight: 'extrabold', color: '#45cc7c' }}>Polygon Connected</p>
                  </div>
                </div>
              </div>
            )}
            {activeWindow === 'notes' && (
              <div>
                <h2 style={{ fontSize: '1.125rem', fontWeight: 'extrabold', color: '#e89438', marginBottom: '12px' }}>System Log & Notes</h2>
                <textarea style={{ width: '100%', height: '192px', backgroundColor: 'rgba(0,0,0,0.8)', border: '2px solid #236b43', borderRadius: '12px', padding: '12px', fontSize: '12px', color: '#9bcab0', outline: 'none' }} defaultValue="Deployment note: Kanto Canopy core initialized successfully. Verify ZK-lease validation scripts before sync." />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Spacer */}
      <div style={{ flex: 1 }}></div>

      {/* Bottom Cards Dock */}
      <div style={{ padding: '12px', display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '8px', zIndex: 20 }}>
        
        {/* Safari Card */}
        <div style={{ backgroundColor: '#173023', border: '2px solid #236b43', borderRadius: '12px', padding: '12px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'extrabold', color: 'white' }}>🌿 Safari</span>
            <span style={{ fontSize: '10px', color: '#e89438', fontWeight: 'extrabold', backgroundColor: '#112219', padding: '2px 6px', borderRadius: '4px', border: '1px solid #236b43' }}>HP 60</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#327ba8' }}>
            <Globe size={18} />
            <span style={{ fontSize: '11px', color: '#9bcab0', fontWeight: 'semibold' }}>Browse</span>
          </div>
          <button onClick={() => alert('Opening Safari...')} style={{ width: '100%', padding: '4px', backgroundColor: '#236b43', color: 'white', fontSize: '12px', fontWeight: 'extrabold', borderRadius: '8px', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}>Launch</button>
        </div>

        {/* PokéBoy Games Card */}
        <div style={{ backgroundColor: '#173023', border: '2px solid #236b43', borderRadius: '12px', padding: '12px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'extrabold', color: 'white' }}>🎮 PokéBoy</span>
            <span style={{ fontSize: '10px', color: '#e89438', fontWeight: 'extrabold', backgroundColor: '#112219', padding: '2px 6px', borderRadius: '4px', border: '1px solid #236b43' }}>HP 70</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#9070c0' }}>
            <Gamepad2 size={18} />
            <span style={{ fontSize: '11px', color: '#9bcab0', fontWeight: 'semibold' }}>Games</span>
          </div>
          <button onClick={() => alert('Launching PokéBoy...')} style={{ width: '100%', padding: '4px', backgroundColor: '#236b43', color: 'white', fontSize: '12px', fontWeight: 'extrabold', borderRadius: '8px', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}>Launch</button>
        </div>

        {/* PidgeyMail Card */}
        <div style={{ backgroundColor: '#173023', border: '2px solid #236b43', borderRadius: '12px', padding: '12px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'extrabold', color: 'white' }}>✉️ Mail</span>
            <span style={{ fontSize: '10px', color: '#e89438', fontWeight: 'extrabold', backgroundColor: '#112219', padding: '2px 6px', borderRadius: '4px', border: '1px solid #236b43' }}>HP 60</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#327ba8' }}>
            <Mail size={18} />
            <span style={{ fontSize: '11px', color: '#9bcab0', fontWeight: 'semibold' }}>Inbox</span>
          </div>
          <button onClick={() => alert('Opening Mail...')} style={{ width: '100%', padding: '4px', backgroundColor: '#236b43', color: 'white', fontSize: '12px', fontWeight: 'extrabold', borderRadius: '8px', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}>Open</button>
        </div>

        {/* SnapShots Card */}
        <div style={{ backgroundColor: '#173023', border: '2px solid #236b43', borderRadius: '12px', padding: '12px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'extrabold', color: 'white' }}>📷 Photos</span>
            <span style={{ fontSize: '10px', color: '#e89438', fontWeight: 'extrabold', backgroundColor: '#112219', padding: '2px 6px', borderRadius: '4px', border: '1px solid #236b43' }}>HP 60</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#e89438' }}>
            <Camera size={18} />
            <span style={{ fontSize: '11px', color: '#9bcab0', fontWeight: 'semibold' }}>Gallery</span>
          </div>
          <button onClick={() => alert('Opening Photos...')} style={{ width: '100%', padding: '4px', backgroundColor: '#236b43', color: 'white', fontSize: '12px', fontWeight: 'extrabold', borderRadius: '8px', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}>View</button>
        </div>

      </div>

      {/* Bottom System Status Bar */}
      <div style={{ height: '40px', backgroundColor: '#07130e', borderTop: '2px solid #236b43', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: '#9bcab0', zIndex: 30 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ padding: '2px 8px', backgroundColor: '#173023', border: '1px solid #236b43', borderRadius: '6px', color: 'white', fontWeight: 'extrabold' }}>🌿 Safari</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 'bold' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#e89438' }}><Zap size={14} /> 18%</span>
          <span style={{ color: 'white' }}>HP <span style={{ backgroundColor: '#236b43', color: 'white', padding: '2px 6px', borderRadius: '4px', marginLeft: '2px', fontWeight: 'extrabold' }}>60</span></span>
          <span style={{ color: '#9bcab0' }}>6.2/16</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#9bcab0' }}><Battery size={14} style={{ color: '#45cc7c' }} /> 100%</span>
        </div>
      </div>

    </div>
  );
}

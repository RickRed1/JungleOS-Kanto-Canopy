import React, { useState } from 'react';
import { Smartphone, Clipboard, Mail, Camera, Gamepad2, Globe, Zap, Laptop, Battery } from 'lucide-react';

export default function JungleOSApp() {
  const [initialized, setInitialized] = useState(false);
  const [trainerName, setTrainerName] = useState('Trainer Red');
  const [starter, setStarter] = useState('Charmander');
  const [activeWindow, setActiveWindow] = useState<string | null>('desktop');

  if (!initialized) {
    return (
      <div className="fixed inset-0 w-full h-full bg-[#07130e] flex items-center justify-center p-4 font-mono select-none overflow-auto">
        <div className="max-w-md w-full bg-[#112219] border-2 border-[#e89438] rounded-2xl p-6 shadow-2xl relative my-auto">
          
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-[#173826] border border-[#236b43] rounded-full text-[#45cc7c] shadow-md">
              <Zap size={32} />
            </div>
          </div>
          
          <h1 className="text-xl font-extrabold text-center tracking-wider text-[#e89438] mb-1">PROFESSOR OAK'S LAB</h1>
          <p className="text-xs text-center text-[#9bcab0] mb-5">Welcome to JungleOS: Kanto Canopy Edition! Register Trainer Identity.</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#e89438] font-bold mb-1">Trainer Name</label>
              <input 
                type="text" 
                value={trainerName}
                onChange={(e) => setTrainerName(e.target.value)}
                className="w-full bg-[#091811] border-2 border-[#236b43] rounded-xl px-3 py-2 text-sm text-white font-bold focus:outline-none focus:border-[#e89438] shadow-inner"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#e89438] font-bold mb-2">CHOOSE STARTER POKÉMON:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setStarter('Bulbasaur')}
                  className={`py-2.5 px-1 text-xs font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                    starter === 'Bulbasaur' 
                      ? 'bg-[#3b9c62] border-white text-white shadow-lg scale-105' 
                      : 'bg-[#3b9c62] border-[#236b43] text-white hover:bg-[#45b070]'
                  }`}
                >
                  🌿 Bulbasaur
                </button>
                <button
                  onClick={() => setStarter('Charmander')}
                  className={`py-2.5 px-1 text-xs font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                    starter === 'Charmander' 
                      ? 'bg-[#d15826] border-white text-white shadow-lg scale-105' 
                      : 'bg-[#d15826] border-[#e89438] text-white hover:bg-[#e06530]'
                  }`}
                >
                  🔥 Charmander
                </button>
                <button
                  onClick={() => setStarter('Squirtle')}
                  className={`py-2.5 px-1 text-xs font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                    starter === 'Squirtle' 
                      ? 'bg-[#327ba8] border-white text-white shadow-lg scale-105' 
                      : 'bg-[#327ba8] border-[#327ba8] text-white hover:bg-[#3d90c4]'
                  }`}
                >
                  💧 Squirtle
                </button>
              </div>
            </div>

            <button
              onClick={() => setInitialized(true)}
              className="w-full mt-2 bg-[#3b9c62] hover:bg-[#45b070] text-white font-extrabold py-3 px-4 rounded-xl text-sm tracking-wider uppercase shadow-xl transition-all border border-[#45cc7c]"
            >
              INITIALIZE JUNGLE OS
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-cover bg-center select-none font-mono flex flex-col justify-between" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop")' }}>
      
      {/* Desktop Grid Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-6 z-10">
        <button onClick={() => setActiveWindow('terminal')} className="flex flex-col items-center group w-20">
          <div className="w-12 h-12 bg-[#173023]/95 border-2 border-[#236b43] rounded-xl flex items-center justify-center text-[#45cc7c] shadow-xl group-hover:scale-105 transition-all">
            <Laptop size={24} />
          </div>
          <span className="text-white text-[11px] mt-1 font-bold drop-shadow-md">PokéTerm</span>
        </button>

        <button onClick={() => setActiveWindow('pokedex')} className="flex flex-col items-center group w-20">
          <div className="w-12 h-12 bg-[#173023]/95 border-2 border-[#236b43] rounded-xl flex items-center justify-center text-[#e89438] shadow-xl group-hover:scale-105 transition-all">
            <Smartphone size={24} />
          </div>
          <span className="text-white text-[11px] mt-1 font-bold drop-shadow-md">Pokédex</span>
        </button>

        <button onClick={() => setActiveWindow('notes')} className="flex flex-col items-center group w-20">
          <div className="w-12 h-12 bg-[#173023]/95 border-2 border-[#236b43] rounded-xl flex items-center justify-center text-[#9bcab0] shadow-xl group-hover:scale-105 transition-all">
            <Clipboard size={24} />
          </div>
          <span className="text-white text-[11px] mt-1 font-bold drop-shadow-md">Notes</span>
        </button>
      </div>

      {/* Active Modal / Window View */}
      {activeWindow && activeWindow !== 'desktop' && (
        <div className="absolute inset-10 bg-[#0c1c14]/95 border-2 border-[#236b43] rounded-2xl flex flex-col z-30 shadow-2xl backdrop-blur-md my-auto">
          <div className="bg-[#173023] px-4 py-3 border-b-2 border-[#236b43] flex justify-between items-center rounded-t-xl">
            <span className="text-[#e89438] text-xs font-extrabold uppercase tracking-wider">JungleOS::{activeWindow}</span>
            <button onClick={() => setActiveWindow('desktop')} className="text-white font-bold px-2.5 py-0.5 text-xs bg-[#a83812] border border-[#d15826] rounded-lg">✕</button>
          </div>
          <div className="p-6 flex-1 overflow-auto text-[#9bcab0] text-sm">
            {activeWindow === 'terminal' && (
              <div>
                <p className="text-[#e89438] font-bold mb-2">PokéTerm v1.0.4 - CLI Environment</p>
                <p className="text-xs text-[#9bcab0] mb-4">Connected to trainer: <span className="text-white font-bold">{trainerName}</span> | Starter: <span className="text-[#e89438] font-bold">{starter}</span></p>
                <div className="bg-black/90 p-4 rounded-xl border border-[#236b43] font-mono text-xs shadow-inner">
                  <p className="text-[#45cc7c]">$ system-status --canopy</p>
                  <p className="text-[#9bcab0] mt-1">CPU: Kanto Canopy Node active</p>
                  <p className="text-[#9bcab0]">Memory: 6.2 / 16 GB allocated</p>
                  <p className="text-[#e89438] mt-2">$ _</p>
                </div>
              </div>
            )}
            {activeWindow === 'pokedex' && (
              <div>
                <h2 className="text-lg font-extrabold text-[#e89438] mb-3">Trainer Registry & Pokedex</h2>
                <p className="text-xs text-[#9bcab0] mb-4">Active Trainer: <span className="text-white font-bold">{trainerName}</span></p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-[#173023] border-2 border-[#236b43] rounded-xl shadow">
                    <p className="text-xs text-[#e89438] font-bold mb-1">Starter Unit</p>
                    <p className="text-base font-extrabold text-white">{starter}</p>
                  </div>
                  <div className="p-4 bg-[#173023] border-2 border-[#236b43] rounded-xl shadow">
                    <p className="text-xs text-[#e89438] font-bold mb-1">Network Status</p>
                    <p className="text-base font-extrabold text-[#45cc7c]">Polygon / Mainnet Connected</p>
                  </div>
                </div>
              </div>
            )}
            {activeWindow === 'notes' && (
              <div>
                <h2 className="text-lg font-extrabold text-[#e89438] mb-3">System Log & Notes</h2>
                <textarea className="w-full h-48 bg-black/80 border-2 border-[#236b43] rounded-xl p-3 text-xs text-[#9bcab0] focus:outline-none focus:border-[#e89438] shadow-inner" defaultValue="Deployment note: Kanto Canopy core initialized successfully. Verify ZK-lease validation scripts before sync." />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Bottom Cards Dock matching exact reference RGB tokens */}
      <div className="px-3 pb-3 grid grid-cols-2 sm:grid-cols-4 gap-2 z-20">
        
        {/* Safari Card */}
        <div className="bg-[#173023] border-2 border-[#236b43] rounded-xl p-3 shadow-2xl backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-extrabold text-white flex items-center gap-1">🌿 Safari</span>
            <span className="text-[10px] text-[#e89438] font-extrabold bg-[#112219] px-1.5 py-0.5 rounded border border-[#236b43]">HP 60</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-[#327ba8]">
            <Globe size={18} />
            <span className="text-[11px] text-[#9bcab0] font-semibold">Browse Web</span>
          </div>
          <button onClick={() => alert('Opening Safari browser...')} className="w-full py-1 bg-[#236b43] hover:bg-[#2c8554] text-xs text-white font-extrabold rounded-lg uppercase tracking-wider shadow">Launch</button>
        </div>

        {/* PokéBoy Games Card */}
        <div className="bg-[#173023] border-2 border-[#236b43] rounded-xl p-3 shadow-2xl backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-extrabold text-white flex items-center gap-1">🎮 PokéBoy</span>
            <span className="text-[10px] text-[#e89438] font-extrabold bg-[#112219] px-1.5 py-0.5 rounded border border-[#236b43]">HP 70</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-[#9070c0]">
            <Gamepad2 size={18} />
            <span className="text-[11px] text-[#9bcab0] font-semibold">Play Games</span>
          </div>
          <button onClick={() => alert('Launching PokéBoy Arcade...')} className="w-full py-1 bg-[#236b43] hover:bg-[#2c8554] text-xs text-white font-extrabold rounded-lg uppercase tracking-wider shadow">Launch</button>
        </div>

        {/* PidgeyMail Card */}
        <div className="bg-[#173023] border-2 border-[#236b43] rounded-xl p-3 shadow-2xl backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-extrabold text-white flex items-center gap-1">✉️ PidgeyMail</span>
            <span className="text-[10px] text-[#e89438] font-extrabold bg-[#112219] px-1.5 py-0.5 rounded border border-[#236b43]">HP 60</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-[#327ba8]">
            <Mail size={18} />
            <span className="text-[11px] text-[#9bcab0] font-semibold">Check Mail</span>
          </div>
          <button onClick={() => alert('Opening PidgeyMail inbox...')} className="w-full py-1 bg-[#236b43] hover:bg-[#2c8554] text-xs text-white font-extrabold rounded-lg uppercase tracking-wider shadow">Open</button>
        </div>

        {/* SnapShots Card */}
        <div className="bg-[#173023] border-2 border-[#236b43] rounded-xl p-3 shadow-2xl backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-extrabold text-white flex items-center gap-1">📷 SnapShots</span>
            <span className="text-[10px] text-[#e89438] font-extrabold bg-[#112219] px-1.5 py-0.5 rounded border border-[#236b43]">HP 60</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-[#e89438]">
            <Camera size={18} />
            <span className="text-[11px] text-[#9bcab0] font-semibold">View Photos</span>
          </div>
          <button onClick={() => alert('Opening SnapShots Gallery...')} className="w-full py-1 bg-[#236b43] hover:bg-[#2c8554] text-xs text-white font-extrabold rounded-lg uppercase tracking-wider shadow">Gallery</button>
        </div>

      </div>

      {/* Bottom System Status Bar */}
      <div className="h-10 bg-[#07130e] border-t-2 border-[#236b43] px-4 flex items-center justify-between text-xs text-[#9bcab0] z-30">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-[#173023] border border-[#236b43] rounded-md text-white font-extrabold flex items-center gap-1">🌿 Safari</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-bold">
          <span className="flex items-center gap-1 text-[#e89438]"><Zap size={14} /> 18%</span>
          <span className="text-white">HP <span className="bg-[#236b43] text-white px-1.5 py-0.5 rounded ml-0.5 font-extrabold">60</span></span>
          <span className="text-[#9bcab0]">6.2/16</span>
          <span className="text-[#9bcab0] flex items-center gap-1"><Battery size={14} className="text-[#45cc7c]" /> 100%</span>
        </div>
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { Smartphone, Clipboard, Mail, Camera, Gamepad2, Globe, Zap, Laptop, Battery } from 'lucide-react';

export default function JungleOSApp() {
  const [initialized, setInitialized] = useState(false);
  const [trainerName, setTrainerName] = useState('Trainer Red');
  const [starter, setStarter] = useState('Charmander');
  const [activeWindow, setActiveWindow] = useState<string | null>('desktop');

  if (!initialized) {
    return (
      <div className="fixed inset-0 w-full h-full bg-[#0b1611] flex items-center justify-center p-4 font-mono select-none overflow-auto">
        <div className="max-w-md w-full bg-[#11281c] border-2 border-[#f0a040] rounded-2xl p-6 shadow-2xl relative my-auto">
          
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-[#113a27] border border-[#227744] rounded-full text-[#50d890] shadow-md">
              <Zap size={32} />
            </div>
          </div>
          
          <h1 className="text-xl font-extrabold text-center tracking-wider text-[#f0a040] mb-1">PROFESSOR OAK'S LAB</h1>
          <p className="text-xs text-center text-[#a8d8b9] mb-5">Welcome to JungleOS: Kanto Canopy Edition! Register Trainer Identity.</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#f0a040] font-bold mb-1">Trainer Name</label>
              <input 
                type="text" 
                value={trainerName}
                onChange={(e) => setTrainerName(e.target.value)}
                className="w-full bg-[#0d1f16] border-2 border-[#227744] rounded-xl px-3 py-2 text-sm text-white font-bold focus:outline-none focus:border-[#f0a040] shadow-inner"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#f0a040] font-bold mb-2">CHOOSE STARTER POKÉMON:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setStarter('Bulbasaur')}
                  className={`py-2.5 px-1 text-xs font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                    starter === 'Bulbasaur' 
                      ? 'bg-[#227744] border-white text-white shadow-lg scale-105' 
                      : 'bg-[#153525] border-[#227744] text-[#a8d8b9] hover:bg-[#1a402d]'
                  }`}
                >
                  🌿 Bulbasaur
                </button>
                <button
                  onClick={() => setStarter('Charmander')}
                  className={`py-2.5 px-1 text-xs font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                    starter === 'Charmander' 
                      ? 'bg-[#c85a20] border-white text-white shadow-lg scale-105' 
                      : 'bg-[#7a3512] border-[#c85a20] text-[#a8d8b9] hover:bg-[#8f3e15]'
                  }`}
                >
                  🔥 Charmander
                </button>
                <button
                  onClick={() => setStarter('Squirtle')}
                  className={`py-2.5 px-1 text-xs font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                    starter === 'Squirtle' 
                      ? 'bg-[#2070a0] border-white text-white shadow-lg scale-105' 
                      : 'bg-[#123b56] border-[#2070a0] text-[#a8d8b9] hover:bg-[#184c6e]'
                  }`}
                >
                  💧 Squirtle
                </button>
              </div>
            </div>

            <button
              onClick={() => setInitialized(true)}
              className="w-full mt-2 bg-[#227744] hover:bg-[#288850] text-white font-extrabold py-3 px-4 rounded-xl text-sm tracking-wider uppercase shadow-xl transition-all border border-[#50d890]"
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
          <div className="w-12 h-12 bg-[#122b1e]/95 border-2 border-[#227744] rounded-xl flex items-center justify-center text-[#50d890] shadow-xl group-hover:scale-105 transition-all">
            <Laptop size={24} />
          </div>
          <span className="text-white text-[11px] mt-1 font-bold drop-shadow-md">PokéTerm</span>
        </button>

        <button onClick={() => setActiveWindow('pokedex')} className="flex flex-col items-center group w-20">
          <div className="w-12 h-12 bg-[#122b1e]/95 border-2 border-[#227744] rounded-xl flex items-center justify-center text-[#f0a040] shadow-xl group-hover:scale-105 transition-all">
            <Smartphone size={24} />
          </div>
          <span className="text-white text-[11px] mt-1 font-bold drop-shadow-md">Pokédex</span>
        </button>

        <button onClick={() => setActiveWindow('notes')} className="flex flex-col items-center group w-20">
          <div className="w-12 h-12 bg-[#122b1e]/95 border-2 border-[#227744] rounded-xl flex items-center justify-center text-[#a8d8b9] shadow-xl group-hover:scale-105 transition-all">
            <Clipboard size={24} />
          </div>
          <span className="text-white text-[11px] mt-1 font-bold drop-shadow-md">Notes</span>
        </button>
      </div>

      {/* Active Modal / Window View */}
      {activeWindow && activeWindow !== 'desktop' && (
        <div className="absolute inset-10 bg-[#0d1f16]/95 border-2 border-[#227744] rounded-2xl flex flex-col z-30 shadow-2xl backdrop-blur-md my-auto">
          <div className="bg-[#11281c] px-4 py-3 border-b-2 border-[#227744]/60 flex justify-between items-center rounded-t-xl">
            <span className="text-[#f0a040] text-xs font-extrabold uppercase tracking-wider">JungleOS::{activeWindow}</span>
            <button onClick={() => setActiveWindow('desktop')} className="text-white font-bold px-2.5 py-0.5 text-xs bg-[#7a3512] border border-[#c85a20] rounded-lg">✕</button>
          </div>
          <div className="p-6 flex-1 overflow-auto text-[#a8d8b9] text-sm">
            {activeWindow === 'terminal' && (
              <div>
                <p className="text-[#f0a040] font-bold mb-2">PokéTerm v1.0.4 - CLI Environment</p>
                <p className="text-xs text-[#a8d8b9] mb-4">Connected to trainer: <span className="text-white font-bold">{trainerName}</span> | Starter: <span className="text-[#f0a040] font-bold">{starter}</span></p>
                <div className="bg-black/90 p-4 rounded-xl border border-[#227744]/60 font-mono text-xs shadow-inner">
                  <p className="text-[#50d890]">$ system-status --canopy</p>
                  <p className="text-[#a8d8b9] mt-1">CPU: Kanto Canopy Node active</p>
                  <p className="text-[#a8d8b9]">Memory: 6.2 / 16 GB allocated</p>
                  <p className="text-[#f0a040] mt-2">$ _</p>
                </div>
              </div>
            )}
            {activeWindow === 'pokedex' && (
              <div>
                <h2 className="text-lg font-extrabold text-[#f0a040] mb-3">Trainer Registry & Pokedex</h2>
                <p className="text-xs text-[#a8d8b9] mb-4">Active Trainer: <span className="text-white font-bold">{trainerName}</span></p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-[#11281c] border-2 border-[#227744]/60 rounded-xl shadow">
                    <p className="text-xs text-[#f0a040] font-bold mb-1">Starter Unit</p>
                    <p className="text-base font-extrabold text-white">{starter}</p>
                  </div>
                  <div className="p-4 bg-[#11281c] border-2 border-[#227744]/60 rounded-xl shadow">
                    <p className="text-xs text-[#f0a040] font-bold mb-1">Network Status</p>
                    <p className="text-base font-extrabold text-[#50d890]">Polygon / Mainnet Connected</p>
                  </div>
                </div>
              </div>
            )}
            {activeWindow === 'notes' && (
              <div>
                <h2 className="text-lg font-extrabold text-[#f0a040] mb-3">System Log & Notes</h2>
                <textarea className="w-full h-48 bg-black/80 border-2 border-[#227744]/60 rounded-xl p-3 text-xs text-[#a8d8b9] focus:outline-none focus:border-[#f0a040] shadow-inner" defaultValue="Deployment note: Kanto Canopy core initialized successfully. Verify ZK-lease validation scripts before sync." />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Spacer to push content down */}
      <div className="flex-1"></div>

      {/* Bottom Cards Dock */}
      <div className="px-3 pb-3 grid grid-cols-2 sm:grid-cols-4 gap-2 z-20">
        
        {/* Safari / Browser Card */}
        <div className="bg-[#122b1e]/95 border-2 border-[#227744] rounded-xl p-3 shadow-2xl backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-extrabold text-white flex items-center gap-1">🌿 Safari</span>
            <span className="text-[10px] text-[#f0a040] font-extrabold bg-[#153525] px-1.5 py-0.5 rounded border border-[#227744]">HP 60</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-[#2070a0]">
            <Globe size={18} />
            <span className="text-[11px] text-[#a8d8b9] font-semibold">Browse Web</span>
          </div>
          <button onClick={() => alert('Opening Safari browser...')} className="w-full py-1 bg-[#227744] hover:bg-[#288850] text-xs text-white font-extrabold rounded-lg uppercase tracking-wider shadow">Launch</button>
        </div>

        {/* PokéBoy Games Card */}
        <div className="bg-[#122b1e]/95 border-2 border-[#227744] rounded-xl p-3 shadow-2xl backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-extrabold text-white flex items-center gap-1">🎮 PokéBoy</span>
            <span className="text-[10px] text-[#f0a040] font-extrabold bg-[#153525] px-1.5 py-0.5 rounded border border-[#227744]">HP 70</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-[#8050c0]">
            <Gamepad2 size={18} />
            <span className="text-[11px] text-[#a8d8b9] font-semibold">Play Games</span>
          </div>
          <button onClick={() => alert('Launching PokéBoy Arcade...')} className="w-full py-1 bg-[#227744] hover:bg-[#288850] text-xs text-white font-extrabold rounded-lg uppercase tracking-wider shadow">Launch</button>
        </div>

        {/* PidgeyMail Card */}
        <div className="bg-[#122b1e]/95 border-2 border-[#227744] rounded-xl p-3 shadow-2xl backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-extrabold text-white flex items-center gap-1">✉️ PidgeyMail</span>
            <span className="text-[10px] text-[#f0a040] font-extrabold bg-[#153525] px-1.5 py-0.5 rounded border border-[#227744]">HP 60</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-[#2070a0]">
            <Mail size={18} />
            <span className="text-[11px] text-[#a8d8b9] font-semibold">Check Mail</span>
          </div>
          <button onClick={() => alert('Opening PidgeyMail inbox...')} className="w-full py-1 bg-[#227744] hover:bg-[#288850] text-xs text-white font-extrabold rounded-lg uppercase tracking-wider shadow">Open</button>
        </div>

        {/* SnapShots Card */}
        <div className="bg-[#122b1e]/95 border-2 border-[#227744] rounded-xl p-3 shadow-2xl backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-extrabold text-white flex items-center gap-1">📷 SnapShots</span>
            <span className="text-[10px] text-[#f0a040] font-extrabold bg-[#153525] px-1.5 py-0.5 rounded border border-[#227744]">HP 60</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-[#f0a040]">
            <Camera size={18} />
            <span className="text-[11px] text-[#a8d8b9] font-semibold">View Photos</span>
          </div>
          <button onClick={() => alert('Opening SnapShots Gallery...')} className="w-full py-1 bg-[#227744] hover:bg-[#288850] text-xs text-white font-extrabold rounded-lg uppercase tracking-wider shadow">Gallery</button>
        </div>

      </div>

      {/* Bottom System Status Bar */}
      <div className="h-10 bg-[#08120d] border-t-2 border-[#227744]/80 px-4 flex items-center justify-between text-xs text-[#a8d8b9] z-30">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-[#122b1e] border border-[#227744] rounded-md text-white font-extrabold flex items-center gap-1">🌿 Safari</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-bold">
          <span className="flex items-center gap-1 text-[#f0a040]"><Zap size={14} /> 18%</span>
          <span className="text-white">HP <span className="bg-[#227744] text-white px-1.5 py-0.5 rounded ml-0.5 font-extrabold">60</span></span>
          <span className="text-[#a8d8b9]">6.2/16</span>
          <span className="text-[#a8d8b9] flex items-center gap-1"><Battery size={14} className="text-[#50d890]" /> 100%</span>
        </div>
      </div>

    </div>
  );
}

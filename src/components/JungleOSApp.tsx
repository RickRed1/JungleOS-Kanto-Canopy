import React, { useState } from 'react';
import { Terminal, Cpu, FileText, Mail, Camera, Gamepad2, Globe, Shield, Zap, RefreshCw, Laptop, Smartphone, Clipboard } from 'lucide-react';

export default function JungleOSApp() {
  const [initialized, setInitialized] = useState(false);
  const [trainerName, setTrainerName] = useState('Trainer Red');
  const [starter, setStarter] = useState('Bulbasaur');
  const [activeWindow, setActiveWindow] = useState<string | null>('desktop');

  if (!initialized) {
    return (
      <div className="min-h-screen bg-[#0b1611] flex items-center justify-center p-4 font-mono text-emerald-400 select-none">
        <div className="max-w-md w-full bg-[#11281c] border-2 border-orange-400 rounded-2xl p-6 shadow-2xl relative">
          
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-emerald-900/80 border border-emerald-500/60 rounded-full text-cyan-300 animate-pulse shadow-md">
              <Zap size={32} />
            </div>
          </div>
          
          <h1 className="text-xl font-extrabold text-center tracking-wider text-orange-400 mb-1">PROFESSOR OAK'S LAB</h1>
          <p className="text-xs text-center text-emerald-200/90 mb-5">Welcome to JungleOS: Kanto Canopy Edition! Register Trainer Identity.</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-orange-400 font-bold mb-1">Trainer Name</label>
              <input 
                type="text" 
                value={trainerName}
                onChange={(e) => setTrainerName(e.target.value)}
                className="w-full bg-[#0d1f16] border-2 border-emerald-500/60 rounded-xl px-3 py-2 text-sm text-white font-bold focus:outline-none focus:border-orange-400 shadow-inner"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-orange-400 font-bold mb-2">CHOOSE STARTER POKÉMON:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setStarter('Bulbasaur')}
                  className={`py-2.5 px-1 text-xs font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                    starter === 'Bulbasaur' 
                      ? 'bg-emerald-500 border-white text-black shadow-lg scale-105' 
                      : 'bg-emerald-600/80 border-emerald-400 text-white hover:bg-emerald-500'
                  }`}
                >
                  🌿 Bulbasaur
                </button>
                <button
                  onClick={() => setStarter('Charmander')}
                  className={`py-2.5 px-1 text-xs font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                    starter === 'Charmander' 
                      ? 'bg-orange-500 border-white text-black shadow-lg scale-105' 
                      : 'bg-orange-600/80 border-orange-400 text-white hover:bg-orange-500'
                  }`}
                >
                  🔥 Charmander
                </button>
                <button
                  onClick={() => setStarter('Squirtle')}
                  className={`py-2.5 px-1 text-xs font-bold rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                    starter === 'Squirtle' 
                      ? 'bg-sky-500 border-white text-black shadow-lg scale-105' 
                      : 'bg-sky-600/80 border-sky-400 text-white hover:bg-sky-500'
                  }`}
                >
                  💧 Squirtle
                </button>
              </div>
            </div>

            <button
              onClick={() => setInitialized(true)}
              className="w-full mt-2 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold py-3 px-4 rounded-xl text-sm tracking-wider uppercase shadow-xl transition-all border border-emerald-300"
            >
              INITIALIZE JUNGLE OS
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-cover bg-center select-none font-mono" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop")' }}>
      
      {/* Desktop Grid Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-6 z-10">
        <button onClick={() => setActiveWindow('terminal')} className="flex flex-col items-center group w-20">
          <div className="w-12 h-12 bg-sky-950/80 border-2 border-sky-400 rounded-xl flex items-center justify-center text-sky-300 shadow-xl group-hover:scale-105 transition-all">
            <Laptop size={24} />
          </div>
          <span className="text-white text-[11px] mt-1 font-bold drop-shadow-md">PokéTerm</span>
        </button>

        <button onClick={() => setActiveWindow('pokedex')} className="flex flex-col items-center group w-20">
          <div className="w-12 h-12 bg-red-950/80 border-2 border-red-400 rounded-xl flex items-center justify-center text-red-400 shadow-xl group-hover:scale-105 transition-all">
            <Smartphone size={24} />
          </div>
          <span className="text-white text-[11px] mt-1 font-bold drop-shadow-md">Pokédex</span>
        </button>

        <button onClick={() => setActiveWindow('notes')} className="flex flex-col items-center group w-20">
          <div className="w-12 h-12 bg-amber-950/80 border-2 border-amber-400 rounded-xl flex items-center justify-center text-amber-300 shadow-xl group-hover:scale-105 transition-all">
            <Clipboard size={24} />
          </div>
          <span className="text-white text-[11px] mt-1 font-bold drop-shadow-md">Notes</span>
        </button>
      </div>

      {/* Active Modal / Window View */}
      {activeWindow && activeWindow !== 'desktop' && (
        <div className="absolute inset-10 bg-[#0f241a]/95 border-2 border-emerald-400 rounded-2xl flex flex-col z-30 shadow-2xl backdrop-blur-md">
          <div className="bg-emerald-950 px-4 py-3 border-b-2 border-emerald-500/50 flex justify-between items-center rounded-t-xl">
            <span className="text-amber-400 text-xs font-extrabold uppercase tracking-wider">JungleOS::{activeWindow}</span>
            <button onClick={() => setActiveWindow('desktop')} className="text-red-300 hover:text-white font-bold px-2 py-0.5 text-xs bg-red-900/80 border border-red-500 rounded">✕</button>
          </div>
          <div className="p-6 flex-1 overflow-auto text-emerald-200 text-sm">
            {activeWindow === 'terminal' && (
              <div>
                <p className="text-orange-400 font-bold mb-2">PokéTerm v1.0.4 - CLI Environment</p>
                <p className="text-xs text-emerald-300 mb-4">Connected Trainer: <span className="text-white font-bold">{trainerName}</span> | Starter: <span className="text-amber-300 font-bold">{starter}</span></p>
                <div className="bg-black/80 p-4 rounded-xl border border-emerald-500/50 font-mono text-xs shadow-inner">
                  <p className="text-emerald-400">$ system-status --canopy</p>
                  <p className="text-emerald-200 mt-1">CPU: Hephaestus Co-Op Core active [OK]</p>
                  <p className="text-emerald-200">Memory: 6.2 / 16 GB allocated</p>
                  <p className="text-orange-400 mt-2">$ _</p>
                </div>
              </div>
            )}
            {activeWindow === 'pokedex' && (
              <div>
                <h2 className="text-lg font-extrabold text-orange-400 mb-3">Trainer Registry & Pokedex</h2>
                <p className="text-xs text-emerald-300 mb-4">Active Trainer: <span className="text-white font-bold">{trainerName}</span></p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-emerald-950/80 border-2 border-emerald-500/60 rounded-xl shadow">
                    <p className="text-xs text-orange-400 font-bold mb-1">Starter Unit</p>
                    <p className="text-base font-extrabold text-amber-300">{starter}</p>
                  </div>
                  <div className="p-4 bg-emerald-950/80 border-2 border-emerald-500/60 rounded-xl shadow">
                    <p className="text-xs text-orange-400 font-bold mb-1">Network Status</p>
                    <p className="text-base font-extrabold text-emerald-300">Polygon / Mainnet</p>
                  </div>
                </div>
              </div>
            )}
            {activeWindow === 'notes' && (
              <div>
                <h2 className="text-lg font-extrabold text-orange-400 mb-3">System Log & Notes</h2>
                <textarea className="w-full h-48 bg-black/70 border-2 border-emerald-500/50 rounded-xl p-3 text-xs text-emerald-200 focus:outline-none focus:border-orange-400 shadow-inner" defaultValue="Deployment note: Kanto Canopy core initialized successfully. Verify ZK-lease validation scripts before sync." />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom Dock / Cards Bar */}
      <div className="absolute bottom-12 left-4 right-4 flex gap-3 overflow-x-auto pb-2 z-20">
        
        {/* Safari / Browser Card */}
        <div className="bg-[#122b1e] border-2 border-emerald-500/80 rounded-xl p-3 min-w-[210px] flex-1 shadow-2xl backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-extrabold text-white">Safari Web</span>
            <span className="text-[10px] text-orange-400 font-extrabold">HP 60</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-sky-400">
            <Globe size={22} />
            <span className="text-[11px] text-emerald-200 font-semibold">Browse Web</span>
          </div>
          <button onClick={() => alert('Opening Safari browser...')} className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 text-xs text-black font-extrabold rounded-lg uppercase tracking-wider shadow">Launch</button>
        </div>

        {/* PokéBoy Games Card */}
        <div className="bg-[#122b1e] border-2 border-emerald-500/80 rounded-xl p-3 min-w-[210px] flex-1 shadow-2xl backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-extrabold text-white">PokéBoy Games</span>
            <span className="text-[10px] text-orange-400 font-extrabold">HP 70</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-violet-400">
            <Gamepad2 size={22} />
            <span className="text-[11px] text-emerald-200 font-semibold">Play Games</span>
          </div>
          <button onClick={() => alert('Launching PokéBoy Arcade...')} className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 text-xs text-black font-extrabold rounded-lg uppercase tracking-wider shadow">Launch</button>
        </div>

        {/* PidgeyMail Card */}
        <div className="bg-[#122b1e] border-2 border-emerald-500/80 rounded-xl p-3 min-w-[210px] flex-1 shadow-2xl backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-extrabold text-white">PidgeyMail</span>
            <span className="text-[10px] text-orange-400 font-extrabold">HP 60</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-sky-300">
            <Mail size={22} />
            <span className="text-[11px] text-emerald-200 font-semibold">Check Mail</span>
          </div>
          <button onClick={() => alert('Opening PidgeyMail inbox...')} className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 text-xs text-black font-extrabold rounded-lg uppercase tracking-wider shadow">Open Inbox</button>
        </div>

        {/* SnapShots Card */}
        <div className="bg-[#122b1e] border-2 border-emerald-500/80 rounded-xl p-3 min-w-[210px] flex-1 shadow-2xl backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-extrabold text-white">SnapShots</span>
            <span className="text-[10px] text-orange-400 font-extrabold">HP 60</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-amber-300">
            <Camera size={22} />
            <span className="text-[11px] text-emerald-200 font-semibold">View Photos</span>
          </div>
          <button onClick={() => alert('Opening SnapShots Gallery...')} className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 text-xs text-black font-extrabold rounded-lg uppercase tracking-wider shadow">Gallery</button>
        </div>

      </div>

      {/* Bottom System Status Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#0a140f] border-t-2 border-emerald-500/60 px-4 flex items-center justify-between text-xs text-emerald-300 z-30">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-emerald-900 border border-emerald-500 rounded-lg text-emerald-200 font-extrabold flex items-center gap-1">🌿 Safari</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-orange-400 font-bold"><Zap size={14} /> 18%</span>
          <span className="text-white font-extrabold">HP <span className="bg-emerald-500 text-black px-2 py-0.5 rounded ml-1 font-extrabold">60</span></span>
          <span className="text-emerald-300 font-bold">6.2/16</span>
          <span className="text-emerald-300 font-bold">🔋 100%</span>
        </div>
      </div>

    </div>
  );
}

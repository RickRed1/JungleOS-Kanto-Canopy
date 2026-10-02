import React, { useState } from 'react';
import { Terminal, Cpu, FileText, Mail, Camera, Gamepad2, Globe, Shield, Zap, RefreshCw } from 'lucide-react';

export default function JungleOSApp() {
  const [initialized, setInitialized] = useState(false);
  const [trainerName, setTrainerName] = useState('Trainer Red');
  const [starter, setStarter] = useState('Bulbasaur');
  const [activeWindow, setActiveWindow] = useState<string | null>('desktop');
  const [hp, setHp] = useState(60);

  if (!initialized) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 font-mono text-emerald-400">
        <div className="max-w-md w-full bg-[#112211] border-2 border-emerald-500/60 rounded-xl p-6 shadow-2xl relative">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-full text-emerald-400 animate-pulse">
              <Zap size={32} />
            </div>
          </div>
          
          <h1 className="text-xl font-bold text-center tracking-wider text-amber-500 mb-1">PROFESSOR OAK'S LAB</h1>
          <p className="text-xs text-center text-emerald-300/80 mb-6">Welcome to JungleOS: Kanto Canopy Edition! Register Trainer Identity.</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-emerald-400 mb-1">Trainer Name</label>
              <input 
                type="text" 
                value={trainerName}
                onChange={(e) => setTrainerName(e.target.value)}
                className="w-full bg-black/60 border border-emerald-500/40 rounded px-3 py-2 text-sm text-emerald-200 focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-emerald-400 mb-2">Choose Starter Pokémon:</label>
              <div className="grid grid-cols-3 gap-2">
                {['Bulbasaur', 'Charmander', 'Squirtle'].map((poke) => (
                  <button
                    key={poke}
                    onClick={() => setStarter(poke)}
                    className={`py-2 px-1 text-xs font-semibold rounded border transition-all ${
                      starter === poke 
                        ? 'bg-emerald-600 border-emerald-300 text-white shadow-lg' 
                        : 'bg-black/40 border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/40'
                    }`}
                  >
                    {poke}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setInitialized(true)}
              className="w-full mt-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold py-3 px-4 rounded text-sm tracking-wider uppercase shadow-lg transition-all"
            >
              Initialize Jungle OS
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-cover bg-center select-none font-mono" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop")' }}>
      
      {/* Desktop Grid Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-6 z-10">
        <button onClick={() => setActiveWindow('terminal')} className="flex flex-col items-center group w-20">
          <div className="w-12 h-12 bg-black/60 border border-emerald-500/40 rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-950/80 shadow-lg transition-all">
            <Terminal size={24} />
          </div>
          <span className="text-white text-[11px] mt-1 drop-shadow font-semibold">PokéTerm</span>
        </button>

        <button onClick={() => setActiveWindow('pokedex')} className="flex flex-col items-center group w-20">
          <div className="w-12 h-12 bg-black/60 border border-emerald-500/40 rounded-xl flex items-center justify-center text-amber-400 group-hover:bg-emerald-950/80 shadow-lg transition-all">
            <Cpu size={24} />
          </div>
          <span className="text-white text-[11px] mt-1 drop-shadow font-semibold">Pokédex</span>
        </button>

        <button onClick={() => setActiveWindow('notes')} className="flex flex-col items-center group w-20">
          <div className="w-12 h-12 bg-black/60 border border-emerald-500/40 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-emerald-950/80 shadow-lg transition-all">
            <FileText size={24} />
          </div>
          <span className="text-white text-[11px] mt-1 drop-shadow font-semibold">Notes</span>
        </button>
      </div>

      {/* Active Modal / Window View */}
      {activeWindow && activeWindow !== 'desktop' && (
        <div className="absolute inset-10 bg-zinc-900/90 border-2 border-emerald-500/60 rounded-xl flex flex-col z-30 shadow-2xl backdrop-blur-md">
          <div className="bg-emerald-950 px-4 py-2 border-b border-emerald-500/40 flex justify-between items-center rounded-t-lg">
            <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider">JungleOS::{activeWindow}</span>
            <button onClick={() => setActiveWindow('desktop')} className="text-red-400 hover:text-red-300 font-bold px-2 py-0.5 text-xs bg-black/40 rounded">✕</button>
          </div>
          <div className="p-6 flex-1 overflow-auto text-emerald-300 text-sm">
            {activeWindow === 'terminal' && (
              <div>
                <p className="text-amber-400 mb-2">PokéTerm v1.0.4 - CLI Environment</p>
                <p className="text-xs text-emerald-400/80 mb-4">Connected to trainer: {trainerName} | Starter: {starter}</p>
                <div className="bg-black/60 p-4 rounded border border-emerald-500/30 font-mono text-xs">
                  <p className="text-emerald-500">$ system-status --canopy</p>
                  <p className="text-emerald-300">CPU: Hephaestus Co-Op Core active</p>
                  <p className="text-emerald-300">Memory: 6.2 / 16 GB allocated</p>
                  <p className="text-emerald-500 mt-2">$ _</p>
                </div>
              </div>
            )}
            {activeWindow === 'pokedex' && (
              <div>
                <h2 className="text-lg font-bold text-amber-400 mb-2">Trainer Registry & Pokedex</h2>
                <p className="text-xs text-emerald-400 mb-4">Active Trainer: <span className="text-white">{trainerName}</span></p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-black/40 border border-emerald-500/30 rounded">
                    <p className="text-xs text-emerald-400 font-bold">Starter Unit</p>
                    <p className="text-sm text-amber-300">{starter}</p>
                  </div>
                  <div className="p-3 bg-black/40 border border-emerald-500/30 rounded">
                    <p className="text-xs text-emerald-400 font-bold">Network Status</p>
                    <p className="text-sm text-emerald-300">Polygon / Mainnet Connected</p>
                  </div>
                </div>
              </div>
            )}
            {activeWindow === 'notes' && (
              <div>
                <h2 className="text-lg font-bold text-amber-400 mb-2">System Log & Notes</h2>
                <textarea className="w-full h-48 bg-black/40 border border-emerald-500/30 rounded p-3 text-xs text-emerald-200 focus:outline-none" defaultValue="Deployment note: Kanto Canopy core initialized successfully. Verify ZK-lease validation scripts before sync." />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom Dock / Cards Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex gap-4 overflow-x-auto pb-2 z-20">
        <div className="bg-emerald-950/90 border border-emerald-500/50 rounded-lg p-3 min-w-[200px] flex-1 shadow-lg backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-white">PokéBoy Games</span>
            <span className="text-[10px] text-amber-400 font-bold">HP 70</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Gamepad2 size={20} className="text-emerald-400" />
            <span className="text-[11px] text-emerald-300/90">Play Games</span>
          </div>
          <button className="w-full py-1 bg-emerald-800 hover:bg-emerald-700 text-xs text-white rounded font-bold uppercase tracking-wider">Launch</button>
        </div>

        <div className="bg-emerald-950/90 border border-emerald-500/50 rounded-lg p-3 min-w-[200px] flex-1 shadow-lg backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-white">PidgeyMail</span>
            <span className="text-[10px] text-amber-400 font-bold">HP 60</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Mail size={20} className="text-emerald-400" />
            <span className="text-[11px] text-emerald-300/90">Check Mail</span>
          </div>
          <button className="w-full py-1 bg-emerald-800 hover:bg-emerald-700 text-xs text-white rounded font-bold uppercase tracking-wider">Open Inbox</button>
        </div>

        <div className="bg-emerald-950/90 border border-emerald-500/50 rounded-lg p-3 min-w-[200px] flex-1 shadow-lg backdrop-blur">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-white">SnapShots</span>
            <span className="text-[10px] text-amber-400 font-bold">HP 60</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Camera size={20} className="text-emerald-400" />
            <span className="text-[11px] text-emerald-300/90">View Photos</span>
          </div>
          <button className="w-full py-1 bg-emerald-800 hover:bg-emerald-700 text-xs text-white rounded font-bold uppercase tracking-wider">Gallery</button>
        </div>
      </div>

      {/* Top/Bottom System Status Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-9 bg-black/80 border-t border-emerald-500/40 px-4 flex items-center justify-between text-xs text-emerald-400 z-30">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-emerald-900 border border-emerald-500/40 rounded text-emerald-200 font-bold">🌿 Safari</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 text-emerald-300"><Zap size={14} className="text-amber-400" /> 18%</span>
          <span className="text-emerald-300 font-bold">HP <span className="bg-emerald-600 text-black px-2 py-0.5 rounded ml-1">60</span></span>
          <span className="text-emerald-400">6.2/16</span>
          <span className="text-emerald-400">🔋 100%</span>
        </div>
      </div>

    </div>
  );
}

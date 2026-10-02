import React, { useState } from 'react';

export default function JungleOSApp() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [trainerName, setTrainerName] = useState('Trainer Red');
  const [starter, setStarter] = useState('Bulbasaur');

  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#112211] p-4 font-mono text-[#2a9d8f]">
        <div className="w-full max-w-md bg-[#16291a] border-2 border-[#f4a261] rounded-lg p-6 shadow-2xl text-center">
          <div className="flex justify-center mb-4">
            <div className="text-3xl animate-bounce">🧪</div>
          </div>
          <h1 className="text-2xl font-bold tracking-wider text-[#f4a261] mb-2">
            PROFESSOR OAK'S LAB
          </h1>
          <p className="text-sm text-gray-300 mb-6">
            Welcome to JungleOS: Kanto Canopy Edition! Register Trainer Identity.
          </p>

          <div className="mb-4 text-left">
            <label className="block text-xs uppercase text-[#2a9d8f] mb-1">Trainer Name</label>
            <input 
              type="text" 
              value={trainerName}
              onChange={(e) => setTrainerName(e.target.value)}
              className="w-full bg-[#112211] border border-[#2a9d8f] rounded p-2 text-white focus:outline-none focus:border-[#f4a261]"
            />
          </div>

          <div className="mb-6 text-left">
            <label className="block text-xs uppercase text-[#2a9d8f] mb-2">Choose Starter Pokémon:</label>
            <div className="grid grid-cols-3 gap-2">
              {['Bulbasaur', 'Charmander', 'Squirtle'].map((poke) => (
                <button
                  key={poke}
                  onClick={() => setStarter(poke)}
                  className={`p-2 text-xs font-bold rounded border ${
                    starter === poke 
                      ? 'bg-[#2a9d8f] text-black border-white' 
                      : 'bg-[#112211] text-[#2a9d8f] border-[#2a9d8f]'
                  }`}
                >
                  {poke}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsInitialized(true)}
            className="w-full bg-[#2a9d8f] hover:bg-[#21867a] text-black font-bold py-3 px-4 rounded tracking-wide transition-all shadow-lg"
          >
            INITIALIZE JUNGLE OS
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0d1b1e] font-mono select-none">
      {/* Desktop Icons */}
      <div className="p-4 flex flex-col gap-6 w-32 z-10 relative">
        <div className="flex flex-col items-center cursor-pointer group">
          <div className="w-12 h-12 bg-[#16291a] border border-[#2a9d8f] rounded flex items-center justify-center text-xl shadow">💻</div>
          <span className="text-xs text-white mt-1 bg-black/60 px-1 rounded">PokéTerm</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer group">
          <div className="w-12 h-12 bg-[#16291a] border border-[#2a9d8f] rounded flex items-center justify-center text-xl shadow">📱</div>
          <span className="text-xs text-white mt-1 bg-black/60 px-1 rounded">Pokédex</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer group">
          <div className="w-12 h-12 bg-[#16291a] border border-[#2a9d8f] rounded flex items-center justify-center text-xl shadow">📋</div>
          <span className="text-xs text-white mt-1 bg-black/60 px-1 rounded">Notes</span>
        </div>
      </div>

      {/* Dock / App Cards Window Bar */}
      <div className="absolute bottom-16 left-4 right-4 flex gap-4 overflow-x-auto pb-2">
        <div className="bg-[#16291a]/90 border border-[#2a9d8f] p-3 rounded-lg min-w-[180px] shadow-lg">
          <div className="text-xs text-[#f4a261] font-bold mb-1">PokéBoy Games HP 70</div>
          <div className="text-2xl text-center my-2">🎮</div>
          <div className="text-xs text-[#2a9d8f] bg-[#112211] p-1 text-center rounded border border-[#2a9d8f]/50">⚡ Play Games</div>
        </div>
        <div className="bg-[#16291a]/90 border border-[#2a9d8f] p-3 rounded-lg min-w-[180px] shadow-lg">
          <div className="text-xs text-[#f4a261] font-bold mb-1">PidgeyMail HP 60</div>
          <div className="text-2xl text-center my-2">✉️</div>
          <div className="text-xs text-[#2a9d8f] bg-[#112211] p-1 text-center rounded border border-[#2a9d8f]/50">⚡ Check Mail</div>
        </div>
        <div className="bg-[#16291a]/90 border border-[#2a9d8f] p-3 rounded-lg min-w-[180px] shadow-lg">
          <div className="text-xs text-[#f4a261] font-bold mb-1">SnapShots</div>
          <div className="text-2xl text-center my-2">📷</div>
          <div className="text-xs text-[#2a9d8f] bg-[#112211] p-1 text-center rounded border border-[#2a9d8f]/50">⚡ View Files</div>
        </div>
      </div>

      {/* Bottom Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#112211]/95 border-t border-[#2a9d8f] flex items-center justify-between px-4 text-xs text-[#2a9d8f] z-50">
        <button className="bg-[#2a9d8f] text-black px-3 py-1 font-bold rounded">🌱 Safari</button>
        <div className="flex items-center gap-6">
          <span>Trainer: {trainerName} ({starter})</span>
          <span>⚡ 18%</span>
          <span>HP: <span className="text-green-400">██████</span> 100%</span>
          <span>6.2/16</span>
        </div>
      </div>
    </div>
  );
}

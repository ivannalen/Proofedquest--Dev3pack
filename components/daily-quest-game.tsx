"use client"

import { useState, useEffect, useCallback } from "react"
import confetti from "canvas-confetti"

type GameState = "idle" | "select" | "playing" | "victory" | "minted"

const quests = [
  { id: 1, name: "Lightning Coder", difficulty: "★★☆", reward: "500 XP", icon: "⚡" },
  { id: 2, name: "Bug Slayer", difficulty: "★★★", reward: "750 XP", icon: "🐛" },
  { id: 3, name: "Deploy Master", difficulty: "★★☆", reward: "600 XP", icon: "🚀" },
]

export function DailyQuestGame() {
  const [gameState, setGameState] = useState<GameState>("idle")
  const [selectedQuest, setSelectedQuest] = useState<typeof quests[0] | null>(null)
  const [progress, setProgress] = useState(0)

  const fireConfetti = useCallback(() => {
    const duration = 3000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ["#ff00ff", "#00ffff", "#ffff00", "#ff6b00"],
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ["#ff00ff", "#00ffff", "#ffff00", "#ff6b00"],
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()
  }, [])

  useEffect(() => {
    if (gameState === "playing") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setGameState("victory")
            fireConfetti()
            return 100
          }
          return prev + 3.33
        })
      }, 100)
      return () => clearInterval(interval)
    }
  }, [gameState, fireConfetti])

  const handlePlayNow = () => setGameState("select")
  
  const handleSelectQuest = (quest: typeof quests[0]) => {
    setSelectedQuest(quest)
    setProgress(0)
    setGameState("playing")
  }

  const handleMint = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff00ff", "#00ffff", "#ffff00"],
    })
    setGameState("minted")
  }

  const handleReset = () => {
    setGameState("idle")
    setSelectedQuest(null)
    setProgress(0)
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Game Container */}
        <div className="relative">
          {/* Neon border frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-pink)] via-[var(--neon-cyan)] to-[var(--neon-pink)] rounded-2xl blur-sm opacity-75 animate-pulse" />
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-pink)] rounded-2xl" />
          
          <div className="relative bg-[#0a0a12] rounded-xl p-8 border-2 border-[var(--neon-cyan)]/30">
            {/* Scanlines overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-5 rounded-xl overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.1) 2px, rgba(0,255,255,0.1) 4px)'
              }} />
            </div>

            {/* Title */}
            <h2 className="font-pixel text-2xl md:text-3xl text-center mb-8 text-[var(--neon-yellow)] drop-shadow-[0_0_20px_var(--neon-yellow)]">
              DAILY QUEST
            </h2>

            {/* IDLE STATE */}
            {gameState === "idle" && (
              <div className="text-center space-y-6">
                <div className="text-6xl animate-bounce">🎮</div>
                <p className="text-[var(--neon-cyan)] font-mono text-lg">Ready to prove yourself?</p>
                <button
                  onClick={handlePlayNow}
                  className="group relative px-12 py-4 font-pixel text-xl"
                >
                  <div className="absolute inset-0 bg-[var(--neon-pink)] rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-orange)] rounded-lg" />
                  <span className="relative text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    PLAY NOW
                  </span>
                </button>
              </div>
            )}

            {/* SELECT STATE */}
            {gameState === "select" && (
              <div className="space-y-6">
                <h3 className="font-pixel text-lg text-center text-[var(--neon-cyan)] animate-pulse">
                  SELECT YOUR DAILY QUEST
                </h3>
                <div className="grid gap-4">
                  {quests.map((quest) => (
                    <button
                      key={quest.id}
                      onClick={() => handleSelectQuest(quest)}
                      className="group relative p-4 text-left transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="absolute inset-0 bg-[var(--neon-cyan)]/10 rounded-lg border border-[var(--neon-cyan)]/30 group-hover:border-[var(--neon-cyan)] group-hover:bg-[var(--neon-cyan)]/20 group-hover:shadow-[0_0_30px_var(--neon-cyan)] transition-all" />
                      <div className="relative flex items-center gap-4">
                        <span className="text-4xl">{quest.icon}</span>
                        <div className="flex-1">
                          <div className="font-pixel text-white text-sm">{quest.name}</div>
                          <div className="text-[var(--neon-yellow)] text-xs font-mono mt-1">{quest.difficulty}</div>
                        </div>
                        <div className="font-pixel text-[var(--neon-green)] text-sm">{quest.reward}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PLAYING STATE */}
            {gameState === "playing" && selectedQuest && (
              <div className="space-y-6 text-center">
                <div className="text-5xl animate-spin">{selectedQuest.icon}</div>
                <h3 className="font-pixel text-lg text-[var(--neon-green)] animate-pulse">
                  QUEST STARTED!
                </h3>
                <p className="text-[var(--neon-cyan)] font-mono text-sm flex items-center justify-center gap-2">
                  <span className="inline-block w-2 h-2 bg-[var(--neon-green)] rounded-full animate-ping" />
                  GenLayer AI watching...
                </p>
                
                {/* Progress Bar */}
                <div className="relative h-8 bg-black/50 rounded-full overflow-hidden border-2 border-[var(--neon-cyan)]/50">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--neon-pink)] via-[var(--neon-cyan)] to-[var(--neon-green)] transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-pixel text-white text-sm drop-shadow-[0_0_10px_black]">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  {/* Animated shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1s_infinite]" style={{
                    transform: 'skewX(-20deg)',
                    animation: 'shimmer 1.5s infinite'
                  }} />
                </div>

                <p className="font-mono text-[var(--neon-yellow)] text-xs">
                  Analyzing code quality...
                </p>
              </div>
            )}

            {/* VICTORY STATE */}
            {gameState === "victory" && (
              <div className="space-y-6 text-center">
                <div className="text-4xl animate-bounce">🎉</div>
                <h3 className="font-pixel text-2xl text-[var(--neon-green)] animate-pulse drop-shadow-[0_0_20px_var(--neon-green)]">
                  QUEST COMPLETE!
                </h3>

                {/* Badge Card */}
                <div className="relative mx-auto w-64 group">
                  {/* Rotating glow border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-pink)] via-[var(--neon-yellow)] to-[var(--neon-cyan)] rounded-xl blur opacity-75 animate-spin-slow" style={{
                    animation: 'spin 3s linear infinite'
                  }} />
                  <div className="relative bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] rounded-xl p-6 border-2 border-[var(--neon-yellow)]">
                    {/* Badge Header */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--neon-yellow)] px-3 py-1 rounded-full">
                      <span className="font-pixel text-[10px] text-black">EARNED</span>
                    </div>

                    {/* Badge Content */}
                    <div className="space-y-4 pt-2">
                      <div className="text-5xl">⚔️</div>
                      <h4 className="font-pixel text-[var(--neon-pink)] text-sm">Frontend Warrior</h4>
                      <div className="font-pixel text-[var(--neon-yellow)] text-xs">⭐⭐ Epic</div>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        <div className="bg-black/30 rounded p-2">
                          <div className="text-gray-400">AI Confidence</div>
                          <div className="text-[var(--neon-green)] font-pixel">97%</div>
                        </div>
                        <div className="bg-black/30 rounded p-2">
                          <div className="text-gray-400">ATK</div>
                          <div className="text-[var(--neon-orange)] font-pixel">1200</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mint Button */}
                <button
                  onClick={handleMint}
                  className="group relative px-8 py-4 font-pixel text-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-orange)] to-[var(--neon-yellow)] rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-orange)] to-[var(--neon-yellow)] rounded-lg" />
                  <span className="relative text-black flex items-center gap-2">
                    ⚔️ MINT TO SOLANA
                  </span>
                </button>
              </div>
            )}

            {/* MINTED STATE */}
            {gameState === "minted" && (
              <div className="space-y-6 text-center">
                <div className="text-6xl">🔥</div>
                <h3 className="font-pixel text-2xl text-[var(--neon-orange)] animate-pulse drop-shadow-[0_0_20px_var(--neon-orange)]">
                  BADGE MINTED!
                </h3>
                <a 
                  href="#" 
                  className="inline-block font-mono text-[var(--neon-cyan)] underline hover:text-white transition-colors"
                >
                  View on Magic Eden →
                </a>
                
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="font-pixel text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    [ PLAY AGAIN ]
                  </button>
                </div>
              </div>
            )}

            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[var(--neon-pink)]" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[var(--neon-pink)]" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[var(--neon-pink)]" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[var(--neon-pink)]" />
          </div>
        </div>

        {/* Powered by text */}
        <p className="text-center mt-6 font-mono text-xs text-gray-500">
          Powered by <span className="text-[var(--neon-cyan)]">GenLayer</span> AI Verification
        </p>
      </div>

      {/* Add shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
      `}</style>
    </section>
  )
}

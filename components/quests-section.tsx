"use client"

import { useState } from "react"

const quests = [
  {
    id: 1,
    emoji: "⚡",
    name: "Lightning Coder",
    duration: "5 min",
    difficulty: 1,
    reward: "Rare Badge",
    rewardColor: "neon-cyan",
    glowClass: "box-glow-cyan",
    borderColor: "border-neon-cyan",
  },
  {
    id: 2,
    emoji: "🔥",
    name: "Smart Contract Sage",
    duration: "15 min",
    difficulty: 2,
    reward: "Epic Badge",
    rewardColor: "neon-orange",
    glowClass: "box-glow-orange",
    borderColor: "border-neon-orange",
  },
  {
    id: 3,
    emoji: "👑",
    name: "Full Stack King",
    duration: "30 min",
    difficulty: 3,
    reward: "Legendary Badge",
    rewardColor: "neon-yellow",
    glowClass: "box-glow-yellow",
    borderColor: "border-neon-yellow",
  },
]

export function QuestsSection() {
  const [hoveredQuest, setHoveredQuest] = useState<number | null>(null)

  return (
    <section className="relative px-4 py-20">
      {/* Section header */}
      <div className="text-center mb-16">
        <h2 className="font-[var(--font-press-start)] text-2xl md:text-4xl text-neon-green glow-green mb-4">
          🎯 THE HUNT 🎯
        </h2>
        <p className="font-[var(--font-press-start)] text-xs md:text-sm text-muted-foreground">
          Daily Quests Await
        </p>
      </div>

      {/* Quest cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className={`relative bg-card border-2 ${quest.borderColor} ${quest.glowClass} p-6 transition-all duration-300 ${hoveredQuest === quest.id ? 'scale-105' : ''}`}
            onMouseEnter={() => setHoveredQuest(quest.id)}
            onMouseLeave={() => setHoveredQuest(null)}
          >
            {/* Quest emoji */}
            <div className="text-5xl text-center mb-4">{quest.emoji}</div>
            
            {/* Quest name */}
            <h3 className="font-[var(--font-press-start)] text-sm md:text-base text-foreground text-center mb-4">
              {quest.name}
            </h3>

            {/* Duration */}
            <div className="font-[var(--font-press-start)] text-xs text-muted-foreground text-center mb-4">
              ⏱️ {quest.duration}
            </div>

            {/* Difficulty stars */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <span 
                  key={i} 
                  className={`text-lg ${i < quest.difficulty ? `text-${quest.rewardColor}` : 'text-muted'}`}
                >
                  ⭐
                </span>
              ))}
            </div>

            {/* Reward */}
            <div className={`font-[var(--font-press-start)] text-xs text-center text-${quest.rewardColor} mb-6`}>
              → {quest.reward}
            </div>

            {/* Play button */}
            <button className={`w-full font-[var(--font-press-start)] text-xs py-3 bg-${quest.rewardColor} text-background hover:brightness-110 transition-all`}>
              PLAY NOW
            </button>

            {/* Corner decorations */}
            <div className={`absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 ${quest.borderColor}`} />
            <div className={`absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 ${quest.borderColor}`} />
            <div className={`absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 ${quest.borderColor}`} />
            <div className={`absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 ${quest.borderColor}`} />
          </div>
        ))}
      </div>
    </section>
  )
}

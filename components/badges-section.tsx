"use client"

import { useState } from "react"

const badges = [
  {
    id: 1,
    name: "Frontend Warrior",
    attack: 1200,
    rarity: "Legendary",
    stars: 3,
    price: 80,
    glowClass: "box-glow-yellow",
    borderColor: "border-neon-yellow",
    textColor: "text-neon-yellow",
    bgGradient: "from-neon-yellow/20 to-transparent",
  },
  {
    id: 2,
    name: "API Architect",
    attack: 800,
    rarity: "Epic",
    stars: 2,
    price: 30,
    glowClass: "box-glow-orange",
    borderColor: "border-neon-orange",
    textColor: "text-neon-orange",
    bgGradient: "from-neon-orange/20 to-transparent",
  },
  {
    id: 3,
    name: "React Ranger",
    attack: 400,
    rarity: "Rare",
    stars: 1,
    price: 10,
    glowClass: "box-glow-cyan",
    borderColor: "border-neon-cyan",
    textColor: "text-neon-cyan",
    bgGradient: "from-neon-cyan/20 to-transparent",
  },
]

export function BadgesSection() {
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null)

  return (
    <section className="relative px-4 py-20 bg-card/30">
      {/* Section header */}
      <div className="text-center mb-16">
        <h2 className="font-[var(--font-press-start)] text-2xl md:text-4xl text-neon-pink glow-pink mb-4">
          🛡️ YOUR ARSENAL 🛡️
        </h2>
        <p className="font-[var(--font-press-start)] text-xs md:text-sm text-muted-foreground">
          Collect & Trade Badges
        </p>
      </div>

      {/* Badge cards (Trading card style) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`relative bg-gradient-to-b ${badge.bgGradient} bg-card border-4 ${badge.borderColor} ${badge.glowClass} p-1 transition-all duration-300 ${hoveredBadge === badge.id ? 'scale-105 rotate-1' : ''}`}
            onMouseEnter={() => setHoveredBadge(badge.id)}
            onMouseLeave={() => setHoveredBadge(null)}
          >
            {/* Card inner border */}
            <div className={`border-2 ${badge.borderColor} p-4`}>
              {/* Rarity banner */}
              <div className={`font-[var(--font-press-start)] text-[10px] ${badge.textColor} text-center mb-4`}>
                ✦ {badge.rarity.toUpperCase()} ✦
              </div>

              {/* Badge artwork area */}
              <div className={`h-32 bg-background/50 border-2 ${badge.borderColor} flex items-center justify-center mb-4 relative overflow-hidden`}>
                <div className="text-6xl animate-pulse-glow">
                  {badge.rarity === "Legendary" && "⚔️"}
                  {badge.rarity === "Epic" && "🔮"}
                  {badge.rarity === "Rare" && "💎"}
                </div>
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,oklch(0_0_0/0.05)_2px,oklch(0_0_0/0.05)_4px)]" />
              </div>

              {/* Badge name */}
              <h3 className="font-[var(--font-press-start)] text-xs text-foreground text-center mb-4">
                {badge.name}
              </h3>

              {/* Stats */}
              <div className="flex justify-between items-center mb-4 px-2">
                <div className="font-[var(--font-press-start)] text-[10px] text-neon-green">
                  ATK: {badge.attack}
                </div>
                <div className="flex">
                  {Array.from({ length: badge.stars }).map((_, i) => (
                    <span key={i} className={`text-sm ${badge.textColor}`}>⭐</span>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="font-[var(--font-press-start)] text-sm text-center text-foreground mb-4">
                ${badge.price}
              </div>

              {/* Trade button - shows on hover */}
              <button 
                className={`w-full font-[var(--font-press-start)] text-[10px] py-3 border-2 ${badge.borderColor} ${badge.textColor} hover:bg-${badge.textColor.replace('text-', '')} hover:text-background transition-all ${hoveredBadge === badge.id ? 'opacity-100' : 'opacity-0'}`}
              >
                TRADE ON SOLANA
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

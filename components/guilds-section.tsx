"use client"

const guilds = [
  {
    id: 1,
    name: "DegenDAO",
    emoji: "🦍",
    recruiting: "5 Legendary hunters",
    totalOffer: "$400k",
    glowClass: "box-glow-pink",
    borderColor: "border-neon-pink",
    textColor: "text-neon-pink",
  },
  {
    id: 2,
    name: "Web3 Labs",
    emoji: "🧪",
    recruiting: "3 Epic hunters",
    totalOffer: "$250k",
    glowClass: "box-glow-cyan",
    borderColor: "border-neon-cyan",
    textColor: "text-neon-cyan",
  },
  {
    id: 3,
    name: "Solana Studios",
    emoji: "☀️",
    recruiting: "2 Legendary hunters",
    totalOffer: "$300k",
    glowClass: "box-glow-green",
    borderColor: "border-neon-green",
    textColor: "text-neon-green",
  },
]

export function GuildsSection() {
  return (
    <section className="relative px-4 py-20">
      {/* Section header */}
      <div className="text-center mb-16">
        <h2 className="font-[var(--font-press-start)] text-2xl md:text-4xl text-neon-cyan glow-cyan mb-4">
          ⚔️ GUILD WARS ⚔️
        </h2>
        <p className="font-[var(--font-press-start)] text-xs md:text-sm text-muted-foreground">
          Guilds are recruiting top adventurers
        </p>
      </div>

      {/* Guild cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {guilds.map((guild) => (
          <div
            key={guild.id}
            className={`relative bg-card border-2 ${guild.borderColor} ${guild.glowClass} p-6 hover:scale-105 transition-all duration-300 group`}
          >
            {/* Guild emblem */}
            <div className="text-5xl text-center mb-4 group-hover:animate-bounce">
              {guild.emoji}
            </div>

            {/* Guild name */}
            <h3 className={`font-[var(--font-press-start)] text-sm ${guild.textColor} text-center mb-4`}>
              {guild.name}
            </h3>

            {/* Recruiting info */}
            <div className="font-[var(--font-press-start)] text-[10px] text-muted-foreground text-center mb-2">
              🎯 RECRUITING:
            </div>
            <div className="font-[var(--font-press-start)] text-xs text-foreground text-center mb-4">
              {guild.recruiting}
            </div>

            {/* Total offer */}
            <div className={`font-[var(--font-press-start)] text-lg ${guild.textColor} text-center mb-4`}>
              {guild.totalOffer} TOTAL
            </div>

            {/* Apply button */}
            <button className={`w-full font-[var(--font-press-start)] text-[10px] py-3 bg-transparent border-2 ${guild.borderColor} ${guild.textColor} hover:bg-${guild.textColor.replace('text-', '')} hover:text-background transition-all`}>
              APPLY NOW
            </button>

            {/* Recruiting badge */}
            <div className={`absolute -top-3 -right-3 font-[var(--font-press-start)] text-[8px] bg-background ${guild.textColor} border ${guild.borderColor} px-2 py-1 animate-pulse`}>
              HIRING!
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

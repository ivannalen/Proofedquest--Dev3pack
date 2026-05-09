"use client"

const leaders = [
  {
    rank: 1,
    medal: "🥇",
    name: "Alexis",
    xp: "12,500",
    badges: 5,
    earned: "$1,200",
    glowClass: "box-glow-yellow",
    borderColor: "border-neon-yellow",
    textColor: "text-neon-yellow",
  },
  {
    rank: 2,
    medal: "🥈",
    name: "Cipher",
    xp: "11,200",
    badges: 4,
    earned: "$980",
    glowClass: "box-glow-cyan",
    borderColor: "border-neon-cyan",
    textColor: "text-neon-cyan",
  },
  {
    rank: 3,
    medal: "🥉",
    name: "Nova",
    xp: "10,800",
    badges: 3,
    earned: "$750",
    glowClass: "box-glow-orange",
    borderColor: "border-neon-orange",
    textColor: "text-neon-orange",
  },
]

export function LeaderboardSection() {
  return (
    <section className="relative px-4 py-20 bg-card/30">
      {/* Section header */}
      <div className="text-center mb-16">
        <h2 className="font-[var(--font-press-start)] text-2xl md:text-4xl text-neon-yellow glow-yellow mb-4">
          🏆 LEADERBOARD 🏆
        </h2>
        <p className="font-[var(--font-press-start)] text-xs md:text-sm text-muted-foreground">
          Top Hunters This Week
        </p>
      </div>

      {/* Leaderboard */}
      <div className="max-w-4xl mx-auto space-y-4">
        {leaders.map((leader) => (
          <div
            key={leader.rank}
            className={`relative bg-card border-2 ${leader.borderColor} ${leader.glowClass} p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 hover:scale-[1.02] transition-all duration-300`}
          >
            {/* Rank & Medal */}
            <div className="flex items-center gap-4 min-w-[80px]">
              <span className="text-4xl">{leader.medal}</span>
            </div>

            {/* Player info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className={`font-[var(--font-press-start)] text-sm md:text-base ${leader.textColor}`}>
                {leader.name}
              </h3>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="text-center">
                <div className="font-[var(--font-press-start)] text-[10px] text-muted-foreground mb-1">XP</div>
                <div className="font-[var(--font-press-start)] text-xs md:text-sm text-neon-green">
                  {leader.xp}
                </div>
              </div>
              <div className="text-center">
                <div className="font-[var(--font-press-start)] text-[10px] text-muted-foreground mb-1">LEGENDARY</div>
                <div className="font-[var(--font-press-start)] text-xs md:text-sm text-neon-pink">
                  {leader.badges} Badges
                </div>
              </div>
              <div className="text-center">
                <div className="font-[var(--font-press-start)] text-[10px] text-muted-foreground mb-1">EARNED</div>
                <div className="font-[var(--font-press-start)] text-xs md:text-sm text-neon-yellow">
                  {leader.earned}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className={`absolute top-1 left-1 w-3 h-3 border-l border-t ${leader.borderColor}`} />
            <div className={`absolute top-1 right-1 w-3 h-3 border-r border-t ${leader.borderColor}`} />
            <div className={`absolute bottom-1 left-1 w-3 h-3 border-l border-b ${leader.borderColor}`} />
            <div className={`absolute bottom-1 right-1 w-3 h-3 border-r border-b ${leader.borderColor}`} />
          </div>
        ))}
      </div>
    </section>
  )
}

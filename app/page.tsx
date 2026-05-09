import { HeroSection } from "@/components/hero-section"
import { QuestsSection } from "@/components/quests-section"
import { BadgesSection } from "@/components/badges-section"
import { GuildsSection } from "@/components/guilds-section"
import { LeaderboardSection } from "@/components/leaderboard-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden relative">
      {/* Global scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,oklch(0_0_0/0.02)_2px,oklch(0_0_0/0.02)_4px)]" />
      
      <HeroSection />
      <QuestsSection />
      <BadgesSection />
      <GuildsSection />
      <LeaderboardSection />
      <FooterSection />
    </main>
  )
}

"use client"

import { useState, useEffect } from "react"

export function FooterSection() {
  const [flash, setFlash] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(prev => !prev)
    }, 600)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="relative px-4 py-20 border-t-2 border-neon-pink">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.7_0.22_180/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.7_0.22_180/0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Powered by */}
        <p className="font-[var(--font-press-start)] text-[10px] md:text-xs text-muted-foreground mb-8">
          ⚡ Powered by GenLayer AI validation + Solana blockchain ⚡
        </p>

        {/* Main CTA */}
        <button 
          className={`font-[var(--font-press-start)] text-sm md:text-base px-8 md:px-12 py-4 md:py-5 bg-neon-pink text-background box-glow-pink hover:scale-105 transition-all border-2 border-neon-pink ${flash ? 'brightness-100' : 'brightness-90'}`}
        >
          ⚔️ JOIN THE HUNT ⚔️
        </button>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-12">
          <a href="#" className="font-[var(--font-press-start)] text-xs text-neon-cyan hover:glow-cyan transition-all">
            DISCORD
          </a>
          <a href="#" className="font-[var(--font-press-start)] text-xs text-neon-cyan hover:glow-cyan transition-all">
            TWITTER
          </a>
          <a href="#" className="font-[var(--font-press-start)] text-xs text-neon-cyan hover:glow-cyan transition-all">
            DOCS
          </a>
        </div>

        {/* Copyright */}
        <p className="font-[var(--font-press-start)] text-[8px] text-muted-foreground mt-12">
          © 2026 PROOFEDQUEST. ALL RIGHTS RESERVED.
        </p>

        {/* Decorative arcade coin slots */}
        <div className="flex justify-center gap-4 mt-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i} 
              className="w-6 h-6 border-2 border-neon-yellow animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="w-full h-1 bg-neon-yellow mt-2.5" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState, useEffect } from "react"

export function HeroSection() {
  const [showInsert, setShowInsert] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowInsert(prev => !prev)
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.75_0.25_320/0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.75_0.25_320/0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Arcade marquee frame */}
      <div className="relative z-10 text-center">
        {/* Top border decoration */}
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: 7 }).map((_, i) => (
            <div 
              key={i} 
              className="w-4 h-4 bg-neon-pink box-glow-pink animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        {/* Main title */}
        <h1 className="font-[var(--font-press-start)] text-4xl md:text-6xl lg:text-7xl text-neon-pink glow-pink mb-4 tracking-wider">
          ⚔️ PROOFED QUEST ⚔️
        </h1>
        
        {/* Tagline */}
        <p className="font-[var(--font-press-start)] text-lg md:text-2xl text-neon-cyan glow-cyan mb-8 tracking-wide">
          Hunt. Earn. Trade. Compete.
        </p>

        {/* Flashing insert wallet text */}
        <div className={`font-[var(--font-press-start)] text-sm md:text-base text-neon-yellow glow-yellow transition-opacity duration-200 ${showInsert ? 'opacity-100' : 'opacity-30'}`}>
          🎮 INSERT WALLET TO PLAY 🎮
        </div>

        {/* CTA Button */}
        <button className="mt-10 font-[var(--font-press-start)] text-sm md:text-base px-8 py-4 bg-neon-pink text-background box-glow-pink hover:scale-105 transition-transform border-2 border-neon-pink">
          CONNECT WALLET
        </button>

        {/* Bottom border decoration */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: 7 }).map((_, i) => (
            <div 
              key={i} 
              className="w-4 h-4 bg-neon-cyan box-glow-cyan animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      {/* Decorative corner pieces */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-4 border-t-4 border-neon-pink opacity-60" />
      <div className="absolute top-10 right-10 w-20 h-20 border-r-4 border-t-4 border-neon-pink opacity-60" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-4 border-b-4 border-neon-cyan opacity-60" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-4 border-b-4 border-neon-cyan opacity-60" />
    </section>
  )
}

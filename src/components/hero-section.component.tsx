// 'use client'

import { Button } from "./ui/button"

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Build Smarter. Scale Faster. <br /> Thrive in the AI Era.
      </h1>
      <p className="mt-6 text-lg sm:text-xl max-w-2xl text-muted-foreground">
        I'm Aldwin Pagán — I help business owners future-proof their tech with scalable systems, cost-efficient architecture, and AI-enhanced solutions.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild>
          <a href="#contact">
            Let’s Talk
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#projects">
            See My Work
          </a>
        </Button>
      </div>
    </section>
  )
}
// 'use client'

import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 blur-xl opacity-40" />

      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Build Smarter. Scale Faster. <br /> Thrive in the AI Era.
      </motion.h1>

      <motion.p
        className="mt-6 text-lg sm:text-xl max-w-2xl text-muted-foreground"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm Aldwin Pagán — I help business owners future-proof their tech with scalable systems, cost-efficient architecture, and AI-enhanced solutions.
      </motion.p>

      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Button size="lg" >
          <a
            href="#contact"
          >
            <span className="text-white flex items-center">
Start the Conversation <ArrowRight className="ml-2 w-4 h-4" />
            </span>
            
          </a>
        </Button>
      </motion.div>

    </section>
  )
}
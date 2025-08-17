'use client'

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 px-4 sm:px-8 md:px-16 max-w-4xl mx-auto text-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Ready to Build with a Fractional CTO?
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Let’s explore how I can help you scale your product, integrate AI, or bring technical clarity to your roadmap.
        </p>

        <a
          href="https://yourtypeformlink.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition text-lg"
        >
          Let’s Build Together <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 to-muted/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-muted/10 to-primary/20 rounded-full blur-2xl opacity-20" />
    </section>
  )
}

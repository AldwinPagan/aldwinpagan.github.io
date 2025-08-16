'use client'

import { Button } from "./ui/button"
import { Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-8 md:px-16 max-w-2xl mx-auto text-center"
    >
      <div className="flex flex-col items-center gap-4">
        <Mail className="w-8 h-8 text-primary" />
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Let’s Build Something Together
        </h2>
        <p className="text-muted-foreground max-w-lg">
          Ready to bring clarity, scalability, and AI into your product? I’d love to hear what you're building.
        </p>
        <Button
          asChild
          className="mt-6"
        >
          <a
            href="https://your-typeform-link.com" // 🔁 Replace with your real Typeform URL
            target="_blank"
            rel="noopener noreferrer"
          >
            Start the Conversation
          </a>
        </Button>
      </div>
    </section>
  )
}
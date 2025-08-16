// 'use client'

import { Separator } from "./ui/separator"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-8 md:px-16 max-w-5xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Portrait */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/10 to-muted shadow-lg -translate-x-2 -translate-y-2" />
          {/* TODO: Verify docusaurus image plugin */}
          <img
            src="/images/aldwin.jpg" // <- replace with your actual image path
            alt="Aldwin Pagán"
            className="relative z-10 w-full h-full object-cover rounded-xl border border-border shadow-md"
          />
        </div>

        {/* Text */}
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
            Fractional CTO & Solutions Architect
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Turning complexity into clarity — and clarity into growth.
          </p>

          <Separator className="my-4" />

          <div className="space-y-4 text-base sm:text-lg">
            <p>
              I’m Aldwin Pagán — a Fractional CTO and Solutions Architect helping teams align, innovate, and deliver results faster. With over 9 years of experience leading both startup and enterprise software initiatives, I bridge business vision and technical execution.
            </p>
            <p>
              I help businesses:
            </p>
            <ul className="ml-5 list-disc">
              <li>Align stakeholders with a clear technology roadmap</li>
              <li>Architect scalable, cost-effective systems</li>
              <li>Streamline operations through automation and modern infrastructure</li>
            </ul>
            <p>
              Partners know me for going beyond expectations, bringing fresh ideas, and making complex systems easy to understand. If you need a trusted technology partner to design, build, or scale your solution in the AI era — let’s talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
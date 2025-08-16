'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Compass, ShieldCheck, Terminal, Users } from "lucide-react"

export default function WhyChooseSection() {
  const reasons = [
    {
      title: "Strategic Planning",
      icon: <Compass className="w-6 h-6 text-primary" />,
      description:
        "I align business goals with scalable technical roadmaps — not just code, but a clear path to value.",
    },
    {
      title: "Risk Management",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      description:
        "I proactively identify and resolve risks in scalability, security, and maintainability before they affect your bottom line.",
    },
    {
      title: "Development Oversight",
      icon: <Terminal className="w-6 h-6 text-primary" />,
      description:
        "I manage the build process end-to-end, ensuring quality and velocity while you focus on growth and customers.",
    },
    {
      title: "Transparent & Collaborative",
      icon: <Users className="w-6 h-6 text-primary" />,
      description:
        "You’ll always know what’s being built and why. I work with you, not just for you — no black box delivery.",
    },
  ]

  return (
    <section
      id="why-choose"
      className="py-16 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
        Why Choose Me?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reasons.map((reason, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              {reason.icon}
              <CardTitle>{reason.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
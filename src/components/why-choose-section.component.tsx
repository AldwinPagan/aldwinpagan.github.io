'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Compass, ShieldCheck, Terminal, Users } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
  {
    title: "Strategic Planning",
    description:
      "I align business goals with scalable technical roadmaps — not just code, but a clear path to value.",
    icon: <Compass className="w-6 h-6 text-primary" />,
  },
  {
    title: "Risk Management",
    description:
      "I proactively identify and resolve risks in scalability, security, and maintainability before they affect your bottom line.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Development Oversight",
    description:
      "I manage the build process end-to-end, ensuring quality and velocity while you focus on growth and customers.",
    icon: <Terminal className="w-6 h-6 text-primary" />,
  },
  {
    title: "Transparent & Collaborative",
    description:
      "You’ll always know what’s being built and why. I work with you, not just for you — no black box delivery.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
]

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="py-20 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
        Why Choose Me?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Card className="hover:shadow-xl transition-shadow group">
                {/* TODO: icons and title are skewed (icons are positioned lower than title )*/}
              <CardHeader className="flex flex-row items-center gap-4">
                {item.icon}
                <CardTitle >{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-left">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

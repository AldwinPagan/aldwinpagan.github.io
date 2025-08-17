'use client'

import { Target, Wrench, MessageSquareWarning, Repeat } from "lucide-react"
import { motion } from "framer-motion"
const challenges = [
  {
    title: "No Clear Starting Point",
    description: "Without defined goals, it's easy to waste time and resources building the wrong thing.",
    icon: <Target className="w-6 h-6 text-destructive" />,
  },
  {
    title: "Doing It All Yourself",
    description: "Founders end up writing fragile code alone. This slows progress and leads to tech debt.",
    icon: <Wrench className="w-6 h-6 text-destructive" />,
  },
  {
    title: "No Feedback Loop",
    description: "Lack of structure to gather user feedback results in features that don’t meet real needs.",
    icon: <MessageSquareWarning className="w-6 h-6 text-destructive" />,
  },
  {
    title: "Can't Iterate Fast Enough",
    description: "When changes feel risky or break things, teams can’t move fast enough to stay competitive.",
    icon: <Repeat className="w-6 h-6 text-destructive" />,
  },
]

export default function ChallengesSection() {
  return (
    <section
      id="challenges"
      className="py-20 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
        Challenges in the AI Era
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {challenges.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-xl bg-muted/30 p-6 border border-border shadow-md hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

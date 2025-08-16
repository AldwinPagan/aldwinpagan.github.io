'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Target, Wrench, MessageSquareWarning, Repeat } from "lucide-react"

export default function ChallengesSection() {
  const challenges = [
    {
      title: "No Clear Starting Point",
      icon: <Target className="w-6 h-6 text-destructive" />,
      problem:
        "Without well-defined goals, teams often build without a clear outcome — wasting time and money.",
      solution:
        "I help teams clarify business objectives and turn them into a focused execution plan.",
    },
    {
      title: "Doing It All Yourself",
      icon: <Wrench className="w-6 h-6 text-destructive" />,
      problem:
        "Founders end up building 'vibe-coded' apps that aren’t scalable or maintainable.",
      solution:
        "I refactor and scale MVPs into stable, production-ready systems so you can delegate with confidence.",
    },
    {
      title: "No Feedback Loop",
      icon: <MessageSquareWarning className="w-6 h-6 text-destructive" />,
      problem:
        "Skipping structured feedback leads to features that miss the mark — or go unused.",
      solution:
        "I implement systems to collect, interpret, and act on user feedback throughout development.",
    },
    {
      title: "Can't Iterate Fast Enough",
      icon: <Repeat className="w-6 h-6 text-destructive" />,
      problem:
        "Changing features feels risky and slow, which stalls product innovation.",
      solution:
        "I build infrastructure and workflows that enable fast iteration without breaking what works.",
    },
  ]

  return (
    <section
      id="challenges"
      className="py-16 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
        Challenges in the AI Era
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {challenges.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              {item.icon}
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base font-medium mb-2">❌ Problem:</p>
              <p className="text-sm text-muted-foreground mb-4">
                {item.problem}
              </p>
              <p className="text-base font-medium mb-2">✅ How I Help:</p>
              <p className="text-sm text-muted-foreground">{item.solution}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
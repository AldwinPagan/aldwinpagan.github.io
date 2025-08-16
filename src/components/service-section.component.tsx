'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { BrainCircuit, ServerCog, Rocket, Hammer, Wand2 } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      title: "MVP Development",
      icon: <Rocket className="w-6 h-6 text-primary" />,
      description:
        "Build focused MVPs that prioritize core features, enabling real user feedback and rapid iteration.",
    },
    {
      title: "Fractional CTO",
      icon: <BrainCircuit className="w-6 h-6 text-primary" />,
      description:
        "Strategic tech leadership to guide your startup’s execution, architecture, and scaling journey.",
    },
    {
      title: "Cloud Infrastructure",
      icon: <ServerCog className="w-6 h-6 text-primary" />,
      description:
        "Design and deploy cloud-native systems that grow with your business — reliable, scalable, and efficient.",
    },
    {
      title: "AI Integration & Automation",
      icon: <Wand2 className="w-6 h-6 text-primary" />,
      description:
        "Leverage AI to enhance decision-making, automate operations, and boost customer-facing experiences.",
    },
    {
      title: "Technical Consulting",
      icon: <Hammer className="w-6 h-6 text-primary" />,
      description:
        "Get expert advice to assess needs, solve problems, and optimize systems for performance and scale.",
    },
  ]

  return (
    <section
      id="services"
      className="py-16 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
        Services & Expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              {service.icon}
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
'use client'

import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Aldwin helped us turn a messy MVP into a scalable product. Clear communication, fast execution, and always aligned with our goals.",
      name: "María Rivera",
      role: "Founder, Assist787",
      image: "/img/testimonials/maria.jpg",
    },
    {
      quote:
        "Working with Aldwin was a game-changer. He brought structure, foresight, and a level of clarity that helped us scale with confidence.",
      name: "Luis Hernández",
      role: "CEO, Hometuls",
      image: "/img/testimonials/luis.jpg",
    },
    {
      quote:
        "From AI integration to infrastructure refactoring, Aldwin delivered results that exceeded expectations — highly recommended.",
      name: "Carlos Mejía",
      role: "CTO, Local Startup",
      image: "/img/testimonials/carlos.jpg",
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-16 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
        What Partners Are Saying
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <Card
            key={index}
            className="relative p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow"
          >
            <Quote className="absolute top-4 right-4 w-5 h-5 text-muted-foreground" />
            <CardContent className="p-0">
              <p className="text-sm text-muted-foreground italic mb-6">
                “{item.quote}”
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={item.image} alt={item.name} />
                  <AvatarFallback>
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-base font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
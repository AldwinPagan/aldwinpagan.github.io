'use client'

import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

  const testimonials = [
      {
        quote:
          "Since joining the team on January 15, 2018, Aldwin has consistently demonstrated enthusiasm and a positive attitude, contributing significantly to the development of various challenging projects in the science and innovation sector. "
          +"His effective communication skills and ability to visually explain detailed diagrams have played a crucial role in enhancing the product and navigating high-stress circumstances with ease.",
        name: "Andres Calle",
        role: "CTO, AppLivio",
        image: "/img/testimonials/andres-calle.jpg",
      },
    {
      quote:
        "Aldwin has advised me in a way that I can understand. He keeps me actively involved in the development process and informed of progress. "
        +"Thanks to him, we have conceptualized and developed Assist787 aligning with my vision.",
      name: "Luis Velazquez",
      role: "CEO, Assist787",
      image: "/img/testimonials/maria.jpg",
    },
    {
      quote:
        "From the moment Aldwin joined us, he embraced every challenge with enthusiasm and confidence. " 
        + "His deep experience spanning over nine years in both startup and enterprise environments has equipped him with a remarkable ability to navigate complex systems and deliver scalable, robust solutions. " 
        + "In November 2024, Aldwin took on the role of Technical Lead, where he has gone above and beyond in guiding our team toward excellence.",
      name: "Carlos Gonzalez",
      role: "Principal, Integrum",
      image: "/img/testimonials/carlos-gonzalez.jpg",
    },
  ]

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
        What Partners Are Saying
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Card className="relative p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow">
              <Quote className="absolute top-4 right-4 w-5 h-5 text-muted-foreground" />
              <CardContent className="p-0">
                <p className="text-sm text-muted-foreground italic mb-6">
                  “{item.quote}”
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 ring ring-primary">
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
          </motion.div>
        ))}
      </div>
    </section>
  )
}
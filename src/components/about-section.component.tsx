import { Separator } from "./ui/separator"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-8 md:px-16 max-w-5xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 group">
        {/* Portrait */}
        <motion.div
          className="relative w-48 h-48 md:w-56 md:h-56 shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={"/img/aldwin.jpg"}
            alt="Aldwin Pagán"
            className="w-full h-full object-cover rounded-xl border border-border shadow-md"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="text-left w-full md:w-auto"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
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
            <p className="relative pl-4 border-l-4 border-primary/70">
              I align stakeholders with a clear technology roadmap that scales with your growth and budget.
            </p>
            <p className="relative pl-4 border-l-4 border-primary/70">
              I streamline operations through automation, reducing complexity without compromising quality.
            </p>
            <p className="relative pl-4 border-l-4 border-primary/70">
              I transform high-level goals into secure, scalable, and maintainable digital solutions.
            </p>
            <p>
              Partners know me for going beyond expectations, bringing fresh ideas, and making complex systems easy to understand.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
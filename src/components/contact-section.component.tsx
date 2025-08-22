import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 px-4 sm:px-8 md:px-16 max-w-4xl mx-auto text-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Ready to Build with a Fractional CTO?
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Let’s explore how I can help you scale your product, integrate AI, or bring technical clarity to your roadmap.
        </p>

              <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Button size="lg" >
          <a
            href="https://forms.gle/cu2vNfYstvaRoKuU7"
            target="_blank"
          >
            <span className="text-white flex items-center">
Let’s Build Together <ArrowRight className="ml-2 w-4 h-4" />
            </span>
            
          </a>
        </Button>
      </motion.div>
      </motion.div>


    </section>
  )
}

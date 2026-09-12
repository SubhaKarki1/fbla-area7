"use client"

import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/motion"
import { SectionHeading } from "@/components/shared/SectionHeading"

const CONTACT_EMAIL = "area7rep@fblatx.org"

const TOPICS = [
  {
    title: "Chapter questions",
    body: "Advisers and officers looking for guidance on running their chapter or preparing for competition.",
  },
  {
    title: "Event details",
    body: "Registration, deadlines, and logistics for the Fall Leadership and Area conferences.",
  },
  {
    title: "Joining Area 7",
    body: "Schools in North Texas interested in chartering a new FBLA chapter.",
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: "#002a5c" }}
    >
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(212,169,0,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">

          {/* Left: invitation + primary action */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionHeading
              eyebrow="Contact"
              title="Get in touch"
              description="Have a question about Area 7, an upcoming event, or want to get involved? We'd love to hear from you."
              tone="dark"
            />

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-3 mt-9 px-7 py-4 bg-gold text-navy-deep
                         font-bold text-sm tracking-wide rounded-lg hover:bg-gold-light
                         transition-colors duration-200"
            >
              <Mail size={16} />
              Email Area 7
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </a>

            <p className="font-body text-white/45 text-sm mt-4">
              Or reach us directly at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gold hover:text-gold-light font-medium transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </p>

            <div className="pt-10 mt-10 border-t border-white/12">
              <p className="font-body text-white/40 text-xs font-semibold uppercase tracking-[0.14em] mb-4">
                Affiliated With
              </p>
              <div className="flex items-center gap-6">
                <a href="https://fblatx.org" target="_blank" rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                  Texas FBLA ↗
                </a>
                <a href="https://fbla.org" target="_blank" rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                  FBLA National ↗
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: what to write in about — replaces the form that used to
              sit here posting to an unconfigured Formspree endpoint. */}
          <motion.ul
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="border-t border-white/12"
          >
            {TOPICS.map((topic, i) => (
              <li
                key={topic.title}
                className="border-b border-white/12 py-7 grid grid-cols-[38px_1fr] gap-5 items-start"
              >
                <span className="w-9 h-9 rounded-full border border-gold/40 flex items-center
                                 justify-center text-gold text-xs font-bold tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-white font-bold text-lg leading-snug mb-1.5">
                    {topic.title}
                  </h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    {topic.body}
                  </p>
                </div>
              </li>
            ))}
          </motion.ul>

        </div>
      </div>
    </section>
  )
}

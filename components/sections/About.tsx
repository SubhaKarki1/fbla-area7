"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/motion"
import { SectionHeading } from "@/components/shared/SectionHeading"

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center">

          {/* Left: mission */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionHeading
              eyebrow="Who We Are"
              title="A network built on education, service, and progress"
            />

            <div className="font-body mt-7 space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                FBLA Area 7 represents a dynamic network of high schools across North Texas,
                united in developing the next generation of business leaders. We foster
                entrepreneurship, leadership skills, and academic excellence through
                competitive events, networking, and community service.
              </p>
              <p>
                Our area spans a diverse set of schools and communities, each contributing
                unique perspectives and talents to strengthen our collective mission —
                preparing students for success in business and in life.
              </p>
            </div>

            <div className="flex items-center gap-5 pt-8">
              <a
                href="https://fblatx.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm font-semibold text-navy
                           hover:text-navy-mid transition-colors"
              >
                <img
                  src="/images/design-mode/download(2).png"
                  alt=""
                  loading="lazy"
                  className="h-8 w-auto object-contain"
                />
                <span>Texas FBLA ↗</span>
              </a>
              <span className="h-4 w-px bg-slate-200" />
              <a
                href="https://fbla.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-navy hover:text-navy-mid transition-colors"
              >
                FBLA National ↗
              </a>
            </div>
          </motion.div>

          {/* Right: supporting image with a pull-quote stat.
              The full stat set lives in the Hero — repeating it here was the
              redundancy that made the page feel padded. */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-lift)]">
              <Image
                src="/images/img-3053.jpeg"
                alt="Area 7 students at the 2025 Area Conference"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            <div
              className="surface rounded-xl shadow-[var(--shadow-lift)] px-6 py-5
                         w-max max-w-[80%] -mt-10 ml-6 relative z-10"
            >
              <div className="text-3xl font-bold text-navy-deep leading-none">1942</div>
              <div className="font-body text-slate-500 text-sm mt-1.5">
                FBLA founded — still going
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

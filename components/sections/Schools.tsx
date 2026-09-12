"use client"

import { motion } from "framer-motion"
import { staggerContainer, cardEntrance, viewportOnce } from "@/lib/motion"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SCHOOLS } from "@/lib/data"
import type { School } from "@/types"

function initials(name: string) {
  return name
    .replace(/\b(High School|Senior High|Institute|HS)\b/gi, "")
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

function SchoolMark({ school }: { school: School }) {
  if (school.logo) {
    return (
      <img
        src={school.logo}
        alt=""
        loading="lazy"
        decoding="async"
        className="max-w-full max-h-full object-contain"
      />
    )
  }

  return (
    <div
      className="w-full h-full rounded-lg bg-navy-deep flex items-center justify-center"
      aria-hidden="true"
    >
      <span className="text-gold font-bold text-lg tracking-tight">
        {initials(school.name)}
      </span>
    </div>
  )
}

export function Schools() {
  return (
    <section id="schools" className="py-24 sm:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        <SectionHeading
          eyebrow="Member Chapters"
          title="Our Member Schools"
          description={`${SCHOOLS.length} chapters across North Texas, each running its own program of competitive events, service, and leadership development.`}
          className="mb-14"
        />

        {/*
          Flex-wrap with a fixed basis rather than a grid: the roster is a prime
          number today and keeps changing, so every uniform column count strands
          an orphan on the last row. Wrapping lets that trailing row center
          itself at normal card width, which reads as deliberate at any count.
          The cards must NOT flex-grow — a lone card on the last row would
          stretch to full width.
        */}
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap justify-center gap-4"
        >
          {SCHOOLS.map((school) => (
            <motion.li
              key={school.id}
              variants={cardEntrance}
              className="surface rounded-xl shadow-[var(--shadow-card)]
                         basis-[calc(50%-0.5rem)] sm:basis-[calc(33.333%-0.667rem)]
                         lg:basis-[calc(25%-0.75rem)]
                         px-5 py-7 flex flex-col items-center text-center gap-3.5
                         hover:shadow-[var(--shadow-lift)] hover:border-[rgba(0,42,92,0.18)]
                         transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center">
                <SchoolMark school={school} />
              </div>
              <div>
                <h3 className="font-bold text-navy-deep text-sm leading-snug">
                  {school.shortName}
                </h3>
                <p className="font-body text-slate-500 text-xs mt-1">{school.city}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

      </div>
    </section>
  )
}

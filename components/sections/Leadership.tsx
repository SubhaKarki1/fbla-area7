"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { staggerContainer, cardEntrance, viewportOnce } from "@/lib/motion"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { OFFICERS } from "@/lib/data"

function getInitials(name: string) {
  if (name === "TBD") return "?"
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
}

export function Leadership() {
  return (
    <section id="leadership" className="py-24 sm:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        <SectionHeading
          eyebrow="Officer Team"
          title="Area 7 Leadership"
          description="The officer team dedicated to serving Area 7 and its member schools."
          className="mb-14"
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6"
        >
          {OFFICERS.map((officer, i) => (
            <motion.li
              key={i}
              variants={cardEntrance}
              className="surface rounded-2xl overflow-hidden shadow-[var(--shadow-card)]
                         hover:shadow-[var(--shadow-lift)] transition-shadow duration-300"
            >
              <div className="relative aspect-[4/5] bg-navy-deep">
                {officer.photo ? (
                  <Image
                    src={officer.photo}
                    alt={officer.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                    style={
                      officer.photoPosition
                        ? { objectPosition: officer.photoPosition }
                        : undefined
                    }
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gold font-bold text-4xl">
                      {getInitials(officer.name)}
                    </span>
                  </div>
                )}
              </div>

              <div className="px-5 py-5">
                <div className="eyebrow text-gold-ink mb-2 !text-[0.625rem]">
                  {officer.title}
                </div>
                <div className="font-bold text-navy-deep text-base sm:text-lg leading-snug">
                  {officer.name === "TBD" ? (
                    <span className="text-slate-400 italic font-normal">TBD</span>
                  ) : (
                    officer.name
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

      </div>
    </section>
  )
}

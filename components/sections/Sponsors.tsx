"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer, cardEntrance, viewportOnce } from "@/lib/motion"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SPONSORS } from "@/lib/data"
import type { Sponsor } from "@/types"

/** Drops the em-dash qualifier and legal suffixes so "Bill Tait — State Farm"
    reads as BT rather than B—. */
function initials(name: string) {
  return name
    .replace(/\b(Inc|LLC|Co|Ltd|Corp)\b\.?/gi, "")
    .split(/\s+/)
    .filter((w) => /^[a-z]/i.test(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

function SponsorMark({ sponsor }: { sponsor: Sponsor }) {
  if (sponsor.logo) {
    /* alt="" — the heading beside it already names the sponsor. */
    return (
      <img
        src={sponsor.logo}
        alt=""
        loading="lazy"
        decoding="async"
        className="max-w-full max-h-full object-contain"
      />
    )
  }

  /* A monogram rather than the name set in type: the heading already carries
     the name, so repeating it here read as a duplicate rather than a mark. */
  return (
    <div
      className="w-14 h-14 rounded-lg bg-navy-deep flex items-center justify-center"
      aria-hidden="true"
    >
      <span className="text-gold font-bold text-lg tracking-tight">
        {initials(sponsor.name)}
      </span>
    </div>
  )
}

export function Sponsors() {
  return (
    <section id="sponsors" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        <SectionHeading
          eyebrow="Our Supporters"
          title="Thank You to Our Sponsors"
          description="Area 7 runs on the generosity of local businesses that invest in the next generation of business leaders."
          className="mb-14"
        />

        {/*
          Wide logo-plus-copy plaques rather than the square logo tiles used in
          Schools: the roster is a single sponsor today, and one lone square tile
          in a centered grid reads as a hole in the layout. A plaque fills the
          measure on its own, and the same markup wraps two-up at lg once more
          sponsors are added — so growing the list needs no layout work. The
          cards must NOT flex-grow, or a lone card would stretch edge to edge.
        */}
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap justify-center gap-5"
        >
          {SPONSORS.map((sponsor) => (
            <motion.li
              key={sponsor.id}
              variants={cardEntrance}
              className="surface rounded-2xl shadow-[var(--shadow-card)]
                         basis-full lg:basis-[calc(50%-0.625rem)] max-w-2xl
                         hover:shadow-[var(--shadow-lift)] hover:border-[rgba(0,42,92,0.18)]
                         transition-all duration-300"
            >
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center gap-6 sm:gap-7 p-7 sm:p-8 text-center sm:text-left"
              >
                {/* One box, two very different marks: a linear wordmark runs
                    about 7:1 and is constrained by width, while a stacked mark
                    is nearer 2:1 and is constrained by height. The box is sized
                    so neither is the one that suffers — object-contain letters
                    each into the same footprint, keeping the cards aligned. */}
                <div className="w-40 sm:w-44 h-20 shrink-0 flex items-center justify-center">
                  <SponsorMark sponsor={sponsor} />
                </div>
                <div>
                  <h3 className="font-bold text-navy-deep text-lg leading-snug">
                    {sponsor.name}
                  </h3>
                  <p className="font-body text-slate-600 text-sm mt-1.5 leading-relaxed">
                    {sponsor.blurb}
                  </p>
                  <span className="font-body block text-gold-ink text-xs font-semibold mt-3">
                    {sponsor.city} ↗
                  </span>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-body text-center text-slate-500 text-sm mt-12"
        >
          Interested in supporting Area 7?{" "}
          <a
            href="mailto:area7rep@fblatx.org"
            className="text-navy hover:text-navy-mid font-semibold transition-colors"
          >
            Get in touch
          </a>
          .
        </motion.p>

      </div>
    </section>
  )
}

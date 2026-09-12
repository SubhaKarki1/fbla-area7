"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { heroTextContainer, heroLine } from "@/lib/motion"
import { AnimatedCounter } from "@/components/shared/AnimatedCounter"
import { SCHOOL_COUNT } from "@/lib/data"

const STATS = [
  { value: SCHOOL_COUNT, suffix: "", label: "Member Schools" },
  { value: 400, suffix: "+", label: "Students" },
  { value: 3, suffix: "", label: "Annual Events" },
]

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#001840" }}
    >
      {/* Real photography — the fastest signal that a real organization is behind this. */}
      <Image
        src="/images/area7-conference-2025.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/*
        Layered scrim. The source photo is 1280px wide, which is modest for a
        full-bleed hero, so the navy wash and gradient do double duty: they hold
        text contrast and let the softness read as art direction rather than
        a low-resolution image.
      */}
      <div className="absolute inset-0 bg-navy-deep/[0.62]" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(100deg, #001840 0%, rgba(0,24,64,0.94) 34%, rgba(0,24,64,0.62) 62%, rgba(0,24,64,0.30) 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl w-full pt-28 pb-20">
        <motion.div
          variants={heroTextContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span variants={heroLine} className="eyebrow text-gold mb-6">
            FBLA Area 7 · North Texas
          </motion.span>

          <motion.h1
            variants={heroLine}
            className="text-white font-bold leading-[1.05] tracking-tight text-balance"
            style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.25rem)" }}
          >
            Shaping Tomorrow's{" "}
            <span className="text-gold">Business</span>{" "}
            Leaders
          </motion.h1>

          <motion.p
            variants={heroLine}
            className="font-body text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed mt-6"
          >
            Connecting {SCHOOL_COUNT} chapters across North Texas and celebrating the
            students who represent the future of business and leadership.
          </motion.p>

          <motion.div variants={heroLine} className="flex flex-col sm:flex-row gap-3 mt-9">
            <a
              href="#schools"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("schools")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy-deep
                         font-bold text-sm tracking-wide rounded-lg hover:bg-gold-light
                         transition-colors duration-200"
            >
              Explore Area 7
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center justify-center px-8 py-4 border border-white/25
                         text-white/85 font-semibold text-sm rounded-lg hover:bg-white/10
                         hover:border-white/40 transition-all duration-200"
            >
              Contact Us
            </a>
          </motion.div>

          <motion.dl
            variants={heroLine}
            className="flex flex-wrap items-baseline gap-x-12 gap-y-6 mt-14 pt-8 border-t border-white/12"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-3xl sm:text-4xl font-bold text-gold leading-none">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="font-body block text-white/50 text-sm mt-2">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { fadeUp, viewportOnce } from "@/lib/motion"

interface SectionHeadingProps {
  eyebrow: string
  title: React.ReactNode
  description?: string
  /** Dark sections invert the text ramp. */
  tone?: "light" | "dark"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = tone === "dark"

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`max-w-2xl ${className}`}
    >
      <span className={`eyebrow mb-5 ${isDark ? "text-gold" : "text-gold-ink"}`}>
        {eyebrow}
      </span>
      <h2
        className={`text-balance text-3xl sm:text-4xl lg:text-[2.75rem] font-bold ${
          isDark ? "text-white" : "text-navy-deep"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-body mt-4 text-lg leading-relaxed ${
            isDark ? "text-white/55" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}

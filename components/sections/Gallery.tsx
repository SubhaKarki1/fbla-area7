"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { staggerContainer, cardEntrance, viewportOnce } from "@/lib/motion"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { GALLERY_PHOTOS } from "@/lib/data"

/* Mosaic over a 3-column grid: a 2x2 feature tile, two stacked tiles beside it,
   then a full-width band. Four identical 16:9 tiles gave every photo equal
   weight and read as a contact sheet; this gives the section a focal point.
   These spans tile the grid exactly — no auto-placement holes. */
const TILE_SPANS = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-3 sm:row-span-1",
]

/* Each tile renders at a different width, so they need different `sizes`.
   A single shared value made the browser fetch a 640px file for the 816px
   feature tile and the 1232px band, which rendered visibly soft. The grid
   is capped by max-w-7xl, hence the fixed upper bounds. */
const TILE_SIZES = [
  "(max-width: 640px) 100vw, (max-width: 1320px) 58vw, 816px",
  "(max-width: 640px) 100vw, (max-width: 1320px) 29vw, 400px",
  "(max-width: 640px) 100vw, (max-width: 1320px) 29vw, 400px",
  "(max-width: 640px) 100vw, (max-width: 1320px) 88vw, 1232px",
]

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length)), [])
  const next = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % GALLERY_PHOTOS.length)), [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxIndex, closeLightbox, prev, next])

  return (
    <>
      <section id="gallery" className="py-24 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

          <SectionHeading
            eyebrow="Gallery"
            title="Highlights from Area 7"
            description="Celebrating our recent achievements and memorable moments."
            className="mb-14"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-3 sm:auto-rows-[220px] gap-4"
          >
            {GALLERY_PHOTOS.map((photo, i) => (
              <motion.button
                key={i}
                variants={cardEntrance}
                type="button"
                aria-label={`View photo: ${photo.alt}`}
                className={`relative overflow-hidden rounded-xl group cursor-pointer
                            aspect-video sm:aspect-auto ${TILE_SPANS[i] ?? "sm:col-span-1"}`}
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={TILE_SIZES[i] ?? "(max-width: 640px) 100vw, 33vw"}
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                flex items-end p-4">
                  <span className="font-body text-white text-sm font-medium text-left line-clamp-3">
                    {photo.caption}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
                onClick={closeLightbox}
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <img
                src={GALLERY_PHOTOS[lightboxIndex].src}
                alt={GALLERY_PHOTOS[lightboxIndex].alt}
                className="w-full h-auto rounded-lg max-h-[75vh] object-contain"
              />
              {GALLERY_PHOTOS[lightboxIndex].caption && (
                <div className="font-body mt-3 px-4 py-2 bg-navy/80 rounded text-white text-sm text-center">
                  {GALLERY_PHOTOS[lightboxIndex].caption}
                </div>
              )}
              {GALLERY_PHOTOS.length > 1 && (
                <>
                  <button
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all"
                    onClick={prev}
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all"
                    onClick={next}
                    aria-label="Next photo"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Schools } from "@/components/sections/Schools"
import { Gallery } from "@/components/sections/Gallery"
import { Events } from "@/components/sections/Events"
import { Leadership } from "@/components/sections/Leadership"
import { Sponsors } from "@/components/sections/Sponsors"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Clip horizontally: fadeRight's pre-entrance x-offset otherwise widens
          the page by ~12px on phones until each section animates in. */}
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <Schools />
        <Gallery />
        <Events />
        <Leadership />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

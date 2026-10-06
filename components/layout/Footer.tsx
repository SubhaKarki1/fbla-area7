import { SPONSORS } from "@/lib/data"

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Schools", href: "#schools" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Leadership", href: "#leadership" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
]

const EXTERNAL_LINKS = [
  { label: "Texas FBLA", href: "https://fblatx.org" },
  { label: "FBLA National", href: "https://fbla.org" },
  { label: "Competitive Events", href: "https://www.fbla.org/high-school/competitive-events/" },
]

export function Footer() {
  return (
    <footer style={{ background: "#001840" }} className="border-t border-white/8">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/design-mode/9ddded_5d2048108c854878bb2e5c309855a189~mv2(2).png"
                alt="FBLA Logo"
                className="h-9 w-9 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-base tracking-wide">FBLA Area 7</span>
                <span className="text-[11px] text-gold font-semibold tracking-[0.12em] uppercase">North Texas</span>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs">
              Developing tomorrow's business leaders through education, service, and progress.
            </p>
            {/* Social icons intentionally omitted until real account URLs exist —
                they previously all pointed at "#" and did nothing when clicked. */}
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/55 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* External links + Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Resources</h4>
            <div className="space-y-2 mb-5">
              {EXTERNAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/55 hover:text-white text-sm transition-colors"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
            <a
              href="mailto:area7rep@fblatx.org"
              className="text-gold hover:text-gold-light text-sm font-medium transition-colors"
            >
              area7rep@fblatx.org
            </a>
          </div>

        </div>

        {/* Bottom bar. The sponsor credit shares the existing rule rather than
            adding a second one, and reads from SPONSORS so the name and link
            stay in step with the Sponsors section. */}
        <div className="border-t border-white/8 pt-6">
          {SPONSORS.length > 0 && (
            <p className="font-body text-white/40 text-xs mb-5">
              Proudly sponsored by{" "}
              {SPONSORS.map((sponsor, i) => (
                <span key={sponsor.id}>
                  {/* Middot, not a comma: sponsor names can contain their own
                      punctuation ("Bill Tait — State Farm"), and a comma between
                      two gold links let the pair read as a single name. */}
                  {i > 0 && <span className="text-white/25"> · </span>}
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light font-semibold transition-colors"
                  >
                    {sponsor.name}
                  </a>
                </span>
              ))}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} FBLA Area 7 · North Texas. All rights reserved.
            </p>
            <p className="text-white/20 text-xs">
              Future Business Leaders of America
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

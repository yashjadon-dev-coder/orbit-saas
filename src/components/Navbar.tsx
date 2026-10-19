import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'

const links = ['Features', 'Pricing', 'About', 'Docs']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-exo font-bold text-xl tracking-widest text-foreground">
          ORBIT
          <span className="text-accent">.</span>
        </span>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-muted-fg hover:text-foreground transition-colors text-sm font-mono"
            >
              {l}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-exo font-semibold text-sm hover:bg-accent/90 transition-colors min-h-[44px]"
        >
          Get Started
        </a>

        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden p-2 text-muted-fg hover:text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {links.map(l => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-muted-fg hover:text-foreground transition-colors text-sm font-mono py-2"
                >
                  {l}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 rounded-lg bg-accent text-white font-exo font-semibold text-sm text-center min-h-[44px] flex items-center justify-center"
              >
                Get Started
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

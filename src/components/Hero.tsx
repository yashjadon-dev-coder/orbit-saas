import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight, Play } from '@phosphor-icons/react'

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] } },
})

const still = (): Variants => ({ hidden: {}, show: {} })

export default function Hero() {
  const reduced = useReducedMotion()
  const v = reduced ? still : fadeUp

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, #3B82F625 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.p variants={v(0)} className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-6">
          ▸ Next-Gen Infrastructure
        </motion.p>

        <motion.h1
          variants={v(0.1)}
          className="font-exo font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight mb-6 glow-text"
        >
          Ship at the{' '}
          <span className="text-accent">Speed of Light</span>
        </motion.h1>

        <motion.p
          variants={v(0.2)}
          className="font-mono text-muted-fg text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Orbit gives your team a unified platform to build, deploy, and scale
          products — with zero friction and enterprise-grade reliability.
        </motion.p>

        <motion.div variants={v(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-exo font-bold text-base hover:bg-accent/90 transition-all animate-glow-pulse min-h-[52px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
          >
            Start Free <ArrowRight size={20} weight="bold" aria-hidden="true" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-muted-fg font-exo font-semibold text-base hover:border-accent/50 hover:text-foreground transition-all min-h-[52px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
          >
            <Play size={18} aria-hidden="true" /> Watch Demo
          </a>
        </motion.div>

        <motion.p variants={v(0.4)} className="mt-8 font-mono text-xs text-muted-fg">
          No credit card required · 14-day free trial · Cancel anytime
        </motion.p>
      </motion.div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to top, #0B0B10, transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}

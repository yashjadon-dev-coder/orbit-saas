import { useRef, useEffect, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

const stats = [
  { value: 10000, suffix: '+', label: 'Teams Onboarded' },
  { value: 99.9, suffix: '%', label: 'Uptime SLA', decimal: 1 },
  { value: 4.9, suffix: '★', label: 'Avg. Rating', decimal: 1 },
]

function Counter({ value, suffix, decimal = 0 }: { value: number; suffix: string; decimal?: number }) {
  const [count, setCount] = useState(0)
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    if (reduced) { setCount(value); return }
    const duration = 1800
    const start = performance.now()
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * value).toFixed(decimal)))
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [inView, value, decimal, reduced])

  return (
    <span ref={ref} className="font-exo font-extrabold text-5xl md:text-6xl text-foreground">
      {decimal > 0 ? count.toFixed(decimal) : Math.round(count).toLocaleString()}
      <span className="text-accent">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 px-6 border-y border-border">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        {stats.map(s => (
          <div key={s.label} className="flex flex-col items-center gap-3">
            <Counter value={s.value} suffix={s.suffix} decimal={s.decimal} />
            <p className="font-mono text-sm text-muted-fg tracking-widest uppercase">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Lightning,
  ShieldCheck,
  ChartLineUp,
  GitBranch,
  CloudArrowUp,
  Lock,
} from '@phosphor-icons/react'

const features = [
  { Icon: Lightning, title: 'Instant Deploys', desc: 'Push to production in seconds with atomic deployments and automatic rollbacks.' },
  { Icon: ShieldCheck, title: 'Zero-Trust Security', desc: 'End-to-end encryption, SOC 2 Type II compliant, and fine-grained RBAC.' },
  { Icon: ChartLineUp, title: 'Real-Time Analytics', desc: 'Live dashboards, custom metrics, and alerting built into the platform.' },
  { Icon: GitBranch, title: 'GitOps Workflow', desc: 'Branch-based environments mirror your git topology automatically.' },
  { Icon: CloudArrowUp, title: 'Multi-Cloud Edge', desc: 'Deploy to 35+ regions globally with intelligent load balancing.' },
  { Icon: Lock, title: 'Secrets Management', desc: 'Encrypted vaults, automatic rotation, and audit trails for all secrets.' },
]

function FeatureCard({ Icon, title, desc, i }: { Icon: React.ElementType; title: string; desc: string; i: number }) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
      className="card-glass rounded-2xl p-7 flex flex-col gap-4 hover:border-accent/30 transition-all duration-300"
    >
      <span className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
        <Icon size={24} weight="duotone" aria-hidden="true" />
      </span>
      <h3 className="font-exo font-semibold text-lg text-foreground">{title}</h3>
      <p className="font-mono text-sm text-muted-fg leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">▸ Platform Features</p>
          <h2 className="font-exo font-bold text-4xl md:text-5xl text-foreground mb-4">
            Everything you need.<br />
            <span className="text-accent">Nothing you don't.</span>
          </h2>
          <p className="font-mono text-muted-fg text-base max-w-xl mx-auto">
            Orbit handles the infrastructure so your team can focus on what matters — building great products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ Icon, title, desc }, i) => (
            <FeatureCard key={title} Icon={Icon} title={title} desc={desc} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

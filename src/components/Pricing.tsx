import { Check } from '@phosphor-icons/react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    desc: 'Perfect for side projects and exploration.',
    cta: 'Start Free',
    ctaHref: '#',
    highlight: false,
    features: [
      '3 projects',
      '1 GB storage',
      'Community support',
      'Basic analytics',
      'Shared compute',
    ],
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    desc: 'For teams shipping at velocity.',
    cta: 'Start 14-Day Trial',
    ctaHref: '#',
    highlight: true,
    features: [
      'Unlimited projects',
      '100 GB storage',
      'Priority support',
      'Advanced analytics',
      'Dedicated compute',
      'GitOps + CI/CD',
      'Secrets vault',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large orgs with compliance needs.',
    cta: 'Contact Sales',
    ctaHref: '#',
    highlight: false,
    features: [
      'Everything in Pro',
      'SOC 2 Type II',
      'SSO / SAML',
      'SLA guarantee',
      'Dedicated CSM',
      'Custom contracts',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">▸ Pricing</p>
          <h2 className="font-exo font-bold text-4xl md:text-5xl text-foreground mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="font-mono text-muted-fg text-base max-w-xl mx-auto">
            No hidden fees. Pay for what you use. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 ${
                plan.highlight
                  ? 'bg-card border border-accent/50 glow-border relative'
                  : 'card-glass'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white font-mono text-xs tracking-widest">
                  MOST POPULAR
                </span>
              )}

              <div>
                <p className="font-mono text-muted-fg text-sm uppercase tracking-widest mb-1">{plan.name}</p>
                <div className="flex items-end gap-1">
                  <span className="font-exo font-extrabold text-4xl text-foreground">{plan.price}</span>
                  {plan.period && <span className="font-mono text-muted-fg text-sm mb-1">{plan.period}</span>}
                </div>
                <p className="font-mono text-muted-fg text-sm mt-2">{plan.desc}</p>
              </div>

              <ul className="flex flex-col gap-3">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 font-mono text-sm text-foreground">
                    <Check size={16} weight="bold" className="text-accent flex-shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`mt-auto w-full text-center px-6 py-3.5 rounded-xl font-exo font-bold text-sm min-h-[48px] flex items-center justify-center transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 ${
                  plan.highlight
                    ? 'bg-accent text-white hover:bg-accent/90'
                    : 'border border-border text-muted-fg hover:border-accent/50 hover:text-foreground'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

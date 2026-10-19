import { GithubLogo, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react'

const navCols = [
  { heading: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
  { heading: 'Developers', links: ['Docs', 'API Reference', 'CLI', 'Status'] },
  { heading: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <p className="font-exo font-bold text-xl tracking-widest text-foreground mb-3">
              ORBIT<span className="text-accent">.</span>
            </p>
            <p className="font-mono text-sm text-muted-fg leading-relaxed">
              The SaaS platform for teams who move at the speed of light.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://github.com" aria-label="GitHub" className="text-muted-fg hover:text-foreground transition-colors">
                <GithubLogo size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-muted-fg hover:text-foreground transition-colors">
                <TwitterLogo size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-muted-fg hover:text-foreground transition-colors">
                <LinkedinLogo size={20} />
              </a>
            </div>
          </div>

          {navCols.map(col => (
            <div key={col.heading}>
              <p className="font-mono text-xs text-muted-fg tracking-widest uppercase mb-4">{col.heading}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="font-mono text-sm text-muted-fg hover:text-foreground transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-fg">© 2026 Orbit Technologies, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-mono text-xs text-muted-fg hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="font-mono text-xs text-muted-fg hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="font-mono text-xs text-muted-fg hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

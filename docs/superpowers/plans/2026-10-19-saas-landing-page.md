# SaaS Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a premium dark-themed SaaS landing page with glowing hero, animations, and Vercel deployment.

**Architecture:** Vite + React SPA with Tailwind CSS utility classes and Framer Motion animations. Single `App.tsx` orchestrates section components. Design tokens live in `tailwind.config.js`.

**Tech Stack:** React 18, Vite 5, Tailwind CSS 3, Framer Motion 11, Phosphor Icons, Google Fonts (Exo + Roboto Mono)

**Spec:** Design system — HUD/Sci-Fi FUI, background `#0B0B10`, accent `#3B82F6`, glow effects, scanning animations.

## Global Constraints

- Dark background `#0B0B10` throughout; no white backgrounds
- Accent blue `#3B82F6` for CTAs and glow
- Heading font: Exo; Body font: Roboto Mono
- prefers-reduced-motion must disable animations
- All interactive elements ≥ 44px touch target
- No emoji as icons — Phosphor icons only
- Responsive: 375px / 768px / 1024px / 1440px

## Review Focus

- Glow effect performance on low-end GPUs (CSS box-shadow, not canvas)
- Reduced-motion: all Framer Motion variants must have a still fallback
- Contrast: `#94A3B8` on `#0B0B10` must be ≥ 4.5:1
- CTA button focus ring must be visible in keyboard nav
- Mobile hero text must not overflow at 375px

---

### Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`

- [ ] **Step 1:** Run `npm create vite@latest saas-landing -- --template react-ts` in `C:\Users\yashj`
- [ ] **Step 2:** Install deps: `npm install framer-motion @phosphor-icons/react`; `npm install -D tailwindcss postcss autoprefixer`; `npx tailwindcss init -p`
- [ ] **Step 3:** Configure `tailwind.config.js` with custom colors, fonts, and `content` glob
- [ ] **Step 4:** Add Google Fonts import and CSS variables to `src/index.css`
- [ ] **Step 5:** Run `npm run dev` — verify blank dark page loads at localhost:5173

### Task 2: Design Tokens in Tailwind

**Files:**
- Modify: `tailwind.config.js`

- [ ] **Step 1:** Extend theme with color tokens (background `#0B0B10`, card `#1E1E23`, accent `#3B82F6`, muted `#94A3B8`, border `#1E293B`)
- [ ] **Step 2:** Add fontFamily: `{ exo: ['Exo', 'sans-serif'], mono: ['Roboto Mono', 'monospace'] }`
- [ ] **Step 3:** Add custom keyframes: `glow-pulse`, `scan-line`, `fade-up`
- [ ] **Step 4:** Verify `npx tailwindcss --content "src/**/*" --output /dev/null` exits 0

### Task 3: Hero Section

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1:** Build full-screen hero with glowing headline, sub-headline, two CTA buttons
- [ ] **Step 2:** Add radial gradient glow behind headline using `bg-[radial-gradient(...)]`
- [ ] **Step 3:** Framer Motion: `fadeUp` variant for headline (y: 40→0, opacity 0→1, duration 0.8)
- [ ] **Step 4:** Add `prefers-reduced-motion` guard using `useReducedMotion()` hook from Framer Motion
- [ ] **Step 5:** Verify at 375px — text does not overflow

### Task 4: Navbar

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1:** Sticky transparent navbar with logo (text "ORBIT") + nav links + CTA button
- [ ] **Step 2:** Scroll-based background: transparent → `#0B0B10/90 backdrop-blur` after 80px
- [ ] **Step 3:** Mobile hamburger menu (Phosphor `List` icon) with slide-down drawer

### Task 5: Features Section

**Files:**
- Create: `src/components/Features.tsx`

- [ ] **Step 1:** 3-column grid of feature cards (glassmorphism: `bg-white/5 backdrop-blur border border-white/10`)
- [ ] **Step 2:** Each card: Phosphor icon (accent blue), title, description
- [ ] **Step 3:** Framer Motion stagger: cards animate in with 0.1s delay each on scroll (InView)

### Task 6: Social Proof / Stats

**Files:**
- Create: `src/components/Stats.tsx`

- [ ] **Step 1:** Three animated counters (e.g. 10K+ users, 99.9% uptime, 4.9★ rating)
- [ ] **Step 2:** Use Framer Motion `useInView` + `useMotionValue` + `useTransform` for count-up

### Task 7: Pricing Section

**Files:**
- Create: `src/components/Pricing.tsx`

- [ ] **Step 1:** Three pricing cards (Free / Pro / Enterprise) — Pro card highlighted with accent border + glow
- [ ] **Step 2:** Feature list with Phosphor `Check` icons in accent blue

### Task 8: Footer

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1:** Logo, nav columns, social icons (Phosphor), copyright line
- [ ] **Step 2:** Top border with `border-t border-white/10`

### Task 9: Assemble & Polish

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1:** Import and render all sections in order: Navbar → Hero → Features → Stats → Pricing → Footer
- [ ] **Step 2:** Add global scanning line animation overlay (pseudo-element via CSS)
- [ ] **Step 3:** `npm run build` — verify 0 errors, dist/ generated

### Task 10: Deploy

- [ ] **Step 1:** Create GitHub repo `saas-landing` via github-vercel MCP
- [ ] **Step 2:** Push all files via github-vercel MCP
- [ ] **Step 3:** Create Vercel project linked to repo (framework: vite)
- [ ] **Step 4:** Verify deployment URL is live and page loads

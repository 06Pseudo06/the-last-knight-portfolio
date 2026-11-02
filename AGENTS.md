# AGENTS.md — Instructions & Rules for AI Coding Agents

## 1. Project Overview & Identity

- **Project:** The Last Knight
- **Core Identity:** A cinematic, interactive portfolio for a senior full-stack developer.
- **Narrative Theme:** A stylized fantasy knight in intricate engraved plate armor amidst stormy open ocean waters, heavy clouds, drifting mist, and wind. Represents resilience, discipline, curiosity, and determination. A small, warm crimson-golden ray of light breaks through the storm.

### Strict Visual & Design Restrictions:
- **NO castles.**
- **NO medieval kingdoms, towns, or fantasy villages.**
- **NO generic gaming interfaces or retro pixel art.**
- **NO excessive neon or purple/magenta gradients.**
- **NO overcrowded visual effects.**
- Color Palette:
  - Background: Obsidian Black (`#090A0C`, `#0D0F12`)
  - Surfaces: Charcoal Slate (`#17191D`, `#1F2228`)
  - Typography: Ivory (`#D8D2C7`, `#EDE8DF`)
  - Metallic Accents: Brushed Silver (`#AEB3BB`, `#C8CDD5`)
  - Highlights: Muted/Warm Crimson (`#71333A`, `#A34D55`, `#B65A61`) and subtle golden light (`#D4AF37`)

---

## 2. Approved Technology Stack

- **Framework:** Next.js 15 App Router
- **Runtime / UI:** React 19, TypeScript (Strict Mode)
- **Styling:** Tailwind CSS 3 with custom CSS tokens
- **Typography:** Next.js Font Optimization (`next/font/google`: Cormorant Garamond, DM Mono, Manrope)
- **Animation Orchestration:** GSAP, `@gsap/react` (`useGSAP`), GSAP ScrollTrigger
- **Smooth Scrolling:** Lenis (`lenis/react`)
- **Creative Graphics & 3D:** Three.js, Canvas 2D / WebGL shaders (no heavy physics engines)
- **Icons:** `lucide-react`
- **Deployment Target:** GitHub & Vercel

*Do NOT introduce unnecessary dependencies or databases without explicit engineering justification and user confirmation.*

---

## 3. Engineering & Coding Standards

1. **Server vs. Client Components:**
   - Default to React Server Components.
   - Use Client Components (`"use client"`) ONLY where interactivity, React hooks, DOM manipulation, or canvas contexts are required.
2. **Animation Context & Cleanup:**
   - Every GSAP animation, timeline, or ScrollTrigger must be properly scoped and killed on component unmount using `useGSAP` or cleanup functions in `useEffect`.
   - Never leave hanging event listeners or requestAnimationFrame loops.
3. **Scroll Hijacking Prohibited:**
   - Do NOT override or hijack native scroll physics. Lenis provides smooth inertial scrolling while preserving standard browser accessibility and keyboard navigation.
4. **Accessibility & Reduced Motion:**
   - Always respect `prefers-reduced-motion: reduce`.
   - Provide an immediate `Skip Intro` control for cinematic sequences.
   - Maintain keyboard navigable landmarks and semantic HTML (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`).
5. **No Monolithic Components:**
   - Keep files focused and modular. Separate UI presentation from animation timelines and canvas rendering.
6. **No Placeholder Implementations:**
   - Never write mock/placeholder code that pretends to be a complete feature.

---

## 4. Git & Release Workflow

1. Always inspect `git status` before making changes.
2. Never overwrite uncommitted user modifications.
3. Maintain `main` as the stable branch.
4. Keep commit messages structured and descriptive (Conventional Commits):
   - `chore: establish portfolio engineering foundation`
   - `feat: implement interactive chapter rail navigation`
   - `fix: resolve canvas DPR scaling on retina displays`
   - `docs: update cinematic intro implementation plan`
5. Do not force push, rebase destructively, or rewrite remote history.
6. Verify production build (`npm run build`) before pushing any commit.

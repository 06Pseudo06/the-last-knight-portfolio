# The Last Knight — Project Architecture

## 1. Architectural Philosophy

The Last Knight is engineered as a high-performance, cinematic digital portfolio experience. It merges editorial layout design with immersive WebGL graphics and timeline-based orchestration.

The system adheres strictly to the following principles:
- **Server Components by Default:** Next.js Server Components are utilized for all static copy, semantic layouts, and metadata to ensure instant initial server rendering, optimal SEO, and zero client JS overhead for static markup.
- **Client Components Strictly Where Interactive:** Only components requiring React state, GSAP animation hooks (`useGSAP`), Three.js canvases, or event listeners are designated `"use client"`.
- **Decoupled Animation Engine:** Visual timelines are separated from React rendering lifecycles. Animation logic resides in designated animation modules and hooks with strict context cleanup to prevent memory leaks.
- **Progressive Enhancement & Graceful Degradation:** The portfolio functions seamlessly without WebGL, respecting `prefers-reduced-motion` and providing lightweight fallbacks on lower-powered devices.

---

## 2. Directory Hierarchy

```
src/
├── app/
│   ├── globals.css                # Base Tailwind styles, custom typography tokens, grain overlays
│   ├── layout.tsx                 # Root layout with Next.js Google font optimization & global metadata
│   └── page.tsx                   # Main narrative page (composes Hero, Chapters, and Canvas scenes)
├── components/
│   ├── navigation/
│   │   ├── site-header.tsx        # Top navigation header with wordmark, chapter links & menu trigger
│   │   ├── chapter-rail.tsx       # Vertical scroll indicator rail with active chapter tracking
│   │   └── menu-overlay.tsx       # Fullscreen chapter navigation overlay
│   ├── hero/
│   │   ├── hero-scene.tsx         # Orchestrated hero container combining visual assets and overlays
│   │   ├── hero-content.tsx       # Editorial headline, eyebrow, description, and action CTA buttons
│   │   └── hero-footer.tsx        # Chapter counter, animated scroll cue, and archive coordinates
│   ├── chapters/
│   │   └── origin-section.tsx     # Chapter 01: "The Origin - Behind the Armour"
│   └── ui/
│       ├── button-primary.tsx     # Reusable bevelled metallic CTA button with arrow icon
│       ├── status-badge.tsx       # Archive initialization terminal status tag
│       └── sword-crest.tsx        # SVG sword and circular halo insignia
├── animations/
│   ├── intro/
│   │   └── intro-timeline.ts      # GSAP timeline orchestrating the visor awakening and hero reveal
│   ├── scroll/
│   │   └── lenis-provider.tsx     # Smooth scroll coordinator wrapping the application
│   └── transitions/
│       └── chapter-transitions.ts # ScrollTrigger animations for cross-chapter storytelling
├── scenes/
│   ├── code-eye/
│   │   ├── code-eye-canvas.tsx    # Canvas/WebGL component rendering the generative typography eye
│   │   └── shaders/               # GLSL shaders for ocular distortion and pupil chromatic dispersion
│   └── ocean-environment/
│       └── ocean-canvas.tsx       # Three.js stormy ocean, mist, and dynamic atmospheric lighting
├── hooks/
│   ├── use-lenis.ts               # Hook accessing the active Lenis smooth scroll instance
│   ├── use-reduced-motion.ts      # Media query hook for accessibility preference
│   └── use-window-size.ts         # Viewport dimensions tracker with debounce
├── lib/
│   ├── constants.ts               # Chapter metadata, social links, contact coordinates
│   └── gsap-config.ts             # Global GSAP registration, ScrollTrigger setup, and easing curves
└── types/
    ├── navigation.ts              # Chapter data models and header navigation interfaces
    └── scene.ts                   # WebGL canvas states and animation parameter contracts
```

---

## 3. Component Responsibilities & Contracts

### 3.1 Layout & Navigation
- **`SiteHeader` (`src/components/navigation/site-header.tsx`):**
  - Renders the brand sword crest, wordmark `"THE LAST KNIGHT"`, desktop chapter links (`01 Origin`, `02 Armoury`, `03 Forge`, `04 Quest`, `05 Alliance`), and the mobile/drawer menu button.
  - Sticky/fixed positioning with subtle backdrop blur and obsidian border separator.
- **`ChapterRail` (`src/components/navigation/chapter-rail.tsx`):**
  - Displays the right-hand vertical progress rail.
  - Reflects dynamic scroll position with a crimson progress indicator and active chapter pip.
- **`MenuOverlay` (`src/components/navigation/menu-overlay.tsx`):**
  - Full-screen drawer accessible via keyboard and click, providing direct jump links to all narrative sections.

### 3.2 Hero Narrative Unit
- **`HeroScene` (`src/components/hero/hero-scene.tsx`):**
  - Host container managing z-indexes: background graphics/canvas, cinematic vignette gradients, SVG fractal grain texture, and typography layers.
- **`HeroContent` (`src/components/hero/hero-content.tsx`):**
  - Renders the high-impact editorial headline:
    - `"FORGED"` (Ivory)
    - `"THROUGH"` (Ivory)
    - `"CURIOSITY."` (Metallic crimson gradient text with subtle inner glow)
  - Chamfered primary action button `"EXPLORE MY WORK ↗"` and understated link `"VIEW PROJECTS"`.
- **`HeroFooter` (`src/components/hero/hero-footer.tsx`):**
  - Displays chapter index (`00 / 06 THE AWAKENING`), animated scroll cue with pill mouse icon, and archive registry coordinate.

### 3.3 Chapters Architecture
- Each chapter represents a portfolio domain:
  - **01 Origin:** Developer biography, philosophy, and engineering mindset.
  - **02 Armoury:** Core technical stack, languages, frameworks, architecture, and toolset.
  - **03 Forge:** Flagship full-stack case studies with interactive architecture breakdowns.
  - **04 Quest:** Timeline of experience, career milestones, challenges conquered.
  - **05 Alliance:** Contact terminal, collaboration availability, and cryptographic links.

---

## 4. Animation Architecture & Lifecycle

### 4.1 GSAP Orchestration
- GSAP is the master timeline orchestrator.
- All timeline hooks use `@gsap/react`'s `useGSAP` with scoping and auto-cleanup.
- Timelines are registered strictly inside `useEffect` or `useGSAP` to guarantee execution occurs only in client browser environments without SSR conflicts.

### 4.2 Smooth Scrolling (Lenis)
- Smooth scrolling is managed via `lenis/react` or a global `LenisProvider`.
- Lenis scroll updates feed into `ScrollTrigger.update()` on every tick to maintain pixel-perfect synchronization between DOM transforms and scroll triggers.
- Scroll hijacking is strictly prohibited: native keyboard navigation, spacebar scrolling, and mousewheel physics remain natural and responsive.

### 4.3 Reduced Motion Standard
- All animation modules consult `prefers-reduced-motion`.
- If reduced motion is requested by the user, transitions resolve immediately (`duration: 0.01`), canvas particle counts drop to static ambient states, and parallax transforms are disabled.

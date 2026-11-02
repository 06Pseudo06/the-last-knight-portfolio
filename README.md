# The Last Knight — Cinematic Interactive Portfolio

A cinematic, interactive portfolio for a full-stack developer, merging editorial typography, atmospheric storytelling, and high-performance WebGL graphics.

---

## 1. Project Overview

**The Last Knight** embodies discipline, curiosity, and determination. The visual identity is anchored in:
- Obsidian black, deep charcoal, ivory typography, brushed metallic silver, and restrained crimson/warm golden accents.
- A fantasy knight clad in engraved steel plate armor standing tall amidst a stormy open ocean, wind, waves, and drifting mist.
- A ray of warm dawn light piercing through the tempest.
- Strictly curated aesthetics: **No** medieval castles or fantasy villages, **no** generic gaming interfaces, and **no** neon purple gradients.

---

## 2. Technology Stack

- **Core Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Components by default)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with custom design tokens
- **Typography:** Next.js Font Optimization (`next/font/google`: Cormorant Garamond, DM Mono, Manrope)
- **Animation Orchestration:** [GSAP 3](https://greensock.com/gsap/) & [@gsap/react](https://greensock.com/react/)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/) (respects native keyboard and reduced motion)
- **Creative 3D / WebGL:** [Three.js](https://threejs.org/) & Custom Canvas Shaders
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 3. Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) version `20.9.0` or higher (Node 22 LTS or Node 24 recommended).
- [pnpm](https://pnpm.io/) or `npm`.

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/06Pseudo06/the-last-knight-portfolio.git
cd the-last-knight-portfolio
pnpm install
```

### Development Server
Run the local development server:

```bash
pnpm run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 4. Available Commands

| Command | Action |
|---|---|
| `pnpm dev` | Starts local Next.js development server at `localhost:3000` |
| `pnpm build` | Compiles production-ready bundle with type-checking and optimization |
| `pnpm start` | Launches optimized production server |
| `pnpm lint` | Runs ESLint analysis across TypeScript and React files |

---

## 5. Architectural Structure

```
the-last-knight-portfolio/
├── docs/
│   ├── PROJECT_ARCHITECTURE.md     # In-depth architectural philosophy & components
│   └── CINEMATIC_INTRO_PLAN.md     # Technical specification for code-eye intro
├── public/
│   └── images/
│       └── knight-hero.jpg         # Hero visual asset
├── src/
│   ├── animations/                 # GSAP timeline controllers & Lenis smooth scroll
│   ├── app/                        # Next.js 15 App Router (layout, page, globals)
│   ├── components/                 # Modular React components (navigation, hero, chapters, ui)
│   ├── hooks/                      # Custom React hooks (reduced-motion, window size)
│   ├── lib/                        # Design tokens, site metadata, and GSAP config
│   ├── scenes/                     # Canvas / Three.js scene definitions & shaders
│   └── types/                      # TypeScript definitions & contracts
├── Visual ref/                     # Master art-direction references
├── AGENTS.md                       # Engineering mandates and agent rules
└── README.md
```

---

## 6. Deployment

The project is optimized for deployment on [Vercel](https://vercel.com):

1. Connect the GitHub repository `06Pseudo06/the-last-knight-portfolio` to Vercel.
2. Ensure the framework preset is set to **Next.js**.
3. Build command: `npm run build` or `pnpm build`.
4. Output directory: default (`.next`).
5. Deploy. Zero custom environment variables required for the core portfolio.

---

## 7. License

Private & proprietary digital archive. Designed and forged for personal portfolio representation.

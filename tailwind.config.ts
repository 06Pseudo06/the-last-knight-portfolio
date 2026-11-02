import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#090A0C",
          deep: "#050608",
          surface: "#0D0F12",
          card: "#121418",
        },
        charcoal: {
          DEFAULT: "#17191D",
          muted: "#1F2228",
          border: "#292C33",
        },
        ivory: {
          DEFAULT: "#D8D2C7",
          bright: "#EDE8DF",
          muted: "#A9A39A",
        },
        crimson: {
          DEFAULT: "#71333A",
          bright: "#A34D55",
          accent: "#B65A61",
          dark: "#4E2026",
        },
        silver: {
          DEFAULT: "#AEB3BB",
          bright: "#C8CDD5",
          dark: "#686E78",
        },
        gold: {
          DEFAULT: "#D4AF37",
          ember: "#C68E35",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest: "0.25em",
        tightest: "-0.055em",
      },
      boxShadow: {
        "crimson-glow": "0 0 25px rgba(163, 77, 85, 0.35)",
        "ivory-glow": "0 0 20px rgba(216, 210, 199, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;

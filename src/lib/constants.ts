import { Chapter } from "@/types/navigation";

export const SITE_CONFIG = {
  name: "The Last Knight",
  title: "The Last Knight — Full-Stack Developer",
  role: "Full-Stack Developer",
  tagline: "Forged Through Curiosity",
  description:
    "A digital archive of resilient software engineering, creative graphics, and immersive experiences.",
  archiveId: "ARCHIVE No. 001 — EST. 2026",
  coordinates: "LAT 54° 35' N / LON 03° 05' W",
};

export const CHAPTERS: Chapter[] = [
  {
    number: "01",
    id: "origin",
    label: "Origin",
    title: "Behind the Armour",
    subtitle: "Curiosity is where it begins.",
    href: "#origin",
  },
  {
    number: "02",
    id: "armoury",
    label: "Armoury",
    title: "Arsenal & Craft",
    subtitle: "Engineered tools and architectural discipline.",
    href: "#armoury",
  },
  {
    number: "03",
    id: "forge",
    label: "Forge",
    title: "Selected Works",
    subtitle: "High-impact applications forged from ideas.",
    href: "#forge",
  },
  {
    number: "04",
    id: "quest",
    label: "Quest",
    title: "Expedition Timeline",
    subtitle: "Milestones, challenges, and continuous evolution.",
    href: "#quest",
  },
  {
    number: "05",
    id: "alliance",
    label: "Alliance",
    title: "Call to Arms",
    subtitle: "Collaborate, build, and deploy together.",
    href: "#alliance",
  },
];

export const DESIGN_TOKENS = {
  colors: {
    obsidian: "#090A0C",
    obsidianDeep: "#050608",
    obsidianSurface: "#0D0F12",
    charcoal: "#17191D",
    charcoalMuted: "#1F2228",
    charcoalBorder: "#292C33",
    ivory: "#D8D2C7",
    ivoryBright: "#EDE8DF",
    ivoryMuted: "#A9A39A",
    crimson: "#71333A",
    crimsonBright: "#A34D55",
    crimsonAccent: "#B65A61",
    silver: "#AEB3BB",
    silverBright: "#C8CDD5",
    goldHighlight: "#D4AF37",
  },
};

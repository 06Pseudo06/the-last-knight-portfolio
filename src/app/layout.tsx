import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { LenisProvider } from "@/animations/scroll/lenis-provider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  metadataBase: new URL("https://thelastknight.dev"),
  keywords: [
    "Full-Stack Developer",
    "Creative Developer",
    "WebGL",
    "Next.js",
    "React",
    "TypeScript",
    "Three.js",
    "GSAP",
    "Editorial Design",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    title: SITE_CONFIG.title,
    description: "Forged through curiosity.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmMono.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="bg-obsidian text-ivory font-sans antialiased selection:bg-crimson/30 selection:text-white min-h-screen overflow-x-hidden">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

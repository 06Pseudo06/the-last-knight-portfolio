"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SiteHeader } from "@/components/navigation/site-header";
import { ChapterRail } from "@/components/navigation/chapter-rail";
import { MenuOverlay } from "@/components/navigation/menu-overlay";
import { HeroFooter } from "@/components/hero/hero-footer";
import { ButtonPrimary } from "@/components/ui/button-primary";
import { StatusBadge } from "@/components/ui/status-badge";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      {/* Background Visual Asset & Vignette Layers */}
      <div className="hero-art" aria-hidden="true">
        <Image
          src="/images/knight-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
      </div>
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      {/* Header Navigation */}
      <SiteHeader
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
      />

      {/* Narrative Status Pill */}
      <div className="archive-status">
        <StatusBadge status="INITIALIZING THE ARCHIVE" isReady={true} />
      </div>

      {/* Editorial Headline & Narrative Copy */}
      <div className="hero-copy">
        <p className="eyebrow">
          <span /> FULL-STACK DEVELOPER
        </p>
        <h1 id="hero-title">
          FORGED
          <br />
          THROUGH
          <br />
          <em>CURIOSITY.</em>
        </h1>
        <p className="hero-description">
          I engineer complete digital experiences — from idea to architecture,
          code to deployment.
        </p>
        <div className="hero-actions">
          <ButtonPrimary href="#origin">
            EXPLORE MY WORK
          </ButtonPrimary>
          <a className="button-text" href="#forge">
            VIEW PROJECTS
          </a>
        </div>
      </div>

      {/* Chapter Progress Rail */}
      <ChapterRail progress={progress} activeChapter={0} />

      {/* Hero Footer */}
      <HeroFooter
        currentChapter="00"
        totalChapters="06"
        chapterTitle="THE AWAKENING"
      />

      {/* Navigation Menu Overlay */}
      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </section>
  );
}

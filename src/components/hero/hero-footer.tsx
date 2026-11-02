"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface HeroFooterProps {
  currentChapter?: string;
  totalChapters?: string;
  chapterTitle?: string;
}

export function HeroFooter({
  currentChapter = "00",
  totalChapters = "06",
  chapterTitle = "THE AWAKENING",
}: HeroFooterProps) {
  return (
    <footer className="hero-footer" aria-label="Hero footer navigation">
      <div className="chapter-label">
        <span>{`${currentChapter} / ${totalChapters}`}</span>
        <strong>{chapterTitle}</strong>
      </div>

      <a
        href="#origin"
        className="scroll-cue group"
        aria-label="Scroll to begin chapter 01"
      >
        <div className="scroll-mouse-pill">
          <div className="scroll-wheel-dot" />
        </div>
        <span className="group-hover:text-white transition-colors">SCROLL TO BEGIN</span>
        <ArrowDown
          size={14}
          strokeWidth={1.4}
          className="transition-transform group-hover:translate-y-1 text-crimson"
        />
      </a>

      <span className="footer-coordinate select-none">
        {SITE_CONFIG.archiveId}
      </span>
    </footer>
  );
}

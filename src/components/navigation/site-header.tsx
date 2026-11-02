"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { CHAPTERS, SITE_CONFIG } from "@/lib/constants";
import { SwordCrest } from "@/components/ui/sword-crest";

interface SiteHeaderProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
}

export function SiteHeader({ menuOpen, onToggleMenu }: SiteHeaderProps) {
  return (
    <header className="site-header" role="banner">
      <Link
        href="#top"
        className="wordmark group flex items-center gap-3 text-ivory/90 hover:text-white transition-colors select-none"
        aria-label={`${SITE_CONFIG.name} home`}
      >
        <SwordCrest size={22} className="text-ivory transition-transform duration-300 group-hover:scale-105" />
        <span className="font-mono text-[11px] font-medium tracking-[0.24em] uppercase">
          {SITE_CONFIG.name}
        </span>
        <span className="hidden sm:inline-block w-8 h-[1px] bg-ivory/25" />
      </Link>

      <nav className="desktop-nav" aria-label="Main narrative navigation">
        {CHAPTERS.map((chapter) => (
          <a
            key={chapter.number}
            href={chapter.href}
            className="group flex items-center gap-2 font-serif text-[13px] tracking-wide text-ivory/70 hover:text-white transition-colors"
          >
            <span className="font-mono text-[10px] text-crimson group-hover:text-crimson-bright transition-colors">
              {chapter.number}
            </span>
            <span>{chapter.label}</span>
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="menu-button"
        onClick={onToggleMenu}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <span>{menuOpen ? "CLOSE" : "MENU"}</span>
        {menuOpen ? <X size={14} /> : <Menu size={14} />}
      </button>
    </header>
  );
}

"use client";

import React, { useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { CHAPTERS, SITE_CONFIG } from "@/lib/constants";
import { SwordCrest } from "@/components/ui/sword-crest";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  // Lock body scroll when overlay is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`menu-overlay ${isOpen ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation drawer"
    >
      <div className="absolute top-6 right-6 sm:top-9 sm:right-12 z-20">
        <button
          type="button"
          onClick={onClose}
          className="menu-button"
          aria-label="Close menu"
        >
          <span>CLOSE</span>
          <X size={14} />
        </button>
      </div>

      <div className="menu-overlay-inner flex flex-col justify-between py-12">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <SwordCrest size={20} className="text-ivory/60" />
            <p className="eyebrow text-ivory/60">
              <span className="w-8 h-[1px] bg-ivory/20 inline-block" />
              CHOOSE YOUR CHAPTER
            </p>
          </div>

          <nav className="flex flex-col" aria-label="Chapter overlay list">
            {CHAPTERS.map((chapter) => (
              <a
                key={chapter.number}
                href={chapter.href}
                onClick={onClose}
                className="group grid grid-cols-[48px_1fr_auto] items-center py-5 sm:py-6 border-b border-ivory/15 transition-all duration-300 hover:pl-3 hover:border-crimson/50"
              >
                <span className="font-mono text-xs sm:text-sm text-crimson group-hover:text-crimson-bright transition-colors">
                  {chapter.number}
                </span>
                <span className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory group-hover:text-white transition-colors">
                  {chapter.label}
                </span>
                <ArrowUpRight
                  size={24}
                  className="text-ivory/30 group-hover:text-crimson-bright transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-ivory/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-ivory/50 font-mono text-[10px] tracking-widest uppercase gap-4">
          <span>{SITE_CONFIG.archiveId}</span>
          <span>{SITE_CONFIG.coordinates}</span>
        </div>
      </div>
    </div>
  );
}

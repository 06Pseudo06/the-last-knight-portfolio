"use client";

import React from "react";

interface ChapterRailProps {
  progress: number;
  activeChapter?: number;
}

const RAIL_STEPS = ["00", "01", "02", "03", "04", "05"];

export function ChapterRail({ progress, activeChapter = 0 }: ChapterRailProps) {
  return (
    <aside
      className="chapter-rail hidden md:flex"
      aria-hidden="true"
      aria-label="Chapter progress rail"
    >
      <div className="rail-line">
        <span
          className="rail-progress"
          style={{ height: `${Math.min(100, Math.max(progress, 4))}%` }}
        />
      </div>

      {RAIL_STEPS.map((step, index) => {
        const isActive = index === activeChapter;
        return (
          <div
            key={step}
            className={`relative flex items-center justify-center transition-colors duration-300 ${
              isActive ? "text-ivory font-semibold" : "text-ivory/40"
            }`}
          >
            {isActive && (
              <span
                className="absolute -left-[14px] w-2 h-2 rounded-full bg-crimson shadow-[0_0_12px_#A34D55]"
                aria-hidden="true"
              />
            )}
            <span className="font-mono text-[10px] tracking-widest">{step}</span>
          </div>
        );
      })}
    </aside>
  );
}

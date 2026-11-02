import React from "react";

interface SwordCrestProps {
  className?: string;
  size?: number;
}

export function SwordCrest({ className = "", size = 28 }: SwordCrestProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      {/* Central circular aura halo */}
      <circle
        cx="16"
        cy="12"
        r="7.5"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="1.5 1.5"
        className="opacity-70"
      />
      <circle
        cx="16"
        cy="12"
        r="5.5"
        stroke="currentColor"
        strokeWidth="0.6"
        className="opacity-40"
      />

      {/* Vertical sword blade */}
      <line
        x1="16"
        y1="2"
        x2="16"
        y2="30"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Diamond tip point at bottom */}
      <polygon
        points="16,31 14.5,28 17.5,28"
        fill="currentColor"
      />

      {/* Horizontal crossguard */}
      <line
        x1="8"
        y1="12"
        x2="24"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Crossguard terminal quillons */}
      <line
        x1="8"
        y1="10.5"
        x2="8"
        y2="13.5"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="24"
        y1="10.5"
        x2="24"
        y2="13.5"
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* Pommel terminal circle */}
      <circle cx="16" cy="3.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

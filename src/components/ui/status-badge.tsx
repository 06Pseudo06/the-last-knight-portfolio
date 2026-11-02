import React from "react";

interface StatusBadgeProps {
  status?: string;
  isReady?: boolean;
  className?: string;
}

export function StatusBadge({
  status = "INITIALIZING THE ARCHIVE...",
  isReady = true,
  className = "",
}: StatusBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-ivory/80 uppercase select-none ${className}`}
    >
      <span className="text-crimson font-bold">&gt;</span>
      <span>{status}</span>
      {isReady && <span className="text-crimson font-bold ml-1">✓</span>}
    </div>
  );
}

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonPrimaryProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function ButtonPrimary({
  children,
  href,
  className = "",
  ...props
}: ButtonPrimaryProps) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-between gap-4 px-6 py-3 font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-obsidian bg-gradient-to-b from-[#EDE8DF] via-[#D8D2C7] to-[#C2BBB0] border border-ivory/60 transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_24px_rgba(216,210,199,0.35)] active:scale-[0.98] ${className}`}
      style={{
        clipPath:
          "polygon(9px 0%, calc(100% - 9px) 0%, 100% 9px, 100% calc(100% - 9px), calc(100% - 9px) 100%, 9px 100%, 0% calc(100% - 9px), 0% 9px)",
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <ArrowUpRight
        size={15}
        strokeWidth={1.8}
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

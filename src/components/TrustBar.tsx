"use client";

import { ShieldCheck, Lock, FileCheck, Building2 } from "lucide-react";
import AnimateIn from "./AnimateIn";

const badges = [
  { icon: ShieldCheck, label: "SOC 2 Type II" },
  { icon: Lock, label: "ISO 27001" },
  { icon: FileCheck, label: "FedRAMP Authorized" },
  { icon: Building2, label: "GDPR Compliant" },
];

const logos = [
  "GOLDMAN SACHS",
  "NORTHROP GRUMMAN",
  "BARCLAYS",
  "NATO",
  "DEUTSCHE BANK",
];

export default function TrustBar() {
  return (
    <section className="relative flex flex-col items-center gap-10 w-full py-16 px-[120px] bg-[var(--bg-primary)]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-[120px] right-[120px] h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent" />

      <AnimateIn variant="fadeIn" delay={0.1}>
        <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[4px]">
          TRUSTED BY LEADING INSTITUTIONS
        </span>
      </AnimateIn>

      {/* Compliance badges */}
      <AnimateIn variant="fadeUp" delay={0.2} className="w-full">
        <div className="flex items-center justify-center gap-6 w-full flex-wrap">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)] transition-all duration-300"
            >
              <Icon size={15} className="text-[var(--accent)]" strokeWidth={1.5} />
              <span className="text-[12px] font-medium text-[var(--text-secondary)]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Logo row — marquee style */}
      <AnimateIn variant="fadeIn" delay={0.3} className="w-full overflow-hidden">
        <div className="flex items-center justify-center gap-16 w-full flex-wrap">
          {logos.map((name) => (
            <span
              key={name}
              className="text-[11px] font-semibold text-[var(--text-dark)] tracking-[3px] hover:text-[var(--text-muted)] transition-colors duration-300"
            >
              {name}
            </span>
          ))}
        </div>
      </AnimateIn>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-[120px] right-[120px] h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
    </section>
  );
}

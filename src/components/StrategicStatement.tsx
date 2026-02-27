"use client";

import { ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function StrategicStatement() {
  return (
    <section className="relative flex flex-col items-center gap-10 w-full py-[140px] px-[120px] bg-[var(--bg-elevated)] overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.025] blur-[150px] rounded-full pointer-events-none" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent" />

      <AnimateIn variant="fadeIn" delay={0.1}>
        <div className="w-16 h-px bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)]" />
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.2}>
        <h2 className="text-[40px] font-medium text-[var(--text-primary)] text-center leading-[1.35] tracking-[-1px] max-w-[800px]">
          The organizations that will define the next decade are building their{" "}
          <span className="gradient-text">intelligence infrastructure</span>{" "}
          today.
        </h2>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.3}>
        <p className="text-[16px] text-[var(--text-secondary)] text-center leading-[1.7] max-w-[500px]">
          Nox was founded with a single conviction: sovereign AI
          capabilities should not require sovereign-scale budgets.
        </p>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.4}>
        <a
          href="#"
          className="cta-shimmer flex items-center gap-2 px-8 py-4 bg-[var(--cta-bg)] text-[var(--cta-text)] text-[14px] font-medium tracking-[0.3px] rounded-[6px] hover:shadow-[0_0_30px_rgba(241,245,249,0.12)] transition-all duration-300"
        >
          Schedule a Strategic Briefing <ArrowRight size={14} strokeWidth={2} />
        </a>
      </AnimateIn>

      <AnimateIn variant="fadeIn" delay={0.5}>
        <div className="w-16 h-px bg-gradient-to-r from-[var(--gradient-mid)] to-[var(--gradient-end)]" />
      </AnimateIn>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
    </section>
  );
}

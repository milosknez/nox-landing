"use client";

import { ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function CTABanner() {
  return (
    <section className="relative w-full py-[120px] px-[120px] bg-[var(--bg-primary)]">
      <AnimateIn variant="scaleIn" delay={0.1}>
        <div
          className="relative w-full rounded-[20px] overflow-hidden px-16 py-20 flex flex-col items-center text-center gap-8"
          style={{
            background: "linear-gradient(135deg, rgba(79,142,247,0.12), rgba(155,109,247,0.08), rgba(20,200,220,0.06))",
            border: "1px solid rgba(79,142,247,0.15)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Background orb */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--accent)] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />

          {/* Grid pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(79,142,247,0.05)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <h2 className="relative z-10 text-[42px] font-bold text-[var(--text-primary)] leading-[1.15] tracking-[-1.5px] max-w-[600px]">
            Ready to Build Your Intelligence Infrastructure?
          </h2>

          <p className="relative z-10 text-[17px] text-[var(--text-secondary)] leading-[1.7] max-w-[480px]">
            Join the organizations deploying sovereign AI at scale. Start with a free consultation.
          </p>

          <div className="relative z-10 flex items-center gap-4 mt-2">
            <a
              href="#"
              className="cta-shimmer flex items-center gap-2.5 px-8 py-[15px] bg-[var(--cta-bg)] text-[var(--cta-text)] text-[15px] font-semibold tracking-[0.2px] rounded-[10px] hover:shadow-[0_0_30px_rgba(244,247,251,0.15)] transition-all duration-300"
            >
              Get Started
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--accent)]/20">
                <ArrowRight size={13} strokeWidth={2.5} className="text-[var(--accent)]" />
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-[15px] border border-white/10 text-[var(--text-secondary)] text-[15px] font-medium tracking-[0.2px] rounded-[10px] hover:border-white/20 hover:text-[var(--text-primary)] hover:bg-white/[0.03] transition-all duration-300"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}

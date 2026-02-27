"use client";

import { Lock, Eye, Fingerprint } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const securityCards = [
  {
    num: "01",
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "AES-256 encryption at rest, TLS 1.3 in transit. Hardware security modules for key management with automatic rotation.",
  },
  {
    num: "02",
    icon: Eye,
    title: "Immutable Audit Trail",
    description:
      "Cryptographically signed audit logs with tamper-evident storage. Full chain of custody for all operations.",
  },
  {
    num: "03",
    icon: Fingerprint,
    title: "Identity & Access Control",
    description:
      "Role-based access with attribute-based policies. Multi-factor authentication with hardware token support.",
  },
];

export default function Security() {
  return (
    <section id="security" className="relative w-full py-[120px] px-[120px] bg-[var(--bg-elevated)]">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background accent */}
      <div className="absolute top-[100px] right-0 w-[500px] h-[500px] bg-[var(--gradient-mid)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-5 mb-16">
        <AnimateIn variant="fadeUp" delay={0.1}>
          <span className="font-mono text-[11px] text-[var(--accent)] tracking-[5px] uppercase">
            Security
          </span>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.2}>
          <h2 className="text-[48px] font-bold text-[var(--text-primary)] leading-[1.1] tracking-[-2px] max-w-[700px]">
            Security architecture for{" "}
            <span className="gradient-text">zero-compromise</span> environments.
          </h2>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.3}>
          <p className="text-[17px] text-[var(--text-secondary)] leading-[1.7] max-w-[480px]">
            Every layer encrypted. Every access logged. Every deployment auditable.
          </p>
        </AnimateIn>
      </div>

      {/* Cards */}
      <StaggerContainer className="grid grid-cols-3 gap-5" staggerDelay={0.12}>
        {securityCards.map((card) => (
          <StaggerItem key={card.num}>
            <div className="group relative flex flex-col gap-6 p-8 rounded-[14px] bg-[var(--bg-surface)] card-premium h-full overflow-hidden">
              {/* Hover glow */}
              <div className="absolute -top-[60px] left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-[0.04] blur-[60px] transition-opacity duration-700 pointer-events-none" />

              {/* Number + Icon row */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-[32px] font-light gradient-text opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                  {card.num}
                </span>
                <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-[var(--accent)]/8 border border-[var(--accent)]/15 group-hover:bg-[var(--accent)]/12 group-hover:border-[var(--accent)]/30 transition-all duration-500">
                  <card.icon size={18} className="text-[var(--accent)]" strokeWidth={1.5} />
                </div>
              </div>

              <div className="relative z-10 flex flex-col gap-3">
                <h3 className="text-[18px] font-semibold text-[var(--text-primary)] tracking-[-0.3px]">{card.title}</h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-[1.75]">
                  {card.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="relative z-10 mt-auto pt-5">
                <div className="h-[2px] rounded-full bg-[var(--border)] overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] transition-all duration-700 ease-out" />
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const securityCards = [
  {
    num: "01",
    title: "End-to-End Encryption",
    description:
      "AES-256 encryption at rest, TLS 1.3 in transit. Hardware security modules for key management.",
  },
  {
    num: "02",
    title: "Immutable Audit Trail",
    description:
      "Cryptographically signed audit logs with tamper-evident storage. Full chain of custody for all operations.",
  },
  {
    num: "03",
    title: "Identity & Access Control",
    description:
      "Role-based access with attribute-based policies. Multi-factor authentication with hardware token support.",
  },
];

export default function Security() {
  return (
    <section id="security" className="relative flex flex-col gap-16 w-full py-28 px-[120px] bg-[var(--bg-elevated)]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent" />

      {/* Background accent */}
      <div className="absolute top-[100px] right-0 w-[500px] h-[500px] bg-[var(--gradient-mid)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-end justify-between w-full">
        <div className="flex flex-col gap-5 max-w-[600px]">
          <AnimateIn variant="fadeUp" delay={0.1}>
            <span className="font-mono text-[10px] text-[var(--accent)] tracking-[4px] flex items-center gap-3">
              <span className="w-6 h-px bg-[var(--accent)]" />
              SECURITY
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <h2 className="text-[44px] font-semibold text-[var(--text-primary)] leading-[1.12] tracking-[-1px]">
              Security architecture designed
              <br />
              for <span className="gradient-text">zero-compromise</span> environments.
            </h2>
          </AnimateIn>
        </div>
        <AnimateIn variant="fadeLeft" delay={0.3}>
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] text-right max-w-[340px]">
            Every layer encrypted. Every access logged.
            <br />
            Every deployment auditable.
          </p>
        </AnimateIn>
      </div>

      {/* Cards */}
      <StaggerContainer className="grid grid-cols-3 gap-5" staggerDelay={0.12}>
        {securityCards.map((card) => (
          <StaggerItem key={card.num}>
            <div className="group flex flex-col gap-5 p-7 bg-[var(--bg-surface)] rounded-[10px] card-hover h-full">
              <span className="font-mono text-[36px] font-light gradient-text opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                {card.num}
              </span>
              <h3 className="text-[17px] font-semibold text-[var(--text-primary)]">{card.title}</h3>
              <p className="text-[13px] text-[var(--text-secondary)] leading-[1.7]">
                {card.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

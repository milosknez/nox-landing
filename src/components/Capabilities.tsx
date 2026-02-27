"use client";

import { Cpu, Database, Network, Shield } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const capabilities = [
  {
    icon: Cpu,
    title: "Compute Orchestration",
    description:
      "Distributed GPU clusters with automatic failover and load balancing. Sub-millisecond scheduling across sovereign data centers.",
  },
  {
    icon: Database,
    title: "Data Sovereignty",
    description:
      "Air-gapped deployment options with full data residency controls. Your data never crosses jurisdictional boundaries.",
  },
  {
    icon: Network,
    title: "Model Pipeline",
    description:
      "End-to-end ML lifecycle management from training to production. Version-controlled model registry with automated rollback.",
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    description:
      "Hardware-level encryption with FIPS 140-3 validation. Continuous monitoring and anomaly detection across all system layers.",
  },
];

export default function Capabilities() {
  return (
    <section id="infrastructure" className="relative flex flex-col gap-16 w-full py-28 px-[120px] bg-[var(--bg-elevated)]">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col gap-5 max-w-[600px]">
        <AnimateIn variant="fadeUp" delay={0.1}>
          <span className="font-mono text-[10px] text-[var(--accent)] tracking-[4px] flex items-center gap-3">
            <span className="w-6 h-px bg-[var(--accent)]" />
            INFRASTRUCTURE
          </span>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.2}>
          <h2 className="text-[44px] font-semibold text-[var(--text-primary)] leading-[1.12] tracking-[-1px]">
            Built for environments
            <br />
            where failure is{" "}
            <span className="gradient-text">not an option.</span>
          </h2>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.3}>
          <p className="text-[16px] text-[var(--text-secondary)] leading-[1.7] max-w-[520px]">
            Four pillars of infrastructure designed for mission-critical AI workloads at sovereign
            scale.
          </p>
        </AnimateIn>
      </div>

      {/* Grid */}
      <StaggerContainer className="grid grid-cols-4 gap-5" staggerDelay={0.12}>
        {capabilities.map(({ icon: Icon, title, description }) => (
          <StaggerItem key={title}>
            <div className="group flex flex-col gap-5 p-7 bg-[var(--bg-surface)] rounded-[10px] card-hover h-full">
              <div className="flex items-center justify-center w-10 h-10 rounded-[8px] bg-[var(--accent)]/10 border border-[var(--accent)]/20 group-hover:bg-[var(--accent)]/15 transition-colors duration-300">
                <Icon size={20} className="text-[var(--accent)]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[16px] font-semibold text-[var(--text-primary)] tracking-[-0.2px]">
                {title}
              </h3>
              <p className="text-[13px] text-[var(--text-secondary)] leading-[1.7]">
                {description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

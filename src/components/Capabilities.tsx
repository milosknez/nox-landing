"use client";

import { Cpu, Database, Network, Shield, Zap, BarChart3 } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const capabilities = [
  {
    icon: Cpu,
    title: "Compute Orchestration",
    description:
      "Distributed GPU clusters with automatic failover and load balancing across sovereign data centers.",
    stat: "99.99%",
    statLabel: "Uptime",
  },
  {
    icon: Database,
    title: "Data Sovereignty",
    description:
      "Air-gapped deployment options with full data residency controls. Your data never crosses jurisdictional boundaries.",
    stat: "Zero",
    statLabel: "Data leaks",
  },
  {
    icon: Network,
    title: "Model Pipeline",
    description:
      "End-to-end ML lifecycle management from training to production with version-controlled model registry.",
    stat: "3min",
    statLabel: "Deploy time",
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    description:
      "Hardware-level encryption with FIPS 140-3 validation. Continuous monitoring across all system layers.",
    stat: "FIPS",
    statLabel: "140-3 Level 3",
  },
];

const features = [
  { icon: Zap, label: "Real-time Inference", desc: "Sub-millisecond model serving at any scale" },
  { icon: BarChart3, label: "Unified Dashboard", desc: "Single pane of glass for all AI operations" },
  { icon: Database, label: "Auto-scaling", desc: "Dynamic resource allocation based on demand" },
];

export default function Capabilities() {
  return (
    <section id="infrastructure" className="relative w-full py-[120px] px-[120px] bg-[var(--bg-elevated)]">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Header — Centered */}
      <div className="flex flex-col items-center text-center gap-5 mb-16">
        <AnimateIn variant="fadeUp" delay={0.1}>
          <span className="font-mono text-[11px] text-[var(--accent)] tracking-[5px] uppercase">
            Infrastructure
          </span>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.2}>
          <h2 className="text-[48px] font-bold text-[var(--text-primary)] leading-[1.1] tracking-[-2px] max-w-[700px]">
            Built for environments where
            failure is <span className="gradient-text">not an option.</span>
          </h2>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.3}>
          <p className="text-[17px] text-[var(--text-secondary)] leading-[1.7] max-w-[540px]">
            Four pillars of infrastructure designed for mission-critical AI workloads at sovereign scale.
          </p>
        </AnimateIn>
      </div>

      {/* Main Grid — 4 columns */}
      <StaggerContainer className="grid grid-cols-4 gap-4" staggerDelay={0.1}>
        {capabilities.map(({ icon: Icon, title, description, stat, statLabel }) => (
          <StaggerItem key={title}>
            <div className="group relative flex flex-col gap-6 p-7 rounded-[14px] bg-[var(--bg-surface)] card-premium h-full overflow-hidden">
              {/* Hover glow */}
              <div className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-[0.04] blur-[60px] transition-opacity duration-700 pointer-events-none" />

              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-[10px] bg-[var(--accent)]/8 border border-[var(--accent)]/15 group-hover:bg-[var(--accent)]/12 group-hover:border-[var(--accent)]/30 transition-all duration-500">
                <Icon size={20} className="text-[var(--accent)]" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-3">
                <h3 className="text-[17px] font-semibold text-[var(--text-primary)] tracking-[-0.3px]">
                  {title}
                </h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-[1.7]">
                  {description}
                </p>
              </div>

              {/* Stat indicator */}
              <div className="relative z-10 mt-auto pt-4 border-t border-[var(--border)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[20px] font-bold text-[var(--accent)]">{stat}</span>
                  <span className="text-[12px] text-[var(--text-muted)]">{statLabel}</span>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Bottom Feature Strip */}
      <AnimateIn variant="fadeUp" delay={0.5} className="mt-12">
        <div className="flex items-center justify-center gap-12 py-6 px-8 rounded-[14px] border border-[var(--border)] bg-[var(--bg-surface)]/50">
          {features.map(({ icon: Icon, label, desc }, i) => (
            <div key={label} className={`flex items-center gap-4 ${i < features.length - 1 ? "pr-12 border-r border-[var(--border)]" : ""}`}>
              <div className="flex items-center justify-center w-9 h-9 rounded-[8px] bg-[var(--accent)]/8">
                <Icon size={16} className="text-[var(--accent)]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-medium text-[var(--text-primary)]">{label}</span>
                <span className="text-[12px] text-[var(--text-muted)]">{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}

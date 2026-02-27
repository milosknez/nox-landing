"use client";

import { ArrowRight } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const cases = [
  {
    tag: "FINANCIAL SERVICES",
    metric: "$2.3B",
    metricLabel: "in fraud prevented annually",
    title: "Global Investment Bank",
    description:
      "Deployed real-time fraud detection across 40+ markets with sub-10ms inference latency and 99.97% uptime.",
  },
  {
    tag: "DEFENSE & INTELLIGENCE",
    metric: "340ms",
    metricLabel: "average decision latency",
    title: "NATO Allied Command",
    description:
      "Air-gapped AI inference platform supporting multi-domain operations with sovereign data processing guarantees.",
  },
  {
    tag: "HEALTHCARE",
    metric: "94%",
    metricLabel: "diagnostic accuracy improvement",
    title: "National Health Service",
    description:
      "HIPAA-compliant diagnostic imaging pipeline processing 2M+ scans per month with full audit trail compliance.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative w-full py-[120px] px-[120px] bg-[var(--bg-primary)]">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-5 mb-16">
        <AnimateIn variant="fadeUp" delay={0.1}>
          <span className="font-mono text-[11px] text-[var(--accent)] tracking-[5px] uppercase">
            Case Studies
          </span>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.2}>
          <h2 className="text-[48px] font-bold text-[var(--text-primary)] leading-[1.1] tracking-[-2px] max-w-[600px]">
            Deployed at scale across{" "}
            <span className="gradient-text">regulated industries.</span>
          </h2>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.3}>
          <a
            href="#"
            className="flex items-center gap-2 text-[14px] text-[var(--accent)] tracking-[0.3px] hover:text-[var(--accent-bright)] transition-all duration-300 group mt-2"
          >
            View All Case Studies{" "}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </AnimateIn>
      </div>

      {/* Cards */}
      <StaggerContainer className="grid grid-cols-3 gap-5" staggerDelay={0.12}>
        {cases.map((c) => (
          <StaggerItem key={c.title}>
            <div className="group flex flex-col bg-[var(--bg-surface)] rounded-[14px] card-premium overflow-hidden h-full">
              {/* Top metric area */}
              <div className="relative flex flex-col justify-end p-8 h-[200px] bg-[var(--bg-elevated)] overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[var(--accent)] opacity-[0.03] blur-[80px] rounded-full group-hover:opacity-[0.07] transition-opacity duration-700" />
                <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[3px] relative z-10">
                  {c.tag}
                </span>
                <span className="text-[52px] font-bold gradient-text leading-tight tracking-[-2px] relative z-10">
                  {c.metric}
                </span>
                <span className="text-[14px] text-[var(--text-secondary)] relative z-10">{c.metricLabel}</span>
              </div>
              {/* Body */}
              <div className="flex flex-col gap-4 p-8 flex-1">
                <h3 className="text-[20px] font-semibold text-[var(--text-primary)] tracking-[-0.3px]">{c.title}</h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-[1.75]">
                  {c.description}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[13px] font-medium text-[var(--accent)] hover:text-[var(--accent-bright)] transition-all duration-300 group/link mt-auto pt-2"
                >
                  Read case study{" "}
                  <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

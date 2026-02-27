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
    <section id="case-studies" className="relative flex flex-col gap-14 w-full py-28 px-[120px] bg-[var(--bg-primary)]">
      {/* Header */}
      <div className="flex items-end justify-between w-full">
        <div className="flex flex-col gap-5">
          <AnimateIn variant="fadeUp" delay={0.1}>
            <span className="font-mono text-[10px] text-[var(--accent)] tracking-[4px] flex items-center gap-3">
              <span className="w-6 h-px bg-[var(--accent)]" />
              CASE STUDIES
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <h2 className="text-[44px] font-semibold text-[var(--text-primary)] leading-[1.12] tracking-[-1px] max-w-[520px]">
              Deployed at scale across
              <br />
              <span className="gradient-text">regulated industries.</span>
            </h2>
          </AnimateIn>
        </div>
        <AnimateIn variant="fadeIn" delay={0.3}>
          <a
            href="#"
            className="flex items-center gap-2 text-[13px] text-[var(--text-secondary)] tracking-[0.3px] hover:text-[var(--accent)] transition-all duration-300 group"
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
            <div className="group flex flex-col bg-[var(--bg-surface)] rounded-[10px] card-hover overflow-hidden h-full">
              {/* Top metric area */}
              <div className="relative flex flex-col justify-end p-7 h-[200px] bg-[var(--bg-elevated)] overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[var(--accent)] opacity-[0.03] blur-[80px] rounded-full group-hover:opacity-[0.06] transition-opacity duration-500" />
                <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-[3px] relative z-10">
                  {c.tag}
                </span>
                <span className="text-[52px] font-bold gradient-text leading-tight tracking-[-2px] relative z-10">
                  {c.metric}
                </span>
                <span className="text-[13px] text-[var(--text-secondary)] relative z-10">{c.metricLabel}</span>
              </div>
              {/* Body */}
              <div className="flex flex-col gap-4 p-7">
                <h3 className="text-[18px] font-semibold text-[var(--text-primary)]">{c.title}</h3>
                <p className="text-[13px] text-[var(--text-secondary)] leading-[1.7]">
                  {c.description}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-[12px] font-medium text-[var(--accent)] hover:text-[var(--text-primary)] transition-all duration-300 group/link"
                >
                  Read case study{" "}
                  <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

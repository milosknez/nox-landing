import { ArrowRight } from "lucide-react";

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
    <section className="flex flex-col gap-12 w-full py-24 px-[120px] bg-[var(--bg-primary)]">
      {/* Header */}
      <div className="flex items-end justify-between w-full">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[4px]">
            CASE STUDIES
          </span>
          <h2 className="text-[40px] font-semibold text-[var(--text-primary)] leading-[1.15] tracking-[-0.8px] max-w-[520px]">
            Deployed at scale across
            <br />
            regulated industries.
          </h2>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 text-[13px] text-[var(--text-secondary)] tracking-[0.3px] hover:text-[var(--text-primary)] transition-colors"
        >
          View All Case Studies <ArrowRight size={14} />
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6">
        {cases.map((c) => (
          <div
            key={c.title}
            className="flex flex-col bg-[var(--bg-surface)] rounded-[4px] border border-[var(--border)] overflow-hidden"
          >
            {/* Top metric area */}
            <div className="flex flex-col justify-end p-7 h-[180px] bg-[var(--bg-elevated)]">
              <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-[3px]">
                {c.tag}
              </span>
              <span className="text-[48px] font-semibold text-[var(--text-primary)] tracking-[-1px] leading-tight">
                {c.metric}
              </span>
              <span className="text-[13px] text-[var(--text-secondary)]">{c.metricLabel}</span>
            </div>
            {/* Body */}
            <div className="flex flex-col gap-4 p-7">
              <h3 className="text-[18px] font-semibold text-[var(--text-primary)]">{c.title}</h3>
              <p className="text-[13px] text-[var(--text-secondary)] leading-[1.65]">
                {c.description}
              </p>
              <a
                href="#"
                className="text-[12px] font-medium text-[var(--text-primary)] hover:opacity-80 transition-opacity"
              >
                Read case study →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";

const threatRows = [
  { label: "Network Intrusion Detection", value: "99.7%", color: "text-[var(--text-primary)]" },
  { label: "Anomaly Classification", value: "98.3%", color: "text-[var(--text-primary)]" },
  { label: "Latency (p99)", value: "<12ms", color: "text-[var(--success)]" },
  { label: "Events Processed / sec", value: "2.4M", color: "text-[var(--text-primary)]" },
];

const metaRows = [
  { label: "Model Version", value: "v4.2.1-stable" },
  { label: "Deployment Region", value: "EU-WEST-1 / SOVEREIGN" },
];

export default function Hero() {
  return (
    <section className="relative w-full h-[700px] bg-[var(--bg-primary)] overflow-hidden">
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical */}
        {[120, 360, 600, 840, 1080, 1320].map((x) => (
          <div
            key={`v-${x}`}
            className="absolute top-0 bottom-0 w-px bg-[var(--border)] opacity-30"
            style={{ left: x }}
          />
        ))}
        {/* Horizontal */}
        {[175, 350, 525].map((y) => (
          <div
            key={`h-${y}`}
            className="absolute left-0 right-0 h-px bg-[var(--border)] opacity-30"
            style={{ top: y }}
          />
        ))}
      </div>

      {/* Left Content */}
      <div className="absolute left-[120px] top-[140px] flex flex-col gap-7 max-w-[720px]">
        <span className="font-mono text-[11px] text-[var(--text-muted)] tracking-[4px]">
          SOVEREIGN AI INFRASTRUCTURE
        </span>
        <h1 className="text-[56px] font-semibold text-[var(--text-primary)] leading-[1.08] tracking-[-1.5px] max-w-[680px]">
          Intelligence infrastructure
          <br />
          for critical operations.
        </h1>
        <p className="text-[17px] text-[var(--text-secondary)] leading-[1.65] max-w-[580px]">
          Enterprise-grade AI deployment platform built for regulated industries.
          <br />
          Real-time decisioning across defense, finance, and sovereign systems.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 px-7 py-[14px] bg-[var(--cta-bg)] text-[var(--cta-text)] text-[14px] font-medium tracking-[0.3px] rounded-[4px] hover:opacity-90 transition-opacity"
          >
            Request Demo <ArrowRight size={14} />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-7 py-[14px] border border-[var(--border)] text-[var(--text-secondary)] text-[14px] tracking-[0.3px] rounded-[4px] hover:border-[var(--text-secondary)] transition-colors"
          >
            View Documentation
          </a>
        </div>
      </div>

      {/* Right Data Panel */}
      <div className="absolute right-[100px] top-[100px] w-[480px]">
        <div className="flex flex-col gap-4 p-6 bg-[var(--bg-surface)] rounded-[4px] border border-[var(--border)]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[3px]">
              LIVE THREAT ANALYSIS
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
              <span className="font-mono text-[10px] text-[var(--success)] tracking-[2px]">
                ACTIVE
              </span>
            </div>
          </div>

          <div className="w-full h-px bg-[var(--border)]" />

          {/* Data rows */}
          {threatRows.map((row) => (
            <div key={row.label} className="flex items-center justify-between py-2">
              <span className="text-[12px] text-[var(--text-secondary)]">{row.label}</span>
              <span className={`font-mono text-[13px] font-medium ${row.color}`}>
                {row.value}
              </span>
            </div>
          ))}

          <div className="w-full h-px bg-[var(--border)]" />

          {/* Meta rows */}
          {metaRows.map((row) => (
            <div key={row.label} className="flex items-center justify-between py-2">
              <span className="text-[12px] text-[var(--text-muted)]">{row.label}</span>
              <span className="font-mono text-[12px] text-[var(--text-muted)]">{row.value}</span>
            </div>
          ))}

          {/* Threat bar */}
          <div className="flex flex-col gap-2 pt-2">
            <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-[2px]">
              THREAT SEVERITY DISTRIBUTION
            </span>
            <div className="flex w-full h-6 gap-0.5 rounded-[2px] overflow-hidden">
              <div className="w-[60px] bg-[var(--danger)] rounded-[2px]" />
              <div className="w-[110px] bg-[var(--orange)] rounded-[2px]" />
              <div className="w-[180px] bg-[var(--warning)] rounded-[2px]" />
              <div className="flex-1 bg-[var(--border)] rounded-[2px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

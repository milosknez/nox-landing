"use client";

import AnimateIn from "./AnimateIn";

const metrics = [
  { label: "Active Models", value: "247", delta: "+12 this week", deltaColor: "text-[var(--success)]" },
  { label: "Inference Requests", value: "14.2M", delta: "/day avg.", deltaColor: "text-[var(--text-secondary)]" },
  { label: "Uptime (30d)", value: "99.997%", delta: "SLA target: 99.99%", deltaColor: "text-[var(--success)]" },
  { label: "Compliance Score", value: "A+", delta: "Last audit: Jan 2026", deltaColor: "text-[var(--text-secondary)]" },
];

const tabs = ["Overview", "Models", "Pipelines", "Audit Log"];

const tableRows = [
  { name: "fraud-detection-v4", status: "Running", statusColor: "var(--success)", latency: "8ms", requests: "24,891", region: "EU-WEST-1", accuracy: "99.4%" },
  { name: "risk-scoring-prod", status: "Running", statusColor: "var(--success)", latency: "12ms", requests: "18,442", region: "US-GOV-EAST", accuracy: "98.7%" },
  { name: "nlp-classify-v2.1", status: "Updating", statusColor: "var(--warning)", latency: "--", requests: "--", region: "AP-SOUTH-1", accuracy: "97.2%" },
  { name: "anomaly-detect-prod", status: "Running", statusColor: "var(--success)", latency: "6ms", requests: "31,209", region: "EU-CENTRAL-1", accuracy: "99.8%" },
];

export default function PlatformPreview() {
  return (
    <section id="platform" className="relative flex flex-col items-center gap-14 w-full py-28 px-[120px] bg-[var(--bg-primary)]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[var(--accent)] opacity-[0.025] blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center gap-5">
        <AnimateIn variant="fadeUp" delay={0.1}>
          <span className="font-mono text-[10px] text-[var(--accent)] tracking-[4px]">
            PLATFORM
          </span>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.2}>
          <h2 className="text-[44px] font-semibold text-[var(--text-primary)] leading-[1.12] tracking-[-1px] text-center max-w-[700px]">
            Unified command surface for
            <br />
            enterprise <span className="gradient-text">AI operations.</span>
          </h2>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.3}>
          <p className="text-[16px] text-[var(--text-secondary)] text-center leading-[1.7]">
            Monitor, deploy, and govern AI workloads from a single operational dashboard.
          </p>
        </AnimateIn>
      </div>

      {/* Dashboard — Glassmorphic */}
      <AnimateIn variant="scaleIn" delay={0.3} className="w-full">
        <div className="w-full rounded-[12px] glass glow-accent overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-white/[0.02] border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--danger)]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--warning)]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--success)]/60" />
              </div>
              <span className="text-[12px] font-medium text-[var(--text-primary)] ml-2">
                Operations Dashboard
              </span>
            </div>
            <div className="flex items-center gap-5">
              {tabs.map((tab, i) => (
                <span
                  key={tab}
                  className={`text-[11px] cursor-pointer transition-colors duration-300 ${i === 0 ? "font-medium text-[var(--accent)]" : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"}`}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-5 p-5">
            {/* Metric cards */}
            <div className="grid grid-cols-4 gap-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col gap-2 p-4 rounded-[8px] bg-white/[0.02] border border-white/[0.05] hover:border-[var(--border-hover)] transition-all duration-300"
                >
                  <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[2px]">
                    {m.label}
                  </span>
                  <span className="text-[28px] font-semibold text-[var(--text-primary)] tracking-[-0.5px]">
                    {m.value}
                  </span>
                  <span className={`text-[11px] ${m.deltaColor}`}>{m.delta}</span>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="w-full rounded-[8px] border border-white/[0.05] overflow-hidden">
              {/* Head */}
              <div className="grid grid-cols-6 px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.05]">
                {["MODEL NAME", "STATUS", "LATENCY", "REQUESTS/S", "REGION", "ACCURACY"].map(
                  (h) => (
                    <span
                      key={h}
                      className="font-mono text-[9px] text-[var(--text-muted)] tracking-[2px]"
                    >
                      {h}
                    </span>
                  )
                )}
              </div>
              {/* Rows */}
              {tableRows.map((row, i) => (
                <div
                  key={row.name}
                  className={`grid grid-cols-6 px-4 py-2.5 items-center hover:bg-white/[0.02] transition-colors duration-200 ${i < tableRows.length - 1 ? "border-b border-white/[0.04]" : ""}`}
                >
                  <span className="font-mono text-[12px] text-[var(--text-primary)]">
                    {row.name}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: row.statusColor, boxShadow: `0 0 6px ${row.statusColor}40` }}
                    />
                    <span className="text-[12px]" style={{ color: row.statusColor }}>
                      {row.status}
                    </span>
                  </div>
                  <span className="font-mono text-[12px] text-[var(--text-secondary)]">
                    {row.latency}
                  </span>
                  <span className="font-mono text-[12px] text-[var(--text-primary)]">
                    {row.requests}
                  </span>
                  <span className="font-mono text-[12px] text-[var(--text-secondary)]">
                    {row.region}
                  </span>
                  <span className="font-mono text-[12px] text-[var(--text-primary)]">
                    {row.accuracy}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}

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
    <section className="flex flex-col items-center gap-12 w-full py-24 px-[120px] bg-[var(--bg-primary)]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[4px]">
          PLATFORM
        </span>
        <h2 className="text-[40px] font-semibold text-[var(--text-primary)] leading-[1.15] tracking-[-0.8px] text-center max-w-[700px]">
          Unified command surface for
          <br />
          enterprise AI operations.
        </h2>
        <p className="text-[16px] text-[var(--text-secondary)] text-center">
          Monitor, deploy, and govern AI workloads from a single operational dashboard.
        </p>
      </div>

      {/* Dashboard */}
      <div className="w-full bg-[var(--bg-surface)] rounded-[4px] border border-[var(--border)] overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-[var(--bg-elevated)] border-b border-[var(--border)]">
          <span className="text-[12px] font-medium text-[var(--text-primary)]">
            Operations Dashboard
          </span>
          <div className="flex items-center gap-5">
            {tabs.map((tab, i) => (
              <span
                key={tab}
                className={`text-[11px] ${i === 0 ? "font-medium text-[var(--text-primary)]" : "text-[var(--text-muted)]"}`}
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
                className="flex flex-col gap-2 p-4 bg-[var(--bg-elevated)] rounded-[4px] border border-[var(--border)]"
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
          <div className="w-full rounded-[4px] border border-[var(--border)] overflow-hidden">
            {/* Head */}
            <div className="grid grid-cols-6 px-4 py-2.5 bg-[var(--bg-elevated)] border-b border-[var(--border)]">
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
                className={`grid grid-cols-6 px-4 py-2.5 items-center ${i < tableRows.length - 1 ? "border-b border-[var(--border)]" : ""}`}
              >
                <span className="font-mono text-[12px] text-[var(--text-primary)]">
                  {row.name}
                </span>
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: row.statusColor }}
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
    </section>
  );
}

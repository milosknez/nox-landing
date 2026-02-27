import { Cpu, Database, Network, Shield } from "lucide-react";

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
    <section className="flex flex-col gap-16 w-full py-24 px-[120px] bg-[var(--bg-elevated)]">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-[600px]">
        <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[4px]">
          INFRASTRUCTURE
        </span>
        <h2 className="text-[40px] font-semibold text-[var(--text-primary)] leading-[1.15] tracking-[-0.8px]">
          Built for environments
          <br />
          where failure is not an option.
        </h2>
        <p className="text-[16px] text-[var(--text-secondary)] leading-[1.6] max-w-[520px]">
          Four pillars of infrastructure designed for mission-critical AI workloads at sovereign
          scale.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-6">
        {capabilities.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-5 p-7 bg-[var(--bg-surface)] rounded-[4px] border border-[var(--border)]"
          >
            <Icon size={24} className="text-[var(--text-muted)]" strokeWidth={1.5} />
            <h3 className="text-[16px] font-semibold text-[var(--text-primary)] tracking-[-0.2px]">
              {title}
            </h3>
            <p className="text-[13px] text-[var(--text-secondary)] leading-[1.65]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

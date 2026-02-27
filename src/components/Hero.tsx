"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="relative w-full min-h-[780px] bg-[var(--bg-primary)] overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px] animate-pulse-glow" />
        <div className="absolute top-[100px] right-[100px] w-[500px] h-[500px] rounded-full bg-[var(--gradient-mid)] opacity-[0.03] blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-[100px] left-[40%] w-[400px] h-[400px] rounded-full bg-[var(--gradient-end)] opacity-[0.03] blur-[80px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 pointer-events-none animate-grid-fade">
        {[120, 360, 600, 840, 1080, 1320].map((x) => (
          <div
            key={`v-${x}`}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: x,
              background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.08) 50%, transparent)",
            }}
          />
        ))}
        {[195, 390, 585].map((y) => (
          <div
            key={`h-${y}`}
            className="absolute left-0 right-0 h-px"
            style={{
              top: y,
              background: "linear-gradient(to right, transparent, rgba(59,130,246,0.08) 50%, transparent)",
            }}
          />
        ))}
      </div>

      {/* Radial fade overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 30% 50%, transparent 0%, var(--bg-primary) 100%)",
        }}
      />

      {/* Left Content */}
      <div className="absolute left-[120px] top-[160px] flex flex-col gap-8 max-w-[720px]">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-[11px] text-[var(--accent)] tracking-[4px] flex items-center gap-3"
        >
          <span className="w-6 h-px bg-[var(--accent)]" />
          SOVEREIGN AI INFRASTRUCTURE
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-[62px] font-semibold text-[var(--text-primary)] leading-[1.05] tracking-[-2px] max-w-[680px]"
        >
          Intelligence infrastructure
          <br />
          for critical{" "}
          <span className="gradient-text">operations.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-[17px] text-[var(--text-secondary)] leading-[1.7] max-w-[540px]"
        >
          Enterprise-grade AI deployment platform built for regulated industries.
          <br />
          Real-time decisioning across defense, finance, and sovereign systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <a
            href="#"
            className="cta-shimmer flex items-center gap-2 px-7 py-[14px] bg-[var(--cta-bg)] text-[var(--cta-text)] text-[14px] font-medium tracking-[0.3px] rounded-[6px] hover:shadow-[0_0_30px_rgba(241,245,249,0.12)] transition-all duration-300"
          >
            Request Demo <ArrowRight size={14} strokeWidth={2} />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-7 py-[14px] border border-[var(--border)] text-[var(--text-secondary)] text-[14px] tracking-[0.3px] rounded-[6px] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all duration-300"
          >
            View Documentation
          </a>
        </motion.div>
      </div>

      {/* Right Data Panel — Glassmorphic + Floating */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[80px] top-[120px] w-[480px] animate-float"
        style={{ animationDuration: "8s" }}
      >
        <div className="flex flex-col gap-4 p-6 rounded-[10px] glass glow-accent">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[3px]">
              LIVE THREAT ANALYSIS
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-blink" style={{ boxShadow: "0 0 8px rgba(34,197,94,0.4)" }} />
              <span className="font-mono text-[10px] text-[var(--success)] tracking-[2px]">
                ACTIVE
              </span>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent" />

          {/* Data rows */}
          {threatRows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
              className="flex items-center justify-between py-2"
            >
              <span className="text-[12px] text-[var(--text-secondary)]">{row.label}</span>
              <span className={`font-mono text-[13px] font-medium ${row.color}`}>
                {row.value}
              </span>
            </motion.div>
          ))}

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

          {/* Meta rows */}
          {metaRows.map((row) => (
            <div key={row.label} className="flex items-center justify-between py-1.5">
              <span className="text-[12px] text-[var(--text-muted)]">{row.label}</span>
              <span className="font-mono text-[12px] text-[var(--text-muted)]">{row.value}</span>
            </div>
          ))}

          {/* Threat bar */}
          <div className="flex flex-col gap-2 pt-2">
            <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-[2px]">
              THREAT SEVERITY DISTRIBUTION
            </span>
            <div className="flex w-full h-5 gap-0.5 rounded-[3px] overflow-hidden">
              <div className="w-[60px] bg-[var(--danger)] rounded-[3px]" />
              <div className="w-[110px] bg-[var(--orange)] rounded-[3px]" />
              <div className="w-[180px] bg-[var(--warning)] rounded-[3px]" />
              <div className="flex-1 bg-[var(--border)] rounded-[3px]" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />
    </section>
  );
}

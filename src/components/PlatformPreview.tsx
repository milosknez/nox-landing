"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { Activity, Shield, Wifi } from "lucide-react";

const metrics = [
  { label: "Active Models", value: "247", delta: "+12 this week", positive: true },
  { label: "Inference Requests", value: "14.2M", delta: "/day avg.", positive: false },
  { label: "Uptime (30d)", value: "99.997%", delta: "Above SLA", positive: true },
  { label: "Compliance Score", value: "A+", delta: "Last audit: Jan", positive: false },
];

const tabs = ["Overview", "Models", "Pipelines", "Audit Log"];

const tableRows = [
  { name: "fraud-detection-v4", status: "Running", statusColor: "var(--success)", latency: "8ms", requests: "24,891", region: "EU-WEST-1", accuracy: "99.4%" },
  { name: "risk-scoring-prod", status: "Running", statusColor: "var(--success)", latency: "12ms", requests: "18,442", region: "US-GOV-EAST", accuracy: "98.7%" },
  { name: "nlp-classify-v2.1", status: "Updating", statusColor: "var(--warning)", latency: "--", requests: "--", region: "AP-SOUTH-1", accuracy: "97.2%" },
  { name: "anomaly-detect-prod", status: "Running", statusColor: "var(--success)", latency: "6ms", requests: "31,209", region: "EU-CENTRAL-1", accuracy: "99.8%" },
];

const sparkPoints = [4, 6, 5, 8, 7, 9, 8, 11, 10, 12, 11, 14, 12, 13, 15, 14, 16, 15, 18, 17, 19, 20, 18, 21, 20, 22, 21, 24, 23, 25];
const sparkPath = sparkPoints
  .map((y, i) => `${i === 0 ? "M" : "L"}${i * (220 / (sparkPoints.length - 1))},${30 - y}`)
  .join(" ");

export default function PlatformPreview() {
  return (
    <section id="platform" className="relative w-full py-[120px] px-[120px] bg-[var(--bg-primary)]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[var(--accent)] opacity-[0.025] blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-5 mb-16">
        <AnimateIn variant="fadeUp" delay={0.1}>
          <span className="font-mono text-[11px] text-[var(--accent)] tracking-[5px] uppercase">
            Platform
          </span>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.2}>
          <h2 className="text-[48px] font-bold text-[var(--text-primary)] leading-[1.1] tracking-[-2px] max-w-[700px]">
            One command center for
            enterprise <span className="gradient-text">AI operations.</span>
          </h2>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.3}>
          <p className="text-[17px] text-[var(--text-secondary)] leading-[1.7] max-w-[520px]">
            Monitor, deploy, and govern AI workloads from a single operational dashboard.
          </p>
        </AnimateIn>
      </div>

      {/* Dashboard Card */}
      <AnimateIn variant="scaleIn" delay={0.3} className="w-full">
        <motion.div
          className="relative w-full rounded-[16px] overflow-hidden animate-float-slow"
          style={{
            background: "linear-gradient(145deg, rgba(10,16,32,0.9), rgba(5,8,16,0.95))",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 80px rgba(79,142,247,0.04)",
            animationDuration: "10s",
          }}
        >
          {/* Corner gradient accent */}
          <div className="absolute inset-0 rounded-[16px] pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(79,142,247,0.06), transparent 40%, transparent 60%, rgba(155,109,247,0.04))" }} />

          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/[0.06]">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
              </div>
              <span className="text-[13px] font-medium text-[var(--text-primary)] ml-1">
                Nox Operations Dashboard
              </span>
            </div>
            <div className="flex items-center gap-6">
              {tabs.map((tab, i) => (
                <span
                  key={tab}
                  className={`text-[12px] cursor-pointer transition-colors duration-300 ${
                    i === 0
                      ? "font-medium text-[var(--accent)] relative after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-[2px] after:bg-[var(--accent)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-5 p-6">
            {/* Sparkline + Metrics Row */}
            <div className="grid grid-cols-5 gap-4">
              {/* Sparkline */}
              <div className="col-span-1 flex flex-col gap-3 p-4 rounded-[10px] bg-white/[0.02] border border-white/[0.05]">
                <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-[2px]">EVENTS/SEC</span>
                <svg width="100%" height="32" viewBox="0 0 220 32" fill="none" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="spark-grad-plat" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="var(--gradient-start)" />
                      <stop offset="0.5" stopColor="var(--gradient-mid)" />
                      <stop offset="1" stopColor="var(--gradient-end)" />
                    </linearGradient>
                    <linearGradient id="spark-fill-plat" x1="0" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="var(--accent)" stopOpacity="0.12" />
                      <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={`${sparkPath} L220,32 L0,32 Z`} fill="url(#spark-fill-plat)" />
                  <path d={sparkPath} stroke="url(#spark-grad-plat)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <circle cx="220" cy={30 - sparkPoints[sparkPoints.length - 1]} r="3" fill="var(--accent)">
                    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
                <div className="flex items-baseline gap-2">
                  <span className="text-[22px] font-bold text-[var(--text-primary)] leading-none">2.4M</span>
                  <span className="font-mono text-[10px] text-[var(--success)]">+12.4%</span>
                </div>
              </div>
              {/* Metric cards */}
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col gap-2 p-4 rounded-[10px] bg-white/[0.02] border border-white/[0.05] hover:border-[var(--border-hover)] transition-all duration-300"
                >
                  <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-[2px]">
                    {m.label.toUpperCase()}
                  </span>
                  <span className="text-[26px] font-bold text-[var(--text-primary)] tracking-[-0.5px] leading-none">
                    {m.value}
                  </span>
                  <span className={`text-[11px] ${m.positive ? "text-[var(--success)]" : "text-[var(--text-muted)]"}`}>
                    {m.delta}
                  </span>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="w-full rounded-[10px] border border-white/[0.05] overflow-hidden">
              <div className="grid grid-cols-6 px-5 py-3 bg-white/[0.02] border-b border-white/[0.06]">
                {["MODEL NAME", "STATUS", "LATENCY", "REQUESTS/S", "REGION", "ACCURACY"].map(
                  (h) => (
                    <span key={h} className="font-mono text-[9px] text-[var(--text-muted)] tracking-[2px]">{h}</span>
                  )
                )}
              </div>
              {tableRows.map((row, i) => (
                <div
                  key={row.name}
                  className={`grid grid-cols-6 px-5 py-3 items-center hover:bg-white/[0.02] transition-colors duration-200 ${i < tableRows.length - 1 ? "border-b border-white/[0.04]" : ""}`}
                >
                  <span className="font-mono text-[12px] text-[var(--text-primary)]">{row.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: row.statusColor, boxShadow: `0 0 8px ${row.statusColor}50` }} />
                    <span className="text-[12px]" style={{ color: row.statusColor }}>{row.status}</span>
                  </div>
                  <span className="font-mono text-[12px] text-[var(--text-secondary)]">{row.latency}</span>
                  <span className="font-mono text-[12px] text-[var(--text-primary)]">{row.requests}</span>
                  <span className="font-mono text-[12px] text-[var(--text-muted)]">{row.region}</span>
                  <span className="font-mono text-[12px] text-[var(--text-primary)]">{row.accuracy}</span>
                </div>
              ))}
            </div>

            {/* Status Footer */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <Shield size={12} className="text-[var(--success)]" strokeWidth={2} />
                <span className="font-mono text-[10px] text-[var(--success)] tracking-[1px]">ENCRYPTED</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity size={12} className="text-[var(--accent)]" strokeWidth={2} />
                <span className="font-mono text-[10px] text-[var(--accent)] tracking-[1px]">MONITORING</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi size={12} className="text-[var(--gradient-end)]" strokeWidth={2} />
                <span className="font-mono text-[10px] text-[var(--gradient-end)] tracking-[1px]">SOVEREIGN</span>
              </div>
              <div className="flex-1" />
              <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-[1px]">v4.2.1-stable</span>
              <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-[1px]">EU-WEST-1</span>
            </div>
          </div>

          {/* Scan line */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[16px]">
            <div className="absolute left-0 right-0 h-[1px] opacity-[0.04]"
              style={{ background: "linear-gradient(to right, transparent, var(--accent), transparent)", animation: "scan-line 5s ease-in-out infinite" }} />
          </div>
        </motion.div>
      </AnimateIn>

      <style jsx>{`
        @keyframes scan-line { 0% { top: -2px; } 100% { top: 100%; } }
      `}</style>
    </section>
  );
}

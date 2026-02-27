"use client";

import { ArrowRight, Cpu, Shield, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Cpu,
    title: "Aggregate",
    description: "Ingest and normalize data from across your entire infrastructure stack in real-time.",
  },
  {
    icon: Shield,
    title: "Analyze",
    description: "AI-powered threat detection and anomaly classification at sovereign scale.",
  },
  {
    icon: BarChart3,
    title: "Deploy",
    description: "Production-grade model deployment with sub-millisecond inference latency.",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[var(--bg-primary)] overflow-hidden">
      {/* ── Animated Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute top-[-20%] left-[20%] w-[700px] h-[700px] rounded-full opacity-[0.07] blur-[120px] animate-pulse-glow"
          style={{ background: "radial-gradient(circle, var(--accent), transparent)" }} />
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[100px] animate-pulse-glow"
          style={{ background: "radial-gradient(circle, var(--gradient-mid), transparent)", animationDelay: "2s" }} />
        <div className="absolute bottom-[10%] left-[50%] w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[80px] animate-pulse-glow"
          style={{ background: "radial-gradient(circle, var(--gradient-end), transparent)", animationDelay: "4s" }} />

        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, var(--bg-primary) 70%)" }} />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 animate-grid-fade" style={{ opacity: 0.6 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(79,142,247,0.04)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
      </div>

      {/* ── Main Content — Centered ── */}
      <div className="relative flex flex-col items-center text-center pt-[160px] pb-[100px] px-6">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent-glow)]" />
          <span className="font-mono text-[12px] text-[var(--accent)] tracking-[5px] uppercase">
            Sovereign AI Infrastructure
          </span>
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent-glow)]" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[72px] font-bold text-[var(--text-primary)] leading-[1.05] tracking-[-3px] max-w-[900px]"
        >
          Intelligence Infrastructure
          <br />
          for Critical{" "}
          <span className="gradient-text">Operations</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-7 text-[19px] text-[var(--text-secondary)] leading-[1.7] max-w-[600px]"
        >
          Enterprise-grade AI deployment platform built for regulated industries.
          Real-time decisioning across defense, finance, and sovereign systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center gap-4 mt-10"
        >
          <a
            href="#"
            className="cta-accent flex items-center gap-2.5 px-8 py-[15px] text-white text-[15px] font-semibold tracking-[0.2px] rounded-[10px] transition-all duration-300"
          >
            Schedule a Demo
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
              <ArrowRight size={13} strokeWidth={2.5} />
            </span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-8 py-[15px] border border-[var(--border)] text-[var(--text-secondary)] text-[15px] font-medium tracking-[0.2px] rounded-[10px] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] hover:bg-white/[0.02] transition-all duration-300"
          >
            Start Free Trial
          </a>
        </motion.div>

        {/* ── Feature Pillars ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="grid grid-cols-3 gap-0 mt-[80px] w-full max-w-[960px]"
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`group flex flex-col items-center text-center gap-4 px-10 py-8 transition-all duration-300 hover:bg-white/[0.02] ${
                i < pillars.length - 1 ? "border-r border-[var(--border)]" : ""
              }`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-[12px] bg-[var(--accent)]/8 border border-[var(--accent)]/15 group-hover:bg-[var(--accent)]/12 group-hover:border-[var(--accent)]/25 transition-all duration-400">
                <pillar.icon size={22} className="text-[var(--accent)]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[16px] font-semibold text-[var(--text-primary)] tracking-[-0.2px]">
                {pillar.title}
              </h3>
              <p className="text-[14px] text-[var(--text-muted)] leading-[1.7]">
                {pillar.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />
    </section>
  );
}

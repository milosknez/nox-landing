"use client";

import { Quote } from "lucide-react";
import AnimateIn from "./AnimateIn";

const stats = [
  { value: "99.99%", label: "Platform Uptime" },
  { value: "10X", label: "Faster Deployment" },
  { value: "98%", label: "Client Retention Rate" },
];

export default function StrategicStatement() {
  return (
    <section className="relative w-full py-[120px] px-[120px] bg-[var(--bg-elevated)] overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.025] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-5 mb-16">
        <AnimateIn variant="fadeUp" delay={0.1}>
          <span className="font-mono text-[11px] text-[var(--accent)] tracking-[5px] uppercase">
            Client Feedback
          </span>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.2}>
          <h2 className="text-[48px] font-bold text-[var(--text-primary)] leading-[1.1] tracking-[-2px] max-w-[600px]">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
        </AnimateIn>
      </div>

      {/* Testimonial Card */}
      <AnimateIn variant="fadeUp" delay={0.3}>
        <div className="relative max-w-[720px] mx-auto p-10 rounded-[16px] bg-[var(--bg-surface)] border border-[var(--border)]"
          style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.3), 0 0 60px rgba(79,142,247,0.03)" }}>
          {/* Quote icon */}
          <div className="absolute -top-5 left-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-[var(--accent)] shadow-[0_0_20px_var(--accent-glow)]">
              <Quote size={18} className="text-white" strokeWidth={2} />
            </div>
          </div>

          {/* Quote text */}
          <p className="text-[20px] text-[var(--text-primary)] leading-[1.65] font-medium mt-2">
            &ldquo;The deployment turnaround time has been remarkable. Additionally, Nox&rsquo;s
            sovereign infrastructure has streamlined our entire AI operations pipeline, reducing
            compliance overhead by 60%.&rdquo;
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[var(--border)]">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-mid)] flex items-center justify-center text-[15px] font-bold text-white">
              JP
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-semibold text-[var(--text-primary)]">James Patterson</span>
              <span className="text-[13px] text-[var(--text-muted)]">CTO, European Defense Consortium</span>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* Stats Row */}
      <AnimateIn variant="fadeUp" delay={0.5} className="mt-16">
        <div className="flex items-center justify-center gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-2 px-16 py-6 ${
                i < stats.length - 1 ? "border-r border-[var(--border)]" : ""
              }`}
            >
              <span className="text-[40px] font-bold gradient-text tracking-[-1px]">{stat.value}</span>
              <span className="text-[13px] text-[var(--text-muted)] tracking-[0.5px]">{stat.label}</span>
            </div>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}

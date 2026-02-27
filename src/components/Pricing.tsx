"use client";

import { Check, ArrowRight } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const plans = [
  {
    tag: "STANDARD",
    price: "$8,500",
    period: "/month",
    description: "For teams deploying their first production AI workloads.",
    features: [
      "Up to 10 active models",
      "Single-region deployment",
      "Standard encryption (AES-256)",
      "5M inference requests/month",
      "Email & chat support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    tag: "ENTERPRISE",
    price: "$32,000",
    period: "/month",
    description: "For organizations requiring multi-region, high-availability deployments.",
    features: [
      "Unlimited active models",
      "Multi-region deployment",
      "HSM key management",
      "50M inference requests/month",
      "Dedicated support engineer",
      "Custom model pipeline",
    ],
    cta: "Request Demo",
    highlighted: true,
  },
  {
    tag: "SOVEREIGN",
    price: "Custom",
    period: "annual contract",
    description:
      "For governments and institutions requiring air-gapped sovereign infrastructure.",
    features: [
      "Everything in Enterprise",
      "Air-gapped deployment",
      "Sovereign data residency",
      "FIPS 140-3 Level 3",
      "On-premises support team",
      "Custom compliance frameworks",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full py-[120px] px-[120px] bg-[var(--bg-primary)]">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-5 mb-16">
        <AnimateIn variant="fadeUp" delay={0.1}>
          <span className="font-mono text-[11px] text-[var(--accent)] tracking-[5px] uppercase">
            Pricing
          </span>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.2}>
          <h2 className="text-[48px] font-bold text-[var(--text-primary)] leading-[1.1] tracking-[-2px] max-w-[640px]">
            Infrastructure scaled to your{" "}
            <span className="gradient-text">operational needs.</span>
          </h2>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.3}>
          <p className="text-[16px] text-[var(--text-secondary)] leading-[1.7]">
            All plans include SOC 2 compliance, 24/7 support, and 99.99% SLA.
          </p>
        </AnimateIn>
      </div>

      {/* Cards */}
      <StaggerContainer className="grid grid-cols-3 gap-5 w-full items-stretch" staggerDelay={0.12}>
        {plans.map((plan) => (
          <StaggerItem key={plan.tag}>
            <div
              className={`relative flex flex-col gap-6 p-8 rounded-[14px] h-full transition-all duration-500 ${
                plan.highlighted
                  ? "bg-[var(--bg-surface)] gradient-border glow-accent"
                  : "bg-[var(--bg-surface)] card-premium"
              }`}
            >
              {/* Enterprise glow */}
              {plan.highlighted && (
                <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-[var(--accent)] opacity-[0.04] blur-[80px] rounded-full pointer-events-none" />
              )}

              {/* Tag */}
              <div className="flex items-center gap-3 relative z-10">
                <span
                  className={`font-mono text-[11px] tracking-[3px] ${
                    plan.highlighted ? "text-[var(--accent)]" : "text-[var(--text-muted)]"
                  }`}
                >
                  {plan.tag}
                </span>
                {plan.highlighted && (
                  <span className="px-2.5 py-1 bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 font-mono text-[8px] font-semibold tracking-[2px] rounded-full">
                    RECOMMENDED
                  </span>
                )}
              </div>

              {/* Price */}
              <div className={`flex relative z-10 ${plan.tag === "SOVEREIGN" ? "flex-col gap-1" : "items-baseline gap-1"}`}>
                <span className={`text-[40px] font-bold tracking-[-1px] ${plan.highlighted ? "gradient-text" : "text-[var(--text-primary)]"}`}>
                  {plan.price}
                </span>
                <span className="text-[14px] text-[var(--text-muted)]">{plan.period}</span>
              </div>

              <p className="text-[14px] text-[var(--text-secondary)] leading-[1.7] relative z-10">
                {plan.description}
              </p>

              <div className="w-full h-px bg-[var(--border)] relative z-10" />

              {/* Features */}
              <div className="flex flex-col gap-3.5 relative z-10">
                {plan.features.map((f) => (
                  <span key={f} className="flex items-center gap-3 text-[14px] text-[var(--text-secondary)]">
                    <Check size={14} className={plan.highlighted ? "text-[var(--accent)]" : "text-[var(--text-muted)]"} strokeWidth={2.5} />
                    {f}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto relative z-10 pt-2">
                {plan.highlighted ? (
                  <a
                    href="#"
                    className="cta-accent flex items-center justify-center gap-2 w-full py-[14px] text-white text-[15px] font-semibold rounded-[10px] transition-all duration-300"
                  >
                    {plan.cta}
                    <ArrowRight size={14} strokeWidth={2} />
                  </a>
                ) : (
                  <a
                    href="#"
                    className="flex items-center justify-center w-full py-[14px] border border-[var(--border)] text-[var(--text-secondary)] text-[15px] font-medium rounded-[10px] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] hover:bg-white/[0.02] transition-all duration-300"
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

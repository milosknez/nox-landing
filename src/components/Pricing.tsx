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
    <section className="flex flex-col items-center gap-12 w-full py-24 px-[120px] bg-[var(--bg-primary)]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[4px]">
          PRICING
        </span>
        <h2 className="text-[40px] font-semibold text-[var(--text-primary)] leading-[1.15] tracking-[-0.8px] text-center max-w-[600px]">
          Infrastructure scaled to your
          <br />
          operational requirements.
        </h2>
        <p className="text-[15px] text-[var(--text-secondary)] text-center">
          All plans include SOC 2 compliance, 24/7 support, and 99.99% SLA.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 w-full items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.tag}
            className={`flex flex-col gap-6 p-7 bg-[var(--bg-surface)] rounded-[4px] border ${
              plan.highlighted
                ? "border-[var(--text-primary)]"
                : "border-[var(--border)]"
            }`}
          >
            {/* Tag */}
            <div className="flex items-center gap-3">
              <span
                className={`font-mono text-[10px] tracking-[3px] ${
                  plan.highlighted ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"
                }`}
              >
                {plan.tag}
              </span>
              {plan.highlighted && (
                <span className="px-2 py-0.5 bg-[var(--cta-bg)] text-[var(--cta-text)] font-mono text-[8px] font-semibold tracking-[2px] rounded-[2px]">
                  RECOMMENDED
                </span>
              )}
            </div>

            {/* Price */}
            <div className={`flex ${plan.tag === "SOVEREIGN" ? "flex-col gap-1" : "items-baseline gap-1"}`}>
              <span className="text-[36px] font-semibold text-[var(--text-primary)] tracking-[-0.5px]">
                {plan.price}
              </span>
              <span className="text-[14px] text-[var(--text-muted)]">{plan.period}</span>
            </div>

            <p className="text-[13px] text-[var(--text-secondary)] leading-[1.5]">
              {plan.description}
            </p>

            <div className="w-full h-px bg-[var(--border)]" />

            {/* Features */}
            <div className="flex flex-col gap-3">
              {plan.features.map((f) => (
                <span
                  key={f}
                  className={`text-[13px] ${
                    plan.highlighted ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto">
              {plan.highlighted ? (
                <a
                  href="#"
                  className="flex items-center justify-center w-full py-[14px] bg-[var(--cta-bg)] text-[var(--cta-text)] text-[14px] font-medium rounded-[4px] hover:opacity-90 transition-opacity"
                >
                  {plan.cta}
                </a>
              ) : (
                <a
                  href="#"
                  className="flex items-center justify-center w-full py-[14px] border border-[var(--border)] text-[var(--text-secondary)] text-[14px] font-medium rounded-[4px] hover:border-[var(--text-secondary)] transition-colors"
                >
                  {plan.cta}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import AnimateIn from "./AnimateIn";

const footerColumns = [
  {
    title: "PLATFORM",
    links: ["Compute Orchestration", "Data Sovereignty", "Model Pipeline", "Security Framework", "Documentation"],
  },
  {
    title: "COMPANY",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "RESOURCES",
    links: ["Blog", "Whitepapers", "Case Studies", "API Reference"],
  },
  {
    title: "LEGAL",
    links: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
  },
];

export default function Footer() {
  return (
    <footer className="relative flex flex-col gap-12 w-full py-16 px-[120px] bg-[var(--bg-primary)]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent" />

      {/* Top */}
      <AnimateIn variant="fadeUp" delay={0.1}>
        <div className="flex justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-[280px]">
            <div className="flex items-center gap-2.5">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="nox-grad-footer" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--gradient-start)" />
                    <stop offset="1" stopColor="var(--gradient-mid)" />
                  </linearGradient>
                </defs>
                <path d="M4 2L24 2C25.1 2 26 2.9 26 4L26 14L14 26L4 26C2.9 26 2 25.1 2 24L2 4C2 2.9 2.9 2 4 2Z" fill="url(#nox-grad-footer)" />
                <path d="M10 8L18 8L18 14L10 20L10 8Z" fill="var(--bg-primary)" opacity="0.9" />
              </svg>
              <span className="text-[15px] font-bold text-[var(--text-primary)] tracking-[4px]">
                NOX
              </span>
            </div>
            <p className="text-[13px] text-[var(--text-muted)] leading-[1.7]">
              Intelligence infrastructure for organizations operating at the intersection of AI and
              critical decision-making.
            </p>
          </div>

          {/* Columns */}
          <div className="flex gap-16">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-[3px]">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

      {/* Bottom */}
      <div className="flex items-center justify-between">
        <span className="text-[12px] text-[var(--text-muted)]">
          &copy; 2026 Nox Systems, Inc. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          {["SOC 2 Type II Certified", "ISO 27001", "FedRAMP"].map((cert) => (
            <span key={cert} className="font-mono text-[10px] text-[var(--text-dark)] tracking-[1px]">
              {cert}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

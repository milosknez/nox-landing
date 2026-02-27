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
    <footer className="flex flex-col gap-12 w-full py-16 px-[120px] bg-[var(--bg-primary)] border-t border-[var(--border)]">
      {/* Top */}
      <div className="flex justify-between">
        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-[260px]">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 bg-[var(--text-primary)] rounded-[2px]">
              <div className="absolute left-[7px] top-[7px] w-[10px] h-[10px] bg-[var(--bg-primary)] rounded-[1px]" />
            </div>
            <span className="text-[14px] font-semibold text-[var(--text-primary)] tracking-[3px]">
              MERIDIAN
            </span>
          </div>
          <p className="text-[13px] text-[var(--text-muted)] leading-[1.65]">
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
                  className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[var(--border)]" />

      {/* Bottom */}
      <div className="flex items-center justify-between">
        <span className="text-[12px] text-[var(--text-muted)]">
          &copy; 2026 Meridian Technologies, Inc. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] text-[var(--text-dark)] tracking-[1px]">
            SOC 2 Type II Certified
          </span>
          <span className="font-mono text-[11px] text-[var(--text-dark)] tracking-[1px]">
            ISO 27001
          </span>
          <span className="font-mono text-[11px] text-[var(--text-dark)] tracking-[1px]">
            FedRAMP
          </span>
        </div>
      </div>
    </footer>
  );
}

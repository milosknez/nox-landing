import { ShieldCheck, Lock, FileCheck, Building2 } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "SOC 2 Type II" },
  { icon: Lock, label: "ISO 27001" },
  { icon: FileCheck, label: "FedRAMP Authorized" },
  { icon: Building2, label: "GDPR Compliant" },
];

const logos = [
  "GOLDMAN SACHS",
  "NORTHROP GRUMMAN",
  "BARCLAYS",
  "NATO",
  "DEUTSCHE BANK",
];

export default function TrustBar() {
  return (
    <section className="flex flex-col items-center gap-8 w-full py-14 px-[120px] bg-[var(--bg-primary)] border-t border-b border-[var(--border)]">
      <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[4px]">
        TRUSTED BY LEADING INSTITUTIONS
      </span>

      {/* Compliance badges */}
      <div className="flex items-center justify-center gap-10 w-full flex-wrap">
        {badges.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-4 py-2 rounded-[4px] border border-[var(--border)]"
          >
            <Icon size={16} className="text-[var(--text-muted)]" strokeWidth={1.5} />
            <span className="text-[12px] font-medium text-[var(--text-secondary)]">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Logo row */}
      <div className="flex items-center justify-center gap-16 w-full flex-wrap">
        {logos.map((name) => (
          <span
            key={name}
            className="text-[12px] font-semibold text-[var(--text-dark)] tracking-[2px]"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

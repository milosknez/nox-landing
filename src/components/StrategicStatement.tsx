import { ArrowRight } from "lucide-react";

export default function StrategicStatement() {
  return (
    <section className="flex flex-col items-center gap-10 w-full py-[120px] px-[120px] bg-[var(--bg-elevated)] border-t border-b border-[var(--border)]">
      <div className="w-12 h-px bg-[var(--accent)]" />

      <h2 className="text-[36px] font-medium text-[var(--text-primary)] text-center leading-[1.35] tracking-[-0.8px] max-w-[800px]">
        The organizations that will define the next decade are building their intelligence
        infrastructure today.
      </h2>

      <p className="text-[15px] text-[var(--text-secondary)] text-center leading-[1.6]">
        Meridian was founded with a single conviction: sovereign AI
        <br />
        capabilities should not require sovereign-scale budgets.
      </p>

      <a
        href="#"
        className="flex items-center gap-2 px-8 py-4 bg-[var(--cta-bg)] text-[var(--cta-text)] text-[14px] font-medium tracking-[0.3px] rounded-[4px] hover:opacity-90 transition-opacity"
      >
        Schedule a Strategic Briefing <ArrowRight size={14} />
      </a>

      <div className="w-12 h-px bg-[var(--accent)]" />
    </section>
  );
}

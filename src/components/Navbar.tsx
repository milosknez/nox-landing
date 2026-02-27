import { ArrowRight } from "lucide-react";

const navLinks = ["Platform", "Infrastructure", "Security", "Case Studies", "Pricing"];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full h-[72px] px-16 border-b border-[var(--border)] bg-[var(--bg-primary)]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="relative w-7 h-7 bg-[var(--text-primary)] rounded-[2px]">
          <div className="absolute left-[8px] top-[8px] w-3 h-3 bg-[var(--bg-primary)] rounded-[1px]" />
        </div>
        <span className="text-[16px] font-semibold text-[var(--text-primary)] tracking-[3px]">
          MERIDIAN
        </span>
      </div>

      {/* Center Links */}
      <div className="flex items-center gap-9">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="text-[13px] text-[var(--text-secondary)] tracking-[0.5px] hover:text-[var(--text-primary)] transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="text-[13px] text-[var(--text-secondary)] tracking-[0.5px] hover:text-[var(--text-primary)] transition-colors"
        >
          Sign In
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-5 py-[10px] bg-[var(--cta-bg)] text-[var(--cta-text)] text-[13px] font-medium tracking-[0.5px] rounded-[4px] hover:opacity-90 transition-opacity"
        >
          Request Access
        </a>
      </div>
    </nav>
  );
}

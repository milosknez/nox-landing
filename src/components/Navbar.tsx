"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = ["Platform", "Infrastructure", "Security", "Case Studies", "Pricing"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 flex items-center justify-between w-full h-[72px] px-16 border-b border-white/[0.06] glass"
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="relative w-7 h-7 rounded-[3px] bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-mid)]">
          <div className="absolute left-[8px] top-[8px] w-3 h-3 bg-[var(--bg-primary)] rounded-[2px]" />
        </div>
        <span className="text-[15px] font-semibold text-[var(--text-primary)] tracking-[3px]">
          MERIDIAN
        </span>
      </div>

      {/* Center Links */}
      <div className="flex items-center gap-9">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="text-[13px] text-[var(--text-muted)] tracking-[0.3px] hover:text-[var(--text-primary)] transition-all duration-300"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="text-[13px] text-[var(--text-secondary)] tracking-[0.3px] hover:text-[var(--text-primary)] transition-all duration-300"
        >
          Sign In
        </a>
        <a
          href="#"
          className="cta-shimmer flex items-center gap-2 px-5 py-[10px] bg-[var(--cta-bg)] text-[var(--cta-text)] text-[13px] font-medium tracking-[0.3px] rounded-[6px] hover:shadow-[0_0_20px_rgba(241,245,249,0.15)] transition-all duration-300"
        >
          Request Access <ArrowRight size={13} strokeWidth={2} />
        </a>
      </div>
    </motion.nav>
  );
}

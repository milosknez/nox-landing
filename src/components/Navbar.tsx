"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowRight, ChevronDown, Cpu, Database, Network, Shield, BarChart3, Zap, BookOpen, FileText, Users, Headphones, GraduationCap, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Dropdown Content Definitions ── */
const platformMenu = {
  width: 680,
  columns: [
    {
      title: "INFRASTRUCTURE",
      items: [
        { icon: Cpu, label: "Compute Orchestration", desc: "Distributed GPU clusters with automatic failover", href: "#infrastructure" },
        { icon: Database, label: "Data Sovereignty", desc: "Air-gapped deployments with residency controls", href: "#infrastructure" },
        { icon: Network, label: "Model Pipeline", desc: "End-to-end ML lifecycle management", href: "#infrastructure" },
        { icon: Shield, label: "Zero-Trust Security", desc: "Hardware-level encryption, FIPS 140-3", href: "#security" },
      ],
    },
    {
      title: "OPERATIONS",
      items: [
        { icon: BarChart3, label: "Operations Dashboard", desc: "Unified command surface for AI workloads", href: "#platform" },
        { icon: Zap, label: "Real-Time Inference", desc: "Sub-millisecond model serving at scale", href: "#platform" },
      ],
    },
  ],
};

const resourcesMenu = {
  width: 560,
  columns: [
    {
      title: "LEARN",
      items: [
        { icon: BookOpen, label: "Documentation", desc: "API reference and integration guides", href: "#" },
        { icon: FileText, label: "Whitepapers", desc: "Technical deep-dives and research", href: "#" },
        { icon: GraduationCap, label: "Case Studies", desc: "Real-world deployment stories", href: "#case-studies" },
      ],
    },
    {
      title: "SUPPORT",
      items: [
        { icon: Headphones, label: "Contact Sales", desc: "Talk to our solutions team", href: "#" },
        { icon: Users, label: "Community", desc: "Connect with other operators", href: "#" },
        { icon: ExternalLink, label: "Status Page", desc: "Real-time system health", href: "#" },
      ],
    },
  ],
};

type MenuKey = "platform" | "resources";

const dropdownMenus: Record<MenuKey, typeof platformMenu> = {
  platform: platformMenu,
  resources: resourcesMenu,
};

const navItems: { label: string; key?: MenuKey; href?: string }[] = [
  { label: "Platform", key: "platform" },
  { label: "Resources", key: "resources" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const clearCloseTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setIsHovering(false);
    }, 200);
  }, [clearCloseTimeout]);

  const handleNavEnter = useCallback((key: MenuKey) => {
    clearCloseTimeout();
    setActiveMenu(key);
    setIsHovering(true);
  }, [clearCloseTimeout]);

  const handleDropdownEnter = useCallback(() => {
    clearCloseTimeout();
  }, [clearCloseTimeout]);

  const handleDropdownLeave = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  const handleNavItemLeave = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setIsHovering(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const currentMenu = activeMenu ? dropdownMenus[activeMenu] : null;

  // Calculate dropdown position based on active nav item
  const getDropdownPosition = () => {
    if (!navRef.current || !activeMenu) return { left: 0 };
    const navItems = navRef.current.querySelectorAll("[data-nav-key]");
    for (const item of navItems) {
      if ((item as HTMLElement).dataset.navKey === activeMenu) {
        const rect = item.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2 - navRect.left;
        const menuWidth = currentMenu?.width || 600;
        return { left: Math.max(0, itemCenter - menuWidth / 2) };
      }
    }
    return { left: 0 };
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full border-b border-white/[0.06] glass"
    >
      <div className="relative flex items-center justify-between h-[72px] px-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nox-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--gradient-start)" />
                <stop offset="1" stopColor="var(--gradient-mid)" />
              </linearGradient>
            </defs>
            <path d="M4 2L24 2C25.1 2 26 2.9 26 4L26 14L14 26L4 26C2.9 26 2 25.1 2 24L2 4C2 2.9 2.9 2 4 2Z" fill="url(#nox-grad)" />
            <path d="M10 8L18 8L18 14L10 20L10 8Z" fill="var(--bg-primary)" opacity="0.9" />
          </svg>
          <span className="text-[17px] font-bold text-[var(--text-primary)] tracking-[4px]">
            NOX
          </span>
        </div>

        {/* Center Links */}
        <div ref={navRef} className="flex items-center gap-1">
          {navItems.map((item) =>
            item.key ? (
              <button
                key={item.label}
                data-nav-key={item.key}
                onMouseEnter={() => handleNavEnter(item.key!)}
                onMouseLeave={handleNavItemLeave}
                className={`flex items-center gap-1 px-4 py-2 text-[13px] tracking-[0.3px] rounded-[6px] transition-all duration-200 ${
                  activeMenu === item.key
                    ? "text-[var(--text-primary)] bg-white/[0.05]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
                <ChevronDown
                  size={12}
                  strokeWidth={2}
                  className={`transition-transform duration-200 ${activeMenu === item.key ? "rotate-180" : ""}`}
                />
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => {
                  scheduleClose();
                }}
                className="px-4 py-2 text-[13px] text-[var(--text-muted)] tracking-[0.3px] hover:text-[var(--text-primary)] transition-all duration-200 rounded-[6px]"
              >
                {item.label}
              </a>
            )
          )}
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
      </div>

      {/* ── Mega Menu Dropdown ── */}
      <AnimatePresence>
        {activeMenu && currentMenu && (
          <motion.div
            className="absolute left-0 right-0 top-[72px] flex justify-center pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="pointer-events-auto"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
              style={{ position: "relative" }}
            >
              {/* Animated container — morphs width/height like Stripe */}
              <motion.div
                className="relative mt-3 rounded-[12px] overflow-hidden"
                style={{
                  background: "rgba(10, 15, 28, 0.95)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(59,130,246,0.06)",
                }}
                layout
                transition={{
                  layout: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                }}
              >
                {/* Arrow notch */}
                <motion.div
                  className="absolute -top-[6px] w-3 h-3 rotate-45 rounded-[2px]"
                  style={{
                    background: "rgba(10, 15, 28, 0.95)",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    borderLeft: "1px solid rgba(255,255,255,0.08)",
                    left: currentMenu.width / 2 - 6,
                  }}
                  layout
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                />

                {/* Content area with cross-fade */}
                <motion.div
                  style={{ width: currentMenu.width }}
                  layout
                  transition={{ layout: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMenu}
                      initial={{ opacity: 0, x: activeMenu === "resources" ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: activeMenu === "resources" ? -20 : 20 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="flex gap-0 p-6"
                    >
                      {currentMenu.columns.map((col, colIdx) => (
                        <div
                          key={col.title}
                          className={`flex-1 flex flex-col gap-1 ${
                            colIdx > 0 ? "border-l border-white/[0.06] pl-6 ml-6" : ""
                          }`}
                        >
                          <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-[3px] mb-3 px-3">
                            {col.title}
                          </span>
                          {col.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => {
                                setActiveMenu(null);
                                setIsHovering(false);
                              }}
                              className="group flex items-start gap-3 px-3 py-2.5 rounded-[8px] hover:bg-white/[0.04] transition-all duration-200"
                            >
                              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-[6px] bg-[var(--accent)]/10 border border-[var(--accent)]/15 group-hover:bg-[var(--accent)]/15 group-hover:border-[var(--accent)]/25 transition-all duration-200 mt-0.5">
                                <item.icon size={15} className="text-[var(--accent)]" strokeWidth={1.5} />
                              </div>
                              <div className="flex flex-col gap-0.5">
                                <span className="text-[13px] font-medium text-[var(--text-primary)] group-hover:text-white transition-colors duration-200">
                                  {item.label}
                                </span>
                                <span className="text-[12px] text-[var(--text-muted)] leading-[1.4] group-hover:text-[var(--text-secondary)] transition-colors duration-200">
                                  {item.desc}
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

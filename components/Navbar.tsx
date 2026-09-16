"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 30));
    return unsub;
  }, [scrollY]);

  // Track active section for indicator
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 sm:pt-5 pointer-events-none"
    >
      {/* Floating Island Shell (Single refined border, no double-bezel) */}
      <div
        className={`pointer-events-auto flex items-center justify-between gap-6 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-[#090c12]/90 border-white/[0.12] backdrop-blur-2xl shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
            : "bg-[#090c12]/60 border-white/[0.08] backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="font-bold text-sm tracking-tight text-white hover:text-slate-200 transition-colors flex items-center gap-1.5 focus-visible:ring-1 focus-visible:ring-white/40 rounded-full px-2"
        >
          <span className="font-mono text-xs text-slate-400">~/</span>
          <span>Phi</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/90 inline-block" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-tight transition-colors duration-200 rounded-full ${
                  isActive ? "text-white font-semibold" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.12]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full text-xs font-medium tracking-tight border border-white/[0.15] text-white bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/30 transition-all duration-200 active:scale-95"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8 rounded-full border border-white/10 bg-white/[0.03] text-white"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-3.5 h-0.5 bg-white transition-all duration-200 ${
              mobileOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-3.5 h-0.5 bg-white transition-all duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-3.5 h-0.5 bg-white transition-all duration-200 ${
              mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="pointer-events-auto absolute top-16 inset-x-4 max-w-sm mx-auto bg-[#090c12]/95 backdrop-blur-2xl border border-white/[0.1] rounded-2xl p-4 flex flex-col gap-2 shadow-2xl"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center py-2 rounded-xl font-semibold text-xs tracking-tight bg-white text-slate-950 hover:bg-slate-200 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

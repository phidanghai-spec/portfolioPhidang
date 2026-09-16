"use client";

import { motion } from "framer-motion";
import Magnet from "./Magnet";
import { ArrowDown, Terminal, CheckCircle2, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden px-6 pt-36 sm:pt-44 pb-20 sm:pb-28"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ── Left Column: Typography & Positioning (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Status pill: single, understated eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="flex items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] font-mono font-medium text-slate-300">
                  Open for Internship &bull; HUFLIT &apos;27
                </span>
              </div>
            </motion.div>

            {/* Headline with disciplined typographic presence */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.035em] text-white leading-[1.05]">
                Engineering robust APIs &amp;{" "}
                <span className="heading-silver">layered systems.</span>
              </h1>
            </motion.div>

            {/* Subheading / Bio */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="max-w-xl text-base sm:text-lg font-light text-slate-400 leading-relaxed"
            >
              Đặng Hải Phi — Fullstack &amp; Backend Developer tập trung vào kiến trúc phân tầng (3-Tier Layered), chuẩn hóa mẫu thiết kế (15 Design Patterns), và xây dựng kịch bản kiểm thử tự động tin cậy.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="flex items-center gap-3.5 flex-wrap pt-1"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-xs font-semibold tracking-tight bg-white text-slate-950 hover:bg-slate-200 transition-all duration-200 active:scale-[0.98] shadow-sm"
              >
                Explore Case Studies
              </a>
              <a
                href="https://github.com/phidanghai-spec"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full text-xs font-medium tracking-tight border border-white/[0.12] text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/[0.03] transition-all duration-200 active:scale-[0.98]"
              >
                GitHub Profile &rarr;
              </a>
            </motion.div>

            {/* Quick Metrics — Strictly Verified Facts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.06] max-w-lg"
            >
              {[
                { value: "50+", label: "RESTful APIs", detail: "Documented & Tested" },
                { value: "15", label: "Design Patterns", detail: "Structural & Behavioral" },
                { value: "92", label: "Unit Tests Passed", detail: "100% Green Suite" },
              ].map(({ value, label, detail }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-semibold text-white tabular-nums tracking-tight font-mono">
                    {value}
                  </span>
                  <span className="text-xs font-medium text-slate-300 tracking-tight mt-0.5">
                    {label}
                  </span>
                  <span className="text-[10px] text-slate-400 tracking-tight">
                    {detail}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column: Double-Bezel Hardware / Console Node (5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <Magnet padding={40} strength={{ x: 0.15, y: 0.15 }}>
              {/* Double-Bezel Shell 1/2 */}
              <div className="double-bezel-shell w-full max-w-[380px]">
                {/* Double-Bezel Core */}
                <div className="double-bezel-core p-6 flex flex-col gap-5">
                  {/* Console Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div className="flex items-center gap-2">
                      <Terminal size={14} className="text-slate-400" />
                      <span className="text-xs font-mono font-medium text-slate-300">system.spec</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      <span className="text-[10px] font-mono text-slate-300">ONLINE</span>
                    </div>
                  </div>

                  {/* Architecture Checklist Nodes */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-slate-300 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">3-Tier Layered Arch</p>
                        <p className="text-[11px] text-slate-400 font-sans mt-0.5">Controller &rarr; Service &rarr; Repository pattern</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-3">
                      <ShieldCheck size={15} className="text-slate-300 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">Automated Verification</p>
                        <p className="text-[11px] text-slate-400 font-sans mt-0.5">Page Object Model (POM) &amp; NUnit / xUnit</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-3">
                      <span className="text-slate-400 font-bold shrink-0 mt-0.5">&lambda;</span>
                      <div>
                        <p className="text-white font-medium">Pattern Rigor</p>
                        <p className="text-[11px] text-slate-400 font-sans mt-0.5">15 Design Patterns applied across systems</p>
                      </div>
                    </div>
                  </div>

                  {/* Node footer stamp */}
                  <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-slate-300 border-t border-white/[0.05]">
                    <span>STACK // ASP.NET &bull; NEXT &bull; SQL</span>
                    <span>v2.6</span>
                  </div>
                </div>
              </div>
            </Magnet>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-16 sm:mt-24 flex justify-center"
        >
          <a
            href="#tech-stack"
            className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            aria-label="Scroll to tech stack"
          >
            <span>DISCOVER SYSTEM</span>
            <ArrowDown size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

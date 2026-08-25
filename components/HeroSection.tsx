"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Magnet from "./Magnet";
import { ArrowDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-6 pt-20 pb-16"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-[550px] h-[550px] rounded-full bg-teal-500/10 blur-[150px]" />
        <div className="absolute top-1/3 -right-48 w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-indigo-500/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ── Left: Text (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-7">
            {/* Status pill with micro-glow */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-950/40 backdrop-blur-md shadow-[0_0_20px_rgba(45,212,191,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
                </span>
                <span className="text-[11px] font-semibold text-teal-300 uppercase tracking-widest">
                  Open for Internship Opportunities
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5 border border-white/[0.06] bg-white/[0.02] px-3 py-1 rounded-full">
                <Sparkles size={12} className="text-cyan-400" />
                <span>HUFLIT &middot; Class of 2027</span>
              </span>
            </motion.div>

            {/* Heading — tight tracking & massive presence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-black uppercase leading-[0.95] tracking-[-0.03em]">
                <span className="text-white">Hi, i&apos;m</span>
                <br />
                <span className="hero-heading">Phi</span>
              </h1>
            </motion.div>

            {/* Bio — balanced text wrap */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="max-w-lg text-sm sm:text-base font-light uppercase tracking-wide text-slate-400 leading-relaxed text-balance"
            >
              fullstack developer intern turning oop principles and design
              patterns into real, working products
            </motion.p>

            {/* CTA buttons with spring interactions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-4 flex-wrap pt-1"
            >
              <a
                href="#contact"
                className="group relative px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider overflow-hidden
                  bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 text-slate-950
                  shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:shadow-[0_0_45px_rgba(45,212,191,0.6)]
                  transition-all duration-300 active:scale-[0.97]"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-white/25 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/phidanghai-spec"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider border border-white/15
                  text-slate-200 hover:text-white hover:border-teal-500/40 hover:bg-white/[0.04]
                  transition-all duration-300 active:scale-[0.97] backdrop-blur-sm"
              >
                GitHub Profile
              </a>
            </motion.div>

            {/* Quick stats with tabular figures */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.06] max-w-md"
            >
              {[
                { value: "50+", label: "REST APIs", sub: "Scalable Arch" },
                { value: "12", label: "GoF Patterns", sub: "Clean OOP" },
                { value: "69", label: "Unit Tests", sub: "Isolation QA" },
              ].map(({ value, label, sub }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-white tabular-nums tracking-tight font-mono">
                    {value}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-0.5">
                    {label}
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wide">
                    {sub}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Hero visual with Magnet (5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <Magnet padding={50} strength={{ x: 0.25, y: 0.25 }}>
              <div className="relative w-[280px] sm:w-[350px] md:w-[420px] aspect-square rounded-3xl p-3 glass-panel group">
                {/* Visual glow frame */}
                <div className="absolute inset-0 rounded-3xl bg-teal-500/10 blur-2xl group-hover:bg-teal-500/20 transition-all duration-500" />
                
                {/* Holographic corner markers */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-teal-400" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-teal-400" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-teal-400" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-teal-400" />

                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#070a12]">
                  <Image
                    src="/hero-visual.jpg"
                    alt="Abstract 3D geometric visual — Đặng Hải Phi portfolio"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, 420px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/80 via-transparent to-transparent" />
                  
                  {/* Subtle technical tag at bottom */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-teal-300 px-2 py-0.5 rounded bg-[#090d16]/80 border border-teal-500/30 backdrop-blur-sm">
                      DEV_ID #DHP-2026
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-[#090d16]/80 px-2 py-0.5 rounded border border-white/10">
                      FULLSTACK INTERN
                    </span>
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
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-center gap-2 text-slate-500"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-widest hover:text-teal-300 transition-colors"
            aria-label="Scroll to about"
          >
            <span>Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} className="text-teal-400" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

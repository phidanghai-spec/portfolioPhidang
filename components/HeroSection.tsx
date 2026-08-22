"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Magnet from "./Magnet";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-teal-500/8 blur-[140px]" />
        <div className="absolute top-1/3 -right-64 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-60 bg-violet-500/4 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ── Left: Text ── */}
          <div className="flex flex-col gap-8">
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 w-fit"
            >
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-950/30 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
                </span>
                <span className="text-xs font-medium text-teal-300 uppercase tracking-widest">
                  Open for Opportunities
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase leading-none tracking-tight">
                <span className="text-white">Hi, i&apos;m</span>
                <br />
                <span className="hero-heading">Phi</span>
              </h1>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="max-w-md text-sm sm:text-base font-light uppercase tracking-wide text-white/50 leading-relaxed"
            >
              fullstack developer intern turning oop principles and design
              patterns into real, working products
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider overflow-hidden
                  bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950
                  hover:shadow-[0_0_40px_-4px_rgba(45,212,191,0.6)] transition-all duration-300 active:scale-95"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/phidanghai-spec"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider border border-white/15
                  text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 active:scale-95"
              >
                GitHub
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-8 pt-2"
            >
              {[
                { value: "50+", label: "API Endpoints" },
                { value: "12", label: "GoF Patterns" },
                { value: "69", label: "Unit Tests" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-black text-white">{value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Hero visual with Magnet ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center"
          >
            <Magnet padding={60} strength={{ x: 0.3, y: 0.3 }}>
              <div className="relative w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] aspect-square">
                {/* Outer ring glow */}
                <div className="absolute inset-0 rounded-full bg-teal-500/10 blur-3xl scale-110" />
                {/* Corner bracket decoration */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-teal-400/60" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-teal-400/60" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-teal-400/60" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-teal-400/60" />
                <Image
                  src="/hero-visual.jpg"
                  alt="Abstract 3D geometric visual — Đặng Hải Phi portfolio"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, (max-width: 1024px) 440px, 520px"
                  className="object-cover rounded-2xl"
                />
              </div>
            </Magnet>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

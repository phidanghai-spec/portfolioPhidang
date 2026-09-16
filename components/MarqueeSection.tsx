"use client";

import dynamic from "next/dynamic";
import FadeIn from "./FadeIn";
import { Terminal, Cpu } from "lucide-react";

// Dynamic import with SSR disabled for Three.js WebGL canvas
const TechKeyboard3D = dynamic(() => import("@/components/TechKeyboard3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[460px] rounded-3xl border border-white/[0.08] bg-[#090c12] flex items-center justify-center">
      <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400 animate-pulse">
        <Cpu size={15} />
        <span>INITIALIZING 3D MECHANICAL HARDWARE STACK...</span>
      </div>
    </div>
  ),
});

export default function MarqueeSection() {
  return (
    <section id="tech-stack" className="py-24 sm:py-32 relative border-y border-white/[0.06] bg-[#07090e]/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <FadeIn y={14}>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-2.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <Terminal size={12} className="text-slate-400" />
                <span>Ecosystem // Core Technologies</span>
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Interactive Hardware Stack
              </h2>
            </div>
          </FadeIn>

          <FadeIn y={12} delay={0.1}>
            <p className="text-xs sm:text-sm font-light text-slate-400 max-w-md leading-relaxed">
              Bàn phím 3D đúc nguyên khối: xoay 360&deg; và tương tác trực tiếp trên từng switch để kiểm tra các công nghệ Backend, Frontend, Database và Testing cốt lõi.
            </p>
          </FadeIn>
        </div>

        {/* 3D Realistic Mechanical Keyboard Component with Double-Bezel */}
        <FadeIn y={16} delay={0.15}>
          <TechKeyboard3D />
        </FadeIn>
      </div>
    </section>
  );
}

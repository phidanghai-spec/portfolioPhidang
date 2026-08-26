"use client";

import Image from "next/image";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";
import { GraduationCap, MapPin, Award, Calendar } from "lucide-react";

const BIO =
  "Currently a final-year software engineering student at HUFLIT with a strong foundation in object-oriented programming and 12 GoF design patterns. Hands-on experience across the full development cycle — system analysis, role-based API design, unit testing, and end-to-end system testing. Looking for a fullstack developer internship to contribute to real-world products and grow alongside an experienced engineering team.";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <FadeIn y={16} delay={0}>
          <p className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>About // Who I Am</span>
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Bio text & Key profile facts (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn y={20} delay={0.05}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.02em] text-white mb-8 leading-[1.05]">
                Building real,<br />
                <span className="hero-heading">working</span><br />
                products.
              </h2>
            </FadeIn>

            <div className="text-base sm:text-lg font-light leading-relaxed text-slate-300 text-pretty">
              <AnimatedText text={BIO} stagger={0.006} delay={0.15} />
            </div>

            {/* Quick facts in glass interactive cards */}
            <FadeIn y={16} delay={0.35} className="mt-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: GraduationCap, label: "University", value: "HUFLIT", color: "text-teal-400" },
                  { icon: Award, label: "GPA", value: "3.0 / 4.0", color: "text-cyan-400" },
                  { icon: Calendar, label: "Cohort", value: "Class 2027", color: "text-sky-400" },
                  { icon: MapPin, label: "Location", value: "TP. Hồ Chí Minh", color: "text-emerald-400" },
                ].map(({ icon: Icon, label, value, color }) => (
                  <div
                    key={label}
                    className="p-4 rounded-2xl glass-panel-interactive flex flex-col justify-between gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <Icon size={16} className={color} />
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">SPEC</span>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-mono mb-0.5">{label}</p>
                      <p className="text-sm font-bold text-white tracking-tight">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: 4 geometric decorator images in an asymmetric glass composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              <FadeIn x={-15} y={15} delay={0.1}>
                <div className="aspect-square rounded-2xl overflow-hidden glass-panel p-2 group cursor-default">
                  <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#070a12]">
                    <Image
                      src="/images/about-geo-1.svg"
                      alt="Wireframe cube — abstract geometric"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/70 via-transparent to-transparent" />
                  </div>
                </div>
              </FadeIn>

              <FadeIn x={15} y={15} delay={0.15}>
                <div className="aspect-square rounded-2xl overflow-hidden glass-panel p-2 mt-8 group cursor-default">
                  <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#070a12]">
                    <Image
                      src="/images/about-geo-2.svg"
                      alt="Wireframe sphere — abstract geometric"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/70 via-transparent to-transparent" />
                  </div>
                </div>
              </FadeIn>

              <FadeIn x={-15} y={-15} delay={0.2}>
                <div className="aspect-square rounded-2xl overflow-hidden glass-panel p-2 -mt-8 group cursor-default">
                  <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#070a12]">
                    <Image
                      src="/images/about-geo-3.svg"
                      alt="Octahedron constellation — abstract geometric"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/70 via-transparent to-transparent" />
                  </div>
                </div>
              </FadeIn>

              <FadeIn x={15} y={-15} delay={0.25}>
                <div className="aspect-square rounded-2xl overflow-hidden glass-panel p-2 group cursor-default">
                  <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#070a12]">
                    <Image
                      src="/images/about-geo-4.svg"
                      alt="Geometric cluster — abstract 3D"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/70 via-transparent to-transparent" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

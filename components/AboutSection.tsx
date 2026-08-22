"use client";

import Image from "next/image";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";

const BIO =
  "Currently a final-year software engineering student at HUFLIT with a strong foundation in object-oriented programming and 12 GoF design patterns. Hands-on experience across the full development cycle — system analysis, role-based API design, unit testing, and end-to-end system testing. Looking for a fullstack developer internship to contribute to real-world products and grow alongside an experienced engineering team.";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <FadeIn y={16} delay={0}>
          <p className="text-xs uppercase tracking-widest text-white/30 font-medium mb-6">
            About // Who I Am
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio text */}
          <div>
            <FadeIn y={20} delay={0.05}>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-10 leading-tight">
                Building real,<br />
                <span className="hero-heading">working</span><br />
                products.
              </h2>
            </FadeIn>

            <div className="text-base sm:text-lg font-light leading-relaxed text-white/70">
              <AnimatedText text={BIO} stagger={0.008} delay={0.2} />
            </div>

            {/* Quick facts */}
            <FadeIn y={16} delay={0.4} className="mt-10">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "School", value: "HUFLIT" },
                  { label: "GPA", value: "3.0 / 4.0" },
                  { label: "Location", value: "Tân Phú, HCM" },
                  { label: "Year", value: "Final Year" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="p-4 rounded-2xl border border-white/8 bg-white/[0.03]"
                  >
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{label}</p>
                    <p className="text-sm font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: 4 geometric decorator images in a 2×2 grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <FadeIn x={-20} delay={0.1}>
                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/about-tl.jpg"
                    alt="Wireframe cube — abstract geometric"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FadeIn>

              <FadeIn x={20} delay={0.15}>
                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 mt-8">
                  <Image
                    src="/about-tr.jpg"
                    alt="Wireframe sphere — abstract geometric"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FadeIn>

              <FadeIn x={-20} delay={0.2}>
                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 -mt-8">
                  <Image
                    src="/about-bl.jpg"
                    alt="Octahedron constellation — abstract geometric"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FadeIn>

              <FadeIn x={20} delay={0.25}>
                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/about-br.jpg"
                    alt="Geometric cluster — abstract 3D"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

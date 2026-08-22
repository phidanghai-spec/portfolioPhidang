"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ExternalLink, GitFork, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  id: string;
  num: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string };
  techStack: string[];
  img1: ProjectImage;
  img2: ProjectImage;
  img3: ProjectImage;
  btnLabel: string;
  btnHref: string;
  btnExternal?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "techstore",
    num: "01",
    category: "Fullstack Development",
    title: "TechStore",
    subtitle: "Graduation Project",
    description:
      "E-commerce platform with 50+ RESTful APIs, real-time Customer–Admin chat via Socket.io, quad-gateway checkout (MoMo, VNPay, PayPal, COD), and role-based JWT auth. Achieved 100/100 Google Lighthouse audit.",
    metrics: { label: "API Endpoints", value: "50+" },
    techStack: ["Next.js", "ASP.NET Core", "Node.js", "Prisma ORM", "TiDB Cloud", "Socket.io"],
    img1: { src: "/images/projects/techstore-1.jpg", alt: "TechStore storefront" },
    img2: { src: "/images/projects/techstore-2.jpg", alt: "TechStore cart & checkout" },
    img3: { src: "/images/projects/techstore-3.jpg", alt: "TechStore admin dashboard" },
    btnLabel: "Live Project",
    btnHref: "https://frontend-ruby-phi-14.vercel.app",
    btnExternal: true,
  },
  {
    id: "cineverse",
    num: "02",
    category: "System Design & Backend",
    title: "CineVerse",
    subtitle: "Design Patterns Course",
    description:
      "Cinema ticket booking system implementing strict 3-Tier Layered Architecture and 12 GoF Design Patterns (Factory, Strategy, Singleton, Decorator). Hardened with 69 isolated unit tests verifying pricing logic and role authorization.",
    metrics: { label: "GoF Patterns", value: "12 Patterns" },
    techStack: ["C#", "Python", "SQLite", "12 GoF Patterns", "Unit Testing"],
    img1: { src: "/images/projects/cineverse-1.jpg", alt: "CineVerse seat selection" },
    img2: { src: "/images/projects/cineverse-2.jpg", alt: "CineVerse movie list" },
    img3: { src: "/images/projects/cineverse-3.jpg", alt: "CineVerse admin panel" },
    btnLabel: "View Code",
    btnHref: "https://github.com/phidanghai-spec/cineverse",
    btnExternal: true,
  },
  {
    id: "datvexe",
    num: "03",
    category: "Automation QA Testing",
    title: "DatVeXe",
    subtitle: "Software Quality Assurance",
    description:
      "End-to-end Selenium WebDriver automation test suite for a multi-route bus ticket booking platform. Reduced manual QA regression cycles by 70% with deterministic NUnit test runners.",
    metrics: { label: "Manual QA Saved", value: "70% Faster" },
    techStack: ["C#", "Selenium WebDriver", "Visual Studio", "NUnit"],
    img1: { src: "/images/projects/datvexe-1.jpg", alt: "DatVeXe Visual Studio Test Explorer matrix" },
    img2: { src: "/images/projects/datvexe-2.jpg", alt: "DatVeXe NUnit CLI test runner output" },
    img3: { src: "/images/projects/datvexe-3.jpg", alt: "DatVeXe Selenium WebDriver automated browser session" },
    btnLabel: "View Code",
    btnHref: "https://github.com/phidanghai-spec/datvexe-selenium-test",
    btnExternal: true,
  },
];

/** Single stacking card with incremental top offset */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale down slightly as subsequent cards overlap
  const scale = useTransform(scrollYProgress, [0.65, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0.4]);

  // Staggered top offset for realistic physical deck stack
  const topOffset = `${4.5 + index * 1.5}rem`;

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        top: topOffset,
      }}
      className="sticky rounded-3xl border border-white/[0.1] bg-[#0c1220]/95 backdrop-blur-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] transition-shadow duration-300 hover:shadow-[0_30px_70px_rgba(0,0,0,0.7),0_0_30px_rgba(45,212,191,0.15)] group"
    >
      {/* Top accent gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500" />

      <div className="p-7 sm:p-9 lg:p-10">
        {/* Card header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono text-teal-400 font-semibold uppercase tracking-widest">
                {project.num} // {project.category}
              </span>
              <span className="text-xs text-slate-500 font-mono">&bull; {project.subtitle}</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white group-hover:text-teal-200 transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {/* Metric pill */}
            <div className="hidden sm:flex flex-col items-end px-3.5 py-1.5 rounded-xl border border-teal-500/30 bg-teal-950/40 text-right">
              <span className="text-sm font-mono font-bold text-teal-300">{project.metrics.value}</span>
              <span className="text-[9px] uppercase tracking-wider text-slate-400">{project.metrics.label}</span>
            </div>

            {/* Action button */}
            <a
              href={project.btnHref}
              target={project.btnExternal ? "_blank" : undefined}
              rel={project.btnExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-xs font-bold uppercase tracking-wider text-white bg-white/[0.04] hover:bg-teal-500 hover:text-slate-950 hover:border-teal-400 transition-all duration-200 active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            >
              {project.btnLabel === "Live Project" ? (
                <ExternalLink size={13} />
              ) : (
                <GitFork size={13} />
              )}
              <span>{project.btnLabel}</span>
            </a>
          </div>
        </div>

        {/* Image grid: 40/60 asymmetric composition */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 mb-8">
          {/* Left col: 2 stacked images (40%) */}
          <div className="md:col-span-2 flex flex-col gap-3.5">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#070a12] relative group/img">
              <Image
                src={project.img1.src}
                alt={project.img1.alt}
                width={600}
                height={375}
                className="w-full h-full object-cover group-hover/img:scale-106 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#070a12] relative group/img">
              <Image
                src={project.img2.src}
                alt={project.img2.alt}
                width={600}
                height={375}
                className="w-full h-full object-cover group-hover/img:scale-106 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Right col: tall high-focus image (60%) */}
          <div className="md:col-span-3 rounded-2xl overflow-hidden border border-white/10 bg-[#070a12] relative group/img aspect-[16/10] md:aspect-auto">
            <Image
              src={project.img3.src}
              alt={project.img3.alt}
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Description + tech stack pills */}
        <div className="flex flex-col lg:flex-row gap-6 items-start justify-between border-t border-white/[0.06] pt-6">
          <p className="text-sm font-light text-slate-300 leading-relaxed max-w-2xl text-pretty">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 max-w-md">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-[11px] font-mono border border-white/10 text-slate-300 bg-white/[0.02]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <FadeIn y={20}>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Case Studies // Engineering Portfolio</span>
              </p>
              <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-white">
                Projects
              </h2>
            </div>
          </FadeIn>
          <FadeIn y={16} delay={0.1}>
            <p className="text-sm font-light text-slate-400 max-w-sm leading-relaxed text-pretty">
              3 real-world engineering case studies showcasing layered architecture, real-time e-commerce, and automated QA suites.
            </p>
          </FadeIn>
        </div>

        {/* Card-stacking container */}
        <div className="flex flex-col gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

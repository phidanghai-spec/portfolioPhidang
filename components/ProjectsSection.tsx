"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ExternalLink, GitFork } from "lucide-react";
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
  description: string;
  techStack: string[];
  img1: ProjectImage;
  img2: ProjectImage;
  img3: ProjectImage; // tall col
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
    description:
      "E-commerce platform with 50+ RESTful APIs, real-time Customer–Admin chat via Socket.io, quad-gateway checkout (MoMo, VNPay, PayPal, COD), and role-based JWT auth. Achieved 100/100 Google Lighthouse.",
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
    description:
      "Cinema ticket booking system implementing strict 3-Tier Architecture and 12 GoF Design Patterns (Factory, Strategy, Singleton, Decorator). 69 unit tests verifying pricing logic and role authorization.",
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
    description:
      "End-to-end Selenium WebDriver automation test suite for a multi-route bus ticket booking platform. Reduced manual QA cycles by 70% with deterministic NUnit test runners.",
    techStack: ["C#", "Selenium WebDriver", "Visual Studio", "NUnit"],
    img1: { src: "/images/projects/cineverse-1.jpg", alt: "Test Explorer results" },
    img2: { src: "/images/projects/cineverse-2.jpg", alt: "NUnit output" },
    img3: { src: "/images/projects/cineverse-3.jpg", alt: "Selenium browser automation" },
    btnLabel: "View Code",
    btnHref: "https://github.com/phidanghai-spec/datvexe-selenium-test",
    btnExternal: true,
  },
];

/** Single stacking card */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale down slightly as user scrolls past
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="sticky top-20 rounded-3xl border border-white/10 bg-[#111111] overflow-hidden shadow-2xl"
    >
      <div className="p-8 sm:p-10">
        {/* Card header */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">
              {project.num} — {project.category}
            </p>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {project.title}
            </h3>
          </div>
          <a
            href={project.btnHref}
            target={project.btnExternal ? "_blank" : undefined}
            rel={project.btnExternal ? "noopener noreferrer" : undefined}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-sm font-medium text-white/70 hover:text-white hover:border-white/40 transition-all duration-200 uppercase tracking-wider"
          >
            {project.btnLabel === "Live Project" ? (
              <ExternalLink size={14} />
            ) : (
              <GitFork size={14} />
            )}
            {project.btnLabel}
          </a>
        </div>

        {/* Image grid: 40/60 split */}
        <div className="grid grid-cols-5 gap-3 mb-8">
          {/* Left col: 2 stacked images (40%) */}
          <div className="col-span-2 flex flex-col gap-3">
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/8 bg-white/5">
              <Image
                src={project.img1.src}
                alt={project.img1.alt}
                width={600}
                height={338}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/8 bg-white/5">
              <Image
                src={project.img2.src}
                alt={project.img2.alt}
                width={600}
                height={338}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right col: tall image (60%) */}
          <div className="col-span-3 rounded-2xl overflow-hidden border border-white/8 bg-white/5">
            <Image
              src={project.img3.src}
              alt={project.img3.alt}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Description + tech stack */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <p className="text-sm font-light text-white/50 leading-relaxed flex-1 max-w-2xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 shrink-0 max-w-xs">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-mono border border-white/10 text-white/50 bg-white/[0.03]"
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
    <section id="projects" className="py-28 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <FadeIn y={20}>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/30 font-medium mb-3">
                Case Studies // Engineering Portfolio
              </p>
              <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-white">
                Projects
              </h2>
            </div>
          </FadeIn>
          <FadeIn y={16} delay={0.1}>
            <p className="text-sm font-light text-white/50 max-w-xs leading-relaxed">
              3 real-world projects — from fullstack e-commerce to design patterns and automation QA.
            </p>
          </FadeIn>
        </div>

        {/* Stacking cards */}
        <div className="flex flex-col gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

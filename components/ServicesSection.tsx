"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { CheckCircle2 } from "lucide-react";

const SKILLS = [
  {
    num: "01",
    title: "Backend Development",
    desc: "Building scalable RESTful APIs and role-based systems with ASP.NET Core, Node.js, Express.js, and Prisma ORM — from database schema to deployment.",
    tags: ["ASP.NET Core", "Node.js", "Express.js", "Prisma ORM", "REST API", "JWT Auth"],
  },
  {
    num: "02",
    title: "Frontend Development",
    desc: "Crafting responsive, accessible interfaces with Next.js, React, TypeScript, and Tailwind CSS, focused on clean UX and performance.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
  },
  {
    num: "03",
    title: "Design Patterns & OOP",
    desc: "Applying 12 GoF design patterns and layered architecture (Controller/View - Service - Repository) to keep codebases maintainable.",
    tags: ["3-Tier Layered", "12 GoF Patterns", "SOLID Principles", "Repository Pattern"],
  },
  {
    num: "04",
    title: "Database Design",
    desc: "Designing and querying relational data across SQL Server, MySQL, SQLite, and TiDB Cloud, with an eye for normalization and query performance.",
    tags: ["TiDB Cloud", "SQL Server", "MySQL", "SQLite", "Schema Normalization"],
  },
  {
    num: "05",
    title: "Automation Testing & QA",
    desc: "Writing unit tests (xUnit, NUnit) and automating end-to-end test flows with Selenium WebDriver to catch regressions before they ship.",
    tags: ["Selenium WebDriver", "NUnit", "Unit Testing", "E2E Automation", "CI/CD Ready"],
  },
];

export default function ServicesSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First open by default for immediate preview

  return (
    <section id="skills" className="py-32 px-6 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <FadeIn y={20}>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>Expertise // What I Do</span>
              </p>
              <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-white">
                Skills
              </h2>
            </div>
          </FadeIn>
          <FadeIn y={16} delay={0.1}>
            <p className="text-sm font-light text-slate-400 max-w-sm leading-relaxed text-pretty">
              Core technical competencies honed through real-world fullstack projects, enterprise design patterns, and automated test pipelines.
            </p>
          </FadeIn>
        </div>

        {/* Skill list in glass cards */}
        <div className="flex flex-col gap-3">
          {SKILLS.map((skill, i) => {
            const isOpen = openIdx === i;
            return (
              <FadeIn key={skill.num} y={12} delay={i * 0.05}>
                <div
                  className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#0d1424]/90 border border-teal-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(45,212,191,0.1)]"
                      : "bg-[#0b101c]/50 border border-white/[0.06] hover:border-white/15 hover:bg-[#0d1424]/60"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 p-6 sm:p-7 text-left group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-6">
                      {/* Number with active glowing pill */}
                      <span
                        className={`text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-lg border transition-all duration-200 ${
                          isOpen
                            ? "bg-teal-500/20 text-teal-300 border-teal-500/40"
                            : "bg-white/[0.03] text-slate-400 border-white/10 group-hover:text-slate-200"
                        }`}
                      >
                        {skill.num}
                      </span>
                      {/* Title */}
                      <span
                        className={`text-xl sm:text-2xl font-bold uppercase tracking-tight transition-colors duration-200 ${
                          isOpen
                            ? "text-white"
                            : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {skill.title}
                      </span>
                    </div>

                    {/* Toggle indicator button */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 shrink-0 ${
                        isOpen
                          ? "bg-teal-500 text-slate-950 border-teal-400 font-bold"
                          : "border-white/10 bg-white/[0.03] text-slate-400 group-hover:border-white/25 group-hover:text-white"
                      }`}
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-lg leading-none select-none"
                      >
                        +
                      </motion.span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-7 pb-7 pt-1 border-t border-white/[0.04]">
                          <p className="text-base font-light text-slate-300 leading-relaxed max-w-3xl mb-5 text-pretty">
                            {skill.desc}
                          </p>

                          {/* Tech chips */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {skill.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono border border-teal-500/20 bg-teal-950/30 text-teal-300"
                              >
                                <CheckCircle2 size={11} className="text-teal-400" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

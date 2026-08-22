"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const SKILLS = [
  {
    num: "01",
    title: "Backend Development",
    desc: "Building scalable RESTful APIs and role-based systems with ASP.NET Core, Node.js, Express.js, and Prisma ORM — from database schema to deployment.",
  },
  {
    num: "02",
    title: "Frontend Development",
    desc: "Crafting responsive, accessible interfaces with Next.js, React, TypeScript, and Tailwind CSS, focused on clean UX and performance.",
  },
  {
    num: "03",
    title: "Design Patterns & OOP",
    desc: "Applying 12 GoF design patterns and layered architecture (Controller/View - Service - Repository) to keep codebases maintainable.",
  },
  {
    num: "04",
    title: "Database Design",
    desc: "Designing and querying relational data across SQL Server, MySQL, SQLite, and TiDB Cloud, with an eye for normalization and query performance.",
  },
  {
    num: "05",
    title: "Automation Testing & QA",
    desc: "Writing unit tests (xUnit, NUnit) and automating end-to-end test flows with Selenium WebDriver to catch regressions before they ship.",
  },
];

export default function ServicesSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="skills" className="py-28 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <FadeIn y={20}>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/30 font-medium mb-3">
                Expertise // What I Do
              </p>
              <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-white">
                Skills
              </h2>
            </div>
          </FadeIn>
          <FadeIn y={16} delay={0.1}>
            <p className="text-sm font-light text-white/50 max-w-xs leading-relaxed">
              Core technical competencies built through real projects and coursework.
            </p>
          </FadeIn>
        </div>

        {/* Skill list */}
        <div className="flex flex-col">
          {SKILLS.map((skill, i) => (
            <FadeIn key={skill.num} y={12} delay={i * 0.06}>
              <div
                className="border-t border-white/[0.08] last:border-b last:border-white/[0.08]"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                >
                  <div className="flex items-center gap-6">
                    {/* Number */}
                    <span className="text-xs font-mono text-white/20 w-8 shrink-0 group-hover:text-teal-400 transition-colors">
                      {skill.num}
                    </span>
                    {/* Title */}
                    <span className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-teal-300 transition-colors duration-200">
                      {skill.title}
                    </span>
                  </div>

                  {/* Toggle icon */}
                  <motion.span
                    animate={{ rotate: openIdx === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white/30 group-hover:text-white/60 transition-colors text-2xl leading-none shrink-0"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pl-14 text-base font-light text-white/55 leading-relaxed max-w-2xl">
                        {skill.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

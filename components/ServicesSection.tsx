"use client";

import FadeIn from "./FadeIn";
import { Server, Layout, Box, Database, CheckSquare2 } from "lucide-react";

const CAPABILITIES = [
  {
    num: "01",
    icon: Server,
    title: "Backend & Distributed APIs",
    desc: "Xây dựng các RESTful API phân tầng có khả năng mở rộng với ASP.NET Core, Node.js, Express.js. Thiết kế cơ chế xác thực stateless token-based, phân quyền vai trò (Role-Based Access Control) và giao tiếp thời gian thực với Socket.io.",
    skills: ["ASP.NET Core", "Node.js", "Express.js", "RESTful APIs", "Socket.io", "Role-Based Auth"],
  },
  {
    num: "02",
    icon: Box,
    title: "Layered Architecture & Design Patterns",
    desc: "Áp dụng nghiêm ngặt kiến trúc phân tầng 3-Tier (Controller – Service – Repository) kết hợp 15 Design Patterns (Strategy, Decorator, Singleton, Simple Factory, State, Observer...) nhằm cô lập business logic, tuân thủ nguyên lý SOLID và đảm bảo tính bảo trì lâu dài.",
    skills: ["3-Tier Layered", "15 Design Patterns", "SOLID Principles", "Repository Pattern", "Separation of Concerns"],
  },
  {
    num: "03",
    icon: Database,
    title: "Relational Modeling & ORM Management",
    desc: "Thiết kế lược đồ cơ sở dữ liệu quan hệ đạt chuẩn 3NF, bảo đảm tính toàn vẹn khóa ngoại và ràng buộc giao dịch ACID. Sử dụng Prisma ORM / EF Core để chuẩn hóa schema song song với tối ưu chỉ mục và truy vấn.",
    skills: ["SQL Server", "MySQL", "TiDB Cloud", "SQLite", "Prisma ORM", "Schema Normalization"],
  },
  {
    num: "04",
    icon: CheckSquare2,
    title: "Automated QA & Defect Prevention",
    desc: "Xây dựng 92 unit tests cô lập nghiệp vụ với NUnit / xUnit. Triển khai kịch bản kiểm thử tự động hóa E2E với Selenium WebDriver theo mô hình Page Object Model (POM), tách rời hoàn toàn UI locators để triệt tiêu bài toán flaky tests.",
    skills: ["Selenium WebDriver", "Page Object Model (POM)", "NUnit / xUnit", "Automated E2E", "Regression Testing"],
  },
  {
    num: "05",
    icon: Layout,
    title: "Frontend Engineering & Systems",
    desc: "Phát triển giao diện web hiệu năng cao với Next.js, React, TypeScript và Tailwind CSS. Chú trọng tối ưu hoá trải nghiệm người dùng, tính tiếp cận (a11y), responsive layout và đạt điểm kiểm toán 100/100 Lighthouse.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lighthouse 100/100"],
  },
];

export default function ServicesSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <FadeIn y={14}>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span>Expertise // Competencies</span>
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Architectural Capabilities
              </h2>
            </div>
          </FadeIn>

          <FadeIn y={12} delay={0.1}>
            <p className="text-xs sm:text-sm font-light text-slate-400 max-w-md leading-relaxed">
              Các mảng năng lực kỹ thuật cốt lõi được cấu trúc mạch lạc, phục vụ trực tiếp cho việc xây dựng và duy trì các hệ thống phần mềm thực tế.
            </p>
          </FadeIn>
        </div>

        {/* Clean Capabilities Matrix (No Hidden Accordions) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            const isWide = i === 0; // First item slightly wider on 3-col grid if needed
            return (
              <FadeIn key={cap.num} y={16} delay={i * 0.06} className={isWide ? "lg:col-span-2" : ""}>
                <div className="card-clean rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between gap-6">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 border-b border-white/[0.05] pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.07] flex items-center justify-center text-slate-300">
                          <Icon size={15} />
                        </div>
                        <span className="text-xs font-mono font-semibold text-slate-300">
                          {cap.num}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-300 tracking-wider">PROD READY</span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight mb-2.5">
                      {cap.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-light text-slate-400 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                    {cap.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/[0.02] border border-white/[0.06]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

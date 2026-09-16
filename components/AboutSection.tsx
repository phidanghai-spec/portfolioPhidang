"use client";

import FadeIn from "./FadeIn";
import { GraduationCap, MapPin, Award, Calendar, Layers, Database, ShieldCheck } from "lucide-react";

const BIO_PARAGRAPHS = [
  "Sinh viên năm cuối ngành Kỹ thuật Phần mềm tại HUFLIT với nền tảng tư duy hướng đối tượng (OOP) vững chắc và kinh nghiệm áp dụng thực tế 15 Design Patterns.",
  "Đã trải qua toàn bộ chu kỳ phát triển phần mềm: từ phân tích đặc tả yêu cầu, thiết kế kiến trúc phân tầng 3-Tier (Controller – Service – Repository), chuẩn hóa hệ thống 50+ RESTful APIs, đến thiết lập bộ kiểm thử tự động toàn diện (92 Unit Tests và Selenium E2E Suite với Page Object Model).",
];

const ENGINEERING_PILLARS = [
  {
    icon: Layers,
    title: "Layered Architecture & Pattern Rigor",
    subtitle: "3-Tier (Controller – Service – Repository)",
    desc: "Tổ chức mã nguồn theo ranh giới trách nhiệm rõ ràng (Separation of Concerns). Áp dụng thực tiễn 15 Design Patterns (Strategy, Decorator, Singleton, Simple Factory, State, Observer...) để giữ cho mã nguồn dễ đọc, dễ mở rộng và độc lập với tầng biểu diễn.",
  },
  {
    icon: Database,
    title: "Relational Modeling & ACID Consistency",
    subtitle: "Data Normalization & Query Efficiency",
    desc: "Thiết kế cơ sở dữ liệu quan hệ từ 3NF, bảo đảm tính toàn vẹn khóa ngoại và giao dịch ACID. Linh hoạt ứng dụng ORM để chuẩn hóa schema song song với tối ưu hóa chỉ mục (indexes) trên SQL Server, MySQL, SQLite và TiDB Cloud.",
  },
  {
    icon: ShieldCheck,
    title: "Automated Verification & Defect Prevention",
    subtitle: "Page Object Model (POM) & Green Test Suites",
    desc: "Xây dựng 92 unit tests cô lập hoàn toàn logic nghiệp vụ; triển khai tự động hóa E2E với Selenium WebDriver theo mô hình Page Object Model nhằm tách biệt hoàn toàn UI locators khỏi test cases, giảm chi phí bảo trì khi thay đổi luồng giao diện.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative">
        {/* Section label */}
        <FadeIn y={14}>
          <p className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Philosophy // Engineering Discipline</span>
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-8">
            Bản lĩnh kỹ thuật từ <span className="heading-silver">nền tảng cốt lõi.</span>
          </h2>
        </FadeIn>

        {/* Bio & Academic Credentials */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Left: Bio paragraphs */}
          <div className="lg:col-span-7 space-y-5">
            {BIO_PARAGRAPHS.map((para, i) => (
              <FadeIn key={i} y={12} delay={0.08 * (i + 1)}>
                <p className="text-base sm:text-lg font-light leading-relaxed text-slate-300 text-pretty">
                  {para}
                </p>
              </FadeIn>
            ))}
          </div>

          {/* Right: Academic & Personal Specs (Card Clean) */}
          <div className="lg:col-span-5">
            <FadeIn y={14} delay={0.2}>
              <div className="card-clean rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="text-xs font-mono font-medium text-slate-300">academic.profile</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">SOFTWARE ENGINEERING</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  {[
                    { icon: GraduationCap, label: "Institution", value: "HUFLIT" },
                    { icon: Award, label: "Academic GPA", value: "3.0 / 4.0" },
                    { icon: Calendar, label: "Cohort", value: "Class of 2027" },
                    { icon: MapPin, label: "Location", value: "TP. Hồ Chí Minh" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="flex items-center gap-2 mb-1 text-slate-400">
                        <Icon size={14} />
                        <span className="text-[10px] font-mono uppercase tracking-wider">{label}</span>
                      </div>
                      <p className="text-sm font-semibold text-white tracking-tight font-mono">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* 3 Engineering Pillars replacing generic wireframes */}
        <FadeIn y={16} delay={0.25}>
          <div className="border-t border-white/[0.06] pt-12">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-1">
                Architecture Principles // 3 Core Pillars
              </p>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Nguyên tắc kỹ thuật được rèn giũa qua thực chiến
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ENGINEERING_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="card-clean rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-200">
                          <Icon size={18} />
                        </div>
                        <span className="text-xs font-mono text-slate-400 font-medium">0{idx + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white tracking-tight leading-snug">
                          {pillar.title}
                        </h4>
                        <p className="text-xs font-mono text-slate-400 mt-1">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-light text-slate-400 leading-relaxed text-pretty border-t border-white/[0.05] pt-4">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

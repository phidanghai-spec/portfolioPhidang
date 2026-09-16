"use client";

import Image from "next/image";
import { ExternalLink, GitFork, CheckCircle2, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

interface CaseStudy {
  id: string;
  num: string;
  category: string;
  title: string;
  subtitle: string;
  img: { src: string; alt: string };
  links: {
    label: string;
    href: string;
    isExternal?: boolean;
    isFork?: boolean;
  }[];
  // 4 Core Architectural Sections
  context: string;
  architecture: string;
  tradeoffs: string;
  outcomes: { label: string; value: string }[];
  tags: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cineverse",
    num: "01",
    category: "System Design & OOP Patterns",
    title: "CineVerse",
    subtitle: "Cinema Ticket Booking Engine",
    img: {
      src: "/images/projects/cineverse-1.jpg",
      alt: "CineVerse seat selection and booking matrix",
    },
    links: [
      {
        label: "Repository & Test Matrix",
        href: "https://github.com/phidanghai-spec/cineverse",
        isExternal: true,
        isFork: true,
      },
    ],
    context:
      "Hệ thống quản lý và đặt vé rạp chiếu phim xử lý các luồng nghiệp vụ phức tạp: tính giá vé động theo suất chiếu/đối tượng, phụ thu ghế VIP và kiểm soát trạng thái ghế theo thời gian thực.",
    architecture:
      "Tuân thủ nghiêm ngặt mô hình 3-Tier Layered Architecture (Controller – Service – Repository). Tách biệt hoàn toàn tầng xử lý nghiệp vụ khỏi cơ sở dữ liệu SQLite, giúp kiểm thử độc lập mà không cần giả lập database cồng kềnh.",
    tradeoffs:
      "Hiện thực hóa 15 Design Patterns: áp dụng Strategy cho các thuật toán chiết khấu giá vé; Decorator cho combo bắp nước; Singleton cho cấu hình hệ thống; và sử dụng Simple Factory (PaymentProcessorFactory) để tập trung khởi tạo cổng thanh toán thay vì lạm dụng Factory Method đa hình gây phức tạp hóa cấu trúc phân lớp.",
    outcomes: [
      { label: "Design Patterns", value: "15 Patterns" },
      { label: "Unit Tests Suite", value: "92 / 92 Passed" },
      { label: "Code Organization", value: "Strict 3-Tier" },
    ],
    tags: ["C#", "15 Design Patterns", "Simple Factory", "Strategy", "SQLite", "92 Unit Tests"],
  },
  {
    id: "techstore",
    num: "02",
    category: "Fullstack E-Commerce Platform",
    title: "TechStore",
    subtitle: "Graduation Project // Production Build",
    img: {
      src: "/images/projects/techstore-1.jpg",
      alt: "TechStore e-commerce web interface",
    },
    links: [
      {
        label: "Live Deployment",
        href: "https://frontend-ruby-phi-14.vercel.app",
        isExternal: true,
      },
    ],
    context:
      "Nền tảng thương mại điện tử chuyên sâu cho thiết bị công nghệ với đầy đủ chu trình: danh mục sản phẩm đa thuộc tính, giỏ hàng, đặt hàng, quản lý đơn và chăm sóc khách hàng.",
    architecture:
      "Kiến trúc backend phân tầng cung cấp 50+ RESTful APIs; tích hợp kênh chat thời gian thực Customer – Admin qua Socket.io; kết nối thanh toán qua 4 cổng (MoMo, VNPay, PayPal, COD); bảo mật với cơ chế xác thực stateless token-based phân quyền vai trò.",
    tradeoffs:
      "Ứng dụng ORM (Prisma) kết hợp TiDB Cloud để chuẩn hóa quan hệ thực thể và tăng tốc độ triển khai schema. Chấp nhận chi phí trừu tượng hóa của ORM đổi lấy độ an toàn kiểu dữ liệu (type-safety) tuyệt đối từ database đến Next.js frontend.",
    outcomes: [
      { label: "RESTful Endpoints", value: "50+ APIs" },
      { label: "Lighthouse Performance", value: "100 / 100" },
      { label: "Payment Gateways", value: "4 Gateways" },
    ],
    tags: ["Next.js", "ASP.NET Core", "Node.js", "Socket.io", "Prisma ORM", "TiDB Cloud"],
  },
  {
    id: "datvexe",
    num: "03",
    category: "Automation Quality Assurance",
    title: "DatVeXe",
    subtitle: "Software QA & Regression Automation",
    img: {
      src: "/images/projects/datvexe-1.jpg",
      alt: "DatVeXe Visual Studio Test Explorer matrix",
    },
    links: [
      {
        label: "Test Suite Code",
        href: "https://github.com/phidanghai-spec/datvexe-selenium-test",
        isExternal: true,
        isFork: true,
      },
    ],
    context:
      "Bộ kiểm thử tự động hóa End-to-End (E2E) cho nền tảng đặt vé xe khách liên tỉnh, bao quát các luồng nghiệp vụ tìm kiếm lộ trình, lọc chuyến xe, giữ chỗ và xác nhận thông tin vé.",
    architecture:
      "Xây dựng trên nền tảng Selenium WebDriver và NUnit trong Visual Studio. Cấu trúc toàn bộ kịch bản kiểm thử theo mô hình chuẩn công nghiệp Page Object Model (POM).",
    tradeoffs:
      "Tách biệt hoàn toàn UI Locators (XPath, ID, CSS Selectors) vào các Page Class độc lập khỏi Test Logic. Khi giao diện hoặc flow người dùng thay đổi, chỉ cần cập nhật selector tại 1 nơi duy nhất thay vì sửa hàng chục test cases, triệt tiêu hiện tượng flaky tests và giảm thiểu chi phí bảo trì kịch bản.",
    outcomes: [
      { label: "Architecture", value: "Page Object Model" },
      { label: "Runner Suite", value: "NUnit / VS" },
      { label: "UI Locators", value: "100% Isolated" },
    ],
    tags: ["C#", "Selenium WebDriver", "Page Object Model", "NUnit", "E2E Automation"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <FadeIn y={14}>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span>Case Studies // Engineering Depth</span>
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Selected Works
              </h2>
            </div>
          </FadeIn>

          <FadeIn y={12} delay={0.1}>
            <p className="text-xs sm:text-sm font-light text-slate-400 max-w-md leading-relaxed">
              Các dự án kỹ thuật tiêu biểu được trình bày theo cấu trúc chuẩn: Bối cảnh &rarr; Ràng buộc kiến trúc &rarr; Đánh đổi thiết kế &rarr; Kết quả kiểm chứng.
            </p>
          </FadeIn>
        </div>

        {/* Case Study Stream (Vertical Deep-Dives) */}
        <div className="space-y-12">
          {CASE_STUDIES.map((project, idx) => (
            <FadeIn key={project.id} y={20} delay={idx * 0.08}>
              <article className="card-clean rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col gap-8">
                {/* ── Top Bar: Meta & Links ── */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-semibold text-slate-300">
                        {project.num} // {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium tracking-tight bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/[0.1] hover:border-white/25 transition-all duration-200"
                      >
                        {link.isFork ? <GitFork size={13} /> : <ExternalLink size={13} />}
                        <span>{link.label}</span>
                        <ArrowUpRight size={12} className="opacity-60" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* ── Main Content: 2-Column Grid (Visual + Technical Analysis) ── */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Media & Outcomes (5 cols) */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Visual Screenshot */}
                    <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/[0.08] bg-[#07090e] relative group">
                      <Image
                        src={project.img.src}
                        alt={project.img.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                    </div>

                    {/* Verified Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      {project.outcomes.map((m) => (
                        <div key={m.label} className="flex flex-col">
                          <span className="text-sm sm:text-base font-semibold text-white font-mono tabular-nums tracking-tight">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono mt-0.5 uppercase tracking-wide">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/[0.02] border border-white/[0.05]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: 4-Part Technical Breakdown (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* 1. Problem / Context */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-slate-400" />
                        01. Bối cảnh &amp; Vấn đề (Context)
                      </h4>
                      <p className="text-sm font-light text-slate-300 leading-relaxed pl-2.5 border-l border-white/[0.08]">
                        {project.context}
                      </p>
                    </div>

                    {/* 2. Technical Constraint & Architecture Decision */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-slate-400" />
                        02. Quyết định kiến trúc &amp; Ràng buộc (Architecture)
                      </h4>
                      <p className="text-sm font-light text-slate-300 leading-relaxed pl-2.5 border-l border-white/[0.08]">
                        {project.architecture}
                      </p>
                    </div>

                    {/* 3. Trade-offs & Pattern Choice */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-slate-400" />
                        03. Đánh đổi thiết kế &amp; Mẫu ứng dụng (Trade-offs)
                      </h4>
                      <p className="text-sm font-light text-slate-300 leading-relaxed pl-2.5 border-l border-white/[0.08]">
                        {project.tradeoffs}
                      </p>
                    </div>

                    {/* 4. Verified Results Note */}
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400/90 bg-emerald-950/20 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                        <CheckCircle2 size={13} />
                        <span>Xác thực kỹ thuật: 100% kịch bản kiểm thử &amp; số liệu đã đối chiếu thực tế.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

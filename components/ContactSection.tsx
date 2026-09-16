"use client";

import { useState } from "react";
import { Mail, Phone, GitFork, MapPin, Copy, Check, ExternalLink, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

const CONTACTS = [
  {
    key: "email",
    icon: Mail,
    label: "Direct Email",
    value: "phidanghai@gmail.com",
    href: "mailto:phidanghai@gmail.com",
    copyable: true,
  },
  {
    key: "phone",
    icon: Phone,
    label: "Phone / Zalo",
    value: "0843 704 216",
    href: "tel:0843704216",
    copyable: true,
  },
  {
    key: "github",
    icon: GitFork,
    label: "GitHub Profile",
    value: "phidanghai-spec",
    href: "https://github.com/phidanghai-spec",
    external: true,
  },
  {
    key: "location",
    icon: MapPin,
    label: "Base Location",
    value: "Tân Phú, TP. Hồ Chí Minh",
    href: null,
  },
];

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (value: string, key: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 border-t border-white/[0.06] relative bg-[#07090e]/60">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <FadeIn y={14}>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span>Channels // Technical Interview &amp; Internship</span>
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-base font-light text-slate-400 leading-relaxed">
              Sẵn sàng trao đổi cơ hội thực tập Fullstack / Backend Developer, phỏng vấn kỹ thuật trực tiếp, hoặc thảo luận sâu về kiến trúc các đồ án đã triển khai.
            </p>
          </FadeIn>
        </div>

        {/* Communications Console Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {CONTACTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.key} y={16} delay={idx * 0.05}>
                <div className="card-clean rounded-2xl p-6 h-full flex flex-col justify-between gap-6 group">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center text-slate-300 mb-4 group-hover:text-white transition-colors">
                      <Icon size={16} />
                    </div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-mono mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-sm font-semibold text-white hover:text-slate-300 transition-colors inline-flex items-center gap-1 break-all"
                      >
                        <span>{item.value}</span>
                        {item.external && <ArrowUpRight size={13} className="opacity-60 shrink-0" />}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-white">{item.value}</p>
                    )}
                  </div>

                  {item.copyable && (
                    <div className="pt-3 border-t border-white/[0.05]">
                      <button
                        type="button"
                        onClick={() => handleCopy(item.value, item.key)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                      >
                        {copiedKey === item.key ? (
                          <>
                            <Check size={12} className="text-emerald-400" />
                            <span className="text-emerald-400 font-medium">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>Copy to clipboard</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Semantic Footer */}
        <footer className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>ĐẶNG HẢI PHI &bull; PORTFOLIO SPECIFICATION</span>
          </div>
          <div className="flex items-center gap-4">
            <span>NEXT.JS 16 &bull; TAILWIND V4 &bull; THREE.JS</span>
            <span>&copy; 2026</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, GitFork, MapPin, Copy, Check, ExternalLink, Send } from "lucide-react";
import FadeIn from "./FadeIn";

const CONTACT_ITEMS = [
  {
    key: "email",
    Icon: Mail,
    label: "Direct Email",
    value: "phidanghai@gmail.com",
    href: "mailto:phidanghai@gmail.com",
    copyable: true,
    accent: "text-teal-400 border-teal-500/30 bg-teal-950/30",
  },
  {
    key: "phone",
    Icon: Phone,
    label: "Phone / Zalo",
    value: "0843 704 216",
    href: "tel:0843704216",
    copyable: true,
    accent: "text-cyan-400 border-cyan-500/30 bg-cyan-950/30",
  },
  {
    key: "github",
    Icon: GitFork,
    label: "GitHub Profile",
    value: "phidanghai-spec",
    href: "https://github.com/phidanghai-spec",
    copyable: false,
    external: true,
    accent: "text-indigo-400 border-indigo-500/30 bg-indigo-950/30",
  },
  {
    key: "location",
    Icon: MapPin,
    label: "Location",
    value: "Tân Phú, TP. Hồ Chí Minh",
    href: null,
    copyable: false,
    accent: "text-emerald-400 border-emerald-500/30 bg-emerald-950/30",
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
      // Fallback
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 border-t border-white/[0.06] relative overflow-hidden bg-[#070a12]/40"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-teal-500/8 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-14">
          <FadeIn y={20}>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-3 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              <span>Communication Channels // Get In Touch</span>
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-[-0.03em] text-white mb-4">
              Let&apos;s Talk
            </h2>
            <p className="text-base font-light text-slate-400 max-w-md mx-auto leading-relaxed text-pretty">
              Sẵn sàng trao đổi cơ hội thực tập Fullstack / Backend Developer và phỏng vấn kỹ thuật trực tiếp.
            </p>
          </FadeIn>
        </div>

        {/* Big CTA Button with layered refraction glow */}
        <FadeIn y={16} delay={0.1} className="flex justify-center mb-16">
          <a
            href="mailto:phidanghai@gmail.com"
            className="group relative inline-flex items-center gap-3 px-10 py-4.5 rounded-full font-bold text-sm uppercase tracking-wider overflow-hidden
              bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 text-slate-950
              shadow-[0_0_50px_rgba(45,212,191,0.5)] hover:shadow-[0_0_70px_rgba(45,212,191,0.7)]
              transition-all duration-300 active:scale-[0.97]"
          >
            <Send size={16} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span className="relative z-10">Send Direct Email</span>
            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </FadeIn>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-20">
          {CONTACT_ITEMS.map(({ key, Icon, label, value, href, copyable, external, accent }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="relative p-6 rounded-2xl glass-panel-interactive group flex flex-col justify-between"
            >
              <div>
                <div className={`p-2.5 rounded-xl border w-fit mb-4 ${accent}`}>
                  <Icon size={16} />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-mono mb-1">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-sm font-semibold text-slate-200 hover:text-teal-300 transition-colors break-all flex items-center gap-1.5"
                  >
                    <span>{value}</span>
                    {external && <ExternalLink size={12} className="shrink-0 opacity-60" />}
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-slate-200">{value}</span>
                )}
              </div>

              {copyable && (
                <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                  <button
                    onClick={() => handleCopy(value, key)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    {copiedKey === key ? (
                      <>
                        <Check size={13} className="text-teal-400" />
                        <span className="text-teal-400 font-semibold">Copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Click to copy</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Semantic Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-slate-500 font-mono flex flex-col sm:flex-row items-center justify-center gap-2 border-t border-white/[0.06] pt-10"
        >
          <span>ENGINEERED WITH NEXT.JS &bull; TAILWIND CSS V4 &bull; FRAMER MOTION</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>ĐẶNG HẢI PHI &copy; 2026</span>
        </motion.footer>
      </div>
    </section>
  );
}

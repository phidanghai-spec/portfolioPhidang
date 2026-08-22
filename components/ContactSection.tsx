"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, GitFork, MapPin, Copy, Check, ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";

const CONTACT_ITEMS = [
  {
    key: "email",
    Icon: Mail,
    label: "Email",
    value: "phidanghai@gmail.com",
    href: "mailto:phidanghai@gmail.com",
    copyable: true,
  },
  {
    key: "phone",
    Icon: Phone,
    label: "Phone",
    value: "0843 704 216",
    href: "tel:0843704216",
    copyable: true,
  },
  {
    key: "github",
    Icon: GitFork,
    label: "GitHub",
    value: "phidanghai-spec",
    href: "https://github.com/phidanghai-spec",
    copyable: false,
    external: true,
  },
  {
    key: "location",
    Icon: MapPin,
    label: "Location",
    value: "Tân Phú, TP. Hồ Chí Minh",
    href: null,
    copyable: false,
  },
];

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (value: string, key: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 border-t border-white/[0.06] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-80 bg-teal-500/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn y={20}>
            <p className="text-xs uppercase tracking-widest text-white/30 font-medium mb-4">
              Communication Channels // Get In Touch
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
              Let&apos;s Talk
            </h2>
            <p className="text-base font-light text-white/50 max-w-md mx-auto leading-relaxed">
              Sẵn sàng trao đổi cơ hội thực tập Fullstack / Backend Developer và phỏng vấn kỹ thuật.
            </p>
          </FadeIn>
        </div>

        {/* CTA mailto button */}
        <FadeIn y={16} delay={0.1} className="flex justify-center mb-16">
          <a
            href="mailto:phidanghai@gmail.com"
            className="group relative px-10 py-4 rounded-full font-bold text-base uppercase tracking-wider overflow-hidden
              bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950
              hover:shadow-[0_0_60px_-8px_rgba(45,212,191,0.7)] transition-all duration-300 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail size={18} />
              Contact Me
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </FadeIn>

        {/* Contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {CONTACT_ITEMS.map(({ key, Icon, label, value, href, copyable, external }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="relative p-6 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm group hover:border-white/15 hover:bg-white/[0.05] transition-all duration-200"
            >
              <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.05] w-fit mb-4">
                <Icon size={16} className="text-teal-400" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{label}</p>
              {href ? (
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors break-all flex items-center gap-1"
                >
                  {value}
                  {external && <ExternalLink size={11} className="shrink-0 opacity-50" />}
                </a>
              ) : (
                <span className="text-sm font-medium text-white/80">{value}</span>
              )}

              {copyable && (
                <button
                  onClick={() => handleCopy(value, key)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg text-white/20 hover:text-teal-400 hover:bg-white/8 opacity-0 group-hover:opacity-100 transition-all duration-150"
                  title="Copy"
                >
                  {copiedKey === key ? (
                    <Check size={13} className="text-teal-400" />
                  ) : (
                    <Copy size={13} />
                  )}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center text-xs text-white/20 font-mono uppercase tracking-widest"
        >
          <p>Engineered with Next.js · Tailwind CSS v4 · Framer Motion</p>
          <p className="mt-1">Đặng Hải Phi © 2026</p>
        </motion.div>
      </div>
    </section>
  );
}

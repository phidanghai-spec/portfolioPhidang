import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phidanghai-portfolio.vercel.app"),
  title: "Đặng Hải Phi — Fullstack & Backend Developer",
  description:
    "Portfolio của Đặng Hải Phi — Sinh viên năm 4 HUFLIT. Chuyên môn ASP.NET Core, Next.js, 15 Design Patterns, 50+ RESTful APIs, và Automation Testing với Selenium (Page Object Model).",
  keywords: [
    "Đặng Hải Phi",
    "Fullstack Developer",
    "Backend Intern",
    "ASP.NET Core",
    "Next.js",
    "Portfolio",
    "HUFLIT",
    "15 Design Patterns",
    "Selenium Testing",
    "Page Object Model",
  ],
  authors: [{ name: "Đặng Hải Phi", url: "https://github.com/phidanghai-spec" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://phidanghai-portfolio.vercel.app",
    siteName: "Đặng Hải Phi — Portfolio",
    title: "Đặng Hải Phi — Fullstack & Backend Developer",
    description: "Sinh viên năm 4 HUFLIT. 50+ RESTful APIs, 15 Design Patterns, 92 Unit Tests, Automation Testing.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Đặng Hải Phi Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đặng Hải Phi — Fullstack & Backend Developer",
    description: "Sinh viên năm 4 HUFLIT. 50+ RESTful APIs, 15 Design Patterns, 92 Unit Tests.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${sans.variable} ${mono.variable} font-sans antialiased bg-[#07090e] text-[#cbd5e1] selection:bg-white/20 selection:text-white`}>
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0c1017] focus:text-[#f1f5f9] focus:border focus:border-white/20 focus:rounded-xl focus:shadow-[0_0_20px_rgba(255,255,255,0.1)] font-mono text-xs"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

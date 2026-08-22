import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phidanghai-portfolio.vercel.app"),
  title: "Đặng Hải Phi — Fullstack Developer Intern",
  description:
    "Portfolio của Đặng Hải Phi — Sinh viên năm 4 HUFLIT. Chuyên môn ASP.NET Core, Next.js, 12 GoF Design Patterns, 50+ RESTful APIs, và Automation Testing với Selenium.",
  keywords: [
    "Đặng Hải Phi",
    "Fullstack Developer",
    "Backend Intern",
    "ASP.NET Core",
    "Next.js",
    "Portfolio",
    "HUFLIT",
    "GoF Design Patterns",
    "Selenium Testing",
  ],
  authors: [{ name: "Đặng Hải Phi", url: "https://github.com/phidanghai-spec" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://phidanghai-portfolio.vercel.app",
    siteName: "Đặng Hải Phi — Portfolio",
    title: "Đặng Hải Phi — Fullstack Developer Intern",
    description: "Sinh viên năm 4 HUFLIT. 50+ RESTful APIs, 12 GoF Design Patterns, Automation Testing.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Đặng Hải Phi Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đặng Hải Phi — Fullstack Developer Intern",
    description: "Sinh viên năm 4 HUFLIT. 50+ RESTful APIs, 12 GoF Design Patterns.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${kanit.variable} antialiased bg-[#0c0c0c] text-[#f0f0f0]`}>
        {children}
      </body>
    </html>
  );
}

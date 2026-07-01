import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClickRipple } from "@/components/click-ripple";
import { IntroSplash } from "@/components/intro-splash";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.role}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Frontend Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "기술 블로그",
    "개발자 포트폴리오",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  icons: {
    icon: {
      url: "/assets/images/icon/icon.svg",
      type: "image/svg+xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth scroll-pt-[88px]`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-blog-bg font-sans text-blog-text antialiased selection:bg-blue-200 selection:text-sky-900">
        <ClickRipple />
        <IntroSplash
          name={siteConfig.name}
          shortName={siteConfig.shortName}
        />
        <div id="site-shell">
          <a
            className="fixed top-3 left-3 z-[100] -translate-y-[150%] rounded-full bg-blog-text px-4 py-2.5 text-sm font-bold text-white transition-transform duration-200 focus:translate-y-0"
            href="#main-content"
          >
            본문으로 건너뛰기
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

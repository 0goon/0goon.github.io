"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/site";

const navigation = [
  { label: "소개", href: "/#about", rootOnly: true },
  { label: "경력", href: "/#experience", rootOnly: true },
  { label: "프로젝트", href: "/projects", rootOnly: false },
  { label: "글", href: "/posts", rootOnly: false },
  { label: "수상", href: "/#awards", rootOnly: true },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blog-border/85 bg-white/80 shadow-[0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-[18px]">
      <div className="mx-auto flex min-h-18 w-full max-w-[1160px] items-center justify-between px-5 max-[760px]:px-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-[11px]"
          aria-label={`${siteConfig.name} 홈`}
          onClick={() => setIsOpen(false)}
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-[11px] bg-blog-text font-mono text-[11px] font-bold tracking-[-0.04em] text-white transition-[rotate,background-color] duration-200 group-hover:-rotate-3 group-hover:bg-blog-primary"
            aria-hidden="true"
          >
            {siteConfig.shortName}
          </span>
          <span className="flex flex-col leading-[1.1]">
            <strong className="text-sm tracking-[-0.02em]">
              {siteConfig.name}
            </strong>
            <span className="mt-1 font-mono text-[9px] tracking-[0.12em] text-blog-subtle uppercase max-[480px]:hidden">
              {siteConfig.role}
            </span>
          </span>
        </Link>

        <nav
          className="flex items-center gap-2 max-[760px]:hidden"
          aria-label="주요 메뉴"
        >
          {navigation.map((item) => {
            const isActive =
              !item.rootOnly &&
              (pathname === item.href || pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-[13px] py-[9px] text-[13px] font-semibold text-blog-muted transition-colors duration-200 data-[active=true]:bg-blog-soft data-[active=true]:text-blog-primary hover:bg-blog-soft hover:text-blog-primary"
                data-active={isActive}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            className="ml-2 rounded-full bg-blog-primary px-[17px] py-2.5 text-[13px] font-bold text-white shadow-primary transition-[translate,background-color] duration-200 hover:-translate-y-px hover:bg-blue-700"
            href={`mailto:${siteConfig.email}`}
          >
            연락하기
          </a>
        </nav>

        <button
          type="button"
          className="hidden h-10 w-10 place-items-center rounded-full border border-blog-border bg-white text-blog-text max-[760px]:grid"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          className="hidden overflow-hidden border-t border-blog-border bg-white/97 max-[760px]:block"
          aria-label="모바일 메뉴"
        >
          <div className="mx-auto flex w-full max-w-[1152px] flex-col px-4 pt-2.5 pb-[18px]">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-[#edf6fc] px-1 py-[13px] text-sm font-semibold text-blog-muted"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="px-1 py-[13px] text-sm font-semibold text-blog-primary"
              onClick={() => setIsOpen(false)}
            >
              연락하기
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

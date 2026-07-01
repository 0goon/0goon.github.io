import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  const linkClassName =
    "inline-flex items-center gap-[7px] rounded-full border border-blog-border bg-white px-3 py-[9px] text-[11px] font-semibold text-blog-muted transition-colors duration-200 hover:border-blue-300 hover:text-blog-primary [&>svg:last-child]:opacity-55";

  return (
    <footer className="border-t border-blog-border bg-blog-bg pt-[58px] pb-[30px]">
      <div className="mx-auto grid w-full max-w-[1160px] grid-cols-[1fr_auto] gap-[60px] px-5 max-[760px]:grid-cols-1 max-[760px]:gap-[34px] max-[760px]:px-4">
        <div>
          <Link
            href="/"
            className="text-lg font-[750] tracking-[-0.03em]"
          >
            {siteConfig.name}
          </Link>
          <p className="mt-3.5 text-[13px] leading-[1.75] text-blog-muted">
            선명한 생각과 다정한 인터페이스를
            <br />
            코드로 옮깁니다.
          </p>
        </div>

        <div
          className="flex items-start gap-[9px] max-[760px]:flex-wrap"
          aria-label="외부 링크"
        >
          <a className={linkClassName} href={`mailto:${siteConfig.email}`}>
            <Mail size={16} aria-hidden="true" />
            Email
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a
            className={linkClassName}
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={16} aria-hidden="true" />
            GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a
            className={linkClassName}
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <BriefcaseBusiness size={16} aria-hidden="true" />
            LinkedIn
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-[1160px] justify-between border-t border-blog-border px-5 pt-5 font-mono text-[9px] tracking-[0.04em] text-blog-subtle max-[760px]:px-4 max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-2">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <span>Built with Next.js · Written with care</span>
      </div>
    </footer>
  );
}

import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentBlock } from "@/components/content-block";
import { getProject, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    authors: [{ name: siteConfig.name }],
    openGraph: {
      type: "article",
      title: project.title,
      description: project.description,
      tags: [...project.tags],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="main-content" className="bg-white">
      <article className="pb-[110px]">
        <header className="border-b border-blog-border bg-[radial-gradient(circle_at_85%_12%,rgba(125,211,252,.28),transparent_28%),linear-gradient(145deg,#fff_0%,#f7fbff_58%,#edf8ff_100%)]">
          <div className="mx-auto max-w-[920px] px-6 pt-[72px] pb-[68px] max-[760px]:pt-14 max-[760px]:pb-[52px]">
            <Link
              href="/projects"
              className="mb-12 inline-flex items-center gap-[7px] text-xs font-semibold text-blog-muted transition-colors duration-200 hover:text-blog-primary"
            >
              <ArrowLeft size={17} aria-hidden="true" />
              프로젝트 목록
            </Link>

            <p className="font-mono text-[10px] font-bold tracking-[0.16em] text-blog-primary">
              {project.eyebrow} · PROJECT {project.index}
            </p>

            <h1 className="mt-5 max-w-[780px] text-[clamp(42px,6vw,68px)] leading-[1.12] font-bold tracking-[-0.06em]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-[720px] text-[17px] leading-[1.85] text-blog-muted max-[760px]:text-[15px]">
              {project.description}
            </p>

            <div
              className="mt-8 flex flex-wrap gap-2"
              aria-label="프로젝트 기술"
            >
              {project.tags.map((tag) => (
                <span
                  className="rounded-full border border-blog-border bg-white/80 px-3 py-2 font-mono text-[10px] font-semibold text-blog-primary"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>

            <dl className="mt-12 grid grid-cols-3 overflow-hidden rounded-2xl border border-blog-border bg-white/75 shadow-soft backdrop-blur-sm max-[640px]:grid-cols-1">
              <div className="px-6 py-5 max-[640px]:border-b max-[640px]:border-blog-border">
                <dt className="font-mono text-[9px] font-bold tracking-[0.12em] text-blog-subtle uppercase">
                  Period
                </dt>
                <dd className="mt-2 text-sm font-semibold text-blog-text">
                  {project.period}
                </dd>
              </div>
              <div className="border-x border-blog-border px-6 py-5 max-[640px]:border-x-0 max-[640px]:border-b">
                <dt className="font-mono text-[9px] font-bold tracking-[0.12em] text-blog-subtle uppercase">
                  Role
                </dt>
                <dd className="mt-2 text-sm font-semibold text-blog-text">
                  {project.role}
                </dd>
              </div>
              <div className="px-6 py-5">
                <dt className="font-mono text-[9px] font-bold tracking-[0.12em] text-blog-subtle uppercase">
                  Status
                </dt>
                <dd className="mt-2 text-sm font-semibold text-blog-text">
                  {project.status}
                </dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="mx-auto grid w-[calc(100%_-_40px)] max-w-[1040px] grid-cols-[190px_minmax(0,720px)] items-start gap-[70px] pt-[68px] max-[960px]:max-w-[720px] max-[960px]:grid-cols-1 max-[760px]:w-[calc(100%_-_36px)] max-[760px]:pt-[50px]">
          <aside
            className="sticky top-[104px] max-[960px]:hidden"
            aria-label="프로젝트 목차"
          >
            <p className="mb-[17px] font-mono text-[9px] font-bold tracking-[0.13em] text-blog-primary">
              PROJECT INDEX
            </p>
            <ol className="flex flex-col gap-3">
              {project.sections.map((section) => (
                <li key={section.id}>
                  <a
                    className="text-[11px] leading-[1.5] text-blog-subtle transition-colors duration-200 hover:text-blog-primary"
                    href={`#${section.id}`}
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div>
            {project.sections.map((section) => (
              <section
                className="scroll-mt-[110px] [&+section]:mt-[74px]"
                id={section.id}
                key={section.id}
              >
                <h2 className="mb-[27px] text-[29px] leading-[1.35] font-bold tracking-[-0.04em]">
                  {section.heading}
                </h2>

                {section.blocks.map((block) => (
                  <ContentBlock block={block} key={block.id} />
                ))}
              </section>
            ))}
          </div>
        </div>

        <footer className="mx-auto mt-[90px] flex max-w-[720px] items-center justify-between gap-[30px] border-t border-blog-border pt-[30px] max-[760px]:w-[calc(100%_-_36px)] max-[760px]:flex-col max-[760px]:items-start">
          <p className="text-[13px] text-blog-muted">
            프로젝트의 문제와 선택을 기록했습니다.
          </p>
          <Link
            className="inline-flex items-center gap-[7px] text-[13px] font-bold text-blog-primary"
            href="/projects"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            다른 프로젝트 보기
          </Link>
        </footer>
      </article>
    </main>
  );
}

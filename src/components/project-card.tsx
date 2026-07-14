import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectPreview } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectPreview;
  featured?: boolean;
};

export function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className="group h-full overflow-hidden rounded-[20px] border border-blog-border bg-white transition-[translate,border-color,box-shadow] duration-200 data-[featured=true]:bg-[radial-gradient(circle_at_100%_0%,rgba(186,230,253,.42),transparent_32%)] hover:-translate-y-[5px] hover:border-sky-300 hover:shadow-card"
      data-featured={featured}
    >
      <Link
        className="flex h-full min-h-[410px] flex-col p-[25px] [.all-projects_&]:min-h-[450px] [.all-projects_&]:p-[30px] max-[760px]:[.all-projects_&]:min-h-[410px] max-[760px]:[.all-projects_&]:p-[25px]"
        href={`/projects/${project.slug}`}
      >
        <div className="flex items-start justify-between gap-4 text-blog-primary">
          <div>
            <p className="font-mono text-[10px] font-bold tracking-[0.14em]">
              {project.eyebrow}
            </p>
            <p className="mt-1.5 font-mono text-[9px] text-blog-subtle">
              {project.period} · {project.status}
            </p>
          </div>
          <ArrowUpRight
            className="shrink-0 transition-[color,translate] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            size={21}
            aria-hidden="true"
          />
        </div>

        <div
          className="relative mt-[25px] mb-[27px] flex h-[145px] items-center justify-center overflow-hidden rounded-[14px] bg-[linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(135deg,#e0f2fe,#dbeafe)] bg-size-[22px_22px,22px_22px,auto] [.all-projects_&]:h-[175px]"
        >
          {project.coverImage ? (
            <Image
              alt={project.coverImage.alt}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              fill
              sizes="(max-width: 760px) calc(100vw - 82px), (max-width: 1160px) 50vw, 520px"
              src={project.coverImage.src}
            />
          ) : (
            <div
              className="absolute inset-0 grid place-items-center"
              aria-hidden="true"
            >
              <span className="relative z-[2] font-mono text-[38px] font-[720] text-white [text-shadow:0_4px_18px_rgba(37,99,235,0.18)]">
                {project.index}
              </span>
              <div className="absolute h-[86px] w-[86px] rotate-12 rounded-3xl bg-linear-to-br from-blog-primary to-blog-sky shadow-[0_17px_30px_rgba(37,99,235,0.24)] transition-[rotate,scale] duration-300 group-hover:rotate-3 group-hover:scale-105" />
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold tracking-[-0.035em] transition-colors duration-200 group-hover:text-blog-primary [.all-projects_&]:text-[23px]">
          {project.title}
        </h3>
        <p className="mt-3 mb-[22px] line-clamp-3 text-[13px] leading-[1.75] text-blog-muted">
          {project.description}
        </p>

        <div className="mt-auto">
          <p className="mb-3 text-[11px] font-semibold text-blog-subtle">
            {project.role}
          </p>
          <ul className="flex flex-wrap gap-[7px]" aria-label="사용 기술">
            {project.tags.map((tag) => (
              <li
                className="rounded-full bg-blog-soft px-[9px] py-1.5 font-mono text-[9px] font-semibold text-blog-primary"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}

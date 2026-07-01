import { ArrowLeft, Clock3 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";
import { siteConfig } from "@/data/site";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: siteConfig.name }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      tags: [...post.tags],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main id="main-content" className="bg-white">
      <article className="pb-[110px]">
        <header className="mx-auto max-w-[820px] px-6 pt-[78px] pb-[68px] text-center max-[760px]:pt-14 max-[760px]:pb-[52px]">
          <Link
            href="/posts"
            className="mb-12 inline-flex items-center gap-[7px] text-xs font-semibold text-blog-muted transition-colors duration-200 hover:text-blog-primary"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            모든 글
          </Link>

          <div className="flex flex-wrap justify-center gap-1.5" aria-label="태그">
            {post.tags.map((tag) => (
              <span
                className="rounded-full bg-blog-soft px-[9px] py-1.5 font-mono text-[9px] font-semibold text-blog-primary"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-6 mb-5 text-[clamp(37px,5vw,56px)] leading-[1.22] font-bold tracking-[-0.055em]">
            {post.title}
          </h1>
          <p className="mx-auto max-w-[680px] text-base leading-[1.8] text-blog-muted">
            {post.description}
          </p>

          <div className="mt-[25px] flex items-center justify-center gap-2 font-mono text-[10px] text-blog-subtle">
            <time dateTime={post.publishedAt}>{post.displayDate}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={15} aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>
        </header>

        <div className="mx-auto grid w-[calc(100%_-_40px)] max-w-[1040px] grid-cols-[190px_minmax(0,720px)] items-start gap-[70px] border-t border-blog-border pt-[68px] max-[960px]:max-w-[720px] max-[960px]:grid-cols-1 max-[760px]:w-[calc(100%_-_36px)] max-[760px]:pt-[50px]">
          <aside
            className="sticky top-[104px] max-[960px]:hidden"
            aria-label="목차"
          >
            <p className="mb-[17px] font-mono text-[9px] font-bold tracking-[0.13em] text-blog-primary">
              ON THIS PAGE
            </p>
            <ol className="flex flex-col gap-3">
              {post.sections.map((section) => (
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
            {post.sections.map((section) => (
              <section
                className="scroll-mt-[110px] [&+section]:mt-[74px]"
                key={section.id}
                id={section.id}
              >
                <h2 className="mb-[27px] text-[29px] leading-[1.35] font-bold tracking-[-0.04em]">
                  {section.heading}
                </h2>

                {section.paragraphs.map((paragraph) => (
                  <p
                    className="mb-5 text-base leading-[2] tracking-[-0.01em] text-[#334e68] max-[760px]:text-[15px] max-[760px]:leading-[1.9]"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}

                {section.quote ? (
                  <blockquote className="my-8 rounded-r-xl border-l-[3px] border-blog-sky bg-[#f2f9ff] px-[25px] py-[22px] text-[15px] leading-[1.8] font-medium text-[#27638d]">
                    {section.quote}
                  </blockquote>
                ) : null}

                {section.bullets ? (
                  <ul className="my-7 flex list-disc flex-col gap-3 pl-6 text-[#334e68] marker:text-blog-sky">
                    {section.bullets.map((bullet) => (
                      <li
                        className="pl-[5px] text-[15px] leading-[1.8]"
                        key={bullet}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.code ? (
                  <div className="my-[34px] overflow-hidden rounded-[14px] border border-slate-800 bg-blog-code shadow-[0_16px_42px_rgba(15,23,42,0.14)]">
                    <div className="flex items-center justify-between border-b border-slate-800 px-4 py-[11px] font-mono text-[9px] text-slate-500">
                      <span className="text-sky-300">
                        {section.code.language}
                      </span>
                      <span aria-hidden="true">•••</span>
                    </div>
                    <pre className="overflow-x-auto p-[23px]">
                      <code className="font-mono text-xs leading-[1.8] text-blue-100">
                        {section.code.value}
                      </code>
                    </pre>
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>

        <footer className="mx-auto mt-[90px] flex max-w-[720px] items-center justify-between gap-[30px] border-t border-blog-border pt-[30px] max-[760px]:w-[calc(100%_-_36px)] max-[760px]:flex-col max-[760px]:items-start">
          <p className="text-[13px] text-blog-muted">
            끝까지 읽어주셔서 감사합니다.
          </p>
          <Link
            className="inline-flex flex-row-reverse items-center gap-[7px] text-[13px] font-bold text-blog-primary"
            href="/posts"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            다른 글 둘러보기
          </Link>
        </footer>
      </article>
    </main>
  );
}

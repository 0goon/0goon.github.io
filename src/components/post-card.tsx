import { ArrowUpRight, Clock3 } from "lucide-react";
import Link from "next/link";
import type { PostPreview } from "@/data/posts";

type PostCardProps = {
  post: PostPreview;
  featured?: boolean;
};

export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article
      className="group h-full overflow-hidden rounded-[20px] border border-blog-border bg-blog-surface transition-[translate,border-color,box-shadow] duration-200 data-[featured=true]:bg-[radial-gradient(circle_at_100%_0%,rgba(186,230,253,.4),transparent_30%)] hover:-translate-y-[5px] hover:border-sky-300 hover:shadow-card"
      data-featured={featured}
    >
      <Link
        href={`/posts/${post.slug}`}
        className="flex min-h-[330px] h-full flex-col p-[25px] [.all-posts_&]:min-h-[360px] [.all-posts_&]:p-[30px] max-[760px]:[.all-posts_&]:min-h-[330px] max-[760px]:[.all-posts_&]:p-[25px]"
      >
        <div className="flex min-h-[31px] items-start justify-between gap-4">
          <div className="flex flex-wrap gap-1.5" aria-label="태그">
            {post.tags.map((tag) => (
              <span
                className="rounded-full bg-blog-soft px-[9px] py-1.5 font-mono text-[9px] font-semibold text-blog-primary"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <ArrowUpRight
            className="shrink-0 text-blog-subtle transition-[color,translate] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blog-primary"
            size={20}
            aria-hidden="true"
          />
        </div>

        <div>
          <p className="mt-9 mb-2.5 font-mono text-[9px] font-bold tracking-[0.12em] text-blog-primary uppercase">
            {post.category}
          </p>
          <h3 className="text-[19px] leading-[1.48] font-bold tracking-[-0.035em] transition-colors duration-200 group-hover:text-blog-primary [.all-posts_&]:max-w-[480px] [.all-posts_&]:text-[23px]">
            {post.title}
          </h3>
          <p className="mt-[13px] mb-6 line-clamp-2 text-[13px] leading-[1.7] text-blog-muted">
            {post.description}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-[7px] font-mono text-[9px] text-blog-subtle">
          <time dateTime={post.publishedAt}>{post.displayDate}</time>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-[5px]">
            <Clock3 size={14} aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>
      </Link>
    </article>
  );
}

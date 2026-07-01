"use client";

import { useState } from "react";
import { PostCard } from "@/components/post-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import type { PostPreview } from "@/data/posts";

type PostCategoryFilterProps = {
  posts: readonly PostPreview[];
};

type CategoryOption = {
  label: string;
  count: number;
};

function getCategoryOptions(posts: readonly PostPreview[]) {
  const counts = new Map<string, number>();

  for (const post of posts) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }

  return Array.from(
    counts,
    ([label, count]): CategoryOption => ({ label, count }),
  );
}

function formatCount(count: number) {
  return String(count).padStart(2, "0");
}

export function PostCategoryFilter({ posts }: PostCategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoryOptions = getCategoryOptions(posts);
  const visiblePosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;
  const selectedLabel = selectedCategory ?? "ALL POSTS";

  return (
    <>
      <ScrollReveal>
        <div className="flex items-center justify-between gap-[30px] border-b border-blog-border pb-[26px] max-[760px]:flex-col max-[760px]:items-start">
          <span className="shrink-0 font-mono text-[10px] font-bold tracking-[0.1em] text-blog-text uppercase">
            {selectedLabel} · {formatCount(visiblePosts.length)}
          </span>

          <div
            className="flex flex-wrap justify-end gap-2 max-[760px]:justify-start"
            aria-label="글 카테고리"
            role="group"
          >
            <button
              type="button"
              className="group/category inline-flex min-h-8 items-center gap-2 rounded-full border border-blog-border bg-white px-3 py-1.5 font-mono text-[10px] font-semibold text-blog-muted transition-[border-color,background-color,color,translate] duration-200 data-[active=true]:border-blog-primary data-[active=true]:bg-blog-primary data-[active=true]:text-white hover:-translate-y-px hover:border-sky-300 hover:text-blog-primary data-[active=true]:hover:text-white"
              data-active={selectedCategory === null}
              aria-pressed={selectedCategory === null}
              aria-controls="filtered-post-list"
              onClick={() => setSelectedCategory(null)}
            >
              전체
              <span className="min-w-5 rounded-full bg-blog-soft px-1.5 py-0.5 text-center text-[9px] text-blog-primary group-data-[active=true]/category:bg-white/20 group-data-[active=true]/category:text-white">
                {formatCount(posts.length)}
              </span>
            </button>

            {categoryOptions.map((category) => {
              const isActive = selectedCategory === category.label;

              return (
                <button
                  type="button"
                  className="group/category inline-flex min-h-8 items-center gap-2 rounded-full border border-blog-border bg-white px-3 py-1.5 font-mono text-[10px] font-semibold text-blog-muted transition-[border-color,background-color,color,translate] duration-200 data-[active=true]:border-blog-primary data-[active=true]:bg-blog-primary data-[active=true]:text-white hover:-translate-y-px hover:border-sky-300 hover:text-blog-primary data-[active=true]:hover:text-white"
                  data-active={isActive}
                  aria-pressed={isActive}
                  aria-controls="filtered-post-list"
                  key={category.label}
                  onClick={() => setSelectedCategory(category.label)}
                >
                  {category.label}
                  <span className="min-w-5 rounded-full bg-blog-soft px-1.5 py-0.5 text-center text-[9px] text-blog-primary group-data-[active=true]/category:bg-white/20 group-data-[active=true]/category:text-white">
                    {formatCount(category.count)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      <p className="sr-only" aria-live="polite">
        {selectedCategory
          ? `${selectedCategory} 카테고리의 글 ${visiblePosts.length}개를 표시합니다.`
          : `전체 글 ${visiblePosts.length}개를 표시합니다.`}
      </p>

      <div
        id="filtered-post-list"
        className="all-posts grid grid-cols-2 gap-5 pt-[34px] max-[760px]:grid-cols-1"
      >
        {visiblePosts.map((post, index) => (
          <ScrollReveal key={post.slug} delay={(index % 2) * 80}>
            <PostCard post={post} featured={index === 0} />
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}

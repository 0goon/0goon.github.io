import type { Metadata } from "next";
import { PostCategoryFilter } from "@/components/post-category-filter";
import { postPreviews } from "@/data/posts";

export const metadata: Metadata = {
  title: "글",
  description:
    "프론트엔드 개발, 제품 설계, 성능과 협업에 관해 배운 것을 기록합니다.",
};

export default function PostsPage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden border-b border-blog-border bg-[radial-gradient(circle_at_82%_26%,rgba(125,211,252,.35),transparent_23%),linear-gradient(145deg,#fff,#eef8ff)] after:absolute after:right-[6%] after:-bottom-[150px] after:h-[340px] after:w-[340px] after:rounded-full after:border after:border-blog-sky/20 after:shadow-[0_0_0_48px_rgba(14,165,233,0.04),0_0_0_96px_rgba(14,165,233,0.025)] after:content-['']">
        <div className="relative z-[2] mx-auto w-full max-w-[1160px] px-5 pt-[100px] pb-[92px] max-[760px]:px-4 max-[760px]:pt-[76px] max-[760px]:pb-[72px]">
          <p className="mb-[22px] font-mono text-[11px] font-bold tracking-[0.15em] text-blog-primary">
            WRITING
          </p>
          <h1 className="text-[clamp(44px,6vw,68px)] leading-[1.18] font-bold tracking-[-0.06em]">
            배운 것을 기록하면
            <br />
            더 오래, 더 멀리 갑니다.
          </h1>
          <span className="mt-6 block max-w-[580px] text-[15px] leading-[1.8] text-blog-muted">
            실무에서 마주한 문제와 해결 과정, 그리고 다시 꺼내 보고 싶은
            생각을 씁니다.
          </span>
        </div>
      </section>

      <section className="bg-white pt-[72px] pb-[120px]">
        <div className="mx-auto w-full max-w-[1160px] px-5 max-[760px]:px-4">
          <PostCategoryFilter posts={postPreviews} />
        </div>
      </section>
    </main>
  );
}

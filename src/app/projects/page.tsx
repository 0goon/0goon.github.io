import type { Metadata } from "next";
import { ProjectCategoryFilter } from "@/components/project-category-filter";
import { projectPreviews } from "@/data/projects";

export const metadata: Metadata = {
  title: "프로젝트",
  description:
    "제품과 인터페이스를 만들며 마주한 문제, 선택한 접근 방식과 배운 점을 프로젝트별로 기록합니다.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden border-b border-blog-border bg-[radial-gradient(circle_at_78%_24%,rgba(125,211,252,.38),transparent_24%),linear-gradient(145deg,#fff,#eef8ff)] after:absolute after:right-[8%] after:-bottom-[170px] after:h-[380px] after:w-[380px] after:rotate-12 after:rounded-[96px] after:border after:border-blog-sky/20 after:shadow-[0_0_0_48px_rgba(14,165,233,0.04),0_0_0_96px_rgba(14,165,233,0.025)] after:content-['']">
        <div className="relative z-[2] mx-auto w-full max-w-[1160px] px-5 pt-[100px] pb-[92px] max-[760px]:px-4 max-[760px]:pt-[76px] max-[760px]:pb-[72px]">
          <p className="mb-[22px] font-mono text-[11px] font-bold tracking-[0.15em] text-blog-primary">
            PROJECT ARCHIVE
          </p>
          <h1 className="text-[clamp(44px,6vw,68px)] leading-[1.18] font-bold tracking-[-0.06em]">
            문제를 지나온 과정이
            <br />
            다음 선택의 기준이 됩니다.
          </h1>
          <span className="mt-6 block max-w-[620px] text-[15px] leading-[1.8] text-blog-muted">
            프로젝트마다 마주한 맥락과 해결 과정, 결과보다 오래 남은 기술적
            판단을 기록합니다.
          </span>
        </div>
      </section>

      <section className="bg-white pt-[72px] pb-[120px]">
        <div className="mx-auto w-full max-w-[1160px] px-5 max-[760px]:px-4">
          <ProjectCategoryFilter projects={projectPreviews} />
        </div>
      </section>
    </main>
  );
}

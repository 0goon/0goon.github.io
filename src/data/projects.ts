import type { ContentSection } from "@/data/content";

export type ProjectCoverImage = {
  src: string;
  alt: string;
};

export type Project = {
  index: string;
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  period: string;
  role: string;
  status: string;
  tags: readonly string[];
  coverImage?: ProjectCoverImage;
  sections: readonly ContentSection[];
};

export type ProjectPreview = Pick<
  Project,
  | "index"
  | "slug"
  | "title"
  | "eyebrow"
  | "description"
  | "period"
  | "role"
  | "status"
  | "tags"
  | "coverImage"
>;

export const projects: readonly Project[] = [
  {
    index: "01",
    slug: "product-design-system",
    title: "Product Design System",
    eyebrow: "SYSTEM",
    description:
      "제품 전반의 시각 언어와 상호작용을 일관되게 만드는 컴포넌트 시스템입니다. 접근성과 확장 가능한 API를 함께 설계했습니다.",
    period: "2025",
    role: "Frontend Architecture",
    status: "Case Study",
    tags: ["React", "TypeScript", "Storybook"],
    sections: [
      {
        id: "context",
        heading: "문제와 맥락",
        blocks: [
          {
            id: "design-system-context",
            type: "paragraph",
            value:
              "제품이 성장하면서 같은 역할의 UI가 화면마다 다른 방식으로 구현되기 시작했습니다. 작은 차이는 개발 속도와 사용자 경험 모두에 반복적인 비용을 만들었습니다.",
          },
          {
            id: "design-system-goal",
            type: "quote",
            value:
              "컴포넌트를 모으는 데서 끝나지 않고, 팀이 같은 기준으로 결정할 수 있는 시스템을 만드는 것을 목표로 삼았습니다.",
          },
        ],
      },
      {
        id: "approach",
        heading: "설계와 구현",
        blocks: [
          {
            id: "design-system-approach",
            type: "paragraph",
            value:
              "기존 화면을 조사해 반복되는 패턴을 찾고, 스타일 값보다 사용 의도를 중심으로 API를 설계했습니다. 접근성과 반응형 동작은 각 컴포넌트의 기본 책임으로 포함했습니다.",
          },
          {
            id: "design-system-principles",
            type: "bullets",
            items: [
              "디자인 토큰과 컴포넌트 책임을 분리하기",
              "variant와 size처럼 의도가 드러나는 API 사용하기",
              "키보드 탐색과 스크린 리더 동작을 기본값으로 제공하기",
              "Storybook에서 상태와 사용 예시를 함께 문서화하기",
            ],
          },
          {
            id: "design-system-button-api",
            type: "code",
            language: "button.tsx",
            value: `type ButtonProps = {
  intent?: "primary" | "secondary" | "quiet";
  size?: "sm" | "md";
  children: React.ReactNode;
};`,
          },
        ],
      },
      {
        id: "outcome",
        heading: "결과와 배운 점",
        blocks: [
          {
            id: "design-system-outcome",
            type: "paragraph",
            value:
              "새 화면을 만들 때 반복하던 스타일과 접근성 결정을 줄이고, 리뷰에서는 제품에 필요한 동작과 맥락에 더 집중할 수 있게 되었습니다.",
          },
          {
            id: "design-system-comparison",
            type: "table",
            caption: "디자인 시스템 적용 전후의 작업 방식",
            headers: ["항목", "적용 전", "적용 후"],
            rows: [
              ["UI 구현", "화면별 개별 구현", "공통 컴포넌트 조합"],
              ["접근성", "구현자별 확인", "기본 동작으로 제공"],
              ["문서화", "코드 중심 탐색", "상태와 예제를 함께 제공"],
            ],
            rowHeaderColumn: 0,
          },
        ],
      },
    ],
  },
  {
    index: "02",
    slug: "content-platform",
    title: "Content Platform",
    eyebrow: "PRODUCT",
    description:
      "콘텐츠를 빠르게 발견하고 깊이 읽을 수 있도록 정보 구조와 렌더링 전략을 개선한 웹 플랫폼입니다.",
    period: "2025",
    role: "Frontend Engineer",
    status: "Case Study",
    tags: ["Next.js", "SSG", "Web Vitals"],
    sections: [
      {
        id: "discovery",
        heading: "발견에서 읽기까지",
        blocks: [
          {
            id: "content-platform-problem",
            type: "paragraph",
            value:
              "콘텐츠가 늘어날수록 목록에서 원하는 글을 찾는 과정과 상세 페이지에서 맥락을 따라가는 과정이 중요해졌습니다.",
          },
          {
            id: "content-platform-principles",
            type: "bullets",
            items: [
              "카테고리와 태그가 탐색 기준으로 바로 읽히게 하기",
              "목차와 본문 너비를 긴 글 읽기에 맞추기",
              "콘텐츠 순서를 데이터에서 명시적으로 관리하기",
            ],
          },
        ],
      },
      {
        id: "rendering",
        heading: "정적 렌더링 전략",
        blocks: [
          {
            id: "content-platform-ssg",
            type: "paragraph",
            value:
              "모든 글의 경로를 빌드 시점에 확정하고 Server Component에서 HTML을 생성했습니다. 독자는 별도의 데이터 요청 없이 완성된 콘텐츠를 받을 수 있습니다.",
          },
          {
            id: "content-platform-config",
            type: "code",
            language: "next.config.ts",
            value: `const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};`,
          },
          {
            id: "content-platform-static-quote",
            type: "quote",
            value:
              "콘텐츠의 변경 주기와 배포 모델이 일치할 때 정적 렌더링은 단순하면서도 강력한 선택이 됩니다.",
          },
        ],
      },
      {
        id: "lessons",
        heading: "운영을 고려한 구조",
        blocks: [
          {
            id: "content-platform-lessons",
            type: "paragraph",
            value:
              "페이지 표현과 콘텐츠 데이터를 분리하고, 공용 블록 타입을 사용해 글과 프로젝트가 같은 렌더링 규칙을 공유하도록 구성했습니다.",
          },
        ],
      },
    ],
  },
  {
    index: "03",
    slug: "stateful-interface-lab",
    title: "Stateful Interface Lab",
    eyebrow: "EXPERIMENT",
    description:
      "복잡한 UI 흐름을 예측 가능한 상태 모델로 표현하고 팀이 시각적으로 공유할 수 있게 만든 인터랙션 실험입니다.",
    period: "2024",
    role: "Interaction Engineer",
    status: "Experiment",
    tags: ["XState", "React", "Testing"],
    sections: [
      {
        id: "motivation",
        heading: "상태를 먼저 설명하기",
        blocks: [
          {
            id: "stateful-interface-motivation",
            type: "paragraph",
            value:
              "조건문이 늘어나는 인터랙션은 화면만 보고 전체 동작을 이해하기 어렵습니다. 가능한 상태와 사건을 먼저 정의해 구현과 대화의 기준을 하나로 맞췄습니다.",
          },
        ],
      },
      {
        id: "state-model",
        heading: "작은 상태 모델",
        blocks: [
          {
            id: "stateful-interface-model-description",
            type: "paragraph",
            value:
              "DOM 관찰과 시각 표현을 상태 전이에서 분리했습니다. 브라우저 이벤트는 머신에 사건을 전달하고, 컴포넌트는 현재 상태를 화면에 반영합니다.",
          },
          {
            id: "stateful-interface-machine",
            type: "code",
            language: "reveal-machine.ts",
            value: `const revealMachine = setup({
  types: {
    events: {} as
      | { type: "ENTER" }
      | { type: "LEAVE" },
  },
}).createMachine({
  initial: "idle",
  states: {
    idle: { on: { ENTER: "visible" } },
    visible: { on: { LEAVE: "hidden" } },
    hidden: { on: { ENTER: "visible" } },
  },
});`,
          },
        ],
      },
      {
        id: "verification",
        heading: "검증 가능한 인터랙션",
        blocks: [
          {
            id: "stateful-interface-verification",
            type: "paragraph",
            value:
              "상태 전이 단위로 테스트하고, 모션 감소 환경에서는 애니메이션 없이 동일한 정보가 전달되는지 함께 확인했습니다.",
          },
          {
            id: "stateful-interface-checklist",
            type: "bullets",
            items: [
              "상태별 화면 표현을 독립적으로 확인하기",
              "허용하지 않은 사건이 상태를 변경하지 않는지 테스트하기",
              "prefers-reduced-motion 환경에서 콘텐츠 접근성 유지하기",
            ],
          },
        ],
      },
    ],
  },
];

export const projectPreviews: readonly ProjectPreview[] = projects.map(
  (project) => ({
    index: project.index,
    slug: project.slug,
    title: project.title,
    eyebrow: project.eyebrow,
    description: project.description,
    period: project.period,
    role: project.role,
    status: project.status,
    tags: project.tags,
    coverImage: project.coverImage,
  }),
);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

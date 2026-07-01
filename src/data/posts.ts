export type PostSection = {
  id: string;
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  code?: {
    language: string;
    value: string;
  };
  quote?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  displayDate: string;
  readingTime: string;
  tags: readonly string[];
  sections: readonly PostSection[];
};

export type PostPreview = Pick<
  BlogPost,
  | "slug"
  | "title"
  | "description"
  | "category"
  | "publishedAt"
  | "displayDate"
  | "readingTime"
  | "tags"
>;

export const posts: readonly BlogPost[] = [
  {
    slug: "nextjs-static-export",
    title: "Next.js App Router를 GitHub Pages에 정적으로 배포하기",
    description:
      "App Router의 장점을 유지하면서 GitHub Pages에 안전하게 배포하기 위해 알아야 할 설정과 경계를 정리합니다.",
    category: "Next.js",
    publishedAt: "2026-06-29",
    displayDate: "2026.06.29",
    readingTime: "7 min read",
    tags: ["Next.js", "Deploy", "SSG"],
    sections: [
      {
        id: "why-static-export",
        heading: "왜 static export인가",
        paragraphs: [
          "개인 기술 블로그는 요청마다 서버에서 계산할 데이터가 많지 않습니다. 글이 바뀌는 시점은 배포 시점과 거의 같고, 모든 독자가 같은 내용을 읽습니다. 이런 경우 빌드할 때 HTML을 완성해 두면 운영 복잡도를 크게 줄일 수 있습니다.",
          "Next.js의 static export는 App Router와 Server Component를 포기하는 방식이 아닙니다. 서버 컴포넌트는 빌드 시점에 실행되고, 결과는 각 경로의 HTML과 정적 페이로드로 만들어집니다.",
        ],
        quote:
          "정적 배포는 기능이 적은 선택이 아니라, 콘텐츠의 수명 주기에 가장 잘 맞는 실행 모델을 고르는 일입니다.",
      },
      {
        id: "minimum-config",
        heading: "필요한 설정은 작게 유지한다",
        paragraphs: [
          "핵심은 output을 export로 지정하는 것입니다. trailingSlash는 GitHub Pages처럼 디렉터리 기반으로 파일을 제공하는 환경에서 경로를 자연스럽게 만들어 줍니다.",
        ],
        code: {
          language: "next.config.ts",
          value: `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;`,
        },
      },
      {
        id: "know-the-boundaries",
        heading: "정적 사이트의 경계를 먼저 안다",
        paragraphs: [
          "서버가 없으므로 요청 시점의 쿠키, Server Action, ISR, 동적 리다이렉트는 사용할 수 없습니다. 반대로 블로그 글, 프로젝트 소개, 태그 페이지처럼 빌드 시점에 경로를 알 수 있는 콘텐츠는 매우 잘 맞습니다.",
          "동적 글 경로는 generateStaticParams로 모두 알려 주어야 합니다. 이 규칙을 데이터 계층에 가깝게 두면 글을 추가할 때 누락을 예방할 수 있습니다.",
        ],
        bullets: [
          "모든 글의 slug를 generateStaticParams에서 반환하기",
          "브라우저 API는 Client Component의 effect 안에서만 사용하기",
          "이미지는 unoptimized 또는 외부 이미지 로더 사용하기",
          "빌드 결과인 out 디렉터리를 배포 아티팩트로 사용하기",
        ],
      },
    ],
  },
  {
    slug: "xstate-scroll-interface",
    title: "스크롤 인터랙션을 XState로 명확하게 모델링하기",
    description:
      "IntersectionObserver와 상태 머신을 결합해 나타나고 사라지는 섹션의 상태를 예측 가능하게 관리합니다.",
    category: "Interaction",
    publishedAt: "2026-06-22",
    displayDate: "2026.06.22",
    readingTime: "6 min read",
    tags: ["XState", "React", "Animation"],
    sections: [
      {
        id: "animation-is-state",
        heading: "애니메이션도 상태다",
        paragraphs: [
          "스크롤 애니메이션은 흔히 DOM에 클래스를 붙였다 떼는 코드로 시작합니다. 작은 화면에서는 충분하지만, 한 번만 보여 줄지, 다시 사라질지, 모션 감소 설정에서는 어떻게 할지 조건이 늘어나면 동작의 근거가 흐려집니다.",
          "상태 머신을 사용하면 화면 밖, 화면 안이라는 두 상태와 그 사이의 사건을 먼저 정의할 수 있습니다. DOM 관찰은 사건을 보내는 역할만 하고, 어떤 모습이어야 하는지는 현재 상태로 결정합니다.",
        ],
      },
      {
        id: "small-machine",
        heading: "작은 머신으로 충분하다",
        paragraphs: [
          "초기 상태를 idle로 두는 것이 중요한 작은 디테일입니다. 서버에서 만들어진 HTML은 기본적으로 보이고, 클라이언트가 준비된 뒤에만 뷰포트 상태에 따라 전환됩니다. 자바스크립트가 늦거나 꺼져 있어도 콘텐츠 자체는 사라지지 않습니다.",
        ],
        code: {
          language: "reveal-machine.ts",
          value: `export const revealMachine = setup({
  types: {
    events: {} as
      | { type: "ENTER" }
      | { type: "LEAVE" },
  },
}).createMachine({
  initial: "idle",
  states: {
    idle: { on: { ENTER: "visible", LEAVE: "hidden" } },
    hidden: { on: { ENTER: "visible" } },
    visible: { on: { LEAVE: "hidden" } },
  },
});`,
        },
      },
      {
        id: "responsible-motion",
        heading: "좋은 모션은 존재감을 낮춘다",
        paragraphs: [
          "콘텐츠보다 애니메이션이 먼저 보이면 목적을 잃은 것입니다. 이동 거리는 짧게, 투명도 전환은 부드럽게, 카드 사이 지연은 작게 제한합니다.",
        ],
        bullets: [
          "prefers-reduced-motion에서는 즉시 visible 상태로 전환하기",
          "transform과 opacity만 사용해 레이아웃 이동 피하기",
          "콘텐츠를 읽는 속도보다 긴 애니메이션은 피하기",
        ],
      },
    ],
  },
  {
    slug: "designing-component-apis",
    title: "오래 쓰이는 React 컴포넌트 API를 설계하는 기준",
    description:
      "옵션을 많이 제공하는 대신 의도를 선명하게 만들고, 팀이 자연스럽게 올바른 사용법을 선택하게 하는 방법을 살펴봅니다.",
    category: "React",
    publishedAt: "2026-06-15",
    displayDate: "2026.06.15",
    readingTime: "8 min read",
    tags: ["React", "TypeScript", "Design System"],
    sections: [
      {
        id: "api-is-a-decision",
        heading: "컴포넌트 API는 의사결정의 기록이다",
        paragraphs: [
          "좋은 컴포넌트는 코드를 줄이는 도구에 그치지 않습니다. 제품에서 허용하는 변형과 팀이 합의한 상호작용을 API에 담습니다. 사용하는 사람이 매번 디자인과 접근성 결정을 다시 하지 않도록 돕는 것이 핵심입니다.",
          "그래서 유연함은 prop의 개수로 측정하기 어렵습니다. 의도하지 않은 조합을 막으면서 필요한 확장을 열어 두는 경계가 더 중요합니다.",
        ],
      },
      {
        id: "prefer-intent",
        heading: "스타일보다 의도를 입력받는다",
        paragraphs: [
          "색상과 여백을 직접 받는 API보다 variant와 size처럼 의미가 있는 이름을 제공하는 편이 좋습니다. 타입은 가능한 조합을 설명하고, 구현은 시각 규칙을 한곳에서 책임집니다.",
        ],
        code: {
          language: "button.tsx",
          value: `type ButtonProps = {
  intent?: "primary" | "secondary" | "quiet";
  size?: "sm" | "md";
  children: React.ReactNode;
};

export function Button({
  intent = "primary",
  size = "md",
  children,
}: ButtonProps) {
  // intent와 size를 디자인 토큰에 연결합니다.
  return <button>{children}</button>;
}`,
        },
      },
      {
        id: "composition",
        heading: "확장은 합성으로 연다",
        paragraphs: [
          "모든 상황을 boolean prop으로 예측하려 하면 API가 빠르게 무거워집니다. 구조가 달라지는 부분은 children과 작은 하위 컴포넌트의 합성으로 열고, 반드시 일관되어야 하는 부분만 상위 컴포넌트가 제어하는 편이 오래갑니다.",
        ],
        quote:
          "좋은 추상화는 사용 가능한 모든 경우를 담지 않습니다. 팀이 반복해서 내리는 중요한 결정을 담습니다.",
      },
    ],
  },
];

export const postPreviews: readonly PostPreview[] = posts.map((post) => ({
  slug: post.slug,
  title: post.title,
  description: post.description,
  category: post.category,
  publishedAt: post.publishedAt,
  displayDate: post.displayDate,
  readingTime: post.readingTime,
  tags: post.tags,
}));

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

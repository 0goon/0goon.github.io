export const siteConfig = {
  name: "김재영",
  shortName: "JY",
  role: "Frontend Engineer",
  title: "문제를 구조로 풀어내는 프론트엔드 개발자",
  description:
    "복잡한 요구사항을 단순한 화면과 견고한 코드로 바꿉니다. 제품의 맥락을 이해하고, 오래 유지되는 인터페이스를 만드는 과정을 기록합니다.",
  location: "Seoul, Korea",
  availability: "좋은 제품과 동료를 만날 기회를 열어두고 있어요",
  email: "ddi03231@gmail.com",
  github: "https://github.com/0goon",
  linkedin: "https://www.linkedin.com/in/username",
  url: "https://0goon.github.io",
} as const;

export const profileNotes = [
  {
    label: "Focus",
    value: "Frontend Architecture",
  },
  {
    label: "Working style",
    value: "Clarity & Ownership",
  },
  {
    label: "Based in",
    value: "Seoul, KR",
  },
] as const;

export const values = [
  {
    number: "01",
    title: "맥락부터 이해합니다",
    description:
      "기능을 바로 만드는 것보다 왜 필요한지 먼저 묻습니다. 사용자의 흐름과 제품의 목표를 함께 봅니다.",
  },
  {
    number: "02",
    title: "복잡함을 정리합니다",
    description:
      "타입, 상태, 컴포넌트의 경계를 명확히 나눠 팀이 이해하고 확장하기 쉬운 구조를 만듭니다.",
  },
  {
    number: "03",
    title: "끝까지 확인합니다",
    description:
      "구현에서 멈추지 않고 접근성, 성능, 운영 지표까지 살피며 실제 사용자에게 닿는 결과를 책임집니다.",
  },
] as const;

export const skillGroups = [
  {
    title: "Core",
    items: ["TypeScript", "React", "Next.js", "JavaScript"],
  },
  {
    title: "Architecture",
    items: ["XState", "Design System", "Testing", "Web Performance"],
  },
  {
    title: "Workflow",
    items: ["GitHub Actions", "Storybook", "Figma", "Agile"],
  },
] as const;

export const experiences = [
  {
    period: "2023.08 — PRESENT",
    company: "신한은행",
    role: "M신한/클라우드형 신한인증서 FullStack Engineer",
    summary:
      "고객중심으로 비즈니스를 고민하며 개선하고 있습니다.\nFullStack Engineer로서 Typescript / React / NextJS / JAVA / BXM / ORACLE 등 다양한 기술을 학습하고 성장하고 있습니다.",
    highlights: [
      "사내 형상관리 시스템 및 프로젝트 구조에 맞는 CI/CD 구성, 개선, 관리",
      "산재된 UI 및 중복선언 API 공통화, 전역 상태관리 구조화",
      "코드 리뷰와 기술 문서화를 통해 팀이 같은 기준으로 의사결정할 수 있는 환경 조성",
      "신규 솔루션 도입, 불필요한 솔루션 탐색 후 제거, 운영중인 솔루션 관리",
    ],
  },
  {
    period: "2022.12 — 2023.02",
    company: "VAIV",
    role: "Frontend Developer",
    summary:
      "객체탐지 모델을 사용하여 주가를 차트기반으로 예측하고, 의사결정을 할 수 있는 웹 플랫폼을 개발하였습니다.",
    highlights: [
      "JQuery 기반의 웹사이트를 React 기반 웹 페이지로 전환",
      "컴포넌트들을 반응형으로 구성하여 디바이스별 최적화된 화면을 렌더링",
      "자산관리를 위한 대시보드 페이지 개발",
      "프로젝트 CI/CD 구성 및 관리",
    ],
  },
] as const;

export const projects = [
  {
    index: "01",
    title: "Product Design System",
    eyebrow: "SYSTEM",
    description:
      "제품 전반의 시각 언어와 상호작용을 일관되게 만드는 컴포넌트 시스템입니다. 접근성과 확장 가능한 API를 함께 설계했습니다.",
    tags: ["React", "TypeScript", "Storybook"],
    href: "/#contact",
  },
  {
    index: "02",
    title: "Content Platform",
    eyebrow: "PRODUCT",
    description:
      "콘텐츠를 빠르게 발견하고 깊이 읽을 수 있도록 정보 구조와 렌더링 전략을 개선한 웹 플랫폼입니다.",
    tags: ["Next.js", "SSG", "Web Vitals"],
    href: "/posts",
  },
  {
    index: "03",
    title: "Stateful Interface Lab",
    eyebrow: "EXPERIMENT",
    description:
      "복잡한 UI 흐름을 예측 가능한 상태 모델로 표현하고 팀이 시각적으로 공유할 수 있게 만든 인터랙션 실험입니다.",
    tags: ["XState", "React", "Testing"],
    href: "/posts/xstate-scroll-interface",
  },
] as const;

export const awards = [
  {
    id: "award-01",
    year: "2023",
    title: "제11회 K-해커톤(K-Hackathon)",
    organization: "과학기술정보통신부",
    prize: "대상",
    description:
      "우울증을 예방할 수 있는 공감적 대화능력이 뛰어난 인공지능 챗봇을 개발하고 공감 챗봇과의 대화내용을 녹음 기반으로 자동으로 감정일기를 작성해주는 앱을 개발하였습니다.\n주 업무는 Flutter, Dart를 활용한 앱 개발이었으며, LangChain과 같은 기술적인 영역 뿐만 아니라 사용자들이 지속적으로 앱을 사용하게 할 방법, 더 좋은 사용자 경험을 위한 UI/UX, 수익모델 등 프로덕트 관점에서 고민할 수 있는 좋은 시간이었습니다.",
  },
  {
    id: "award-02",
    year: "2023",
    title: "성균관대 컨소시엄 창의적종합설계 경진대회",
    organization: "성균관대학교",
    prize: "대상",
    description:
      "Generative AI를 이용한 상호작용형 AI Model 개발을 수행하였습니다. GPT-NeoX 기반의 Ko-Alpaca 12.8B 모델을 base-line으로 하여 공감데이터들을 Supervised Fine-Tuning 하여 공감 특화 챗봇을 자체 제작하였습니다.\nAI Model과 대화하며 프롬프트 / 학습된 데이터 / LangChain 과 같은 요소들이 답변의 성능에 얼마나 많은 영향을 미치는지 이해할 수 있는 프로젝트였습니다.",
  },
  {
    id: "award-03",
    year: "2022",
    title: "성균관대학교 캡스톤 디자인 경진대회",
    organization: "성균관대학교",
    prize: "우수상",
    description:
      "다양한 동아리관리 업무를 한번에 해결할 수 있는 관리 플랫폼을 개발하였습니다.\n다양한 디바이스에서 사용할 수 있도록 반응형/적응형 으로 구현되었으며 커스터마이징이 편리한 컴포넌트 구현을 통해 사용자들이 편리하게 커스터마이징 할 수 있도록 하였습니다.",
  },
] as const;

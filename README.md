# Fresh Blue Dev Blog

개발자 포트폴리오와 기술 글을 한곳에 담는 정적 Next.js 블로그입니다.  
`design.md`의 Fresh Blue 가이드를 기반으로 가독성, 넓은 여백, 절제된 블루 포인트를 우선했습니다.

## 기술 구성

- Next.js 16 App Router
- React 19 + TypeScript
- Tailwind CSS 4
- XState 5 + `@xstate/react`
- Lucide React
- pnpm 10
- Static export (`output: "export"`)

페이지 콘텐츠는 빌드 시 HTML로 생성되며 결과물은 `out/`에 만들어집니다. 스크롤 섹션의 진입/이탈 상태만 XState 기반 Client Component가 담당합니다.

스타일은 Tailwind CSS 4의 CSS-first 구성을 사용합니다. 디자인 토큰은
`src/styles/theme.css`의 `@theme`에서 관리하고, 실제 스타일 조합은 각
컴포넌트의 `className`에 위치합니다. `src/app/globals.css`는 Tailwind와
전역 스타일 파일을 불러오는 진입점이며, 브라우저 공통 기본값은
`src/styles/base.css`에 둡니다. 별도의 `tailwind.config.ts`는 사용하지
않습니다.

## 시작하기

Node.js 20.19 이상이 필요합니다. CI는 Node.js 22를 사용합니다.

```bash
corepack enable
pnpm install
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

전체 품질 검사는 다음 명령 하나로 실행할 수 있습니다.

```bash
pnpm check
```

`lint` → `typecheck` → 정적 `build` 순서로 검사합니다.

## 내 정보로 바꾸기

가장 먼저 아래 두 파일을 수정하세요.

- `src/data/site.ts`: 이름, 역할, 소개, 이메일, 소셜 링크, 경력, 프로젝트, 수상이력
- `src/data/posts.ts`: 글 메타데이터와 본문

특히 `YOUR NAME`, `YN`, `hello@example.com`, `username`은 배포 전 반드시 실제 값으로 교체해야 합니다. 메타데이터의 기준 URL도 `siteConfig.url`을 사용하므로 GitHub Pages 주소나 커스텀 도메인을 입력하세요.

새 글은 `posts` 배열에 항목을 추가하면 `/posts/[slug]` 경로가 `generateStaticParams`를 통해 자동으로 정적 생성됩니다.

## GitHub Pages 배포

`.github/workflows/deploy.yml`이 `main` 브랜치 push 시 다음 작업을 수행합니다.

1. 의존성 설치
2. ESLint 및 TypeScript 검사
3. Next.js static export 빌드
4. `out/` 아티팩트 업로드
5. GitHub Pages 배포

GitHub 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 지정하세요. `configure-pages`가 사용자 사이트와 프로젝트 사이트의 `basePath` 차이를 빌드 시 자동 반영합니다.

## 주요 디렉터리

```text
src/
├── app/                  # App Router 페이지와 전역 스타일
│   └── posts/[slug]/     # 정적으로 생성되는 글 상세
├── components/           # 공통 UI 및 스크롤 모션
├── data/                 # 프로필, 경력, 프로젝트, 글 데이터
└── machines/             # XState 상태 머신
```

## 디자인 원칙

- 본문은 흰색과 짙은 네이비로 읽기 편하게 유지
- 블루는 링크, 버튼, 태그, 활성 상태에 집중
- hover와 스크롤 모션은 짧고 차분하게 사용
- `prefers-reduced-motion` 환경에서는 모션 제거
- 모바일부터 큰 화면까지 동일한 정보 흐름 유지

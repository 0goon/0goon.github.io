# 개인 기술 블로그 디자인 가이드

## 1. 목적

이 문서는 개인 기술 블로그의 디자인 방향을 Codex에게 전달하기 위한 구현 가이드이다.

블로그의 핵심 컨셉은 다음과 같다.

> 파란색 계열의 청량한 느낌을 주되, 글을 읽는 데 방해되지 않는 깔끔하고 차분한 기술 블로그 디자인

디자인은 과한 장식보다 **가독성, 여백, 일관된 색상 사용, 명확한 정보 구조**를 우선한다.

---

## 2. 디자인 컨셉

### 컨셉 이름

**Fresh Blue Dev Blog**

### 전체 분위기

- 흰색과 아주 연한 블루 계열 배경을 기반으로 한다.
- 메인 텍스트는 진한 네이비 컬러를 사용해 가독성을 높인다.
- 파란색은 링크, 활성 메뉴, 버튼, 태그, hover 상태 등 포인트 요소에만 제한적으로 사용한다.
- 본문 영역은 최대한 차분하게 유지한다.
- 기술 블로그답게 신뢰감 있고 정돈된 느낌을 준다.

### 디자인 원칙

1. 파란색은 분위기를 만드는 포인트로만 사용한다.
2. 본문 가독성을 최우선으로 한다.
3. 전체 UI는 넓은 여백과 얇은 border 중심으로 구성한다.
4. 카드, 메뉴, 태그 등 반복 요소는 동일한 색상 규칙을 따른다.
5. hover 효과는 부드럽고 과하지 않게 적용한다.

---

## 3. 컬러 팔레트

| 용도 | 색상명 | HEX |
|---|---|---|
| 전체 배경 | Blue White | `#F7FBFF` |
| 카드 / 본문 배경 | White | `#FFFFFF` |
| 메인 텍스트 | Deep Navy | `#102A43` |
| 보조 텍스트 | Blue Gray | `#627D98` |
| 연한 설명 텍스트 | Light Blue Gray | `#829AB1` |
| 메인 포인트 | Clean Blue | `#2563EB` |
| 서브 포인트 | Sky Blue | `#0EA5E9` |
| 연한 포인트 배경 | Soft Sky | `#EAF6FF` |
| 테두리 | Soft Border Blue | `#D9EAF7` |
| 코드 블럭 배경 | Code Navy | `#0F172A` |

---

## 4. Tailwind CSS 4 디자인 토큰

Tailwind CSS 4의 CSS-first 방식에 맞춰 `@theme`에는 재사용되는 디자인
토큰만 정의한다. 실제 스타일 조합과 일회성 값은 컴포넌트의 `className`
안에서 확인할 수 있어야 한다.

```css
/* src/styles/theme.css */
@import "tailwindcss";

@theme {
  --color-blog-bg: #f7fbff;
  --color-blog-surface: #ffffff;
  --color-blog-text: #102a43;
  --color-blog-muted: #627d98;
  --color-blog-subtle: #829ab1;
  --color-blog-primary: #2563eb;
  --color-blog-sky: #0ea5e9;
  --color-blog-soft: #eaf6ff;
  --color-blog-border: #d9eaf7;
  --color-blog-code: #0f172a;
}
```

사용 예시는 다음과 같다.

```tsx
<div className="bg-blog-bg text-blog-text">
  <header className="border-b border-blog-border bg-blog-surface/80">
    <nav className="text-blog-muted">
      <a className="hover:text-blog-primary">Posts</a>
    </nav>
  </header>
</div>
```

---

## 5. 전체 레이아웃 구조

권장 레이아웃은 다음과 같다.

```txt
┌──────────────────────────────────────┐
│ Logo                About Posts Tags │  ← 상단 메뉴
├──────────────────────────────────────┤
│                                      │
│  안녕하세요.                          │
│  프론트엔드와 웹 기술을 기록합니다.     │  ← 히어로 영역
│                                      │
├──────────────────────────────────────┤
│  Latest Posts                        │
│                                      │
│  ┌────────────────────────────────┐  │
│  │ Next.js GitHub Pages 배포 정리  │  │
│  │ 설명 문장...                    │  │  ← 글 목록 카드
│  │ #Next.js #Deploy               │  │
│  └────────────────────────────────┘  │
│                                      │
└──────────────────────────────────────┘
```

### 권장 최대 너비

- 전체 컨테이너: `max-w-5xl`
- 본문 상세 페이지: `max-w-3xl`
- 좌우 패딩: 모바일 `px-5` 또는 `px-6`, 데스크톱 `px-6`

---

## 6. 상단 메뉴 디자인

### 요구사항

- 상단 메뉴는 sticky header로 구성한다.
- 배경은 완전 불투명 흰색보다 `bg-white/80`와 `backdrop-blur`를 사용해 가볍게 만든다.
- 하단에는 얇은 블루 계열 border를 둔다.
- 로고는 진한 네이비를 사용한다.
- 메뉴 텍스트는 기본적으로 보조 텍스트 색상을 사용하고, hover 또는 active 상태에서 파란색을 사용한다.

### 예시 코드

```tsx
<header className="sticky top-0 z-50 border-b border-blog-border bg-blog-surface/80 backdrop-blur">
  <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
    <h1 className="text-lg font-bold text-blog-text">
      jaeyoung.dev
    </h1>

    <nav className="flex gap-6 text-sm font-medium text-blog-muted">
      <a className="transition hover:text-blog-primary" href="/">
        Home
      </a>
      <a className="transition hover:text-blog-primary" href="/posts">
        Posts
      </a>
      <a className="transition hover:text-blog-primary" href="/tags">
        Tags
      </a>
      <a className="transition hover:text-blog-primary" href="/about">
        About
      </a>
    </nav>
  </div>
</header>
```

### 활성 메뉴 예시

```tsx
<a className="rounded-full bg-blog-soft px-3 py-1.5 text-blog-primary">
  Posts
</a>
```

---

## 7. 메인 페이지 히어로 디자인

### 요구사항

- 히어로 영역은 블로그 첫인상을 결정하는 영역이다.
- 아주 연한 블루 계열 그라데이션을 사용한다.
- 과한 일러스트나 강한 색상은 사용하지 않는다.
- 제목은 진한 네이비, 설명은 블루 그레이 계열을 사용한다.

### 예시 코드

```tsx
<section className="mx-auto max-w-5xl px-6 py-20">
  <div className="rounded-3xl border border-blog-border bg-gradient-to-br from-blog-bg to-blog-soft px-8 py-14">
    <p className="mb-4 text-sm font-semibold text-blog-primary">
      Frontend Developer Blog
    </p>

    <h2 className="mb-5 text-4xl font-bold tracking-tight text-blog-text">
      웹 기술을 깊게 이해하고 기록합니다.
    </h2>

    <p className="max-w-2xl text-lg leading-8 text-blog-muted">
      Next.js, React, TypeScript, 배포, 성능 최적화와 실무에서 마주한 문제들을 정리하는 개인 기술 블로그입니다.
    </p>
  </div>
</section>
```

---

## 8. 글 목록 카드 디자인

### 요구사항

- 카드 배경은 흰색을 사용한다.
- 테두리는 연한 블루 그레이를 사용한다.
- hover 시 살짝 위로 올라가고, border와 제목 색상을 파란색으로 변경한다.
- shadow는 강하지 않게 사용한다.
- 태그는 연한 블루 배경과 파란 텍스트를 사용한다.

### 예시 코드

```tsx
<article className="group rounded-2xl border border-blog-border bg-blog-surface p-6 transition hover:-translate-y-1 hover:border-blog-sky hover:shadow-lg">
  <div className="mb-3 flex gap-2">
    <span className="rounded-full bg-blog-soft px-3 py-1 text-xs font-medium text-blog-primary">
      Next.js
    </span>
    <span className="rounded-full bg-[#F1F8FF] px-3 py-1 text-xs font-medium text-blog-sky">
      Deploy
    </span>
  </div>

  <h3 className="mb-3 text-xl font-bold text-blog-text transition group-hover:text-blog-primary">
    GitHub Pages에 Next.js 블로그 배포하기
  </h3>

  <p className="mb-5 line-clamp-2 leading-7 text-blog-muted">
    GitHub Pages의 배포 방식과 Next.js static export를 이용한 개인 블로그 구축 방법을 정리합니다.
  </p>

  <div className="text-sm text-blog-subtle">
    2026.06.29 · 5 min read
  </div>
</article>
```

---

## 9. 본문 상세 페이지 디자인

### 요구사항

본문 상세 페이지는 블로그에서 가장 중요한 화면이다.

- 본문 최대 너비는 `max-w-3xl` 정도로 제한한다.
- 본문 배경은 흰색 또는 전체 배경과 자연스럽게 이어지는 색상을 사용한다.
- 제목은 진한 네이비를 사용한다.
- 본문 문단은 너무 진한 검정이 아닌 네이비 계열 또는 slate 계열을 사용한다.
- line-height는 넓게 설정한다.
- 링크는 파란색으로 표시한다.
- 코드 블럭은 어두운 네이비 배경을 사용해 기술 블로그 느낌을 준다.

### 예시 코드

```tsx
<main className="mx-auto max-w-3xl px-6 py-16">
  <article>
    <div className="mb-10">
      <p className="mb-4 text-sm font-semibold text-blog-primary">
        Next.js
      </p>

      <h1 className="mb-5 text-4xl font-bold tracking-tight text-blog-text">
        GitHub Pages에 Next.js 블로그 배포하기
      </h1>

      <p className="text-sm text-blog-subtle">
        2026.06.29 · 5 min read
      </p>
    </div>

    <div className="prose prose-slate max-w-none prose-headings:text-blog-text prose-a:text-blog-primary prose-code:text-blog-primary">
      {/* markdown content */}
    </div>
  </article>
</main>
```

---

## 10. 본문 스타일 세부 규칙

| 요소 | 디자인 방향 |
|---|---|
| `h1` | 진한 네이비, 크고 굵게 |
| `h2` | 위 여백을 넓게, 아래 여백 충분히 확보 |
| `h3` | 본문보다 명확히 크고 굵게 |
| `p` | 넓은 line-height, 차분한 색상 |
| `a` | 메인 블루 컬러, hover 시 underline |
| `code` | 인라인 코드는 연한 블루 배경 또는 파란 텍스트 |
| `pre` | 어두운 네이비 배경 |
| `blockquote` | 왼쪽에 파란색 border, 배경은 매우 연한 블루 |
| `ul`, `ol` | 충분한 들여쓰기와 행간 확보 |
| `table` | 얇은 border와 연한 header 배경 사용 |

---

## 11. 메뉴 리스트 / 태그 리스트 디자인

### 메뉴 리스트

카테고리나 태그 목록은 너무 강한 박스 형태보다 pill 형태가 적합하다.

```tsx
<div className="flex flex-wrap gap-2">
  <button className="rounded-full bg-blog-primary px-4 py-2 text-sm font-medium text-white">
    All
  </button>
  <button className="rounded-full border border-blog-border bg-blog-surface px-4 py-2 text-sm font-medium text-blog-muted transition hover:border-blog-sky hover:text-blog-primary">
    Next.js
  </button>
  <button className="rounded-full border border-blog-border bg-blog-surface px-4 py-2 text-sm font-medium text-blog-muted transition hover:border-blog-sky hover:text-blog-primary">
    React
  </button>
</div>
```

### 태그 스타일

```tsx
<span className="rounded-full bg-blog-soft px-3 py-1 text-xs font-medium text-blog-primary">
  TypeScript
</span>
```

---

## 12. 버튼 디자인

### Primary Button

```tsx
<button className="rounded-full bg-blog-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
  글 보러가기
</button>
```

### Secondary Button

```tsx
<button className="rounded-full border border-blog-border bg-blog-surface px-5 py-2.5 text-sm font-semibold text-blog-muted transition hover:border-blog-sky hover:text-blog-primary">
  About Me
</button>
```

---

## 13. 구현 시 주의사항

- 본문 영역에는 강한 파란색 배경을 사용하지 않는다.
- 전체 배경은 `#F7FBFF`를 사용하되, 카드와 본문은 흰색을 사용해 대비를 준다.
- `#2563EB`는 링크, 활성 상태, 버튼 등 핵심 액션 요소에만 사용한다.
- 너무 많은 그라데이션을 사용하지 않는다.
- shadow는 과하지 않게 사용한다.
- 카드 hover 효과는 `hover:-translate-y-1`, `hover:border-blog-sky`, `hover:shadow-lg` 정도로 제한한다.
- 모바일에서도 본문 가독성이 유지되도록 좌우 패딩을 충분히 둔다.
- 기술 블로그이므로 코드 블럭, 인라인 코드, 표, 인용문 스타일을 반드시 고려한다.

---

## 14. 최종 방향 요약

```txt
배경: 아주 연한 블루 화이트
본문: 흰색 또는 거의 흰색
텍스트: 진한 네이비
보조 텍스트: 블루 그레이
포인트: 선명한 블루
강조 배경: 연한 하늘색
테두리: 연한 블루 그레이
코드 블럭: 어두운 네이비
```

이 블로그는 파란색을 많이 쓰는 디자인이 아니라, **청량한 분위기만 파란색으로 만들고 실제 글 읽는 영역은 차분하게 유지하는 디자인**을 목표로 한다.

최종적으로 구현할 때는 다음 기준을 우선한다.

1. 가독성
2. 일관성
3. 청량한 블루 계열 분위기
4. 기술 블로그다운 신뢰감
5. 모바일과 데스크톱 모두에서 깔끔한 레이아웃

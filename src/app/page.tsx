import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Mail,
  MapPin,
  Sparkles,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { posts } from "@/data/posts";
import {
  awards,
  experiences,
  profileNotes,
  projects,
  siteConfig,
  skillGroups,
  values,
} from "@/data/site";

export default function HomePage() {
  return (
    <main id="main-content">
      <section
        className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden border-b border-blog-border bg-[linear-gradient(rgba(217,234,247,.42)_1px,transparent_1px),linear-gradient(90deg,rgba(217,234,247,.42)_1px,transparent_1px),linear-gradient(145deg,#fff_0%,#f7fbff_48%,#edf8ff_100%)] bg-size-[48px_48px,48px_48px,auto] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[180px] after:bg-linear-to-b after:from-transparent after:to-blog-bg/90 after:content-[''] max-[760px]:min-h-0"
        aria-labelledby="hero-title"
      >
        <div
          className="pointer-events-none absolute top-[15%] -left-[180px] h-[390px] w-[390px] rounded-full bg-sky-200/35 blur-[2px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[-80px] bottom-[4%] h-[300px] w-[300px] rounded-full bg-blue-200/30 blur-[2px]"
          aria-hidden="true"
        />

        <div className="relative z-[2] mx-auto grid w-full max-w-[1160px] grid-cols-[minmax(0,1.17fr)_minmax(350px,0.83fr)] items-center gap-20 px-5 py-24 max-[960px]:grid-cols-[1fr_330px] max-[960px]:gap-[30px] max-[760px]:grid-cols-1 max-[760px]:px-4 max-[760px]:pt-[78px] max-[760px]:pb-[92px] max-[480px]:pt-16">
          <div className="max-[760px]:text-left">
            <p className="mb-6 inline-flex items-center gap-[9px] rounded-full border border-blog-border bg-white/70 px-[13px] py-2 text-xs font-semibold text-blog-muted backdrop-blur-lg max-[480px]:items-start max-[480px]:border-0 max-[480px]:bg-transparent max-[480px]:p-0 max-[480px]:leading-normal">
              <span
                className="h-[7px] w-[7px] shrink-0 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.12)] max-[480px]:mt-[5px]"
                aria-hidden="true"
              />
              {siteConfig.availability}
            </p>

            <h1
              id="hero-title"
              className="max-w-[700px] text-[clamp(50px,6vw,80px)] leading-[1.08] font-[760] tracking-[-0.065em] [&_em]:relative [&_em]:not-italic [&_em]:text-blog-primary [&_em]:after:absolute [&_em]:after:right-0 [&_em]:after:bottom-px [&_em]:after:left-0.5 [&_em]:after:h-2 [&_em]:after:rounded-full [&_em]:after:bg-blog-sky/20 [&_em]:after:content-[''] max-[480px]:text-[45px]"
            >
              문제를 구조로,
              <br />
              아이디어를 <em>경험으로.</em>
            </h1>

            <p className="mt-7 max-w-[625px] text-[17px] leading-[1.85] tracking-[-0.015em] text-blog-muted max-[760px]:text-[15px]">
              {siteConfig.description}
            </p>

            <div className="mt-[34px] flex flex-wrap gap-[11px] max-[480px]:flex-col max-[480px]:items-stretch">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-[9px] rounded-full bg-blog-primary px-5 text-sm font-bold text-white shadow-primary transition-[translate,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_16px_34px_rgba(37,99,235,0.28)] max-[480px]:w-full"
                href="#experience"
              >
                저를 더 알아보기
                <ArrowDown size={17} aria-hidden="true" />
              </a>
              <Link
                className="inline-flex min-h-12 items-center justify-center gap-[9px] rounded-full border border-blog-border bg-white/70 px-5 text-sm font-bold text-blog-muted transition-[translate,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blog-primary max-[480px]:w-full"
                href="/posts"
              >
                글 읽기
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub 프로필"
                className="grid h-[38px] w-[38px] place-items-center rounded-full border border-blog-border bg-white/75 text-blog-muted transition-[translate,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blog-primary"
              >
                <Code2 size={18} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="이메일 보내기"
                className="grid h-[38px] w-[38px] place-items-center rounded-full border border-blog-border bg-white/75 text-blog-muted transition-[translate,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blog-primary"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
              <span className="ml-2 inline-flex items-center gap-1.5 text-xs text-blog-subtle">
                <MapPin size={16} aria-hidden="true" />
                {siteConfig.location}
              </span>
            </div>
          </div>

          <div
            className="group/profile relative grid min-h-[475px] place-items-center max-[960px]:scale-[0.88] max-[760px]:mt-2.5 max-[760px]:min-h-[430px] max-[760px]:scale-[0.94] max-[480px]:-mx-[25px] max-[480px]:-mt-[15px] max-[480px]:min-h-[380px] max-[480px]:scale-[0.82]"
            aria-label={`${siteConfig.name} 프로필`}
          >
            <div
              className="absolute h-[420px] w-[420px] rounded-full border border-blog-sky/20"
              aria-hidden="true"
            />
            <div
              className="absolute h-[335px] w-[335px] animate-orbit rounded-full border border-dashed border-blog-sky/20 before:absolute before:top-[38px] before:right-12 before:h-2.5 before:w-2.5 before:rounded-full before:border-[3px] before:border-blog-bg before:bg-blog-sky before:content-[''] after:absolute after:bottom-[23px] after:left-[79px] after:h-2.5 after:w-2.5 after:rounded-full after:border-[3px] after:border-blog-bg after:bg-blog-primary after:content-[''] motion-reduce:animate-none"
              aria-hidden="true"
            />
            <div className="relative z-[2] w-[275px] rotate-2 overflow-hidden rounded-[30px] border border-blog-border/95 bg-white/90 p-7 pb-[30px] text-center shadow-soft backdrop-blur-[14px] transition-[rotate,translate] duration-300 group-hover/profile:rotate-0 group-hover/profile:-translate-y-[3px]">
              <div
                className="absolute -top-[60px] left-1/2 h-[150px] w-[200px] -translate-x-1/2 rounded-full bg-[#dff3ff] blur-[10px]"
                aria-hidden="true"
              />
              <div
                className="relative mx-auto mt-1 mb-6 grid h-[174px] w-[150px] place-items-center overflow-hidden rounded-[74px_74px_42px_42px] border-8 border-[#f4faff] bg-[radial-gradient(circle_at_68%_22%,#7dd3fc_0_7px,transparent_8px),linear-gradient(145deg,#2563eb,#0ea5e9)] shadow-[0_18px_36px_rgba(37,99,235,0.18)] before:absolute before:h-[120px] before:w-[120px] before:rounded-full before:border before:border-white/25 before:content-['']"
                aria-hidden="true"
              >
                <span className="relative text-[42px] font-[750] tracking-[-0.07em] text-white">
                  {siteConfig.shortName}
                </span>
              </div>
              <p className="mb-[7px] font-mono text-[10px] font-bold tracking-[0.18em] text-blog-primary">
                HELLO, I&apos;M
              </p>
              <strong className="block text-[21px] tracking-[-0.025em]">
                {siteConfig.name}
              </strong>
              <span className="mt-1.5 block text-xs text-blog-subtle">
                {siteConfig.role}
              </span>
            </div>
            <div className="absolute top-[94px] -right-2 z-[3] flex items-center gap-2 rounded-[13px] border border-blog-border/95 bg-white/90 px-3.5 py-[11px] text-[11px] font-semibold text-blog-primary shadow-floating backdrop-blur-[10px]">
              <Sparkles size={16} aria-hidden="true" />
              Thoughtful UI
            </div>
            <div className="absolute bottom-[88px] -left-[18px] z-[3] flex items-center gap-2 rounded-[13px] border border-blog-border/95 bg-white/90 px-3.5 py-[11px] text-[11px] font-semibold text-blog-muted shadow-floating backdrop-blur-[10px]">
              <span
                className="grid h-[22px] w-[22px] place-items-center rounded-full bg-green-100 text-green-700"
                aria-hidden="true"
              >
                <Check size={13} />
              </span>
              Available to connect
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-blog-surface py-32 max-[760px]:py-[90px]"
      >
        <div className="mx-auto w-full max-w-[1160px] px-5 max-[760px]:px-4">
          <ScrollReveal>
            <SectionHeading
              eyebrow="01 · ABOUT"
              title="좋은 제품은 좋은 질문에서 시작된다고 믿습니다."
              description="기술과 디자인 사이에서, 사용자의 문제를 가장 단순하고 단단한 형태로 해결합니다."
            />
          </ScrollReveal>

          <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-[100px] pt-[68px] max-[960px]:gap-[55px] max-[760px]:grid-cols-1 max-[760px]:gap-16 max-[760px]:pt-[50px]">
            <ScrollReveal className="[&>p]:text-[15px] [&>p]:leading-[1.9] [&>p]:text-blog-muted">
              <p className="mb-[23px]! text-2xl! leading-[1.55]! font-semibold! tracking-[-0.035em] text-blog-text! [&_em]:not-italic [&_em]:text-blog-primary">
                저는 화면 뒤의 <em>이유</em>까지 설계하는 프론트엔드
                개발자입니다.
              </p>
              <p>
                빠르게 만드는 것과 오래 유지되는 것 사이의 균형을 고민합니다.
                요구사항의 맥락을 파악하고, 동료와 언어를 맞추며, 사용자가
                망설이지 않는 경험을 구현하는 일을 좋아합니다.
              </p>

              <dl className="mt-[42px]">
                {profileNotes.map((note) => (
                  <div
                    className="grid grid-cols-[120px_1fr] gap-5 border-t border-blog-border py-[15px]"
                    key={note.label}
                  >
                    <dt className="font-mono text-[10px] font-semibold tracking-[0.08em] text-blog-subtle uppercase">
                      {note.label}
                    </dt>
                    <dd className="text-[13px] font-semibold text-blog-text">
                      {note.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>

            <div className="flex flex-col">
              {values.map((value, index) => (
                <ScrollReveal
                  className={index === 0 ? "[&>article]:pt-0" : ""}
                  key={value.number}
                  delay={index * 80}
                >
                  <article className="grid grid-cols-[54px_1fr] gap-3.5 border-b border-blog-border py-[27px]">
                    <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-blog-soft font-mono text-[10px] font-bold text-blog-primary">
                      {value.number}
                    </span>
                    <div>
                      <h3 className="mt-[3px] mb-[9px] text-[17px] font-bold tracking-[-0.025em]">
                        {value.title}
                      </h3>
                      <p className="text-sm leading-[1.75] text-blog-muted">
                        {value.description}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blog-surface py-8 max-[760px]:py-6">
        <div className="mx-auto w-full max-w-[1160px] px-5 max-[760px]:px-4">
          <ScrollReveal>
            <div className="grid grid-cols-[0.82fr_1.18fr] gap-[72px] overflow-hidden rounded-[26px] bg-blog-code bg-[radial-gradient(circle_at_8%_12%,rgba(14,165,233,.22),transparent_26%)] p-[50px_54px] text-white max-[960px]:grid-cols-1 max-[960px]:gap-10 max-[760px]:p-[38px_28px]">
              <div>
                <p className="mb-[18px] font-mono text-[10px] font-bold tracking-[0.14em] text-sky-300">
                  TOOLS &amp; THINKING
                </p>
                <h2 className="text-[26px] leading-[1.45] font-bold tracking-[-0.04em]">
                  도구보다 문제에 맞는 선택을 중요하게 생각합니다.
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-7 max-[760px]:gap-4 max-[480px]:grid-cols-1 max-[480px]:gap-[30px]">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-[19px] font-mono text-[10px] tracking-[0.1em] text-sky-300 uppercase">
                      {group.title}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {group.items.map((item) => (
                        <li className="text-[13px] text-slate-300" key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="experience"
        className="py-32 max-[760px]:py-[90px]"
      >
        <div className="mx-auto w-full max-w-[1160px] px-5 max-[760px]:px-4">
          <ScrollReveal>
            <SectionHeading
              eyebrow="02 · EXPERIENCE"
              title="제품과 팀이 함께 나아간 기록"
              description="역할보다 해결한 문제와 남긴 변화에 집중합니다."
            />
          </ScrollReveal>

          <div className="pt-[18px]">
            {experiences.map((experience, index) => (
              <ScrollReveal key={experience.period} delay={index * 80}>
                <article className="grid grid-cols-[200px_240px_minmax(0,1fr)] gap-10 border-b border-blog-border py-[52px] max-[960px]:grid-cols-[140px_190px_minmax(0,1fr)] max-[960px]:gap-[25px] max-[760px]:grid-cols-1 max-[760px]:gap-[25px] max-[760px]:py-[42px]">
                  <div className="max-[760px]:flex max-[760px]:items-center max-[760px]:gap-3">
                    <span className="font-mono text-[10px] font-bold tracking-[0.08em] text-blog-primary">
                      {experience.period}
                    </span>
                    <div
                      className="mt-3.5 h-px w-[35px] bg-blue-300 max-[760px]:mt-0"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="-mt-[5px] mb-1.5 text-[21px] font-bold tracking-[-0.03em] max-[760px]:mt-0">
                      {experience.company}
                    </h3>
                    <p className="text-xs text-blog-subtle">
                      {experience.role}
                    </p>
                  </div>
                  <div>
                    <p className="-mt-[5px] mb-5 text-sm leading-[1.8] text-blog-muted max-[760px]:mt-0">
                      {experience.summary}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {experience.highlights.map((highlight) => (
                        <li
                          className="grid grid-cols-[7px_1fr] gap-2.5 text-[13px] leading-[1.7] text-blog-muted"
                          key={highlight}
                        >
                          <span
                            className="mt-[9px] h-1 w-1 rounded-full bg-blog-sky"
                            aria-hidden="true"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-y border-blog-border bg-[#f1f8fe] py-32 max-[760px]:py-[90px]"
      >
        <div className="mx-auto w-full max-w-[1160px] px-5 max-[760px]:px-4">
          <ScrollReveal>
            <SectionHeading
              eyebrow="03 · SELECTED WORK"
              title="생각을 결과로 만든 프로젝트"
              description="문제 정의부터 구현과 회고까지, 주도적으로 참여한 작업입니다."
            />
          </ScrollReveal>

          <div className="grid grid-cols-3 gap-[18px] pt-[52px] max-[960px]:grid-cols-2 max-[760px]:grid-cols-1">
            {projects.map((project, index) => (
              <ScrollReveal
                className={
                  index === projects.length - 1
                    ? "max-[960px]:col-span-2 max-[760px]:col-span-1"
                    : ""
                }
                key={project.title}
                delay={index * 80}
              >
                <article className="group h-full overflow-hidden rounded-[20px] border border-blog-border bg-white transition-[translate,border-color,box-shadow] duration-200 hover:-translate-y-[5px] hover:border-sky-300 hover:shadow-card">
                  <Link
                    className="flex h-full flex-col p-[25px]"
                    href={project.href}
                    aria-label={`${project.title} 보기`}
                  >
                    <div className="flex items-center justify-between text-blog-primary">
                      <span className="font-mono text-[10px] font-bold tracking-[0.14em]">
                        {project.eyebrow}
                      </span>
                      <ArrowUpRight
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        size={21}
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className="relative mt-[25px] mb-[27px] flex h-[145px] items-center justify-center overflow-hidden rounded-[14px] bg-[linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(135deg,#e0f2fe,#dbeafe)] bg-size-[22px_22px,22px_22px,auto]"
                      aria-hidden="true"
                    >
                      <span className="relative z-[2] font-mono text-[38px] font-[720] text-white [text-shadow:0_4px_18px_rgba(37,99,235,0.18)]">
                        {project.index}
                      </span>
                      <div className="absolute h-[86px] w-[86px] rotate-12 rounded-3xl bg-linear-to-br from-blog-primary to-blog-sky shadow-[0_17px_30px_rgba(37,99,235,0.24)] transition-[rotate,scale] duration-300 group-hover:rotate-3 group-hover:scale-105" />
                    </div>
                    <h3 className="text-xl font-bold tracking-[-0.035em]">
                      {project.title}
                    </h3>
                    <p className="mt-3 mb-[22px] text-[13px] leading-[1.75] text-blog-muted">
                      {project.description}
                    </p>
                    <ul
                      className="mt-auto flex flex-wrap gap-[7px]"
                      aria-label="사용 기술"
                    >
                      {project.tags.map((tag) => (
                        <li
                          className="rounded-full bg-blog-soft px-[9px] py-1.5 font-mono text-[9px] font-semibold text-blog-primary"
                          key={tag}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="writing"
        className="bg-white py-32 max-[760px]:py-[90px]"
      >
        <div className="mx-auto w-full max-w-[1160px] px-5 max-[760px]:px-4">
          <ScrollReveal>
            <div className="relative">
              <SectionHeading
                eyebrow="04 · WRITING"
                title="배운 것을 나누고, 생각을 다듬습니다."
                description="실무의 문제와 해결 과정, 오래 남기고 싶은 기술적 판단을 기록합니다."
              />
              <Link
                className="absolute right-0 bottom-[54px] inline-flex items-center gap-2 text-[13px] font-bold text-blog-primary [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-[3px] max-[760px]:static max-[760px]:mt-[22px]"
                href="/posts"
              >
                모든 글 보기
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-3 gap-[18px] pt-[52px] max-[960px]:grid-cols-2 max-[760px]:grid-cols-1">
            {posts.map((post, index) => (
              <ScrollReveal
                className={
                  index === posts.length - 1
                    ? "max-[960px]:col-span-2 max-[760px]:col-span-1"
                    : ""
                }
                key={post.slug}
                delay={index * 80}
              >
                <PostCard post={post} featured={index === 0} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="awards"
        className="relative overflow-hidden border-y border-blog-border bg-[radial-gradient(circle_at_8%_86%,rgba(14,165,233,.12),transparent_25%),linear-gradient(180deg,#f7fbff_0%,#eef8ff_100%)] py-32 max-[760px]:py-[90px]"
      >
        <div
          className="pointer-events-none absolute top-[155px] right-[-180px] h-[420px] w-[420px] rounded-full border border-blog-sky/10 shadow-[0_0_0_58px_rgba(14,165,233,0.025),0_0_0_116px_rgba(14,165,233,0.018)]"
          aria-hidden="true"
        />

        <div className="relative z-[2] mx-auto w-full max-w-[1160px] px-5 max-[760px]:px-4">
          <ScrollReveal>
            <SectionHeading
              eyebrow="05 · AWARDS"
              title="도전의 과정이 성취로 이어진 기록"
              description="결과만큼 그 안에서 마주한 문제와 해결 과정, 함께 만든 변화를 소중하게 생각합니다."
            />
          </ScrollReveal>

          <div className="grid grid-cols-[280px_minmax(0,1fr)] items-start gap-[34px] pt-[52px] max-[960px]:grid-cols-1">
            <ScrollReveal className="[&>div]:h-full">
              <div className="relative flex min-h-[330px] flex-col overflow-hidden rounded-[24px] bg-blog-code bg-[radial-gradient(circle_at_20%_12%,rgba(14,165,233,.28),transparent_34%)] p-8 text-white shadow-soft max-[960px]:min-h-0 max-[960px]:flex-row max-[960px]:items-end max-[960px]:justify-between max-[960px]:gap-8 max-[640px]:flex-col max-[640px]:items-start">
                <div className="relative z-[2]">
                  <span className="grid h-12 w-12 place-items-center rounded-[15px] border border-white/10 bg-white/10 text-sky-300">
                    <Trophy size={23} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <p className="mt-7 font-mono text-[10px] font-bold tracking-[0.15em] text-sky-300">
                    RECOGNITION ARCHIVE
                  </p>
                  <p className="mt-3 max-w-[200px] text-[13px] leading-[1.75] text-slate-300 max-[960px]:max-w-[370px]">
                    꾸준한 시도와 몰입이 의미 있는 결과로 이어진 순간들입니다.
                  </p>
                </div>

                <div className="relative z-[2] mt-auto max-[960px]:mt-0 max-[640px]:mt-7">
                  <strong className="block font-mono text-[58px] leading-none font-[680] tracking-[-0.08em] text-white">
                    {String(awards.length).padStart(2, "0")}
                  </strong>
                  <span className="mt-2 block font-mono text-[9px] tracking-[0.12em] text-slate-400 uppercase">
                    Recorded honors
                  </span>
                </div>

                <Trophy
                  className="absolute -right-[58px] -bottom-[62px] text-white/[0.035]"
                  size={220}
                  strokeWidth={1}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>

            <div className="overflow-hidden rounded-[24px] border border-blog-border bg-white shadow-[0_18px_50px_rgba(30,96,145,0.06)]">
              {awards.map((award, index) => (
                <ScrollReveal
                  className={
                    index > 0 ? "[&>article]:border-t [&>article]:border-blog-border" : ""
                  }
                  key={award.id}
                  delay={index * 80}
                >
                  <article className="group/award grid grid-cols-[54px_minmax(0,1fr)_auto] items-start gap-6 p-[30px] transition-colors duration-200 hover:bg-blog-soft/35 max-[640px]:grid-cols-[44px_minmax(0,1fr)] max-[640px]:gap-x-4 max-[640px]:gap-y-4 max-[640px]:p-[24px_20px]">
                    <span className="grid h-[42px] w-[42px] place-items-center rounded-[13px] bg-blog-soft font-mono text-[10px] font-bold text-blog-primary transition-[background-color,color,rotate] duration-200 group-hover/award:-rotate-3 group-hover/award:bg-blog-primary group-hover/award:text-white max-[640px]:h-10 max-[640px]:w-10">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <div className="mb-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <time
                          className="font-mono text-[10px] font-bold tracking-[0.1em] text-blog-primary"
                          dateTime={award.year}
                        >
                          {award.year}
                        </time>
                        <span className="h-3 w-px bg-blog-border" aria-hidden="true" />
                        <span className="text-[11px] font-medium text-blog-subtle">
                          {award.organization}
                        </span>
                      </div>
                      <h3 className="text-[19px] font-bold tracking-[-0.035em] text-blog-text transition-colors duration-200 group-hover/award:text-blog-primary">
                        {award.title}
                      </h3>
                      <p className="mt-3 whitespace-pre-line max-w-[590px] text-[13px] leading-[1.75] text-blog-muted">
                        {award.description}
                      </p>
                    </div>

                    <span className="inline-flex min-h-8 items-center justify-center rounded-full border border-blog-border bg-blog-bg px-3.5 font-mono text-[10px] font-bold whitespace-nowrap text-blog-primary max-[640px]:col-start-2 max-[640px]:row-start-2 max-[640px]:w-fit">
                      {award.prize}
                    </span>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white pt-[70px] pb-[110px]">
        <div className="mx-auto w-full max-w-[1160px] px-5 max-[760px]:px-4">
          <ScrollReveal>
            <div className="relative grid grid-cols-[1.15fr_0.85fr] gap-[85px] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_92%_0%,rgba(14,165,233,.35),transparent_30%),linear-gradient(145deg,#102a43,#0f172a)] p-[65px_68px] text-white max-[760px]:grid-cols-1 max-[760px]:gap-[38px] max-[760px]:p-[48px_32px]">
              <div className="relative z-[2]">
                <p className="mb-5 font-mono text-[10px] font-bold tracking-[0.13em] text-sky-300">
                  LET&apos;S BUILD SOMETHING MEANINGFUL
                </p>
                <h2 className="text-[clamp(36px,5vw,54px)] leading-[1.2] font-bold tracking-[-0.055em] max-[480px]:text-[34px]">
                  함께 풀고 싶은 문제가
                  <br />
                  있으신가요?
                </h2>
              </div>
              <div className="relative z-[2] flex flex-col items-start justify-end">
                <p className="mb-[25px] text-sm leading-[1.8] text-[#aebfd0]">
                  제품에 대한 고민, 기술적인 대화, 새로운 협업 제안 모두
                  반갑습니다. 편하게 인사를 건네주세요.
                </p>
                <a
                  className="inline-flex items-center gap-[9px] border-b border-sky-300 pb-[5px] text-[15px] font-semibold text-sky-100 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-0.5 hover:[&_svg]:-translate-y-0.5 max-[480px]:text-[13px]"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                  <ArrowUpRight size={20} aria-hidden="true" />
                </a>
              </div>
              <div
                className="absolute -top-[190px] -right-40 h-[420px] w-[420px] rounded-full border border-sky-300/20 shadow-[0_0_0_50px_rgba(125,211,252,0.035),0_0_0_100px_rgba(125,211,252,0.025)]"
                aria-hidden="true"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

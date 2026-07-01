"use client";

import { useMachine } from "@xstate/react";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { introMachine } from "@/machines/intro-machine";

type IntroSplashProps = {
  name: string;
  shortName: string;
};

export function IntroSplash({ name, shortName }: IntroSplashProps) {
  const pathname = usePathname();
  const [shouldShowIntro] = useState(() => pathname === "/");
  const skipButtonRef = useRef<HTMLButtonElement>(null);
  const [state, send] = useMachine(introMachine);
  const isVisible = shouldShowIntro && !state.matches("hidden");

  useEffect(() => {
    if (!shouldShowIntro) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reduceMotion.matches) {
      send({ type: "REDUCE_MOTION" });
      return;
    }

    skipButtonRef.current?.focus({ preventScroll: true });
  }, [send, shouldShowIntro]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const siteShell = document.getElementById("site-shell");
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    siteShell?.setAttribute("inert", "");
    siteShell?.setAttribute("aria-hidden", "true");

    return () => {
      document.body.style.overflow = previousOverflow;
      siteShell?.removeAttribute("inert");
      siteShell?.removeAttribute("aria-hidden");
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        send({ type: "SKIP" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, send]);

  if (!isVisible) {
    return null;
  }

  return (
    <section
      className="group/intro fixed inset-0 z-[200] min-h-[100svh] overflow-hidden bg-[#071a2c] text-white opacity-100 transition-[opacity,visibility] duration-700 ease-reveal data-[state=leaving]:pointer-events-none data-[state=leaving]:invisible data-[state=leaving]:opacity-0 motion-reduce:transition-none"
      data-state={state.value}
      role="dialog"
      aria-label="사이트 인트로"
      aria-modal="true"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(125,211,252,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,.055)_1px,transparent_1px)] bg-size-[64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[-28%] left-[-12%] h-[660px] w-[660px] rounded-full bg-blue-600/20 blur-[100px] motion-safe:animate-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-12%] bottom-[-32%] h-[720px] w-[720px] rounded-full bg-sky-400/15 blur-[120px] motion-safe:animate-pulse [animation-delay:-1.8s]"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 top-0 z-20 mx-auto flex w-full max-w-[1280px] items-center justify-between px-8 pt-7 max-[640px]:px-5 max-[640px]:pt-5">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-[11px] border border-white/15 bg-white/10 font-mono text-[10px] font-bold text-sky-200 backdrop-blur-md">
            {shortName}
          </span>
          <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-slate-300 uppercase max-[480px]:hidden">
            {name} · Portfolio
          </span>
        </div>

        <button
          ref={skipButtonRef}
          type="button"
          className="group/skip inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 text-[11px] font-semibold text-slate-200 backdrop-blur-md transition-[border-color,background-color,color] duration-200 hover:border-sky-300/60 hover:bg-sky-300/10 hover:text-white"
          onClick={() => send({ type: "SKIP" })}
        >
          바로 시작하기
          <ArrowRight
            className="transition-transform duration-200 group-hover/skip:translate-x-0.5"
            size={15}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-[1200px] grid-cols-[minmax(360px,0.86fr)_minmax(0,1.14fr)] items-center gap-[clamp(48px,7vw,100px)] px-8 py-28 max-[900px]:grid-cols-1 max-[900px]:content-center max-[900px]:gap-8 max-[640px]:px-5 max-[640px]:pt-24 max-[640px]:pb-20">
        <div className="relative mx-auto grid h-[clamp(300px,34vw,430px)] w-[clamp(300px,34vw,430px)] place-items-center opacity-0 scale-90 transition-[opacity,scale] duration-1000 ease-reveal group-data-[state=active]/intro:scale-100 group-data-[state=active]/intro:opacity-100 motion-reduce:transition-none max-[900px]:h-[300px] max-[900px]:w-[300px] max-[640px]:h-[244px] max-[640px]:w-[244px]">
          <div
            className="absolute inset-0 animate-orbit rounded-full border border-sky-300/15 [animation-duration:28s] motion-reduce:animate-none"
            aria-hidden="true"
          >
            <span className="absolute top-[13%] right-[12%] h-2.5 w-2.5 rounded-full bg-sky-300 shadow-[0_0_22px_rgba(125,211,252,.8)]" />
            <span className="absolute bottom-[16%] left-[9%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,.7)]" />
          </div>
          <div
            className="absolute inset-[12%] animate-orbit rounded-full border border-dashed border-sky-300/20 [animation-direction:reverse] [animation-duration:22s] motion-reduce:animate-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-[25%] rounded-full border border-white/10 shadow-[0_0_80px_rgba(14,165,233,.13)]"
            aria-hidden="true"
          />

          <div className="relative grid h-[38%] w-[38%] place-items-center rounded-[38%] border border-white/15 bg-[radial-gradient(circle_at_32%_24%,rgba(255,255,255,.22),transparent_24%),linear-gradient(145deg,#2563eb,#0ea5e9)] shadow-[0_30px_80px_rgba(14,165,233,.3)] rotate-3 transition-transform duration-1000 group-data-[state=active]/intro:rotate-0">
            <span className="font-mono text-[clamp(26px,4vw,44px)] font-bold tracking-[-0.08em] text-white">
              {shortName}
            </span>
            <span
              className="absolute inset-[-14px] -z-10 animate-ping rounded-[40%] border border-sky-300/20 [animation-duration:2.8s] motion-reduce:animate-none"
              aria-hidden="true"
            />
          </div>

          <span className="absolute top-[7%] left-[2%] rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 font-mono text-[8px] tracking-[0.15em] text-sky-200 backdrop-blur-md">
            CLARITY
          </span>
          <span className="absolute right-[-2%] bottom-[20%] rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 font-mono text-[8px] tracking-[0.15em] text-sky-200 backdrop-blur-md">
            CRAFT
          </span>
          <span className="absolute bottom-[2%] left-[18%] rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 font-mono text-[8px] tracking-[0.15em] text-sky-200 backdrop-blur-md">
            CARE
          </span>
        </div>

        <div className="max-w-[680px] max-[900px]:mx-auto max-[900px]:text-center">
          <p className="translate-y-3 font-mono text-[10px] font-bold tracking-[0.2em] text-sky-300 opacity-0 transition-[opacity,translate] delay-150 duration-700 group-data-[state=active]/intro:translate-y-0 group-data-[state=active]/intro:opacity-100 motion-reduce:transition-none">
            THINK · SHAPE · SHARE
          </p>
          <h2 className="mt-6 translate-y-6 text-[clamp(46px,6vw,76px)] leading-[1.12] font-[720] tracking-[-0.065em] text-white opacity-0 transition-[opacity,translate] delay-300 duration-900 ease-reveal group-data-[state=active]/intro:translate-y-0 group-data-[state=active]/intro:opacity-100 motion-reduce:transition-none max-[640px]:mt-4 max-[640px]:text-[42px]">
            좋은 질문은
            <br />
            더 나은 경험의
            <br />
            <span className="text-sky-300">시작이 됩니다.</span>
          </h2>
          <p className="mt-7 max-w-[560px] translate-y-4 text-[15px] leading-[1.85] text-slate-300 opacity-0 transition-[opacity,translate] delay-500 duration-800 ease-reveal group-data-[state=active]/intro:translate-y-0 group-data-[state=active]/intro:opacity-100 motion-reduce:transition-none max-[900px]:mx-auto max-[640px]:mt-5 max-[640px]:text-[13px]">
            문제를 선명하게 바라보고, 아이디어를 오래 남는 경험으로
            만듭니다.
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 mx-auto w-full max-w-[1280px] px-8 pb-7 max-[640px]:px-5 max-[640px]:pb-5">
        <div className="mb-3 flex items-center justify-between font-mono text-[8px] tracking-[0.14em] text-slate-500 uppercase">
          <span>Opening note</span>
          <span>Scroll begins soon</span>
        </div>
        <div className="h-px overflow-hidden bg-white/10">
          <div className="h-full w-0 bg-linear-to-r from-blue-500 via-sky-300 to-cyan-200 transition-[width] duration-[3800ms] ease-linear group-data-[state=active]/intro:w-full motion-reduce:transition-none" />
        </div>
      </div>
    </section>
  );
}

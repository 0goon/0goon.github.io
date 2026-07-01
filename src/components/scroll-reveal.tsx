"use client";

import { useMachine } from "@xstate/react";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef } from "react";
import { revealMachine } from "@/machines/reveal-machine";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [state, send] = useMachine(revealMachine);
  const style = {
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reduceMotion.matches) {
      send({ type: "ENTER" });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        send({ type: entry.isIntersecting ? "ENTER" : "LEAVE" });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [send]);

  return (
    <div
      ref={elementRef}
      className={`translate-y-0 opacity-100 blur-none will-change-[opacity,transform] transition-[opacity,translate,filter] duration-[620ms] ease-reveal [transition-delay:var(--reveal-delay)] data-[state=hidden]:translate-y-[26px] data-[state=hidden]:opacity-0 data-[state=hidden]:blur-[3px] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-none motion-reduce:transition-none ${className}`.trim()}
      data-state={state.value}
      style={style}
    >
      {children}
    </div>
  );
}

"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const RIPPLE_DURATION = 1850;
const RIPPLE_SIZE = 640;
const MAX_RIPPLES = 8;
const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "select",
  "textarea",
  "summary",
  "label",
  "[onclick]",
  "[role='button']",
  "[role='link']",
  "[role='checkbox']",
  "[role='menuitem']",
  "[contenteditable='true']",
  "[tabindex]:not([tabindex='-1'])",
  "[data-no-ripple]",
].join(",");

type Ripple = {
  id: number;
  style: CSSProperties;
};

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return true;
  }

  if (target.closest(INTERACTIVE_SELECTOR)) {
    return true;
  }

  let element: Element | null = target;

  while (element && element !== document.documentElement) {
    if (window.getComputedStyle(element).cursor === "pointer") {
      return true;
    }

    element = element.parentElement;
  }

  return false;
}

export function ClickRipple() {
  const [ripples, setRipples] = useState<readonly Ripple[]>([]);
  const nextIdRef = useRef(0);

  useEffect(() => {
    const timers = new Set<number>();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const handlePointerDown = (event: PointerEvent) => {
      if (
        reduceMotion.matches ||
        !event.isPrimary ||
        event.button !== 0 ||
        isInteractiveTarget(event.target)
      ) {
        return;
      }

      const id = nextIdRef.current + 1;
      nextIdRef.current = id;

      setRipples((current) => [
        ...current.slice(-(MAX_RIPPLES - 1)),
        {
          id,
          style: {
            left: event.clientX - RIPPLE_SIZE / 2,
            top: event.clientY - RIPPLE_SIZE / 2,
          },
        },
      ]);

      const timer = window.setTimeout(() => {
        setRipples((current) =>
          current.filter((ripple) => ripple.id !== id),
        );
        timers.delete(timer);
      }, RIPPLE_DURATION);

      timers.add(timer);
    };

    window.addEventListener("pointerdown", handlePointerDown, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);

      for (const timer of timers) {
        window.clearTimeout(timer);
      }

      timers.clear();
    };
  }, []);

  return (
    <div
      className="contents motion-reduce:hidden"
      data-click-ripple-layer
      aria-hidden="true"
    >
      {ripples.map((ripple) => (
        <span
          className="pointer-events-none fixed z-[320] h-[640px] w-[640px]"
          data-click-ripple
          key={ripple.id}
          style={ripple.style}
        >
          <span className="absolute animate-water-ripple rounded-full border-4 border-transparent" />
        </span>
      ))}
    </div>
  );
}

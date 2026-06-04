"use client";

import { useEffect, useRef } from "react";

export function FluidBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const sync = () => {
      const paused = document.hidden ? "true" : "false";
      root
        .querySelectorAll<HTMLElement>(".blob")
        .forEach((el) => (el.dataset.paused = paused));
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="blob absolute -left-[10%] top-[-15%] h-[55vw] w-[55vw] rounded-full opacity-60 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-lilac) 0%, transparent 70%)",
          animation: "var(--animate-drift-a)",
        }}
      />
      <div
        className="blob absolute right-[-12%] top-[10%] h-[50vw] w-[50vw] rounded-full opacity-55 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-sky) 0%, transparent 70%)",
          animation: "var(--animate-drift-b)",
        }}
      />
      <div
        className="blob absolute bottom-[-20%] left-[25%] h-[48vw] w-[48vw] rounded-full opacity-50 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-mint) 0%, transparent 70%)",
          animation: "var(--animate-drift-c)",
        }}
      />
    </div>
  );
}

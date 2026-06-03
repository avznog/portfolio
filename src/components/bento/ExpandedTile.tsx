"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import type { TileId } from "@/lib/types";
import { morphTransition } from "@/lib/motion";
import { CloseIcon } from "@/components/ui/icons";
import { TileDetail, tileMeta } from "@/components/tiles";

export function ExpandedTile({
  id,
  onClose,
}: {
  id: TileId;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const meta = tileMeta[id];
  const headingId = `tile-heading-${id}`;

  useEffect(() => {
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = ref.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex p-3 sm:p-5"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        layoutId={`tile-${id}`}
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        transition={morphTransition}
        className="relative mx-auto flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-expanded"
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-border px-6 pb-4 pt-6 sm:px-8 sm:pt-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
              {meta.eyebrow}
            </span>
            <h2
              id={headingId}
              className="font-display text-2xl font-semibold text-ink sm:text-3xl"
            >
              {meta.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-full border border-border bg-surface p-2 text-ink-soft transition-colors hover:border-accent hover:text-ink"
          >
            <CloseIcon width={18} height={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6 pt-4 sm:px-8 sm:pb-8">
          <TileDetail id={id} />
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";
import type { TileId } from "@/lib/types";
import { ExpandIcon } from "@/components/ui/icons";
import { morphTransition } from "@/lib/motion";
import { TilePreview, tileMeta } from "@/components/tiles";

export function BentoTile({
  id,
  className,
  onOpen,
}: {
  id: TileId;
  className?: string;
  onOpen: (id: TileId) => void;
}) {
  const reduce = useReducedMotion();
  const meta = tileMeta[id];

  return (
    <motion.button
      layoutId={`tile-${id}`}
      type="button"
      onClick={() => onOpen(id)}
      whileHover={reduce ? undefined : { y: -3 }}
      transition={morphTransition}
      aria-label={`Open ${meta.title}`}
      className={`group relative flex min-w-0 lg:min-h-0 flex-col gap-3 overflow-hidden rounded-lg border border-border bg-surface/80 p-5 text-left shadow-rest backdrop-blur-sm transition-shadow hover:shadow-hover ${className ?? ""}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
          {meta.eyebrow}
        </span>
        <span className="text-ink-faint opacity-50 transition-all group-hover:scale-110 group-hover:text-accent group-hover:opacity-100">
          <ExpandIcon width={16} height={16} />
        </span>
      </div>
      <h2 className="font-display text-lg font-semibold text-ink">
        {meta.title}
      </h2>
      <div className="min-h-0 flex-1">
        <TilePreview id={id} />
      </div>
    </motion.button>
  );
}

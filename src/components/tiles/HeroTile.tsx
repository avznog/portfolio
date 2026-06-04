"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { contact, hero } from "@/lib/content";
import { morphTransition } from "@/lib/motion";
import { ArrowIcon, ExpandIcon, FileIcon } from "@/components/ui/icons";
import type { TileId } from "@/lib/types";

export function HeroTile({
  onOpen,
}: {
  onOpen: (id: TileId) => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      layoutId="tile-hero"
      role="button"
      tabIndex={0}
      onClick={() => onOpen("hero")}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen("hero");
        }
      }}
      whileHover={reduce ? undefined : { y: -3 }}
      transition={morphTransition}
      aria-label="Open About Benjamin Gonzva"
      className="group relative flex h-full w-full cursor-pointer flex-col justify-between gap-6 overflow-hidden rounded-lg border border-border bg-surface/80 p-6 text-left shadow-rest backdrop-blur-sm transition-shadow hover:shadow-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span className="absolute right-5 top-5 text-ink-faint opacity-50 transition-all group-hover:scale-110 group-hover:text-accent group-hover:opacity-100">
        <ExpandIcon width={16} height={16} />
      </span>

      <div className="flex items-start gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border">
          <Image
            src="/me.jpg"
            alt="Benjamin Gonzva"
            fill
            sizes="56px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
            {hero.title}
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {hero.name}
          </h1>
        </div>
      </div>

      <p className="max-w-2xl text-base leading-relaxed text-ink-soft">
        {hero.statement}
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${contact.email}`}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
        >
          Get in touch <ArrowIcon width={16} height={16} />
        </a>
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            onOpen("resume");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
              onOpen("resume");
            }
          }}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent"
        >
          <FileIcon width={16} height={16} /> Resume
        </span>
      </div>
    </motion.div>
  );
}

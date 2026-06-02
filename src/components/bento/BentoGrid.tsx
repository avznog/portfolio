"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import type { TileId } from "@/lib/types";
import { HeroTile } from "@/components/tiles/HeroTile";
import { BentoTile } from "./BentoTile";
import { ExpandedTile } from "./ExpandedTile";

const TILES: { id: TileId; className: string }[] = [
  { id: "expertise", className: "lg:col-span-6 lg:row-span-2" },
  { id: "projects", className: "lg:col-span-6 lg:row-span-3" },
  { id: "experience", className: "lg:col-span-3 lg:row-span-3" },
  { id: "skills", className: "lg:col-span-3 lg:row-span-2" },
  { id: "education", className: "lg:col-span-3 lg:row-span-2" },
  { id: "contact", className: "lg:col-span-3 lg:row-span-2" },
];

export function BentoGrid() {
  const [active, setActive] = useState<TileId | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <LayoutGroup>
      <div
        className={`mx-auto grid w-full max-w-7xl flex-1 auto-rows-min grid-cols-1 gap-4 transition-[filter] duration-300 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-12 lg:grid-rows-5 ${
          active ? "blur-sm" : ""
        }`}
        aria-hidden={active ? true : undefined}
      >
        <div className="min-w-0 rounded-lg border border-border bg-surface/80 p-6 shadow-rest backdrop-blur-sm sm:col-span-2 lg:col-span-6 lg:row-span-3">
          <HeroTile />
        </div>

        {TILES.map((t) => (
          <BentoTile
            key={t.id}
            id={t.id}
            className={t.className}
            onOpen={setActive}
          />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-40 bg-bg/60"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && <ExpandedTile id={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </LayoutGroup>
  );
}

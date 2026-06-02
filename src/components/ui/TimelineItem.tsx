import type { ExperienceItem } from "@/lib/types";

export function TimelineItem({ item }: { item: ExperienceItem }) {
  return (
    <li className="relative pl-6">
      <span className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-accent" />
      <span className="absolute left-[4.5px] top-5 bottom-0 w-px bg-border" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <h3 className="font-display text-lg font-semibold text-ink">
          {item.role}
        </h3>
        <span className="font-mono text-xs text-ink-faint">{item.period}</span>
      </div>
      <p className="text-sm text-ink-soft">
        {item.org}
        {item.location ? ` · ${item.location}` : ""}
      </p>
      <ul className="mt-2 space-y-1.5">
        {item.bullets.map((b, i) => (
          <li
            key={i}
            className="text-sm leading-relaxed text-ink-soft before:mr-2 before:text-accent before:content-['—']"
          >
            {b}
          </li>
        ))}
      </ul>
    </li>
  );
}

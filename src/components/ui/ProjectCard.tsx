import Image from "next/image";
import type { Project } from "@/lib/types";
import { brands } from "@/lib/brands";
import { Pill } from "./Pill";
import { ArrowIcon } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.liveUrl ?? project.repoUrl;

  const inner = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-1.5">
          <h3 className="font-display text-base font-semibold text-ink">
            {project.title}
          </h3>
          {href && (
            <ArrowIcon
              width={14}
              height={14}
              className="text-ink-faint transition-colors group-hover:text-accent"
            />
          )}
        </div>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-soft">
          {project.blurb}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Pill key={t} brand={brands[t]}>
              {t}
            </Pill>
          ))}
        </div>
      </div>
    </>
  );

  const className =
    "group flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} transition-shadow hover:shadow-hover`}
      >
        {inner}
      </a>
    );
  }

  return <article className={className}>{inner}</article>;
}

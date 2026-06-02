import Image from "next/image";
import type { Project } from "@/lib/types";
import { ArrowIcon } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-border bg-surface">
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
        <h3 className="font-display text-base font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-soft">
          {project.blurb}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-surface-muted px-2 py-0.5 font-mono text-[11px] text-ink-faint"
            >
              {t}
            </span>
          ))}
        </div>
        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-3 flex gap-3 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:underline"
              >
                Live <ArrowIcon width={14} height={14} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-ink-soft hover:text-ink hover:underline"
              >
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

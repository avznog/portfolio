"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  certifications,
  contact,
  education,
  experience,
  expertise,
  hero,
  languages,
  projects,
  skills,
} from "@/lib/content";
import { detailContainer, detailItem } from "@/lib/motion";
import { brands } from "@/lib/brands";
import type { TileId } from "@/lib/types";
import { Pill } from "@/components/ui/Pill";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TimelineItem } from "@/components/ui/TimelineItem";
import {
  ArrowIcon,
  expertiseIcons,
  FileIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";

export const tileMeta: Record<TileId, { eyebrow: string; title: string }> = {
  hero: { eyebrow: "About", title: "Benjamin Gonzva" },
  experience: { eyebrow: "Where I've worked", title: "Experience" },
  projects: { eyebrow: "Selected work", title: "Personal Projects" },
  skills: { eyebrow: "What I do", title: "Skills & Expertise" },
  education: { eyebrow: "Background", title: "Education" },
  resume: { eyebrow: "PDF", title: "Resume" },
};

/* ---------- PREVIEWS (compact, shown in the grid) ---------- */

export function TilePreview({ id }: { id: TileId }) {
  switch (id) {
    case "projects":
      return (
        <div className="space-y-2.5">
          {projects.map((p) => (
            <div key={p.slug} className="flex items-center gap-3">
              <div className="relative aspect-[16/10] w-24 shrink-0 overflow-hidden rounded-md border border-border bg-surface-muted">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <p className="truncate text-sm font-medium text-ink">
                {p.title}
              </p>
            </div>
          ))}
        </div>
      );
    case "experience":
      return (
        <div className="space-y-4">
          {experience.map((item) => (
            <div key={item.org} className="min-w-0 space-y-1">
              <p className="truncate font-display text-base font-semibold text-ink">
                {item.role}
              </p>
              <p className="truncate text-sm text-ink-soft">{item.org}</p>
              <p className="font-mono text-xs text-ink-faint">{item.period}</p>
              {item.summary && (
                <p className="text-sm leading-relaxed text-ink-soft">
                  {item.summary}
                </p>
              )}
              {item.stack && item.stack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.stack.slice(0, 4).map((s) => (
                    <Pill key={s} brand={brands[s]}>
                      {s}
                    </Pill>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    case "education":
      return (
        <div className="space-y-3">
          {education.map((e) => (
            <div key={e.school} className="min-w-0">
              <p className="font-medium text-ink">{e.school}</p>
              <p className="font-mono text-xs text-ink-faint">{e.degree}</p>
              <p className="font-mono text-xs text-ink-faint">{e.period}</p>
            </div>
          ))}
        </div>
      );
    case "skills":
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {expertise.map((e) => {
              const Icon = expertiseIcons[e.icon];
              return (
                <div key={e.label} className="flex min-w-0 items-center gap-2">
                  <span className="shrink-0 text-accent">
                    <Icon width={16} height={16} />
                  </span>
                  <span className="truncate text-sm font-medium text-ink">
                    {e.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Kubernetes", "Terraform", "AWS", "GCP", "GitLab CI", "Helm"].map(
              (s) => (
                <Pill key={s} brand={brands[s]}>
                  {s}
                </Pill>
              ),
            )}
          </div>
          <p className="font-mono text-xs text-ink-faint">
            Clouds · Orchestration · Observability · DevOps
          </p>
        </div>
      );
    case "resume":
      return (
        <div className="flex min-w-0 items-center gap-3">
          <span className="shrink-0 text-accent">
            <FileIcon width={22} height={22} />
          </span>
          <p className="truncate font-mono text-xs text-ink-faint">
            PDF · download or view inline
          </p>
        </div>
      );
  }
}

/* ---------- DETAILS (full, shown when expanded) ---------- */

export function TileDetail({ id }: { id: TileId }) {
  return (
    <motion.div variants={detailContainer} initial="hidden" animate="show">
      {detailBody(id)}
    </motion.div>
  );
}

function detailBody(id: TileId) {
  switch (id) {
    case "hero":
      return (
        <div className="space-y-6">
          <motion.div variants={detailItem} className="space-y-4">
            {hero.bio.map((para) => (
              <p
                key={para.slice(0, 24)}
                className="text-base leading-relaxed text-ink-soft"
              >
                {para}
              </p>
            ))}
          </motion.div>
          <motion.div variants={detailItem}>
            <h3 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-faint">
              Get in touch
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <ContactRow
                icon={<MailIcon />}
                label={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactRow
                icon={<PhoneIcon />}
                label={contact.phone}
                href={`sms:${contact.phone.replace(/\s/g, "")}`}
              />
              <ContactRow
                icon={<GithubIcon />}
                label={contact.github}
                href={contact.githubUrl}
                external
              />
              <ContactRow
                icon={<LinkedinIcon />}
                label={contact.linkedin}
                href={contact.linkedinUrl}
                external
              />
            </div>
          </motion.div>
        </div>
      );
    case "projects":
      return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.div key={p.slug} variants={detailItem}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      );
    case "experience":
      return (
        <motion.ul variants={detailItem} className="space-y-8">
          {experience.map((item) => (
            <TimelineItem key={item.org} item={item} />
          ))}
        </motion.ul>
      );
    case "education":
      return (
        <div className="space-y-4">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              variants={detailItem}
              className="rounded-md border border-l-4 border-border bg-surface px-4 py-3"
              style={{
                borderLeftColor: [
                  "var(--color-accent)",
                  "var(--color-accent-sky)",
                ][i % 2],
              }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {e.school}
                </h3>
                <span className="font-mono text-xs text-ink-faint">
                  {e.period}
                </span>
              </div>
              <p className="text-sm font-medium text-ink-soft">{e.degree}</p>
              {e.note && (
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {e.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      );
    case "skills":
      return (
        <div className="space-y-5">
          <motion.div
            variants={detailItem}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {expertise.map((e) => {
              const Icon = expertiseIcons[e.icon];
              return (
                <div
                  key={e.label}
                  className="rounded-md border border-border bg-surface p-3"
                >
                  <span className="text-accent">
                    <Icon width={20} height={20} />
                  </span>
                  <h3 className="mt-1.5 font-display text-sm font-semibold text-ink">
                    {e.label}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                    {e.blurb}
                  </p>
                </div>
              );
            })}
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
            <div className="space-y-4">
              {skills.map((group) => (
                <motion.div key={group.label} variants={detailItem}>
                  <h3 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-faint">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((s) => (
                      <Pill key={s} brand={brands[s]}>
                        {s}
                      </Pill>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={detailItem}
              className="space-y-4 border-t border-border pt-4 lg:min-w-48 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"
            >
              <div>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-faint">
                  Certifications
                </h3>
                <ul className="space-y-1 text-sm text-ink-soft">
                  {certifications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-faint">
                  Languages
                </h3>
                <ul className="space-y-1 text-sm text-ink-soft">
                  {languages.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      );
    case "resume":
      return <ResumeDetail />;
  }
}

function ResumeDetail() {
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowPdf(true), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="space-y-4">
      <motion.div variants={detailItem} className="flex flex-wrap gap-3">
        <a
          href={contact.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
        >
          <FileIcon width={16} height={16} /> Download PDF
        </a>
        <a
          href={contact.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent"
        >
          Open in new tab <ArrowIcon width={16} height={16} />
        </a>
      </motion.div>
      <motion.div
        variants={detailItem}
        className="overflow-hidden rounded-md border border-border bg-surface-muted"
      >
        {showPdf ? (
          <object
            data={contact.resumeUrl}
            type="application/pdf"
            className="h-[70vh] w-full"
            aria-label="Resume PDF"
          >
            <div className="p-6 text-center text-sm text-ink-soft">
              Your browser can&apos;t display the PDF inline.{" "}
              <a
                href={contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                Open the resume in a new tab
              </a>
              .
            </div>
          </object>
        ) : (
          <div className="flex h-[70vh] w-full items-center justify-center text-sm text-ink-faint">
            Loading preview…
          </div>
        )}
      </motion.div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <motion.a
      variants={detailItem}
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-3 text-sm text-ink-soft transition-colors hover:border-accent hover:text-ink"
    >
      <span className="text-accent">{icon}</span>
      {label}
    </motion.a>
  );
}

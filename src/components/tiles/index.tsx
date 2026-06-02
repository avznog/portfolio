"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  certifications,
  contact,
  education,
  experience,
  expertise,
  languages,
  projects,
  skills,
} from "@/lib/content";
import { detailContainer, detailItem } from "@/lib/motion";
import type { TileId } from "@/lib/types";
import { Pill } from "@/components/ui/Pill";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TimelineItem } from "@/components/ui/TimelineItem";
import {
  expertiseIcons,
  FileIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";

export const tileMeta: Record<TileId, { eyebrow: string; title: string }> = {
  expertise: { eyebrow: "What I do", title: "Expertise" },
  projects: { eyebrow: "Selected work", title: "Projects" },
  experience: { eyebrow: "Where I've worked", title: "Experience" },
  education: { eyebrow: "Background", title: "Education" },
  skills: { eyebrow: "Toolbox", title: "Skills" },
  contact: { eyebrow: "Say hello", title: "Contact" },
};

/* ---------- PREVIEWS (compact, shown in the grid) ---------- */

export function TilePreview({ id }: { id: TileId }) {
  switch (id) {
    case "expertise":
      return (
        <div className="grid grid-cols-2 gap-2">
          {expertise.map((e) => {
            const Icon = expertiseIcons[e.icon];
            return (
              <div key={e.label} className="flex min-w-0 items-center gap-2">
                <span className="shrink-0 text-accent">
                  <Icon width={18} height={18} />
                </span>
                <span className="truncate text-sm font-medium text-ink">
                  {e.label}
                </span>
              </div>
            );
          })}
        </div>
      );
    case "projects":
      return (
        <div className="flex gap-2">
          {projects.map((p) => (
            <div
              key={p.slug}
              className="relative aspect-[4/3] min-w-0 flex-1 overflow-hidden rounded-md border border-border bg-surface-muted"
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="120px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      );
    case "experience": {
      const latest = experience[0];
      return (
        <div>
          <p className="font-display text-base font-semibold text-ink">
            {latest.role}
          </p>
          <p className="text-sm text-ink-soft">{latest.org}</p>
          <p className="mt-1 font-mono text-xs text-ink-faint">
            {latest.period}
          </p>
        </div>
      );
    }
    case "education":
      return (
        <div className="space-y-1">
          {education.map((e) => (
            <p key={e.school} className="text-sm text-ink-soft">
              <span className="font-medium text-ink">{e.school}</span>
            </p>
          ))}
        </div>
      );
    case "skills":
      return (
        <div className="flex flex-wrap gap-1.5">
          {["Kubernetes", "Terraform", "AWS", "GCP", "GitLab CI"].map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
      );
    case "contact":
      return (
        <div className="flex gap-3 text-ink-soft">
          <MailIcon />
          <GithubIcon />
          <LinkedinIcon />
          <FileIcon />
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
    case "expertise":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {expertise.map((e) => {
            const Icon = expertiseIcons[e.icon];
            return (
              <motion.div
                key={e.label}
                variants={detailItem}
                className="rounded-md border border-border bg-surface p-4"
              >
                <span className="text-accent">
                  <Icon width={22} height={22} />
                </span>
                <h3 className="mt-2 font-display text-base font-semibold text-ink">
                  {e.label}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {e.blurb}
                </p>
              </motion.div>
            );
          })}
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
          {education.map((e) => (
            <motion.div
              key={e.school}
              variants={detailItem}
              className="rounded-md border border-border bg-surface p-4"
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
        <div className="space-y-6">
          {skills.map((group) => (
            <motion.div key={group.label} variants={detailItem}>
              <h3 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-faint">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </motion.div>
          ))}
          <motion.div
            variants={detailItem}
            className="grid gap-6 border-t border-border pt-6 sm:grid-cols-2"
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
      );
    case "contact":
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          <ContactRow
            icon={<MailIcon />}
            label={contact.email}
            href={`mailto:${contact.email}`}
          />
          <ContactRow
            icon={<PhoneIcon />}
            label={contact.phone}
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
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
          <ContactRow
            icon={<FileIcon />}
            label="Download résumé"
            href={contact.resumeUrl}
            external
          />
        </div>
      );
  }
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

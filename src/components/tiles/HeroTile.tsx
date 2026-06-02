import Image from "next/image";
import { contact, hero } from "@/lib/content";
import { ArrowIcon, FileIcon } from "@/components/ui/icons";

export function HeroTile() {
  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <div className="flex items-start gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border">
          <Image
            src="/ben.png"
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
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
        >
          Get in touch <ArrowIcon width={16} height={16} />
        </a>
        <a
          href={contact.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent"
        >
          <FileIcon width={16} height={16} /> Résumé
        </a>
      </div>
    </div>
  );
}

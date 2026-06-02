export function Footer() {
  return (
    <footer className="shrink-0 px-6 py-4 text-center font-mono text-xs text-ink-faint">
      <span>© {new Date().getFullYear()} Benjamin Gonzva</span>
      <span className="mx-2 text-border">·</span>
      <span>Built with Claude · Next.js · Vercel</span>
    </footer>
  );
}

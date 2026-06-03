import type { Brand } from "@/lib/brands";

function rgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function Pill({
  children,
  brand,
}: {
  children: React.ReactNode;
  brand?: Brand;
}) {
  if (!brand) {
    return (
      <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-ink-soft">
        {children}
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs text-ink"
      style={{
        borderColor: rgba(brand.hex, 0.4),
        backgroundColor: rgba(brand.hex, 0.08),
      }}
    >
      {brand.path && (
        <svg
          viewBox="0 0 24 24"
          width={14}
          height={14}
          fill={brand.hex}
          aria-hidden="true"
          className="shrink-0"
        >
          <path d={brand.path} />
        </svg>
      )}
      {children}
    </span>
  );
}

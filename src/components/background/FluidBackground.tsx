export function FluidBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="blob absolute -left-[10%] top-[-15%] h-[55vw] w-[55vw] rounded-full opacity-50 mix-blend-multiply blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-lilac) 0%, transparent 70%)",
          animation: "var(--animate-drift-a)",
        }}
      />
      <div
        className="blob absolute right-[-12%] top-[10%] h-[50vw] w-[50vw] rounded-full opacity-45 mix-blend-multiply blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-sky) 0%, transparent 70%)",
          animation: "var(--animate-drift-b)",
        }}
      />
      <div
        className="blob absolute bottom-[-20%] left-[25%] h-[48vw] w-[48vw] rounded-full opacity-40 mix-blend-multiply blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-mint) 0%, transparent 70%)",
          animation: "var(--animate-drift-c)",
        }}
      />
    </div>
  );
}

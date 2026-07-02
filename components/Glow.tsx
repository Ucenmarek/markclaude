type GlowProps = {
  className?: string;
};

export function Glow({ className = "" }: GlowProps) {
  const glowClassName = ("pointer-events-none absolute rounded-full bg-[var(--orange)]/18 blur-[140px] " + className).trim();

  return <div aria-hidden="true" className={glowClassName} />;
}

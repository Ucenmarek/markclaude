type NoiseOverlayProps = {
  className?: string;
};

export function NoiseOverlay({ className = "" }: NoiseOverlayProps) {
  const overlayClassName = ("pointer-events-none absolute inset-0 opacity-[0.035] " + className).trim();

  return (
    <div
      aria-hidden="true"
      className={overlayClassName}
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 0.65px, transparent 0.65px)",
        backgroundSize: "4px 4px",
      }}
    />
  );
}

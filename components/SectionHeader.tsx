type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";
  const wrapperClassName = ((centered ? "mx-auto text-center " : "") + "max-w-4xl " + className).trim();
  const descriptionClassName = ("mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg " + (centered ? "mx-auto" : "")).trim();

  return (
    <div className={wrapperClassName}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase text-[var(--orange)]" style={{ letterSpacing: "0.24em" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? <p className={descriptionClassName}>{description}</p> : null}
    </div>
  );
}

type MCLogoProps = {
  className?: string;
  title?: string;
};

export function MCLogo({ className, title = "markclaude.sk" }: MCLogoProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <path
        d="M32 86V34L60 64L88 34V86"
        stroke="var(--orange)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M82 25C69 15 49 15 35 27C18 42 17 75 35 91C49 104 70 104 84 92"
        stroke="var(--text-primary)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="95" cy="88" r="5" fill="var(--orange)" />
    </svg>
  );
}

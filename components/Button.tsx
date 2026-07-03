import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButton = SharedButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLink = SharedButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary: "border-[var(--orange)] bg-[var(--orange)] text-white shadow-[0_0_44px_rgba(255,122,26,0.22)] hover:bg-[var(--orange-soft)]",
  secondary: "border-[var(--border)] bg-white/[0.03] text-white hover:border-[rgba(255,122,26,0.42)] hover:text-[var(--orange)]",
};

function getButtonClassName(variant: ButtonVariant, className: string) {
  return (
    "inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 " +
    variants[variant] +
    " " +
    className
  ).trim();
}

export function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const { children, className = "", variant = "primary", href, ...anchorProps } = props as ButtonAsLink;
    const classes = getButtonClassName(variant, className);

    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { children, className = "", variant = "primary", ...buttonProps } = props as ButtonAsButton;
  const classes = getButtonClassName(variant, className);

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

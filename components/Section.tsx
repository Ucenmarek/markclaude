import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container } from "@/components/Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
} & ComponentPropsWithoutRef<"section">;

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  ...props
}: SectionProps) {
  const sectionClassName = ("border-t border-[var(--border)] py-[72px] sm:py-[120px] " + className).trim();

  return (
    <section id={id} className={sectionClassName} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

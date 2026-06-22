import type { ReactNode } from "react";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/** Static section wrapper — apply ScrollReveal to children, not the section itself. */
export default function RevealSection({
  children,
  className = "",
  id,
}: RevealSectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

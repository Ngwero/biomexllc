"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "scale"
  | "zoom";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  as?: ElementType;
  id?: string;
};

function delayClass(delay: number) {
  if (delay <= 0) return "";
  const step = Math.min(6, Math.round(delay / 80));
  return step > 0 ? `reveal-delay-${step}` : "";
}

export default function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  as: Component = "div",
  id,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    const show = () => setRevealed(true);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      id={id}
      className={`reveal-scroll reveal-${variant} ${delayClass(delay)} ${revealed ? "is-revealed" : ""} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}

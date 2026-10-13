"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Hook that observes an element and returns whether it has scrolled into view.
 * Used to trigger CSS reveal animations on scroll.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}

/**
 * Wrapper component that reveals its children with an animation on scroll.
 * Supports multiple animation variants and staggered delays for lists.
 */
export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  as: Tag = "div",
  threshold,
  rootMargin,
}: {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up" | "blur-in";
  delay?: number;
  duration?: number;
  className?: string;
  as?: React.ElementType;
  threshold?: number;
  rootMargin?: string;
}) {
  const [ref, isVisible] = useScrollReveal<HTMLElement>({ threshold, rootMargin });

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal ${animation} ${isVisible ? "revealed" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

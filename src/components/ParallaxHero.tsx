"use client";

import { useEffect, useRef } from "react";

type ParallaxHeroProps = {
  children: React.ReactNode;
};

/**
 * Small parallax wrapper for the home hero.
 * Tilts and lifts slightly with pointer movement.
 */
export default function ParallaxHero({ children }: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame: number | null = null;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
      const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;

      const rotateX = y * -8;
      const rotateY = x * 8;
      const translateY = y * -8;

      if (frame != null) cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        el.style.transform =
          "perspective(900px) rotateX(" +
          rotateX +
          "deg) rotateY(" +
          rotateY +
          "deg) translateY(" +
          translateY +
          "px)";
      });
    };

    const handleLeave = () => {
      if (frame != null) cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        el.style.transform =
          "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
      });
    };

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handleLeave);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handleLeave);
      if (frame != null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="will-change-transform transition-transform duration-150 ease-out"
    >
      {children}
    </div>
  );
}

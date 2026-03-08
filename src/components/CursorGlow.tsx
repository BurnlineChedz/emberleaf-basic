"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle neon glow that follows the cursor behind content.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let frame: number | null = null;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (frame == null) {
        frame = window.requestAnimationFrame(() => {
          const size = 260;
          el.style.transform = `translate3d(${targetX - size / 2}px, ${
            targetY - size / 2
          }px, 0)`;
          frame = null;
        });
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame != null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed -z-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.45),transparent_60%)] blur-3xl opacity-70 mix-blend-screen"
    />
  );
}


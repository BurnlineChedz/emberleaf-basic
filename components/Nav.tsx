"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { ui } from "@/src/lib/uiClasses";

export default function Nav() {
  const { totalItems } = useCart();
  const badgeRef = useRef<HTMLSpanElement>(null);

  // Animate the badge by toggling a CSS class directly on the DOM element —
  // avoids calling setState inside an effect.
  useEffect(() => {
    const el = badgeRef.current;
    if (!el || totalItems <= 0) return;
    el.classList.add("cart-badge-animate");
    const timeout = window.setTimeout(() => {
      el.classList.remove("cart-badge-animate");
    }, 320);
    return () => window.clearTimeout(timeout);
  }, [totalItems]);

  return (
    <nav className="border-b border-[color:rgba(0,0,0,0.1)] bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Emberleaf Laserworks" className="h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className={`text-sm ${ui.navLink}`}>
            Home
          </Link>
          <Link href="/product" className={`text-sm ${ui.navLink}`}>
            Product
          </Link>
          <Link href="/portfolio" className={`text-sm ${ui.navLink}`}>
            Portfolio
          </Link>
          <Link
            href="/cart"
            className={`flex items-center gap-1.5 text-sm ${ui.navLink}`}
          >
            Cart
            {totalItems > 0 && (
              <span ref={badgeRef} className={ui.badge}>
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

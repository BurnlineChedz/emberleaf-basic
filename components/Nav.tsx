"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { ui } from "@/src/lib/uiClasses";

export default function Nav() {
  const { totalItems } = useCart();
  const [badgeAnimated, setBadgeAnimated] = useState(false);

  useEffect(() => {
    if (totalItems <= 0) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBadgeAnimated(true);
    const timeout = window.setTimeout(() => setBadgeAnimated(false), 320);
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
              <span
                className={`${ui.badge} ${
                  badgeAnimated ? "cart-badge-animate" : ""
                }`}
              >
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

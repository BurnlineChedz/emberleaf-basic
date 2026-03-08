"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { ui } from "@/src/lib/uiClasses";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    // Neon confetti burst on success (neon green, white, silver only).
    confetti({
      particleCount: 90,
      spread: 60,
      origin: { y: 0.3 },
      colors: ["#39FF14", "#ffffff", "#bfc5c9"],
      scalar: 0.9,
    });
  }, [clearCart]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-bold text-[color:var(--white)]">
          Thank you
        </h1>
        <p className="mt-3 text-[color:var(--silver)]">
          Your order has been placed. We’ll be in touch soon.
        </p>
        <Link href="/" className={`mt-8 inline-block ${ui.outlineBtn}`}>
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

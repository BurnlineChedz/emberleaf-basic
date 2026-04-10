"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { ui } from "@/src/lib/uiClasses";
import type { Product } from "@/lib/products";

type OrderLine = { product: Product; quantity: number };
type OrderData = { lines: OrderLine[]; total: number };

export default function SuccessPage() {
  const { clearCart, getCartLines } = useCart();
  const [orderData, setOrderData] = useState<OrderData>({ lines: [], total: 0 });
  const cleared = useRef(false);

  useEffect(() => {
    if (cleared.current) return;
    cleared.current = true;

    const lines = getCartLines();
    const total = lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);
    setOrderData({ lines, total });

    clearCart();

    confetti({
      particleCount: 90,
      spread: 60,
      origin: { y: 0.3 },
      colors: ["#0a0a0a", "#555555", "#aaaaaa"],
      scalar: 0.9,
    });
  }, [clearCart, getCartLines]);

  const { lines: orderLines, total: orderTotal } = orderData;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-bold text-[color:var(--white)]">
          Order confirmed
        </h1>
        <p className="mt-3 text-[color:var(--silver)]">
          Your order has been placed. We&apos;ll be in touch soon.
        </p>

        {orderLines.length > 0 && (
          <motion.div
            className={`mx-auto mt-8 max-w-md text-left ${ui.card}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-sm font-medium text-[color:var(--silver)]">
              Order summary
            </p>
            <ul className="mt-3 space-y-2">
              {orderLines.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex justify-between text-sm text-[color:var(--silver)]"
                >
                  <span>
                    {product.name}{" "}
                    <span className="text-[color:var(--silver)]">
                      × {quantity}
                    </span>
                  </span>
                  <span className="font-medium text-[color:var(--white)]">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex justify-between border-t border-[color:rgba(0,0,0,0.1)] pt-3 font-semibold text-[color:var(--white)]">
              <span>Total</span>
              <span className="text-[color:var(--neon)]">
                ${orderTotal.toFixed(2)}
              </span>
            </p>
          </motion.div>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/product" className={ui.primaryBtn}>
            Shop again
          </Link>
          <Link href="/" className={ui.outlineBtn}>
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

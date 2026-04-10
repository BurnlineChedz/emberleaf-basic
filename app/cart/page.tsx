"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { ui } from "@/src/lib/uiClasses";

export default function CartPage() {
  const { getCartLines, totalItems, totalPrice, removeFromCart } = useCart();
  const lines = getCartLines();

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-[color:var(--white)]">
          Your Cart
        </h1>
        <p className="mt-4 text-[color:var(--silver)]">Your cart is empty.</p>
        <Link href="/product" className={`mt-6 inline-block ${ui.primaryBtn}`}>
          View Product
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold text-[color:var(--white)]">
        Your Cart
      </h1>
      <ul className="mt-6 space-y-4">
        {lines.map(({ product, quantity }) => (
          <motion.li
            key={product.id}
            className={`flex items-center gap-4 p-4 ${ui.card}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-[color:var(--white)]">
                {product.name}
              </h2>
              <p className="text-sm text-[color:var(--silver)]">
                ${product.price.toFixed(2)} × {quantity} = $
                {(product.price * quantity).toFixed(2)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => removeFromCart(product.id)}
              className="shrink-0 rounded-xl border-2 border-[color:rgba(0,0,0,0.2)] px-3 py-1.5 text-sm font-medium text-[color:var(--white)] transition-all duration-200 hover:border-[color:var(--neon)] hover:bg-gray-50"
            >
              Remove
            </button>
          </motion.li>
        ))}
      </ul>
      <motion.div
        className={`mt-6 p-6 ${ui.card}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="flex justify-between text-lg font-semibold text-[color:var(--white)]">
          <span>Total ({totalItems} items)</span>
          <span>${totalPrice.toFixed(2)}</span>
        </p>
        <Link href="/checkout" className={`mt-4 block w-full ${ui.primaryBtn}`}>
          Proceed to Checkout
        </Link>
      </motion.div>
    </div>
  );
}

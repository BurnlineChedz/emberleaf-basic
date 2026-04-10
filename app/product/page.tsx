"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { productList } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { ui } from "@/src/lib/uiClasses";

export default function ProductPage() {
  const { addToCart } = useCart();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold text-[color:var(--white)]">Products</h1>
      <p className="mt-1 text-[color:var(--silver)]">
        Every tumbler is custom-engraved and ships within 3–5 business days.
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productList.map((product, i) => (
          <motion.li
            key={product.id}
            className={`${ui.gradientBorderWrap}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
          >
            <div className={`flex h-full flex-col overflow-hidden ${ui.card}`}>
              <div className="relative aspect-[3/2] w-full bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-bold text-[color:var(--white)]">
                  {product.name}
                </h2>
                <p className="mt-1 text-lg font-semibold text-[color:var(--neon)]">
                  ${product.price.toFixed(2)}
                </p>
                <p className="mt-2 flex-1 text-sm text-[color:var(--silver)]">
                  {product.description}
                </p>
                <button
                  type="button"
                  onClick={() => addToCart(product.id)}
                  className={`mt-5 w-full ${ui.primaryBtn}`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>

      <p className="mt-8 text-center">
        <Link href="/" className={ui.outlineBtn}>
          ← Back to Home
        </Link>
      </p>
    </div>
  );
}

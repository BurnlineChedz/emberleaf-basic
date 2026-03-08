"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getProduct } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { ui } from "@/src/lib/uiClasses";

const product = getProduct();

export default function ProductPage() {
  const { addToCart } = useCart();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <motion.div
        className={`${ui.gradientBorderWrap} mx-auto`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={`overflow-hidden ${ui.card}`}>
          <div className="relative aspect-[3/2] w-full bg-[color:rgba(5,5,5,0.9)]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 1024px"
            />
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-[color:var(--white)]">
              {product.name}
            </h1>
            <p className="mt-2 text-xl font-semibold text-[color:var(--white)]">
              ${product.price.toFixed(2)}
            </p>
            <p className="mt-3 text-[color:var(--silver)]">
              {product.description}
            </p>
            <button
              type="button"
              onClick={() => addToCart(product.id)}
              className={`mt-6 w-full ${ui.primaryBtn}`}
            >
              Buy
            </button>
          </div>
        </div>
      </motion.div>
      <p className="mt-6 text-center">
        <Link href="/" className={ui.outlineBtn}>
          ← Back to Home
        </Link>
      </p>
    </div>
  );
}

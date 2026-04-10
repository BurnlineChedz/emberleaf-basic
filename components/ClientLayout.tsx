"use client";

import { CartProvider } from "@/context/CartContext";
import Nav from "@/components/Nav";
import { MotionConfig } from "framer-motion";

export default function ClientLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <CartProvider>
        <Nav />
        <main className="min-h-screen bg-white">{children}</main>
      </CartProvider>
    </MotionConfig>
  );
}

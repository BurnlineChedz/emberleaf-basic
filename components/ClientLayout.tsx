"use client";

import { CartProvider } from "@/context/CartContext";
import Nav from "@/components/Nav";
import CursorGlow from "@/src/components/CursorGlow";
import { MotionConfig } from "framer-motion";

export default function ClientLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <CartProvider>
        <CursorGlow />
        <Nav />
        <main className="min-h-screen bg-transparent">{children}</main>
      </CartProvider>
    </MotionConfig>
  );
}

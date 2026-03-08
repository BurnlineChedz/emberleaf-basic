'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ui } from "@/src/lib/uiClasses";
import ParallaxHero from "@/src/components/ParallaxHero";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ParallaxHero>
          <div className={`${ui.gradientBorderWrap} mx-auto`}>
            <section
              className={`shine-hover ${ui.card} text-center sm:text-left sm:flex sm:flex-col sm:items-start`}
            >
              <h1 className="text-3xl font-bold text-[color:var(--white)] sm:text-4xl">
                Welcome
              </h1>
              <p className="mt-3 text-lg text-[color:var(--silver)]">
                Explore your customized 40oz tumbler or browse the portfolio.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
                <Link
                  href="/product"
                  className={`w-full sm:w-auto ${ui.primaryBtn}`}
                >
                  View Product
                </Link>
                <Link
                  href="/portfolio"
                  className={`w-full sm:w-auto ${ui.outlineBtn}`}
                >
                  View Portfolio
                </Link>
              </div>
            </section>
          </div>
        </ParallaxHero>
      </motion.div>
    </div>
  );
}

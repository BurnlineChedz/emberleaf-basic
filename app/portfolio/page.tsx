"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/portfolio";
import { ui } from "@/src/lib/uiClasses";

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold text-[color:var(--white)]">
        Portfolio
      </h1>
      <p className="mt-1 text-[color:var(--silver)]">
        Projects — edit the list in lib/portfolio.ts
      </p>

      <ul className="mt-8 space-y-4" aria-label="Projects list">
        {projects.map((project) => (
          <motion.li
            key={project.id}
            className={`flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between ${ui.card}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="min-w-0">
              <h2 className="font-semibold text-[color:var(--white)]">
                {project.title}
              </h2>
              <p className="mt-0.5 text-sm text-[color:var(--silver)]">
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`shrink-0 ${ui.outlineBtn}`}
            >
              Link
            </a>
          </motion.li>
        ))}
      </ul>

      <p className="mt-8">
        <Link href="/" className={ui.outlineBtn}>
          ← Back to Home
        </Link>
      </p>
    </div>
  );
}

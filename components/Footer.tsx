import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[color:rgba(0,0,0,0.1)] bg-white py-10">
      <div className="mx-auto max-w-5xl px-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Emberleaf Laserworks"
            width={140}
            height={56}
            className="h-12 w-auto object-contain"
          />
        </Link>
        <p className="text-sm text-[color:var(--silver)]">
          © {new Date().getFullYear()} Emberleaf Laserworks. All rights reserved.
        </p>
        <nav className="flex gap-5 text-sm text-[color:var(--silver)]">
          <Link href="/product" className="hover:text-[color:var(--neon)] transition-colors">Product</Link>
          <Link href="/portfolio" className="hover:text-[color:var(--neon)] transition-colors">Portfolio</Link>
          <Link href="/cart" className="hover:text-[color:var(--neon)] transition-colors">Cart</Link>
        </nav>
      </div>
    </footer>
  );
}

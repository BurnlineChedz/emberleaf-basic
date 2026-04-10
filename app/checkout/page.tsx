"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ui } from "@/src/lib/uiClasses";

export default function CheckoutPage() {
  const { getCartLines, totalPrice } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const lines = getCartLines();

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-[color:var(--white)]">Checkout</h1>
        <p className="mt-4 text-[color:var(--silver)]">Your cart is empty.</p>
        <Link href="/product" className={`mt-6 inline-block ${ui.primaryBtn}`}>
          View Product
        </Link>
      </div>
    );
  }

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: lines.map(({ product, quantity }) => ({
            productId: product.id,
            quantity,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Checkout failed");
      if (data.url) window.location.href = data.url;
      else throw new Error("No checkout URL returned");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold text-[color:var(--white)]">Checkout</h1>

      <div className={`mt-6 ${ui.card}`}>
        <p className="text-sm font-medium text-[color:var(--silver)]">Order summary</p>
        <ul className="mt-2 space-y-1 text-sm text-[color:var(--silver)]">
          {lines.map(({ product, quantity }) => (
            <li key={product.id}>
              {product.name} × {quantity} — $
              {(product.price * quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <p className="mt-3 flex justify-between border-t border-[color:rgba(0,0,0,0.1)] pt-3 font-semibold text-[color:var(--white)]">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </p>
      </div>

      <form onSubmit={handlePay} className="mt-8 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[color:var(--silver)]"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={`mt-1 ${ui.input}`}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[color:var(--silver)]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`mt-1 ${ui.input}`}
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-[color:var(--silver)]"
          >
            Address
          </label>
          <textarea
            id="address"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className={`mt-1 ${ui.input}`}
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="flex flex-wrap gap-4 pt-2">
          <button
            type="submit"
            disabled={loading}
            className={`${ui.primaryBtn} disabled:opacity-70 disabled:pointer-events-none`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Redirecting…
              </span>
            ) : (
              "Pay now"
            )}
          </button>
          <Link href="/cart" className={ui.outlineBtn}>
            Back to Cart
          </Link>
        </div>
      </form>
    </div>
  );
}

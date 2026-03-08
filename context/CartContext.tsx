"use client";

import React, { createContext, useContext, useReducer, useMemo } from "react";
import { Product, getProductById } from "@/lib/products";

export type CartItem = { productId: string; quantity: number };

type CartState = { items: CartItem[] };

type CartAction =
  | { type: "ADD"; productId: string; quantity?: number }
  | { type: "REMOVE"; productId: string }
  | { type: "CLEAR" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const qty = action.quantity ?? 1;
      const existing = state.items.find((i) => i.productId === action.productId);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === action.productId
              ? { ...i, quantity: i.quantity + qty }
              : i
          ),
        };
      }
      return { items: [...state.items, { productId: action.productId, quantity: qty }] };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.productId !== action.productId) };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  getCartLines: () => { product: Product; quantity: number }[];
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const value = useMemo(() => {
    const getCartLines = () =>
      state.items
        .map((item) => {
          const product = getProductById(item.productId);
          return product ? { product, quantity: item.quantity } : null;
        })
        .filter(Boolean) as { product: Product; quantity: number }[];

    const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = getCartLines().reduce(
      (sum, line) => sum + line.product.price * line.quantity,
      0
    );

    return {
      items: state.items,
      addToCart: (productId: string, quantity?: number) =>
        dispatch({ type: "ADD", productId, quantity }),
      removeFromCart: (productId: string) => dispatch({ type: "REMOVE", productId }),
      clearCart: () => dispatch({ type: "CLEAR" }),
      totalItems,
      totalPrice,
      getCartLines,
    };
  }, [state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductById } from "@/lib/products";

export async function POST(req: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const body = await req.json();
    const { items } = body as { items: { productId: string; quantity: number }[] };

    if (!items?.length) {
      return NextResponse.json(
        { error: "No items in cart" },
        { status: 400 }
      );
    }

    const origin = process.env.NEXT_PUBLIC_APP_URL ?? req.headers.get("origin") ?? "http://localhost:3000";

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
      (item: { productId: string; quantity: number }) => {
        const product = getProductById(item.productId);
        if (!product) throw new Error(`Product not found: ${item.productId}`);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              description: product.description,
              images: product.image ? [product.image] : undefined,
            },
            unit_amount: Math.round(product.price * 100), // cents
          },
          quantity: item.quantity,
        };
      }
    );

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Checkout failed" },
      { status: 500 }
    );
  }
}

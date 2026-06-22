"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { formatPrice } from "@/data/products";
import type { Order } from "@/lib/cart";

export default function OrderConfirmation() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("sierra-biomed-last-order");
      if (stored) {
        const parsed = JSON.parse(stored) as Order;
        if (!orderId || parsed.id === orderId) {
          setOrder(parsed);
        }
      }
    } catch {
      setOrder(null);
    }
  }, [orderId]);

  if (!order) {
    return (
      <section className="bg-white py-16 text-center">
        <div className="mx-auto max-w-lg px-4">
          <h1 className="mb-4 text-3xl font-bold">Order Confirmation</h1>
          <p className="mb-6 text-[#707070]">We could not find your order details.</p>
          <Link href="/category/all-products" className="text-[#4069a5] hover:underline">
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[800px] px-4 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
          ✓
        </div>
        <h1 className="mb-2 text-3xl font-bold text-black">Thank You!</h1>
        <p className="mb-8 text-[#707070]">
          Your order <strong>{order.id}</strong> has been received. A Sierra Biomed
          representative will contact you at {order.shipping.email} to confirm
          payment and delivery.
        </p>

        <div className="mb-8 rounded-lg border border-[#e8e6e6] bg-[#f9f9f9] p-6 text-left">
          <h2 className="mb-4 text-lg font-bold">Order Summary</h2>
          <div className="space-y-2 text-sm">
            {order.items.map((item) => (
              <div key={item.key} className="flex justify-between gap-4">
                <span>
                  {item.name} × {item.quantity}
                  {item.size ? ` (${item.size})` : ""}
                </span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-1 border-t border-[#e8e6e6] pt-4 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(order.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>
                {order.shippingCost === 0 ? "Free" : formatPrice(order.shippingCost)}
              </span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span className="text-[#4069a5]">{formatPrice(order.total)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/category/all-products"
            className="rounded-full bg-[#4069a5] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#355a8a]"
          >
            Continue Shopping
          </Link>
          <Link
            href="/orders"
            className="rounded-full border-2 border-[#033250] px-8 py-3 text-sm font-semibold text-[#033250] transition hover:bg-[#033250] hover:text-white"
          >
            View Order History
          </Link>
          <Link
            href="/contact-us"
            className="rounded-full border-2 border-[#4069a5] px-8 py-3 text-sm font-semibold text-[#4069a5] transition hover:bg-[#4069a5] hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

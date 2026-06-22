"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { formatPrice } from "@/data/products";
import type { Order } from "@/lib/cart";

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("sierra-biomed-orders");
      if (stored) setOrders(JSON.parse(stored) as Order[]);
    } catch {
      setOrders([]);
    }
  }, []);

  if (orders.length === 0) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-black">Order History</h1>
          <p className="mb-8 text-[#707070]">You haven&apos;t placed any orders yet.</p>
          <Link
            href="/category/all-products"
            className="inline-flex rounded-full bg-[#4069a5] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#355a8a]"
          >
            Shop Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[900px] px-4">
        <h1 className="mb-8 text-3xl font-bold text-black">Order History</h1>
        <div className="space-y-6">
          {orders.map((order) => (
            <article
              key={order.id}
              className="rounded-lg border border-[#e8e6e6] bg-[#f9f9f9] p-6"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-black">Order {order.id}</p>
                  <p className="text-sm text-[#707070]">
                    {new Date(order.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <p className="text-lg font-bold text-[#4069a5]">
                  {formatPrice(order.total)}
                </p>
              </div>
              <ul className="mb-4 space-y-1 text-sm text-[#555]">
                {order.items.map((item) => (
                  <li key={item.key}>
                    {item.name} × {item.quantity}
                    {item.size ? ` (${item.size})` : ""} —{" "}
                    {formatPrice(item.price * item.quantity)}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#707070]">
                Shipped to {order.shipping.facility}, {order.shipping.city},{" "}
                {order.shipping.state}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/category/all-products"
            className="text-sm font-semibold text-[#4069a5] hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}

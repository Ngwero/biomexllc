"use client";

import RevealSection from "@/components/RevealSection";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import type { ShippingInfo } from "@/lib/cart";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, shipping, total, placeOrder } = useCart();
  const [loading, setLoading] = useState(false);

  if (items.length === 0) {
    return (
      <RevealSection className="bg-white py-16 text-center">
        <div className="mx-auto max-w-lg px-4">
          <h1 className="mb-4 text-3xl font-bold">Checkout</h1>
          <p className="mb-6 text-[#707070]">Your cart is empty.</p>
          <Link
            href="/category/all-products"
            className="inline-flex rounded-full bg-[#4069a5] px-8 py-3 text-sm font-semibold text-white"
          >
            Shop Products
          </Link>
        </div>
      </RevealSection>
    );
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const form = new FormData(event.currentTarget);
    const shippingInfo: ShippingInfo = {
      firstName: String(form.get("firstName") || ""),
      lastName: String(form.get("lastName") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      facility: String(form.get("facility") || ""),
      address: String(form.get("address") || ""),
      city: String(form.get("city") || ""),
      state: String(form.get("state") || ""),
      zip: String(form.get("zip") || ""),
      notes: String(form.get("notes") || ""),
    };
    const order = placeOrder(shippingInfo);
    router.push(`/checkout/confirmation?orderId=${order.id}`);
  };

  return (
    <RevealSection className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[1100px] px-4">
        <h1 className="mb-8 text-3xl font-bold text-black">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <fieldset className="space-y-4 rounded-lg border border-[#e8e6e6] p-6">
              <legend className="px-2 text-lg font-bold">Contact Information</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="firstName" placeholder="First name" className="rounded border border-[#e8e6e6] px-4 py-2" />
                <input required name="lastName" placeholder="Last name" className="rounded border border-[#e8e6e6] px-4 py-2" />
              </div>
              <input required type="email" name="email" placeholder="Email" className="w-full rounded border border-[#e8e6e6] px-4 py-2" />
              <input required type="tel" name="phone" placeholder="Phone" className="w-full rounded border border-[#e8e6e6] px-4 py-2" />
            </fieldset>

            <fieldset className="space-y-4 rounded-lg border border-[#e8e6e6] p-6">
              <legend className="px-2 text-lg font-bold">Shipping Details</legend>
              <input required name="facility" placeholder="Hospital / Facility name" className="w-full rounded border border-[#e8e6e6] px-4 py-2" />
              <input required name="address" placeholder="Street address" className="w-full rounded border border-[#e8e6e6] px-4 py-2" />
              <div className="grid gap-4 sm:grid-cols-3">
                <input required name="city" placeholder="City" className="rounded border border-[#e8e6e6] px-4 py-2" />
                <input required name="state" placeholder="State" className="rounded border border-[#e8e6e6] px-4 py-2" />
                <input required name="zip" placeholder="ZIP" className="rounded border border-[#e8e6e6] px-4 py-2" />
              </div>
              <textarea name="notes" rows={3} placeholder="Order notes (optional)" className="w-full rounded border border-[#e8e6e6] px-4 py-2" />
            </fieldset>

            <fieldset className="space-y-4 rounded-lg border border-[#e8e6e6] p-6">
              <legend className="px-2 text-lg font-bold">Payment</legend>
              <p className="text-sm text-[#707070]">
                This demo checkout captures your order details. A Sierra Biomed
                representative will contact you to finalize payment and delivery.
              </p>
              <input disabled value="Invoice / Purchase Order" className="w-full rounded border border-[#e8e6e6] bg-[#f5f5f5] px-4 py-2 text-[#707070]" />
            </fieldset>
          </div>

          <aside className="h-fit rounded-lg border border-[#e8e6e6] bg-[#f9f9f9] p-6">
            <h2 className="mb-4 text-lg font-bold">Order Summary</h2>
            <div className="mb-4 max-h-48 space-y-2 overflow-y-auto text-sm">
              {items.map((item) => (
                <div key={item.key} className="flex justify-between gap-3">
                  <span className="text-[#555]">
                    {item.name} × {item.quantity}
                  </span>
                  <span>{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 border-t border-[#e8e6e6] pt-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-base font-bold">
                <span>Total</span>
                <span className="text-[#4069a5]">{formatPrice(total)}</span>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-full bg-[#4069a5] py-3 text-sm font-semibold text-white transition hover:bg-[#355a8a] disabled:opacity-60"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
            <Link href="/cart" className="mt-3 block text-center text-sm text-[#4069a5] hover:underline">
              Back to Cart
            </Link>
          </aside>
        </form>
      </div>
    </RevealSection>
  );
}

"use client";

import RevealSection from "@/components/RevealSection";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function CartPage() {
  const { items, subtotal, shipping, total, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-black">Your Cart</h1>
          <p className="mb-8 text-[#707070]">Your cart is empty.</p>
          <Link
            href="/category/all-products"
            className="inline-flex rounded-full bg-[#4069a5] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#355a8a]"
          >
            Continue Shopping
          </Link>
        </div>
      </RevealSection>
    );
  }

  return (
    <RevealSection className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[1100px] px-4">
        <h1 className="mb-8 text-3xl font-bold text-black">Your Cart</h1>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.key}
                className="grid gap-4 rounded-lg border border-[#e8e6e6] p-4 sm:grid-cols-[100px_1fr_auto]"
              >
                <div className="relative h-24 w-24 overflow-hidden rounded bg-[#f7f7f7]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <Link
                    href={`/category/all-products/${item.slug}`}
                    className="font-semibold text-black hover:text-[#4069a5]"
                  >
                    {item.name}
                  </Link>
                  {item.size && (
                    <p className="mt-1 text-xs text-[#707070]">Size: {item.size}</p>
                  )}
                  <p className="mt-2 text-sm font-semibold text-[#4069a5]">
                    {formatPrice(item.price)}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeItem(item.key)}
                    className="mt-2 text-xs text-[#707070] hover:text-[#4069a5]"
                  >
                    Remove
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.key, item.quantity - 1)}
                    className="flex h-8 w-8 items-center justify-center rounded border border-[#e8e6e6] hover:bg-[#f5f5f5]"
                  >
                    −
                  </button>
                  <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.key, item.quantity + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded border border-[#e8e6e6] hover:bg-[#f5f5f5]"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-lg border border-[#e8e6e6] bg-[#f9f9f9] p-6">
            <h2 className="mb-4 text-lg font-bold">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#707070]">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#707070]">Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              <div className="border-t border-[#e8e6e6] pt-2">
                <div className="flex justify-between text-base font-bold">
                  <span>Total</span>
                  <span className="text-[#4069a5]">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
            {subtotal < 500 && (
              <p className="mt-4 text-xs text-[#707070]">
                Add {formatPrice(500 - subtotal)} more for free shipping.
              </p>
            )}
            <Link
              href="/checkout"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-[#4069a5] py-3 text-sm font-semibold text-white transition hover:bg-[#355a8a]"
            >
              Proceed to Checkout
            </Link>
            <Link
              href="/category/all-products"
              className="mt-3 block text-center text-sm text-[#4069a5] hover:underline"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </RevealSection>
  );
}

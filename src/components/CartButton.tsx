"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function CartButton() {
  const { items, itemCount, subtotal, total, removeItem } = useCart();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={panelRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-[#333] transition hover:border-[#4069a5] hover:text-[#4069a5]"
        aria-label={`Cart with ${itemCount} items`}
        aria-expanded={open}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.4 5M7 13l-1.5 6h12M10 19a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z"
          />
        </svg>
        {itemCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#4069a5] px-1 text-[10px] font-bold text-white">
            {itemCount > 99 ? "99+" : itemCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 w-[min(100vw-2rem,360px)] pt-2">
          <div className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
          <div className="border-b border-[#e8e6e6] px-4 py-3">
            <p className="text-sm font-bold text-black">
              Your Cart {itemCount > 0 && `(${itemCount})`}
            </p>
          </div>

          {items.length === 0 ? (
            <div className="px-4 py-8 text-center">
              <p className="mb-4 text-sm text-[#707070]">Your cart is empty.</p>
              <Link
                href="/category/all-products"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-[#4069a5] hover:underline"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <>
              <ul className="max-h-64 space-y-3 overflow-y-auto px-4 py-3">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded bg-[#f7f7f7]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/category/all-products/${item.slug}`}
                        onClick={() => setOpen(false)}
                        className="line-clamp-2 text-xs font-medium text-black hover:text-[#4069a5]"
                      >
                        {item.name}
                      </Link>
                      {item.size && (
                        <p className="text-[10px] text-[#707070]">{item.size}</p>
                      )}
                      <p className="text-xs font-semibold text-[#4069a5]">
                        {formatPrice(item.price)} × {item.quantity}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-xs text-[#999] hover:text-[#4069a5]"
                      aria-label={`Remove ${item.name}`}
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#e8e6e6] bg-[#f9f9f9] px-4 py-3">
                <div className="mb-3 flex justify-between text-sm">
                  <span className="text-[#707070]">Subtotal</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/checkout"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-[#4069a5] py-2.5 text-center text-xs font-semibold text-white transition hover:bg-[#355a8a]"
                  >
                    Checkout · {formatPrice(total)}
                  </Link>
                  <Link
                    href="/cart"
                    onClick={() => setOpen(false)}
                    className="py-1 text-center text-xs font-medium text-[#4069a5] hover:underline"
                  >
                    View Full Cart
                  </Link>
                </div>
              </div>
            </>
          )}
          </div>
        </div>
      )}
    </div>
  );
}

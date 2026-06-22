"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartToast() {
  const { lastAddedKey, items, clearLastAdded } = useCart();
  const [visible, setVisible] = useState(false);

  const addedItem = lastAddedKey
    ? items.find((item) => item.key === lastAddedKey)
    : undefined;

  useEffect(() => {
    if (!lastAddedKey) return;

    setVisible(true);
    const timer = window.setTimeout(() => {
      setVisible(false);
      clearLastAdded();
    }, 3500);

    return () => window.clearTimeout(timer);
  }, [lastAddedKey, clearLastAdded]);

  if (!visible || !addedItem) return null;

  return (
    <div
      role="status"
      className="fixed bottom-6 right-6 z-[60] flex max-w-sm items-center gap-4 rounded-xl border border-[#e8e6e6] bg-white px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.15)] animate-[slideUp_0.3s_ease-out]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
        ✓
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-black">Added to cart</p>
        <p className="truncate text-xs text-[#707070]">{addedItem.name}</p>
      </div>
      <Link
        href="/cart"
        className="shrink-0 rounded-full bg-[#4069a5] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#355a8a]"
      >
        View Cart
      </Link>
    </div>
  );
}

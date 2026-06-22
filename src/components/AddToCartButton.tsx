"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

type AddToCartButtonProps = {
  product: Product;
  size?: string;
  className?: string;
  showQuantity?: boolean;
};

export default function AddToCartButton({
  product,
  size,
  className = "",
  showQuantity = false,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (product.sizes.length > 0 && !size) return;
    addItem(product, showQuantity ? quantity : 1, size);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  const requiresSize = product.sizes.length > 0 && !size;

  return (
    <div className={className}>
      {showQuantity && (
        <div className="mb-4 flex items-center gap-3">
          <label htmlFor={`qty-${product.id}`} className="text-sm font-medium">
            Quantity
          </label>
          <div className="flex items-center rounded border border-[#e8e6e6]">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-2 text-lg hover:bg-[#f5f5f5]"
            >
              −
            </button>
            <span className="min-w-8 text-center text-sm">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-2 text-lg hover:bg-[#f5f5f5]"
            >
              +
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={handleAdd}
        disabled={requiresSize}
        className={`w-full rounded-sm border py-2.5 text-sm font-medium transition ${
          added
            ? "border-green-600 bg-green-600 text-white"
            : requiresSize
              ? "cursor-not-allowed border-[#ccc] text-[#999]"
              : "border-[#4069a5] bg-white text-[#4069a5] hover:bg-[#4069a5] hover:text-white"
        }`}
      >
        {added ? "Added to Cart ✓" : requiresSize ? "Select a Size" : "Add to Cart"}
      </button>
    </div>
  );
}

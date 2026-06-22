"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AddToCartButton from "@/components/AddToCartButton";
import ScrollReveal from "@/components/ScrollReveal";
import { formatPrice, type Product } from "@/data/products";

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>();

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[1200px] px-4">
        <nav className="mb-8 text-sm text-[#707070]">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#4069a5]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/category/all-products" className="hover:text-[#4069a5]">
                All Products
              </Link>
            </li>
            <li>/</li>
            <li className="font-medium text-black">{product.name}</li>
          </ol>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          <ScrollReveal variant="fade-right" className="relative aspect-square overflow-hidden rounded-lg bg-[#f7f7f7]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-8"
            />
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={100}>
            <h1 className="mb-4 text-3xl font-bold text-black">{product.name}</h1>
            <div className="mb-6 space-y-1">
              <p className="text-sm text-[#707070]">
                Regular Price{" "}
                <span className="line-through">{formatPrice(product.regularPrice)}</span>
              </p>
              <p className="text-2xl font-bold text-[#4069a5]">
                Sale Price {formatPrice(product.salePrice)}
              </p>
            </div>

            {product.sizes.length > 0 && (
              <div className="mb-6">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide">
                  Size
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`rounded border px-3 py-2 text-xs transition ${
                        selectedSize === size
                          ? "border-[#4069a5] bg-[#4069a5] text-white"
                          : "border-[#e8e6e6] text-[#555] hover:border-[#4069a5]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <AddToCartButton
              product={product}
              size={selectedSize}
              showQuantity
              className="mb-8 max-w-sm"
            />

            <div className="rounded-lg border border-[#e8e6e6] bg-[#f9f9f9] p-5 text-sm text-[#555]">
              <p className="mb-2 font-semibold text-black">Ordering Information</p>
              <ul className="space-y-1">
                <li>• Free shipping on orders over $500</li>
                <li>• Standard shipping: $25</li>
                <li>• For bulk or facility orders, contact our team</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

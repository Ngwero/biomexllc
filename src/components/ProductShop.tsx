"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import AddToCartButton from "@/components/AddToCartButton";
import ScrollReveal from "@/components/ScrollReveal";
import {
  browseCategories,
  formatPrice,
  priceRange,
  products,
  sizeFilters,
  type Product,
} from "@/data/products";

const PAGE_SIZE = 24;

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <ScrollReveal
      as="article"
      variant="fade-up"
      delay={(index % 12) * 50}
      className="group flex flex-col overflow-hidden rounded-sm bg-white"
    >
      <Link
        href={`/category/all-products/${product.slug}`}
        className="relative mb-4 aspect-square overflow-hidden bg-[#f7f7f7]"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col px-1">
        <Link
          href={`/category/all-products/${product.slug}`}
          className="mb-3 min-h-[44px] text-sm font-medium leading-snug text-black hover:text-[#4069a5]"
        >
          {product.name}
        </Link>
        <div className="mb-4 space-y-1">
          <p className="text-sm text-[#707070]">
            <span className="text-[#999]">Regular Price</span>{" "}
            <span className="line-through">{formatPrice(product.regularPrice)}</span>
          </p>
          <p className="text-sm font-semibold text-[#4069a5]">
            <span className="font-normal text-[#707070]">Sale Price</span>{" "}
            {formatPrice(product.salePrice)}
          </p>
        </div>
        <AddToCartButton product={product} className="mt-auto" />
      </div>
    </ScrollReveal>
  );
}

export default function ProductShop() {
  const [selectedCategory, setSelectedCategory] = useState("all-products");
  const [maxPrice, setMaxPrice] = useState(priceRange.max);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("recommended");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== "all-products") {
      list = list.filter((p) => p.categories.includes(selectedCategory));
    }

    list = list.filter((p) => p.salePrice <= maxPrice);

    if (selectedSizes.length > 0) {
      list = list.filter((p) =>
        p.sizes.some((size) => selectedSizes.includes(size))
      );
    }

    switch (sortBy) {
      case "price-low":
        list.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case "price-high":
        list.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return list;
  }, [selectedCategory, maxPrice, selectedSizes, sortBy]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const toggleSize = (size: string) => {
    setSelectedSizes((current) =>
      current.includes(size)
        ? current.filter((item) => item !== size)
        : [...current, size]
    );
    setVisible(PAGE_SIZE);
  };

  return (
    <div>
      <nav className="mb-6 text-sm text-[#707070]">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-[#4069a5]">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-black">All Products</li>
        </ol>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="space-y-8">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-black">Browse by</h2>
            <ul className="space-y-2">
              {browseCategories.map((category) => (
                <li key={category.slug}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory(category.slug);
                      setVisible(PAGE_SIZE);
                    }}
                    className={`text-left text-sm transition ${
                      selectedCategory === category.slug
                        ? "font-semibold text-[#4069a5]"
                        : "text-[#555] hover:text-[#4069a5]"
                    }`}
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-black">Filter by</h2>

            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-black">Price</h3>
              <p className="mb-2 text-xs text-[#707070]">
                ${priceRange.min} – ${maxPrice.toLocaleString()}
              </p>
              <input
                type="range"
                min={priceRange.min}
                max={priceRange.max}
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  setVisible(PAGE_SIZE);
                }}
                className="w-full accent-[#4069a5]"
              />
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-black">Size</h3>
              <div className="max-h-64 space-y-2 overflow-y-auto pr-2">
                {sizeFilters.map((size) => (
                  <label
                    key={size}
                    className="flex cursor-pointer items-start gap-2 text-xs text-[#555]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={() => toggleSize(size)}
                      className="mt-0.5 accent-[#4069a5]"
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-8 flex flex-col gap-4 border-b border-[#e8e6e6] pb-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#707070]">
              {filtered.length} products
            </p>
            <label className="flex items-center gap-2 text-sm text-[#707070]">
              Sort by:
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded border border-[#e8e6e6] px-3 py-1.5 text-sm text-black"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </label>
          </div>

          {shown.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {shown.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-[#f9f9f9] px-6 py-16 text-center text-[#707070]">
              No products match your filters.
            </div>
          )}

          {hasMore && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="rounded-sm border border-black px-10 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

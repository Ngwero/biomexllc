"use client";

import CartToast from "@/components/CartToast";
import { CartProvider } from "@/context/CartContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartToast />
    </CartProvider>
  );
}

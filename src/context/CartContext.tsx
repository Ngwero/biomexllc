"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  calculateShipping,
  calculateSubtotal,
  getCartItemKey,
  type CartItem,
  type Order,
  type ShippingInfo,
} from "@/lib/cart";
import type { Product } from "@/data/products";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
  lastAddedKey: string | null;
  addItem: (product: Product, quantity?: number, size?: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  removeItem: (key: string) => void;
  clearCart: () => void;
  clearLastAdded: () => void;
  placeOrder: (shipping: ShippingInfo) => Order;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "sierra-biomed-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [lastAddedKey, setLastAddedKey] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored) as CartItem[]);
      }
    } catch {
      setItems([]);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = (product: Product, quantity = 1, size?: string) => {
    const key = getCartItemKey(product.id, size);
    setItems((current) => {
      const existing = current.find((item) => item.key === key);
      if (existing) {
        return current.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...current,
        {
          key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          image: product.image,
          price: product.salePrice,
          regularPrice: product.regularPrice,
          quantity,
          size,
        },
      ];
    });
    setLastAddedKey(key);
  };

  const updateQuantity = (key: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.key !== key));
      return;
    }
    setItems((current) =>
      current.map((item) => (item.key === key ? { ...item, quantity } : item))
    );
  };

  const removeItem = (key: string) => {
    setItems((current) => current.filter((item) => item.key !== key));
  };

  const clearCart = () => setItems([]);

  const clearLastAdded = () => setLastAddedKey(null);

  const placeOrder = (shipping: ShippingInfo): Order => {
    const subtotal = calculateSubtotal(items);
    const shippingCost = calculateShipping(subtotal);
    const order: Order = {
      id: `SB-${Date.now().toString().slice(-8)}`,
      createdAt: new Date().toISOString(),
      items,
      shipping,
      subtotal,
      shippingCost,
      total: subtotal + shippingCost,
    };
    try {
      const stored = localStorage.getItem("sierra-biomed-orders");
      const orders = stored ? (JSON.parse(stored) as Order[]) : [];
      localStorage.setItem(
        "sierra-biomed-orders",
        JSON.stringify([order, ...orders])
      );
      localStorage.setItem("sierra-biomed-last-order", JSON.stringify(order));
    } catch {
      // ignore storage errors
    }
    clearCart();
    return order;
  };

  const subtotal = useMemo(() => calculateSubtotal(items), [items]);
  const shipping = useMemo(() => calculateShipping(subtotal), [subtotal]);
  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const value: CartContextValue = {
    items,
    itemCount,
    subtotal,
    shipping,
    total: subtotal + shipping,
    lastAddedKey,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    clearLastAdded,
    placeOrder,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

export type CartItem = {
  key: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  regularPrice: number;
  quantity: number;
  size?: string;
};

export type ShippingInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  facility: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  notes?: string;
};

export type Order = {
  id: string;
  createdAt: string;
  items: CartItem[];
  shipping: ShippingInfo;
  subtotal: number;
  shippingCost: number;
  total: number;
};

export function getCartItemKey(productId: string, size?: string) {
  return size ? `${productId}:${size}` : productId;
}

export function calculateSubtotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function calculateShipping(subtotal: number) {
  if (subtotal === 0) return 0;
  return subtotal >= 500 ? 0 : 25;
}

export function generateOrderId() {
  return `SB-${Date.now().toString().slice(-8)}`;
}

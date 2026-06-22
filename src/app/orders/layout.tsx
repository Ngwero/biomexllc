import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order History | Sierra Biomed",
  description: "View your past consumables orders from Sierra Biomed.",
};

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

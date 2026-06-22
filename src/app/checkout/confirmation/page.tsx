import RevealSection from "@/components/RevealSection";
import { Suspense } from "react";
import OrderConfirmation from "@/components/OrderConfirmation";

export default function OrderConfirmationPage() {
  return (
    <Suspense
      fallback={
        <RevealSection className="bg-white py-16 text-center">
          <p className="text-[#707070]">Loading order details...</p>
        </RevealSection>
      }
    >
      <OrderConfirmation />
    </Suspense>
  );
}

import RevealSection from "@/components/RevealSection";
import ProductShop from "@/components/ProductShop";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "All Products | Sierra Biomed",
  description: "Browse Sierra Biomed consumables and sterile processing supplies.",
};

export default function ConsumablesPage() {
  return (
    <RevealSection className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[1200px] px-4">
        <ScrollReveal variant="fade-up">
          <h1 className="mb-10 text-4xl font-bold text-black">All Products</h1>
        </ScrollReveal>
        <ProductShop />
      </div>
    </RevealSection>
  );
}

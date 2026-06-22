import ScrollReveal from "@/components/ScrollReveal";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  dark?: boolean;
};

export default function PageHero({ title, subtitle, dark = false }: PageHeroProps) {
  return (
    <section
      className={`border-b px-4 py-16 text-center ${
        dark ? "bg-[#033250] text-white" : "bg-[#e8e6e6]"
      }`}
    >
      <ScrollReveal className="mx-auto max-w-[980px]" variant="fade-up">
        <h1 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <ScrollReveal
            as="p"
            variant="fade-up"
            delay={120}
            className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${
              dark ? "text-white/85" : "text-[#707070]"
            }`}
          >
            {subtitle}
          </ScrollReveal>
        )}
      </ScrollReveal>
    </section>
  );
}

import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import RevealSection from "@/components/RevealSection";
import ScrollReveal from "@/components/ScrollReveal";
import {
  audiences,
  company,
  serviceHighlights,
  services,
  visitPurposes,
} from "@/data/biomex";

export const metadata = {
  title: `Products & Services | ${company.name}`,
  description:
    "Medical equipment installation, biomedical maintenance, preventive programs, emergency support, and healthcare technology management.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Products & Services"
        subtitle="Comprehensive medical equipment services for hospitals, clinics, laboratories, and diagnostic centers."
      />

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-4 text-2xl font-bold uppercase">
            Service &amp; Maintenance
          </h2>
          <p className="mb-6 text-base leading-relaxed text-[#707070]">
            When it comes to biomedical equipment, key factors set Biomex LLC
            apart: technical excellence, fast response times, reliable equipment
            uptime, and transparent communication with every service visit.
          </p>
          <ul className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, i) => (
              <ScrollReveal
                key={item}
                as="li"
                variant="fade-up"
                delay={i * 40}
                className="rounded-lg bg-[#e8e6e6] px-4 py-3 text-xs font-bold uppercase tracking-wide text-[#333]"
              >
                {item}
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </RevealSection>

      <RevealSection className="bg-[#033250] py-16 text-white">
        <div className="mx-auto max-w-[980px] px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase">
            Reliable. Fast. Compliant.
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/90">
            Our team is dedicated to ensuring your equipment functions at peak
            performance, helping maintain the highest standards of patient safety.
            With industry knowledge and a focus on compliance and safety, you
            can trust us to keep your critical systems running smoothly.
          </p>
        </div>
      </RevealSection>

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-[980px] space-y-10 px-4">
          {serviceHighlights.map((service, i) => (
            <ScrollReveal
              key={service.title}
              variant="fade-up"
              delay={i * 80}
              id={
                service.title.includes("Preventive")
                  ? "preventive"
                  : service.title.includes("Emergency")
                    ? "emergency"
                    : undefined
              }
              className="grid gap-6 border-b border-[#e8e6e6] pb-10 last:border-0 md:grid-cols-[80px_1fr]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4069a5] text-2xl font-bold text-white">
                {service.number}
              </div>
              <div>
                <h3 className="mb-3 text-lg font-bold uppercase text-[#4069a5]">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-[#707070]">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="bg-[#e8e6e6] py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-8 text-center text-xl font-bold uppercase">
            Who We Serve
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience, i) => (
              <ScrollReveal
                key={audience}
                variant="scale"
                delay={i * 50}
                className="rounded-lg bg-white p-4 text-center text-sm font-medium text-[#333]"
              >
                {audience}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-6 text-center text-xl font-bold uppercase">
            Why Visit Our Website?
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {visitPurposes.map((purpose) => (
              <span
                key={purpose}
                className="rounded-full border border-[#e8e6e6] bg-[#f9f9f9] px-4 py-2 text-xs font-medium text-[#555]"
              >
                {purpose}
              </span>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-white py-16 text-center">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-4 text-2xl font-bold uppercase">Get in Touch</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-[#707070]">
            Have questions about our services or need assistance? Request a
            quotation, schedule maintenance, or contact our support team today.
          </p>
          <Button href="/contact-us">Contact Us</Button>
        </div>
      </RevealSection>
    </>
  );
}

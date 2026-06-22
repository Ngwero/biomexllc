import Image from "next/image";
import Button from "@/components/Button";
import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";
import { images } from "@/lib/images";
import { company, coreValues } from "@/data/biomex";

export const metadata = {
  title: `About Us | ${company.name}`,
  description: company.background.slice(0, 160),
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Learn about Biomex LLC — your trusted partner for medical equipment installation, maintenance, and lifecycle management."
      />

      <RevealSection id="background" className="bg-white py-16">
        <div className="mx-auto grid max-w-[980px] items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-2xl font-bold uppercase text-[#4069a5]">
              Company Background
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-[#707070]">
              {company.background}
            </p>
          </div>
          <Image
            src={images.autoclave}
            alt="Medical equipment service"
            width={451}
            height={560}
            className="mx-auto h-auto max-w-full"
          />
        </div>
      </RevealSection>

      <RevealSection id="vision" className="bg-[#e8e6e6] py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8">
              <h2 className="mb-3 text-xl font-bold uppercase text-[#4069a5]">
                Vision
              </h2>
              <p className="text-base leading-relaxed text-[#707070]">
                {company.vision}
              </p>
            </div>
            <div className="rounded-lg bg-white p-8">
              <h2 className="mb-3 text-xl font-bold uppercase text-[#4069a5]">
                Mission
              </h2>
              <p className="text-base leading-relaxed text-[#707070]">
                {company.mission}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-white p-8">
            <h2 className="mb-4 text-xl font-bold uppercase text-[#4069a5]">
              Goals &amp; Objectives
            </h2>
            <ul className="space-y-3">
              {company.goals.map((goal) => (
                <li
                  key={goal}
                  className="flex gap-3 text-sm leading-relaxed text-[#555]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4069a5]" />
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-8 text-center text-xl font-bold uppercase">
            Brand Values
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {company.brandValues.map((value) => (
              <span
                key={value}
                className="rounded-full bg-[#033250] px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-[#e8e6e6] py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-8 text-center text-xl font-bold uppercase">
            Our Core Values
          </h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {coreValues.map((value) => (
              <li
                key={value}
                className="rounded-lg bg-white p-5 text-sm font-medium text-[#333]"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </RevealSection>

      <RevealSection id="team" className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-4 text-center text-2xl font-bold uppercase">
            Management Team
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-base text-[#707070]">
            Our team of qualified biomedical engineers and technical specialists
            provides comprehensive support across installation, maintenance,
            emergency repairs, and healthcare technology management.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Leadership",
                role: "Executive Management",
                initial: "B",
              },
              {
                name: "Engineering",
                role: "Biomedical Engineers",
                initial: "E",
              },
              {
                name: "Operations",
                role: "Technical Specialists",
                initial: "O",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="rounded-lg border border-[#e8e6e6] bg-[#f9f9f9] p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#033250] text-2xl font-bold text-white">
                  {member.initial}
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#4069a5]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-[#033250] py-16 text-white">
        <div className="mx-auto max-w-[980px] px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-white/85">
            Contact Biomex LLC to discuss installation, maintenance contracts,
            emergency support, or technical consultation for your healthcare
            facility.
          </p>
          <Button href="/contact-us" variant="outline">
            Contact Us
          </Button>
        </div>
      </RevealSection>
    </>
  );
}

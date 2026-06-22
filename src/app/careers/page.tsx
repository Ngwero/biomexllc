import Button from "@/components/Button";
import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";
import { careers, company } from "@/data/biomex";

export const metadata = {
  title: `Careers | ${company.name}`,
  description:
    "Open positions and career opportunities at Biomex LLC — biomedical equipment technicians and field service engineers.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        subtitle={careers.intro}
      />

      <RevealSection id="positions" className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-4 text-center text-2xl font-bold uppercase">
            Open Positions
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-base text-[#707070]">
            Join a team committed to technical excellence, healthcare-focused
            service, and customer-first support for medical equipment across
            hospitals, clinics, and laboratories.
          </p>

          <div className="space-y-6">
            {careers.positions.map((position) => (
              <div
                key={position.title}
                className="rounded-lg border border-[#e8e6e6] bg-[#f9f9f9] p-8"
              >
                <h3 className="mb-2 text-xl font-bold text-black">
                  {position.title}
                </h3>
                <p className="mb-4 text-sm font-medium text-[#4069a5]">
                  {position.location}
                </p>
                <p className="mb-6 text-base leading-relaxed text-[#707070]">
                  {position.description}
                </p>
                <Button href="/contact-us">Apply Now</Button>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-[#033250] py-16 text-white">
        <div className="mx-auto max-w-[980px] px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase">Vacancies</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-white/85">
            Don&apos;t see a role that fits? Send your CV and cover letter to our
            team. We&apos;re always looking for qualified biomedical engineers
            and technical specialists.
          </p>
          <Button href="/contact-us" variant="outline">
            Submit Your CV
          </Button>
        </div>
      </RevealSection>
    </>
  );
}

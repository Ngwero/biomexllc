import Button from "@/components/Button";
import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";

const plans = [
  {
    title: "Comprehensive Coverage",
    description:
      "Complete service packages spanning multiple unit types and manufacturers. Consolidate your contracts to one single-source vendor instead of utilizing multiple OEM or third-party vendors.",
    features: [
      "Preventative maintenance scheduling",
      "Emergency repair coverage",
      "Parts inventory access",
      "Detailed reporting & records",
    ],
  },
  {
    title: "Emergency Response",
    description:
      "Guaranteed response to online emergency service requests within 10 minutes along with a 24 hour boots-on-the-ground response time, guaranteed.",
    features: [
      "10-minute online response guarantee",
      "24-hour on-site response",
      "93% first-time fix rate",
      "Major manufacturer PM kits in stock",
    ],
  },
  {
    title: "Multi-State Coverage",
    description:
      "Sierra Biomed serves hospitals and surgery centers across Maryland, Pennsylvania, Delaware, Virginia, Washington DC, and surrounding regions.",
    features: [
      "7 states served",
      "270,000+ service miles annually",
      "485+ happy customers",
      "40+ years experience",
    ],
  },
];

export const metadata = {
  title: "Service Coverage Plans | Sierra Biomed",
  description:
    "Explore Sierra Biomed service coverage plans for sterile processing equipment across hospitals and surgery centers.",
};

export default function ServiceCoveragesPage() {
  return (
    <>
      <PageHero
        title="Service Coverage Plans"
        subtitle="Save time and money by consolidating your contracts to one single-source vendor for all SPD equipment service needs."
      />

      <RevealSection className="bg-white py-16">
        <div className="mx-auto grid max-w-[980px] gap-8 px-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="flex flex-col rounded-lg border border-[#e8e6e6] bg-[#f9f9f9] p-6"
            >
              <h3 className="mb-3 text-lg font-bold uppercase text-[#4069a5]">
                {plan.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-[#707070]">
                {plan.description}
              </p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[#333]"
                  >
                    <span className="mt-1 text-[#4069a5]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href="/contact-us" className="w-full justify-center">
                Lets Connect
              </Button>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="bg-[#033250] py-16 text-center text-white">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-4 text-2xl font-bold uppercase">
            Single Source Service Group
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/90">
            We offer complete and comprehensive service packages spanning multiple
            unit types along with multiple manufacturers. All major
            manufacturer&apos;s autoclave PM kits are held in stock along with a
            large inventory of repair parts.
          </p>
          <Button href="/contact-us" variant="outline">
            Request a Quote
          </Button>
        </div>
      </RevealSection>
    </>
  );
}

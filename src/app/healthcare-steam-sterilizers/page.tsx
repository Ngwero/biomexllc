import Button from "@/components/Button";
import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";

const models = [
  {
    model: "26BV-HC",
    dimensions: '26" x 26" x 49" (66 x 66 x 124.5 cm)',
    volume: "19.2 cu. ft (544 liters)",
  },
  {
    model: "26AV-HC",
    dimensions: '26" x 26" x 39" (66 x 66 x 99 cm)',
    volume: "15.25 cu. ft (430 liters)",
  },
  {
    model: "3AV-HC",
    dimensions: '20" x 20" x 38" (50.8 x 50.8 x 96.5 cm)',
    volume: "8.8 cu. ft (249 liters)",
  },
];

const features = [
  {
    title: "X1 Controls",
    description:
      "All of our sterilizers come equipped with this state-of-the-art and easy-to-use control system with password protection and 50 programmable cycles.",
  },
  {
    title: "Non-Proprietary Parts",
    description:
      "Consolidated's sterilizers consist of high quality, non-proprietary parts that can be easily obtained from local suppliers, authorized service groups, e-store, or directly through Consolidated.",
  },
  {
    title: "Sustainability",
    description:
      "Save water and energy in your medical facility with built-in eco-friendly — and utility-saving — features.",
  },
  {
    title: "Low Cost of Ownership",
    description:
      "From affordable service to lower utility costs, Consolidated sterilizers offer the lowest cost of ownership in the industry.",
  },
  {
    title: "EZ-Glide Sliding Door",
    description:
      "Simplifies chamber access with a sliding counterbalanced door that seals safely against an air actuated non-stick gasket. Available in both manual and one-touch, automatic power door configurations.",
  },
];

export const metadata = {
  title: "SPD Equipment | Sierra Biomed",
  description:
    "CSS Healthcare Steam Sterilizers — vertical sliding single door sterilizers for ambulatory surgery centers and hospitals.",
};

export default function EquipmentPage() {
  return (
    <>
      <PageHero
        title="CSS Healthcare Steam Sterilizers"
        subtitle="Vertical Sliding Single Door Sterilizers for Ambulatory Surgery Centers & Hospitals"
      />

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <p className="mb-8 text-base leading-relaxed text-[#707070]">
            The Consolidated healthcare steam sterilizer is an FDA-cleared medical
            device that is available in 3 sizes. Each model comes equipped with
            the EZ-Glide™ Power Sliding Door – a sleek vertical door designed for
            ergonomic hands-free foot pedal operation and unmatched serviceability.
            This medical sterilizer&apos;s control system provides an intuitive and
            modern interface for sterilization, service, and record keeping. All
            models offer high performance steam sterilization capacity in a minimal
            footprint.
          </p>
          <div className="text-center">
            <Button href="/contact-us">Request Quote</Button>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-[#e8e6e6] py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-4 text-center text-2xl font-bold uppercase">
            A Powerful Partnership in Sterile Processing
          </h2>
          <p className="mx-auto mb-4 max-w-3xl text-center text-base leading-relaxed text-[#707070]">
            Sierra Biomed is proud to announce our official partnership with
            Consolidated Sterilizer Systems (CSS) as their authorized service and
            sales provider for Healthcare Steam Sterilizers across Maryland,
            Pennsylvania, Delaware, Virginia, and Washington, DC.
          </p>
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-[#707070]">
            This strategic move brings together two trusted names in sterile
            processing—CSS, known for manufacturing high-performance,
            American-made autoclaves, and Sierra Biomed, recognized for responsive,
            reliable, and quality service in the healthcare industry.
          </p>
        </div>
      </RevealSection>

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase">
            Product Details
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#033250] text-left text-white">
                  <th className="p-3 font-semibold">Model</th>
                  <th className="p-3 font-semibold">Chamber Dimensions</th>
                  <th className="p-3 font-semibold">Volume</th>
                </tr>
              </thead>
              <tbody>
                {models.map((row, i) => (
                  <tr
                    key={row.model}
                    className={i % 2 === 0 ? "bg-[#f9f9f9]" : "bg-white"}
                  >
                    <td className="border border-[#e8e6e6] p-3 font-bold text-[#4069a5]">
                      {row.model}
                    </td>
                    <td className="border border-[#e8e6e6] p-3 text-[#555]">
                      {row.dimensions}
                    </td>
                    <td className="border border-[#e8e6e6] p-3 text-[#555]">
                      {row.volume}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.sierrabiomed.com/_files/ugd/7bde6d_8a29af5dde0a43ff8518e6fdc98f26b4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#4069a5] px-6 py-2 text-sm font-semibold text-[#4069a5] transition hover:bg-[#4069a5] hover:text-white"
            >
              Download Spec Sheet
            </a>
            <a
              href="https://www.sierrabiomed.com/_files/ugd/7bde6d_539fef6a245f4569a28ff2be8b5d26dd.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#4069a5] px-6 py-2 text-sm font-semibold text-[#4069a5] transition hover:bg-[#4069a5] hover:text-white"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-[#033250] py-16 text-white">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase">
            Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <h3 className="mb-2 font-bold uppercase text-[#4069a5]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/85">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-4 text-center text-2xl font-bold uppercase">
            X1™ Controller
          </h2>
          <ul className="mx-auto mb-8 max-w-2xl space-y-2 text-sm text-[#707070]">
            <li>• Intuitive user interface with modern, easy to view 7″ touchscreen display</li>
            <li>• Ability to add &ldquo;favorite cycles&rdquo; shortcuts for quick access</li>
            <li>• Ability for managers to prevent users from modifying sterilization parameters</li>
            <li>• Built from industry-standard, open-source components</li>
          </ul>
          <blockquote className="mx-auto max-w-2xl rounded-lg border border-[#e8e6e6] bg-[#f9f9f9] p-6 italic text-[#555]">
            &ldquo;Consolidated sterilizers are simple and reliable for the end users to
            use as well as easy to work on from service perspective. They use
            nonproprietary parts which keeps the customers total cost of ownership
            low.&rdquo;
            <footer className="mt-3 text-sm font-semibold not-italic text-[#4069a5]">
              — Independent Sterilizer Service Provider
            </footer>
          </blockquote>
        </div>
      </RevealSection>

      <RevealSection className="bg-[#e8e6e6] py-16 text-center">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-4 text-2xl font-bold uppercase">
            Total Cost of Ownership
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-[#707070]">
            We pride ourselves on providing medical autoclaves with the lowest
            cost of ownership in the industry.
          </p>
          <Button href="/contact-us">Learn More About CSS</Button>
        </div>
      </RevealSection>
    </>
  );
}

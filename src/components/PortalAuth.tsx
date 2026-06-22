import Link from "next/link";

const portalFeatures = [
  "View equipment maintenance records",
  "Access job sheets and service reports",
  "Request service on specific assets",
  "Track repair history",
];

export default function PortalAuth() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-2xl px-4">
        <div className="rounded-lg border border-[#e8e6e6] bg-[#f9f9f9] p-8 shadow-sm">
          <h2 className="mb-3 text-center text-lg font-bold uppercase">
            Customer Portal
          </h2>
          <p className="mb-8 text-center text-sm leading-relaxed text-[#707070]">
            Online portal access is coming soon. Contact us to request service,
            reports, or help with your equipment records.
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            {portalFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-lg bg-white p-4 text-sm text-[#555] shadow-sm"
              >
                ✓ {feature}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact-us"
              className="rounded-full bg-[#4069a5] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#355a8a]"
            >
              Contact Us
            </Link>
            <Link
              href="/orders"
              className="rounded-full border-2 border-[#4069a5] px-6 py-2.5 text-sm font-semibold text-[#4069a5] transition hover:bg-[#4069a5] hover:text-white"
            >
              Order History
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

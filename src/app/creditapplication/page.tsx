import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Credit Application | Sierra Biomed",
  description: "Apply for credit with Sierra Biomed for equipment and service contracts.",
};

export default function CreditApplicationPage() {
  return (
    <>
      <PageHero
        title="Credit Application"
        subtitle="Complete the form below to apply for credit with Sierra Biomed."
      />

      <RevealSection className="bg-white py-16">
        <form className="mx-auto max-w-2xl space-y-6 px-4">
          <fieldset className="space-y-4">
            <legend className="text-lg font-bold uppercase text-[#4069a5]">
              Business Information
            </legend>
            <div>
              <label htmlFor="businessName" className="mb-1 block text-sm font-medium">
                Business / Facility Name
              </label>
              <input
                id="businessName"
                type="text"
                className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="taxId" className="mb-1 block text-sm font-medium">
                  Tax ID / EIN
                </label>
                <input
                  id="taxId"
                  type="text"
                  className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="yearsInBusiness" className="mb-1 block text-sm font-medium">
                  Years in Business
                </label>
                <input
                  id="yearsInBusiness"
                  type="number"
                  className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="businessAddress" className="mb-1 block text-sm font-medium">
                Business Address
              </label>
              <input
                id="businessAddress"
                type="text"
                className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label htmlFor="city" className="mb-1 block text-sm font-medium">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="state" className="mb-1 block text-sm font-medium">
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="zip" className="mb-1 block text-sm font-medium">
                  ZIP
                </label>
                <input
                  id="zip"
                  type="text"
                  className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-lg font-bold uppercase text-[#4069a5]">
              Contact Information
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contactName" className="mb-1 block text-sm font-medium">
                  Contact Name
                </label>
                <input
                  id="contactName"
                  type="text"
                  className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="title" className="mb-1 block text-sm font-medium">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contactPhone" className="mb-1 block text-sm font-medium">
                  Phone
                </label>
                <input
                  id="contactPhone"
                  type="tel"
                  className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="contactEmail" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-lg font-bold uppercase text-[#4069a5]">
              Credit Request
            </legend>
            <div>
              <label htmlFor="creditAmount" className="mb-1 block text-sm font-medium">
                Requested Credit Amount
              </label>
              <input
                id="creditAmount"
                type="text"
                className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="purpose" className="mb-1 block text-sm font-medium">
                Purpose of Credit
              </label>
              <textarea
                id="purpose"
                rows={3}
                className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
              />
            </div>
          </fieldset>

          <div className="text-center">
            <button
              type="submit"
              className="rounded-full bg-[#4069a5] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#355a8a]"
            >
              Submit Application
            </button>
          </div>
        </form>
      </RevealSection>
    </>
  );
}

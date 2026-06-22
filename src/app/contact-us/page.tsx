import Button from "@/components/Button";
import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";
import { company, contact } from "@/data/biomex";

export const metadata = {
  title: `Contact Us | ${company.name}`,
  description:
    "Contact Biomex LLC for service inquiries, maintenance contracts, emergency support, and technical consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's Connect"
        subtitle="Contact a specialist for your medical equipment service needs."
      />

      <RevealSection className="bg-white py-16">
        <div className="mx-auto grid max-w-[980px] gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold uppercase">Contact Details</h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-[#e8e6e6] p-5">
                <h3 className="mb-1 font-bold text-[#4069a5]">Headquarters</h3>
                <p className="text-sm text-[#555]">{contact.location}</p>
              </div>
              <div className="rounded-lg border border-[#e8e6e6] p-5">
                <h3 className="mb-1 font-bold text-[#4069a5]">Service Email</h3>
                <a
                  href={`mailto:${contact.serviceEmail}`}
                  className="text-sm text-[#555] hover:text-[#4069a5]"
                >
                  {contact.serviceEmail}
                </a>
              </div>
              <div className="rounded-lg border border-[#e8e6e6] p-5">
                <h3 className="mb-1 font-bold text-[#4069a5]">General Contact</h3>
                <a
                  href={`mailto:${contact.generalEmail}`}
                  className="text-sm text-[#555] hover:text-[#4069a5]"
                >
                  {contact.generalEmail}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-xl font-bold uppercase">Reach Us</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-[#e8e6e6] p-5">
                <h3 className="mb-1 text-sm font-bold uppercase text-[#707070]">
                  Phone
                </h3>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-lg font-semibold text-[#4069a5] hover:underline"
                >
                  {contact.phoneFormatted}
                </a>
              </div>
              <div className="rounded-lg border border-[#e8e6e6] p-5">
                <h3 className="mb-1 text-sm font-bold uppercase text-[#707070]">
                  Service Inquiries
                </h3>
                <p className="text-sm text-[#555]">
                  Request quotations, schedule maintenance, or request emergency
                  technical support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-[#e8e6e6] py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-6 text-center text-xl font-bold uppercase">
            Location Map
          </h2>
          <div className="flex aspect-[16/9] items-center justify-center rounded-lg bg-[#033250] text-white">
            <p className="text-center text-sm text-white/80">
              HQ map — contact us for branch locations
              <br />
              <span className="text-xs text-white/60">
                {contact.location}
              </span>
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-2 text-center text-2xl font-bold uppercase">
            Send Us a Message
          </h2>
          <p className="mb-8 text-center text-sm text-[#707070]">
            Request a quotation, schedule maintenance, or contact our support
            team.
          </p>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-1 block text-sm font-medium">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1 block text-sm font-medium">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1 block text-sm font-medium">
                Inquiry Type
              </label>
              <select
                id="subject"
                className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
              >
                <option>Request Quotation</option>
                <option>Schedule Maintenance</option>
                <option>Emergency Support</option>
                <option>Technical Consultation</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded border border-[#e8e6e6] px-4 py-2 focus:border-[#4069a5] focus:outline-none"
              />
            </div>
            <div className="text-center">
              <Button href="/contact-us">Send Message</Button>
            </div>
          </form>
        </div>
      </RevealSection>
    </>
  );
}

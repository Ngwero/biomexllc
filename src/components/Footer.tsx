import Link from "next/link";
import Logo from "@/components/Logo";
import ScrollReveal from "@/components/ScrollReveal";
import { company, contact, coreValues } from "@/data/biomex";

const websiteLinks = [
  { label: "About Us", href: "/company" },
  { label: "Products & Services", href: "/services" },
  { label: "Consumables Shop", href: "/category/all-products" },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Blog", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Order History", href: "/orders" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#033250] text-white">
      <div className="mx-auto grid max-w-[980px] gap-10 px-4 py-12 md:grid-cols-3">
        <ScrollReveal variant="fade-up" delay={0}>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Website
            </h4>
            <ul className="space-y-2">
              {websiteLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={100}>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Core Values
            </h4>
            <ul className="space-y-2">
              {coreValues.map((value) => (
                <li key={value} className="text-sm text-white/80">
                  -{value}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200}>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Get In Touch
            </h4>
            <Link
              href="/contact-us"
              className="mb-4 inline-block text-sm font-semibold text-white hover:underline"
            >
              Contact Us
            </Link>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href={`tel:${contact.phone}`} className="hover:text-white">
                  {contact.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.serviceEmail}`}
                  className="hover:text-white"
                >
                  {contact.serviceEmail}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.generalEmail}`}
                  className="hover:text-white"
                >
                  {contact.generalEmail}
                </a>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>

      <div className="border-t border-white/20">
        <ScrollReveal
          variant="fade-up"
          delay={120}
          className="mx-auto flex max-w-[980px] flex-col items-center gap-4 px-4 py-6 text-center"
        >
          <Logo light />
          <p className="text-xs text-white/60">
            This site is governed solely by applicable U.S. laws and governmental
            regulations. Please see our{" "}
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="text-xs text-white/80">
            {company.name} | {contact.location}
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}

import PageHero from "@/components/PageHero";
import RevealSection from "@/components/RevealSection";
import PortalAuth from "@/components/PortalAuth";

export const metadata = {
  title: "Customer Service Portal | BIOMEX LLC",
  description:
    "Access service records, job sheets, reports, and repairs through the Biomex LLC customer portal.",
};

export default function PortalPage() {
  return (
    <>
      <PageHero
        title="Customer Service Portal"
        subtitle="Access service records, job sheets, reports, and repairs. Request service on specific assets directly from your portal."
      />
      <RevealSection>
        <PortalAuth />
      </RevealSection>
    </>
  );
}

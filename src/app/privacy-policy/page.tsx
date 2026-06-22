import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy | Sierra Biomed",
  description: "Sierra Biomed privacy policy for website and services.",
};

const sections = [
  {
    title: "1. Introduction",
    content:
      'Sierra Biomed ("us", "we", or "our") operates www.sierrabiomed.com (the "Site") and provides autoclave and washer repair and maintenance services (the "Services"). This Privacy Policy describes how we collect, use, disclose, and protect your personal information when you use our Site and Services.',
  },
  {
    title: "2. Information We Collect",
    content:
      "Personal Information: This includes information that can be used to identify you, such as your name, email address, phone number, mailing address, and billing information. Usage Data: This includes information about how you use our Site and Services, such as your IP address, browser type, operating system, pages visited, and time spent on our Site. Cookies and Similar Technologies: We use cookies and similar technologies to track your activity on our Site and collect information about your preferences.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "To Provide and Improve our Services: We use your information to operate our Site, provide our Services, and improve your experience. To Communicate with You: We may use your information to contact you about your account, our Services, and updates to our Privacy Policy. To Personalize Your Experience: We may use your information to personalize your experience on our Site and recommend relevant Services. To Protect Our Rights and Interests: We may use your information to prevent fraud, abuse, and other harmful activities.",
  },
  {
    title: "4. Disclosure of Your Information",
    content:
      "Service Providers: We may share your information with service providers who assist us with payment processing, data analytics, email marketing, and other essential functions. Legal Authorities: We may disclose your information to legal authorities if required by law or legal process. Business Transfers: We may disclose your information in connection with a merger, acquisition, or sale of all or a portion of our assets.",
  },
  {
    title: "5. Your Privacy Choices",
    content:
      "Access and Correction: You can access and correct your personal information by contacting us. Cookies: You can disable cookies in your browser settings. Marketing Communications: You can opt-out of receiving marketing communications from us by clicking the unsubscribe link in our emails.",
  },
  {
    title: "6. Data Security",
    content:
      "We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is completely secure.",
  },
  {
    title: "7. Children's Privacy",
    content:
      "Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.",
  },
  {
    title: "8. Changes to this Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time. We will post any changes on our Site and notify you by email if the changes are material.",
  },
  {
    title: "9. Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us at: Sierra Biomed — info@sierrabiomed.com — 7222 Parkway Drive, Suite B, Hanover Maryland 21076",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-[800px] space-y-8 px-4">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-3 text-lg font-bold text-[#4069a5]">
                {section.title}
              </h2>
              <p className="text-sm leading-relaxed text-[#555]">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>
    </>
  );
}

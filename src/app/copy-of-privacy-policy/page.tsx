import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Cookie Policy | Sierra Biomed",
  description: "Sierra Biomed cookie policy for www.sierrabiomed.com.",
};

const cookieTypes = [
  {
    category: "Strictly Necessary",
    purpose: "Essential for the website to function",
    examples: "Session management, security",
  },
  {
    category: "Performance",
    purpose: "To understand how visitors use the site",
    examples: "Google Analytics, other analytics platforms",
  },
  {
    category: "Functionality",
    purpose: "To remember user preferences and enhance functionality",
    examples: "Language settings, saved preferences",
  },
  {
    category: "Targeting/Advertising",
    purpose: "To deliver targeted advertising",
    examples: "ZoomInfo, other advertising platforms",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero title="Cookie Policy" />
      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-[800px] space-y-8 px-4">
          <div>
            <h2 className="mb-3 text-lg font-bold text-[#4069a5]">
              1. What are Cookies?
            </h2>
            <p className="text-sm leading-relaxed text-[#555]">
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They are widely used to
              make websites work more efficiently, as well as to provide
              information to the owners of the site.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-[#4069a5]">
              2. How We Use Cookies
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-[#555]">
              Sierra Biomed uses cookies on our website (www.sierrabiomed.com) for
              the following purposes:
            </p>
            <ul className="list-inside list-disc space-y-2 text-sm text-[#555]">
              <li>
                <strong>Essential Cookies:</strong> Necessary for the Site to
                function properly.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Collect information about
                how visitors use the Site.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Allow the Site to
                remember choices you make.
              </li>
              <li>
                <strong>Targeting/Advertising Cookies:</strong> Used to deliver
                advertisements relevant to you and your interests.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-bold text-[#4069a5]">
              3. Types of Cookies We Use
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#033250] text-left text-white">
                    <th className="p-3">Cookie Category</th>
                    <th className="p-3">Purpose</th>
                    <th className="p-3">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTypes.map((row, i) => (
                    <tr
                      key={row.category}
                      className={i % 2 === 0 ? "bg-[#f9f9f9]" : "bg-white"}
                    >
                      <td className="border border-[#e8e6e6] p-3 font-medium">
                        {row.category}
                      </td>
                      <td className="border border-[#e8e6e6] p-3 text-[#555]">
                        {row.purpose}
                      </td>
                      <td className="border border-[#e8e6e6] p-3 text-[#555]">
                        {row.examples}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-[#4069a5]">
              4. Managing Your Cookie Preferences
            </h2>
            <p className="text-sm leading-relaxed text-[#555]">
              You can manage your cookie preferences through your web browser
              settings. Most browsers allow you to block all cookies, block
              third-party cookies, delete cookies, or set cookie preferences.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-[#4069a5]">5. ZoomInfo</h2>
            <p className="text-sm leading-relaxed text-[#555]">
              We use ZoomInfo, a third-party service, that utilizes cookies to
              help us analyze website traffic and understand customer interests.
              ZoomInfo may collect information about your browsing activity on
              our Site and across other websites to provide targeted advertising.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-[#4069a5]">
              7. Contact Us
            </h2>
            <p className="text-sm leading-relaxed text-[#555]">
              If you have any questions about this Cookie Policy, please contact
              us at: Sierra Biomed — info@sierrabiomed.com — 7222 Parkway Drive,
              Suite B, Hanover Maryland 21076
            </p>
          </div>
        </div>
      </RevealSection>
    </>
  );
}

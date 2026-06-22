import Button from "@/components/Button";
import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";
import { company, newsItems } from "@/data/biomex";

export const metadata = {
  title: `News & Blog | ${company.name}`,
  description:
    "Events, news, and blog posts from Biomex LLC — medical equipment service updates.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Blog"
        subtitle="Events, news, and updates from Biomex LLC."
      />

      <RevealSection id="events" className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase">
            Events
          </h2>
          <div className="rounded-lg border border-[#e8e6e6] bg-[#f9f9f9] p-8 text-center">
            <p className="text-base text-[#707070]">
              Stay tuned for upcoming healthcare technology events, trade shows,
              and community outreach from Biomex LLC.
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="news" className="bg-[#e8e6e6] py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase">
            News
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {newsItems.slice(0, 2).map((item) => (
              <article
                key={item.title}
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-[#4069a5]">
                  {item.category}
                </span>
                <h3 className="mt-2 text-lg font-bold text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#707070]">
                  {item.excerpt}
                </p>
                <time className="mt-4 block text-xs text-[#999]">
                  {item.date}
                </time>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="blogs" className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase">
            Blogs
          </h2>
          <div className="space-y-6">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="border-b border-[#e8e6e6] pb-6 last:border-0"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-[#4069a5]">
                  {item.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#707070]">
                  {item.excerpt}
                </p>
                <time className="mt-3 block text-sm text-[#999]">
                  {item.date}
                </time>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact-us">Subscribe for Updates</Button>
          </div>
        </div>
      </RevealSection>
    </>
  );
}

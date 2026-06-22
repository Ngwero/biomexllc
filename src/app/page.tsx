import Image from "next/image";
import Button from "@/components/Button";
import ConnectButton from "@/components/ConnectButton";
import PartnerMarquee from "@/components/PartnerMarquee";
import RevealSection from "@/components/RevealSection";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import { images } from "@/lib/images";
import { company, coreValues, keyMessages, services } from "@/data/biomex";

const singleSourceEquipment = [
  { src: images.gettingeWasher, alt: "Getinge washer disinfector", width: 244, height: 371 },
  { src: images.washer600, alt: "Medical washer", width: 297, height: 340 },
  { src: images.dsdEdge, alt: "Medivators DSD Edge", width: 578, height: 328 },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-24 h-[500px] w-full overflow-hidden md:h-[600px] lg:-mt-28 lg:h-[785px]">
        <Image
          src={images.hero}
          alt="Biomedical engineers servicing medical equipment"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#033250] via-[#033250]/70 to-transparent"
          aria-hidden="true"
        />
        <ScrollReveal
          className="relative mx-auto flex h-full max-w-[980px] flex-col items-center justify-center px-4 text-center text-white"
          variant="fade-up"
        >
          <p className="mb-2 text-sm font-light uppercase tracking-[0.3em] md:text-base">
            Professional &bull; Reliable &bull; Healthcare Focused
          </p>
          <h1 className="max-w-4xl text-3xl font-bold uppercase leading-tight md:text-5xl lg:text-6xl">
            Your Trusted One-Call Medical Equipment Service Partner
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
            {company.description}
          </p>
        </ScrollReveal>
      </section>

      {/* Vision */}
      <RevealSection className="bg-[#033250] py-16 md:py-20">
        <div className="mx-auto grid max-w-[980px] items-center gap-10 px-4 md:grid-cols-2 md:gap-12">
          <ScrollReveal variant="fade-right">
            <div className="flex gap-6 md:gap-8">
              <div
                className="w-px shrink-0 self-stretch bg-white/35"
                aria-hidden="true"
              />
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                  Vision
                </p>
                <h2 className="mb-6 text-2xl font-normal leading-snug text-white md:text-3xl lg:text-[2rem] lg:leading-tight">
                  We&apos;re Changing The Way You Think About Service Groups
                </h2>
                <p className="max-w-md text-base leading-relaxed text-white/85">
                  Our Vision is To provide Peace of Mind for SPD managers, OR
                  Managers and Biomed Departments by ensuring the highest
                  reliability of equipment and being a one-call service provider
                  for all SPD equipment
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal
            variant="fade-left"
            delay={100}
            className="flex justify-center md:justify-end"
          >
            <Image
              src={images.autoclave}
              alt="Medical autoclave sterilizer"
              width={451}
              height={560}
              className="h-auto max-w-full"
            />
          </ScrollReveal>
        </div>
      </RevealSection>

      {/* Services bar */}
      <RevealSection className="bg-[#4069a5] py-4">
        <ScrollReveal variant="fade" className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-white md:text-base">
            REPAIRS | INSTALLATIONS | PREVENTATIVE MAINTENANCE | EQUIPMENT SALES |
            CONSUMABLE SALES
          </p>
        </ScrollReveal>
      </RevealSection>

      {/* Single Source Service Group */}
      <RevealSection className="overflow-hidden bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-[980px] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="fade-right" className="min-w-0">
            <SectionTitle accent="Service Group">Single Source</SectionTitle>
            <p className="mt-8 max-w-md text-base leading-relaxed text-[#033250]/85">
              We offer complete and comprehensive service packages spanning
              multiple unit types along with multiple manufacturers. Save time
              and money by consolidating your contracts to one single-source
              vendor instead of utilizing multiple OEM or third-party vendors.
            </p>
            <div className="mt-8">
              <ConnectButton />
            </div>
          </ScrollReveal>
          <div className="min-w-0">
            <div className="flex items-end justify-center gap-1 sm:gap-2 lg:justify-end">
              {singleSourceEquipment.map((img, i) => (
                <ScrollReveal
                  key={img.alt}
                  variant="fade-up"
                  delay={i * 100}
                  className="flex max-w-[32%] flex-1 items-end justify-center"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="h-auto max-h-[200px] w-full object-contain object-bottom sm:max-h-[260px] lg:max-h-[300px]"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Detailed Reporting */}
      <RevealSection className="overflow-hidden bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-[980px] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="fade-right" className="relative mx-auto min-w-0 w-full max-w-md lg:mx-0">
            <div className="relative">
              <Image
                src={images.screenshot}
                alt="Customer service job report"
                width={773}
                height={1024}
                className="h-auto w-full rotate-[-2deg] shadow-lg"
              />
              <div className="absolute -bottom-6 -right-4 w-[75%] md:-right-8">
                <Image
                  src={images.simproTablet}
                  alt="Service reporting portal on tablet"
                  width={788}
                  height={555}
                  className="h-auto w-full drop-shadow-2xl"
                />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-left" delay={120} className="min-w-0">
            <SectionTitle>Detailed Reporting</SectionTitle>
            <p className="mt-8 text-base leading-relaxed text-[#033250]/85">
              With detailed and in-depth reporting from Sierra, you can be sure
              all of your equipment maintenance records can be accessed at
              anytime. Access our optional customer portal for all service
              records, job sheets, reports, and repairs. You can also request
              service on specific assets directly from your portal!
            </p>
            <div className="mt-8">
              <ConnectButton />
            </div>
          </ScrollReveal>
        </div>
      </RevealSection>

      {/* Fast Service Response Times */}
      <RevealSection className="overflow-hidden bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-[980px] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="fade-right" className="min-w-0">
            <SectionTitle>Fast Service Response Times</SectionTitle>
            <p className="mt-8 text-base leading-relaxed text-[#033250]/85">
              We understand the importance of equipment uptime which is why we
              guarantee a response to online emergency service requests within 10
              minutes along with a 24 hour boots-on-the-ground response time,
              guaranteed. All major manufacturer&apos;s autoclave PM kits are held
              in stock along with a large inventory of repair parts to provide
              you with a 93% first-time fix rate.*
            </p>
            <p className="mt-4 text-sm text-[#033250]/70">*As of 12/31/25</p>
            <div className="mt-8">
              <ConnectButton />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-left" delay={120} className="flex min-w-0 justify-center lg:justify-end">
            <Image
              src={images.serviceArea}
              alt="Sierra Biomed service area map"
              width={623}
              height={755}
              className="h-auto max-w-full rounded-lg"
            />
          </ScrollReveal>
        </div>
      </RevealSection>

      {/* Key Messages */}
      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase text-black">
            Why Healthcare Facilities Choose Biomex
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {keyMessages.map((msg, i) => (
              <ScrollReveal
                key={msg}
                as="li"
                variant="fade-up"
                delay={i * 60}
                className="rounded-lg bg-[#e8e6e6] px-4 py-3 text-xs font-bold uppercase tracking-wide text-[#333]"
              >
                {msg}
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </RevealSection>

      {/* Why Trust */}
      <RevealSection className="relative overflow-hidden py-16">
        <Image
          src={images.hero}
          alt="Healthcare facility equipment service"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto grid max-w-[980px] items-center gap-10 px-4 md:grid-cols-2">
          <ScrollReveal variant="fade-right" className="text-white">
            <h2 className="mb-4 text-2xl font-bold uppercase md:text-3xl">
              Why Trust {company.name}?
            </h2>
            <h3 className="mb-4 text-lg font-semibold">
              We Work With You, Not For You. A True Partner for Healthcare
              Facilities.
            </h3>
            <p className="mb-8 text-base leading-relaxed text-white/90">
              Go beyond basic service. We work with you to understand the unique
              demands of your hospital, clinic, or laboratory. This means
              proactive solutions, minimized downtime, compliance and safety
              focus, and increased operational efficiency for your healthcare
              technology systems.
            </p>
            <Button href="/contact-us" variant="outline">
              Lets Go
            </Button>
          </ScrollReveal>
          <ScrollReveal
            variant="fade-left"
            delay={120}
            className="hidden justify-center md:flex"
          >
            <Image
              src={images.trustPartner}
              alt="Biomex LLC service partner"
              width={583}
              height={676}
              className="h-auto max-w-full rounded-lg"
            />
          </ScrollReveal>
        </div>
      </RevealSection>

      {/* Core Values */}
      <RevealSection className="bg-[#e8e6e6] py-16">
        <div className="mx-auto max-w-[980px] px-4 text-center">
          <h6 className="mb-6 text-sm font-bold uppercase tracking-wider text-[#707070]">
            Our Core Values
          </h6>
          <ul className="space-y-3">
            {coreValues.map((value, i) => (
              <ScrollReveal
                key={value}
                as="li"
                variant="fade-up"
                delay={i * 70}
                className="text-lg font-medium text-black"
              >
                {value}
              </ScrollReveal>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {company.brandValues.map((value, i) => (
              <ScrollReveal
                key={value}
                variant="scale"
                delay={i * 50}
                className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#033250]"
              >
                {value}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Industry Trust */}
      <RevealSection className="bg-white pt-16 pb-0">
        <div className="mx-auto max-w-[980px] px-4 text-center">
          <h2 className="mb-2 text-2xl font-bold uppercase text-black md:text-3xl">
            Industry Trust
          </h2>
          <p className="mb-2 text-lg font-semibold text-[#4069a5]">
            Serving Healthcare Providers
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-base text-[#707070]">
            Serving those who serve others. We&apos;re proud to support hospitals,
            clinics, laboratories, and diagnostic centers by ensuring their
            medical equipment operates flawlessly for the safety of their
            patients.
          </p>
          <PartnerMarquee />
        </div>
      </RevealSection>

      {/* Services overview */}
      <RevealSection className="bg-[#033250] py-16 text-white">
        <div className="mx-auto mb-10 flex max-w-[980px] justify-center px-4">
          <Image
            src={images.van}
            alt="Biomex LLC service vehicle"
            width={543}
            height={283}
            className="h-auto max-w-full"
          />
        </div>
        <h2 className="mb-6 text-center text-2xl font-bold uppercase md:text-3xl">
          Our Services
        </h2>
        <p className="mx-auto mb-10 max-w-3xl px-4 text-center text-base text-white/85">
          {services.length} specialized service offerings for healthcare
          technology management
        </p>
        <div className="mx-auto grid max-w-[980px] grid-cols-2 gap-4 px-4 md:grid-cols-4">
          {services.slice(0, 8).map((service, i) => (
            <ScrollReveal
              key={service}
              variant="fade-up"
              delay={i * 60}
              className="rounded-lg bg-white/10 px-3 py-4 text-center text-xs font-medium text-white/90"
            >
              {service}
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </RevealSection>

      {/* Careers */}
      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-2xl font-bold uppercase text-black md:text-3xl">
              Careers
            </h2>
            <p className="mb-6 text-base text-[#707070]">
              We&apos;re looking for qualified biomedical engineers and technical
              specialists to join our team.
            </p>
            <Button href="/careers">View Open Positions</Button>
          </div>
        </div>
      </RevealSection>
    </>
  );
}

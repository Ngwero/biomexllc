import Image from "next/image";
import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";
import { images } from "@/lib/images";
import { company } from "@/data/biomex";

const galleryPhotos = [
  { src: images.hero, alt: "Biomedical engineers servicing hospital equipment" },
  { src: images.autoclave, alt: "Medical equipment installation" },
  { src: images.trustPartner, alt: "Healthcare technology support" },
  { src: images.van, alt: "Biomex LLC service vehicle" },
  { src: images.serviceArea, alt: "Service coverage area" },
  { src: images.washer600, alt: "Equipment maintenance" },
];

export const metadata = {
  title: `Gallery | ${company.name}`,
  description:
    "Photos and media from Biomex LLC medical equipment service operations.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery & Media"
        subtitle="Photos and videos showcasing our biomedical equipment installation, maintenance, and technical support services."
      />

      <RevealSection id="photos" className="bg-white py-16">
        <div className="mx-auto max-w-[980px] px-4">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase">
            Photos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.alt}
                className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#e8e6e6]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="videos" className="bg-[#e8e6e6] py-16">
        <div className="mx-auto max-w-[980px] px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase">Videos</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-[#707070]">
            Hero video content showcasing biomedical engineers servicing critical
            medical equipment in hospitals and laboratories — including equipment
            installation, preventive maintenance, troubleshooting, and emergency
            response.
          </p>
          <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-lg bg-[#033250]">
            <Image
              src={images.hero}
              alt="Service video placeholder"
              fill
              className="object-cover opacity-60"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4069a5] text-white">
                <svg className="ml-1 h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-[#707070]">
            Video content coming soon
          </p>
        </div>
      </RevealSection>
    </>
  );
}

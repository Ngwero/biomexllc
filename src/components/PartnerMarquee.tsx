"use client";

import Image from "next/image";
import { partners, type Partner } from "@/data/partners";

function MarqueeRow({ items }: { items: Partner[] }) {
  const track = [...items, ...items];

  return (
    <div className="group/row overflow-hidden">
      <div className="marquee-track flex w-max items-center gap-5 md:gap-6 group-hover/row:[animation-play-state:paused]">
        {track.map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            className="flex h-[72px] w-[160px] shrink-0 items-center justify-center px-3 sm:h-[88px] sm:w-[200px] sm:px-5 md:h-24 md:w-[220px]"
            title={partner.name}
          >
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={partner.width}
              height={partner.height}
              className="max-h-11 max-w-[150px] object-contain opacity-90 transition duration-300 hover:opacity-100 md:max-h-12 md:max-w-[165px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PartnerMarquee() {
  return (
    <div className="relative mt-8 w-full sm:mt-10">
      <p className="mb-4 px-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#707070] sm:mb-5 sm:text-[11px] sm:tracking-[0.28em]">
        Trusted by leading healthcare organizations
      </p>

      <div className="relative overflow-hidden bg-gradient-to-b from-[#033250] via-[#043a5c] to-[#033250] py-6 sm:py-8 md:py-10">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#033250] to-transparent sm:w-24 md:w-32"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#033250] to-transparent sm:w-24 md:w-32"
          aria-hidden="true"
        />

        <MarqueeRow items={partners} />
      </div>
    </div>
  );
}

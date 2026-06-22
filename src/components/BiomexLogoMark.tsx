import Image from "next/image";

type BiomexLogoMarkProps = {
  className?: string;
  light?: boolean;
};

export default function BiomexLogoMark({
  className = "h-8 w-auto sm:h-10 md:h-11",
  light = false,
}: BiomexLogoMarkProps) {
  return (
    <Image
      src="/biomex-logo.png"
      alt="Biomex LLC Solutions"
      width={617}
      height={328}
      className={`${className} ${light ? "brightness-0 invert" : ""}`}
      priority
    />
  );
}

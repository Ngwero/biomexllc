import Link from "next/link";
import BiomexLogoMark from "@/components/BiomexLogoMark";

export default function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 transition-opacity hover:opacity-90 ${className}`}
    >
      <BiomexLogoMark light={light} />
    </Link>
  );
}

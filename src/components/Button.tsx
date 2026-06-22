import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold tracking-wide transition-colors duration-200";
  const variants = {
    primary:
      "bg-[#4069a5] text-white hover:bg-white hover:text-[#4069a5] border-2 border-[#4069a5]",
    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#4069a5]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

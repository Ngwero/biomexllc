import Link from "next/link";

type ConnectButtonProps = {
  href?: string;
  className?: string;
  dark?: boolean;
};

export default function ConnectButton({
  href = "/contact-us",
  className = "",
  dark = false,
}: ConnectButtonProps) {
  const border = dark ? "border-white text-white" : "border-[#033250] text-[#033250]";
  const divider = dark ? "border-white" : "border-[#033250]";
  const hover = dark
    ? "hover:bg-white hover:text-[#033250]"
    : "hover:bg-[#033250] hover:text-white";

  return (
    <Link
      href={href}
      className={`inline-flex overflow-hidden border transition-colors duration-200 ${border} ${hover} ${className}`}
    >
      <span className="px-6 py-2.5 text-sm font-medium tracking-wide">
        Lets Connect
      </span>
      <span className={`flex items-center border-l px-4 py-2.5 text-lg ${divider}`}>
        →
      </span>
    </Link>
  );
}

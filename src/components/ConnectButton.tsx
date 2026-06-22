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
      className={`inline-flex min-h-11 w-full overflow-hidden border transition-colors duration-200 sm:w-auto ${border} ${hover} ${className}`}
    >
      <span className="flex flex-1 items-center justify-center px-5 py-3 text-sm font-medium tracking-wide sm:px-6 sm:py-2.5">
        Lets Connect
      </span>
      <span className={`flex items-center border-l px-4 py-3 text-lg sm:py-2.5 ${divider}`}>
        →
      </span>
    </Link>
  );
}

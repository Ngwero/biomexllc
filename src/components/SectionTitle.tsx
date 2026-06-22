type SectionTitleProps = {
  children: React.ReactNode;
  accent?: string;
  className?: string;
  dark?: boolean;
};

export default function SectionTitle({
  children,
  accent,
  className = "",
  dark = false,
}: SectionTitleProps) {
  const textColor = dark ? "text-white" : "text-[#033250]";

  return (
    <div className={className}>
      <h2
        className={`text-xl font-bold uppercase leading-tight sm:text-2xl md:text-3xl lg:text-[2rem] ${textColor}`}
      >
        {children}
        {accent && (
          <>
            <br />
            <span className="relative inline-block">
              {accent}
              <span
                className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#4069a5]"
                aria-hidden="true"
              />
            </span>
          </>
        )}
      </h2>
      {!accent && (
        <span className="mt-4 block h-0.5 w-20 bg-[#4069a5]" aria-hidden="true" />
      )}
    </div>
  );
}

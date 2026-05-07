export default function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  className = "",
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl font-black leading-[0.98] text-black sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

import { proofPoints } from "@/data/portfolio";

export default function ProofStrip() {
  const [primaryPoint, ...supportingPoints] = proofPoints;

  return (
    <section className="border-y border-black/8 bg-[#faf7f0] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.4fr]">
          <article className="relative overflow-hidden rounded-lg border border-black/8 bg-black p-7 text-white shadow-xl shadow-black/10 sm:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-[#ffe8b8]/20 blur-2xl" />
            <p className="relative text-xs font-black uppercase tracking-[0.22em] text-[#ffe8b8]">
              {primaryPoint.label}
            </p>
            <p className="relative mt-5 text-6xl font-black leading-none sm:text-7xl">
              {primaryPoint.value}
            </p>
            <p className="relative mt-5 max-w-md text-base leading-8 text-zinc-300">
              {primaryPoint.description}
            </p>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            {supportingPoints.map((point) => (
              <article
                key={point.label}
                className="rounded-lg border border-black/8 bg-white p-6 shadow-sm shadow-black/4"
              >
                <div className="flex h-full flex-col">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">
                    {point.label}
                  </p>
                  <p className="mt-4 text-2xl font-black leading-tight text-black">
                    {point.value}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-zinc-600">
                    {point.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

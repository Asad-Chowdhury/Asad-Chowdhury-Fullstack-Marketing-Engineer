import { proofPoints } from "@/data/portfolio";

export default function ProofStrip() {
  return (
    <section className="border-y border-black/8 bg-[#faf7f0]">
      <div className="mx-auto grid max-w-7xl gap-px bg-black/8 px-5 py-px sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {proofPoints.map((point) => (
          <article key={point.label} className="bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
              {point.label}
            </p>
            <p className="mt-3 text-2xl font-black text-black">{point.value}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {point.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

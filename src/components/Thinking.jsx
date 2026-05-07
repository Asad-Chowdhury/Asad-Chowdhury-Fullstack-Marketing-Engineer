import { thinkingCards } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Thinking() {
  return (
    <section className="bg-[#faf7f0] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Operating Model"
          title="How I Think About Growth Systems"
          copy="Good tracking is not just about firing tags. It is about designing a reliable system that connects user behavior, marketing spend, CRM stages, and revenue outcomes."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {thinkingCards.map((card, index) => (
            <article
              key={card.title}
              className="rounded-lg border border-black/8 bg-white p-6 shadow-sm shadow-black/4"
            >
              <p className="text-sm font-black text-blue-700">0{index + 1}</p>
              <h3 className="mt-5 text-2xl font-black leading-tight text-black">
                {card.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-zinc-600">
                {card.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

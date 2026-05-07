import { positioningCards } from "@/data/portfolio";
import { Icon } from "./Icons";
import SectionHeader from "./SectionHeader";

export default function Positioning() {
  return (
    <section className="bg-[#fffdf7] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-8">
        <SectionHeader
          eyebrow="Positioning"
          title="Not just a developer. Not just an analytics specialist."
          copy="Most developers can build interfaces. Most marketers can read reports. My advantage is connecting the full system: product behavior, tracking architecture, attribution, CRM data, analytics, and business outcomes."
        />

        <div className="grid gap-4">
          {positioningCards.map((card) => (
            <article
              key={card.title}
              className="group rounded-lg border border-black/8 bg-white p-6 shadow-sm shadow-black/4 transition-transform hover:-translate-y-1"
            >
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon name={card.icon} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-black">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

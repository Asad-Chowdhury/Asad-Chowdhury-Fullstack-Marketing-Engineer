import { problems } from "@/data/portfolio";
import { Icon } from "./Icons";
import SectionHeader from "./SectionHeader";

export default function Problems() {
  return (
    <section className="bg-[#faf7f0] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problems"
          title="Problems I Solve"
          copy="I help SaaS and eCommerce teams build reliable systems for measurement, attribution, reporting, and growth execution."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="rounded-lg border border-black/8 bg-[#fffdf7] p-6 shadow-sm shadow-black/4 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-black text-white">
                  <Icon name={problem.icon} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-black">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {problem.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {problem.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/8 bg-white px-3 py-1.5 text-xs font-bold text-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

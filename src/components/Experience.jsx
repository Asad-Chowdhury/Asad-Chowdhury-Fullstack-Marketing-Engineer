import Image from "next/image";
import { experiences } from "@/data/portfolio";
import { Icon } from "./Icons";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#fffdf7] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Experience"
              title="Experience SaaS teams can use on day one."
              copy="I have worked across tracking, attribution, automation, analytics QA, and reporting systems for companies that depend on clean growth data."
            />

            <div className="mt-8 rounded-lg border border-black/8 bg-white p-6 shadow-sm shadow-black/4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                Employer Signal
              </p>
              <p className="mt-4 text-2xl font-black leading-tight text-black">
                Engineering judgment plus marketing data context.
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Useful for SaaS teams that need product events, attribution,
                CRM stages, dashboards, and ad platform signals to work as one
                system.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="group rounded-lg border border-black/8 bg-white p-5 shadow-sm shadow-black/4 transition-transform hover:-translate-y-1 sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-black/8 bg-white p-2 shadow-sm shadow-black/4">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      fill
                      sizes="64px"
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
                      <div>
                        <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
                          {experience.company}
                        </p>
                        <h3 className="mt-2 text-2xl font-black leading-tight text-black sm:text-3xl">
                          {experience.role}
                        </h3>
                      </div>
                      <span className="w-fit rounded-full border border-black/8 bg-[#faf7f0] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-zinc-700">
                        Growth Data Systems
                      </span>
                    </div>

                    <div className="mt-5 rounded-lg border border-blue-100 bg-blue-50/70 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-700">
                        Achievement
                      </p>
                      <p className="mt-2 text-base font-bold leading-7 text-black">
                        {experience.achievement}
                      </p>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-zinc-600">
                      {experience.summary}
                    </p>

                    <ul className="mt-6 grid gap-3 md:grid-cols-2">
                      {experience.responsibilities.slice(0, 6).map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-zinc-700"
                        >
                          <Icon
                            name="check"
                            className="mt-1 h-4 w-4 shrink-0 text-green-700"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

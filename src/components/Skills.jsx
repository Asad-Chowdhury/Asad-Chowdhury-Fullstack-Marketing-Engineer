import { skillGroups } from "@/data/portfolio";
import { Icon } from "./Icons";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#faf7f0] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Stack"
          title="Skills & Technical Stack"
          copy="A technical stack shaped by full-stack development, marketing engineering, analytics infrastructure, and automation."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-black/8 bg-[#fffdf7] p-6 shadow-sm shadow-black/4"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-black text-white">
                  <Icon name={group.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black text-black">{group.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/8 bg-white px-3 py-1.5 text-xs font-bold text-zinc-700"
                  >
                    {skill}
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

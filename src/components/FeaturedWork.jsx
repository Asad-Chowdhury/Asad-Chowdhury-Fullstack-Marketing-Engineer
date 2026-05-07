import { projects } from "@/data/portfolio";
import { Icon } from "./Icons";
import ProjectVisual from "./ProjectVisual";
import SectionHeader from "./SectionHeader";

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-[#fffdf7] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured Work"
          copy="Selected projects and systems that show how I combine engineering, analytics, attribution, and growth thinking."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`rounded-lg border border-black/8 bg-white p-5 shadow-sm shadow-black/5 transition-transform hover:-translate-y-1 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`grid gap-8 ${
                  index === 0 ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
                }`}
              >
                <div className="rounded-lg bg-[#f7f1e4] p-5">
                  <ProjectVisual type={project.visual} />
                </div>
                <div className="flex flex-col">
                  <p className="w-fit rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-blue-700">
                    {project.category}
                  </p>
                  <h3 className="mt-5 text-3xl font-black leading-tight text-black">
                    {project.title}
                  </h3>
                  <div className="mt-5 grid gap-4 text-sm leading-7 text-zinc-600">
                    <p>
                      <strong className="font-black text-black">Problem: </strong>
                      {project.problem}
                    </p>
                    <p>
                      <strong className="font-black text-black">Solution: </strong>
                      {project.solution}
                    </p>
                    <p>
                      <strong className="font-black text-black">Outcome: </strong>
                      {project.outcome}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/8 bg-[#fffdf7] px-3 py-1.5 text-xs font-bold text-zinc-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                  >
                    View Case Study
                    <Icon name="arrowUpRight" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

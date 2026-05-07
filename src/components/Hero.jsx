import Image from "next/image";
import { socialLinks } from "@/data/portfolio";
import { Icon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#fffdf7] pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(34deg,rgba(255,253,247,0)_0%,rgba(255,253,247,0)_42%,#ffe8b8_42%,#ffd071_68%,#fff4dc_100%)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[520px] w-[760px] -translate-x-1/3 rounded-full bg-[radial-gradient(ellipse_at_center,#ffd27a_0%,rgba(255,210,122,0.42)_34%,rgba(255,253,247,0)_70%)] blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col px-5 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center justify-center gap-3 rounded-full border border-black/6 bg-white/80 px-4 py-3 text-sm font-semibold text-zinc-800 shadow-lg shadow-black/6">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-40" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600" />
            </span>
            Available for mid-level SaaS opportunities
          </div>
          <p className="mt-8 font-serif text-[clamp(3.25rem,8vw,7rem)] italic leading-none text-black">
            Asad Chowdhury
          </p>
          <p className="mt-2 text-[clamp(1.7rem,3vw,2.7rem)] font-black uppercase leading-[0.9] text-black">
            Full Stack Marketing Engineer
          </p>
        </div>

        <div className="mt-12 grid flex-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 max-w-3xl lg:order-1">
            <h1 className="mt-7 max-w-[780px] text-[clamp(3.5rem,8.4vw,7.25rem)] font-black uppercase leading-[0.84] text-black">
              I Build
              <br />
              Growth
              <br />
              Systems
            </h1>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <p className="max-w-xl text-base leading-8 text-zinc-700 sm:text-lg">
                I build full-stack systems that help SaaS and eCommerce teams
                track user behavior, fix attribution gaps, automate marketing
                data flows, and turn analytics into revenue decisions.
              </p>
            </div>

            <p className="mt-7 max-w-xl text-sm font-medium leading-7 text-zinc-600">
              Specialized in full-stack development, tracking infrastructure,
              attribution systems, and SaaS growth analytics.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                View Work
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/12 bg-white px-6 text-sm font-bold text-black transition-transform hover:-translate-y-0.5"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/asadchowdhury/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/12 bg-white px-6 text-sm font-bold text-black transition-transform hover:-translate-y-0.5"
              >
                Connect on LinkedIn
                <Icon name="arrowUpRight" className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-zinc-700 transition-colors hover:bg-black hover:text-white"
                  aria-label={link.label}
                >
                  <Icon name={link.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="order-1 relative flex min-h-[420px] items-end justify-center lg:order-2 lg:min-h-[650px] lg:justify-end">
            <div className="absolute inset-y-8 left-[12%] right-0 -z-10 rounded-lg bg-[linear-gradient(34deg,#fff1cf_0%,#ffd071_48%,#f4b84f_74%,#fff7e6_100%)] shadow-2xl shadow-amber-900/18 [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]" />
            <div className="absolute bottom-10 right-4 -z-10 h-52 w-52 rounded-full bg-white/55 blur-2xl" />

            <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-lg border border-white/80 bg-[#f4dfb5] shadow-2xl shadow-amber-900/16">
              <Image
                src="/original.png"
                alt="Portrait of Asad Chowdhury"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

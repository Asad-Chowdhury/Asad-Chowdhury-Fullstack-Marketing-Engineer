import { socialLinks } from "@/data/portfolio";
import { Icon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#faf7f0] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-black p-6 text-white sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">
                Contact
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
                Let&apos;s build growth infrastructure that actually works.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                I am open to mid-level roles where I can combine full-stack
                development, tracking infrastructure, analytics, and growth
                systems for SaaS or eCommerce teams.
              </p>
            </div>

            <div className="grid gap-3">
              <a
                href="mailto:asad.ami@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black text-black transition-transform hover:-translate-y-0.5"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-black text-white transition-transform hover:-translate-y-0.5"
              >
                Download Resume
              </a>
              <div className="mt-5 grid grid-cols-4 gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={link.label}
                    className="flex h-12 items-center justify-center rounded-full border border-white/14 text-white transition-colors hover:bg-white hover:text-black"
                  >
                    <Icon name={link.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

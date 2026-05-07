import { socialLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-black/8 bg-[#fffdf7] py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 text-sm text-zinc-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <a href="#home" className="font-serif text-2xl italic text-black">
            Asad Chowdhury
          </a>
          <p className="mt-2">
            Built with Next.js, Tailwind CSS, and a growth-engineering mindset.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 font-semibold">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

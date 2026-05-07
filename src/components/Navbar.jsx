import { navLinks } from "@/data/portfolio";
import { Icon } from "./Icons";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#fffdf7]/82 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#home" className="font-serif text-2xl italic text-black">
          Asad Chowdhury
        </a>

        <div className="hidden items-center gap-8 rounded-full border border-black/8 bg-white/70 px-7 py-3 text-sm font-medium text-zinc-700 shadow-sm shadow-black/4 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          Contact
        </a>

        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm">
            <span className="sr-only">Open navigation</span>
            <Icon name="menu" className="h-5 w-5" />
          </summary>
          <div className="absolute right-0 mt-3 w-[min(82vw,320px)] rounded-lg border border-black/10 bg-white p-3 shadow-2xl shadow-black/12">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-black"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 rounded-full bg-black px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}

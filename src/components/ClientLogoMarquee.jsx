"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { clientLogos } from "@/data/portfolio";

export default function ClientLogoMarquee() {
  return (
    <section className="overflow-hidden bg-[#fffdf7] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">
              Client Proof
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-black sm:text-4xl">
              Trusted across service, legal, tax, eCommerce, and growth teams.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-600">
            Selected client brands and businesses connected through tracking,
            attribution, reporting, and marketing data work.
          </p>
        </div>
      </div>

      <Marquee
        autoFill
        pauseOnHover
        gradient
        gradientColor="#fffdf7"
        gradientWidth={80}
        speed={38}
      >
        {clientLogos.map((logo) => (
          <div
            key={logo.src}
            className="mx-3 flex h-28 w-48 items-center justify-center rounded-lg border border-black/8 bg-white p-5 shadow-sm shadow-black/4 sm:mx-4 sm:h-32 sm:w-56"
          >
            <div className="relative h-full w-full">
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                fill
                sizes="224px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

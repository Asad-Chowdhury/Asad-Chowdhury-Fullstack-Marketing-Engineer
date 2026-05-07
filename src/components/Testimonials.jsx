"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/portfolio";
import { Icon } from "./Icons";

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (!activeVideo) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeVideo]);

  return (
    <section className="bg-[#fffdf7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.videoId}
              className="rounded-lg border border-black/8 bg-white p-5 shadow-sm shadow-black/5 sm:p-6"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(testimonial)}
                className="group relative aspect-video w-full overflow-hidden rounded-md bg-cover bg-center bg-no-repeat text-left"
                style={{
                  backgroundImage: `url(https://i.ytimg.com/vi/${testimonial.videoId}/hqdefault.jpg)`,
                }}
                aria-label={`Play ${testimonial.title}`}
              >
                <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-xl shadow-black/25 transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    name="play"
                    className="ml-1 h-7 w-7"
                    strokeWidth={2.2}
                  />
                </span>
              </button>
              <h2 className="mx-auto mt-8 max-w-sm text-center text-lg font-black leading-7 text-zinc-950">
                <span className="block">{testimonial.label}</span>
                <span className="block">{testimonial.name}</span>
                <span className="block">{testimonial.role}</span>
              </h2>
            </article>
          ))}
        </div>
      </div>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-lg bg-black shadow-2xl shadow-black"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="bg-[#faf7f0] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeader
          eyebrow="Why should you hire me??"
          title="I work at the intersection of full-stack development, analytics, and growth."
          copy="My strongest value is not just writing code. It is building systems that connect product behavior, marketing performance, analytics, and business outcomes."
        />
        <div className="space-y-6 text-lg leading-9 text-zinc-700">
          <p>
            I am a technical marketing and full-stack development professional
            with over five years of experience helping businesses measure,
            debug, and improve their customer acquisition systems.
          </p>
          <p>
            My background started in conversion tracking, analytics
            implementation, and marketing data infrastructure. Over time, I
            expanded into full-stack development because I wanted to build the
            systems behind the tracking, not just configure tools after the
            product was already built.
          </p>
          <p>
            Today, I understand how SaaS and eCommerce businesses acquire
            users, how attribution breaks, how tracking data flows from
            frontend events to ad platforms and CRMs, and how teams use that
            data to make revenue decisions.
          </p>
          <div className="border-l-4 border-blue-600 bg-white px-6 py-5 text-base font-semibold leading-7 text-black shadow-sm shadow-black/5">
            Outside client work, I enjoy learning full-stack development,
            building SaaS ideas, exploring automation workflows, and turning
            technical problems into scalable systems.
          </div>
        </div>
      </div>
    </section>
  );
}

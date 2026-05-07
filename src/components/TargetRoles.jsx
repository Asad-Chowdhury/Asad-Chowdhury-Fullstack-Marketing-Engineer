import { targetRoles } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function TargetRoles() {
  return (
    <section className="bg-[#fffdf7] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Target Roles"
            title="Roles I Am Targeting"
            copy="I am best aligned with teams that need someone who can understand the product, implement tracking correctly, connect analytics systems, and build tools that support growth."
          />
          <div className="flex flex-wrap gap-3">
            {targetRoles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-black/8 bg-white px-5 py-3 text-sm font-black text-zinc-800 shadow-sm shadow-black/4"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Eye, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Container } from "./shared/Container";
import { SectionEyebrow } from "./shared/SectionEyebrow";

const PILLARS = [
  {
    title: "Transparency by default",
    description:
      "Every report, comment, and government reply is public. Accountability shouldn't happen behind closed doors.",
    icon: Eye,
  },
  {
    title: "Evidence, not hearsay",
    description:
      "Photos and video travel with the report, so a pothole, a blocked drain, or a stalled project speaks for itself.",
    icon: ShieldCheck,
  },
  {
    title: "A real escalation path",
    description:
      "Issues live where they happen, at LGA and state level, with a visible route upward when local response falls short.",
    icon: ArrowUpRight,
  },
] as const;

export function WhyActNg() {
  return (
    <section id="why-act-ng" className="bg-[#0B6E4F] py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionEyebrow tone="dark">Why ACT NG</SectionEyebrow>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Accountability shouldn&apos;t depend on who you know.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-white/15 bg-white/5 p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                <pillar.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#DDEFE3]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

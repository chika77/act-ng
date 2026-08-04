import { FileText, MessageSquare, Radar } from "lucide-react";
import { Container } from "./shared/Container";
import { SectionEyebrow } from "./shared/SectionEyebrow";

const STEPS = [
  {
    number: "01",
    title: "Report",
    description:
      "Describe the issue, choose a category, pin the state and LGA, and attach photo or video evidence.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Discuss",
    description:
      "Neighbours weigh in, upvote what matters most, and add context the report might be missing.",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Track",
    description:
      "Watch the status move from Open to Acknowledged, In Progress, and Resolved, with the official's response attached.",
    icon: Radar,
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F6F8F6] py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionEyebrow>How it works</SectionEyebrow>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[#0D1B14] sm:text-4xl">
            Three steps from complaint to accountability.
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="relative rounded-xl border border-[#E3EAE5] bg-white p-7"
            >
              <span className="font-[family-name:var(--font-mono)] text-xs font-medium tracking-wider text-[#2FA366]">
                {step.number}
              </span>
              <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#EAF4EE] text-[#0B6E4F]">
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-[#0D1B14]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3F4B45]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

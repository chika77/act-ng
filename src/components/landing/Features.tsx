import {
  BadgeCheck,
  Landmark,
  MessagesSquare,
  Camera,
  MapPinned,
  BellRing,
} from "lucide-react";
import { Container } from "./shared/Container";
import { SectionEyebrow } from "./shared/SectionEyebrow";

const FEATURES = [
  {
    title: "Verified Citizens",
    description:
      "Every account belongs to a real, verified person, so reports carry weight and discussions stay honest.",
    icon: BadgeCheck,
  },
  {
    title: "Government Responses",
    description:
      "Verified officials respond publicly and update issue status, on the record, in view of everyone.",
    icon: Landmark,
  },
  {
    title: "Community Discussions",
    description:
      "Comment, reply, and build context together so officials see the full picture, not just one voice.",
    icon: MessagesSquare,
  },
  {
    title: "Photo & Video Evidence",
    description:
      "Attach images and video straight from your phone to back every report with proof.",
    icon: Camera,
  },
  {
    title: "Location-Based Rooms",
    description:
      "Issues are organised by state and LGA, so you see what matters in your own community first.",
    icon: MapPinned,
  },
  {
    title: "Notifications",
    description:
      "Get notified the moment a comment lands or a status changes on an issue you're following.",
    icon: BellRing,
  },
] as const;

export function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionEyebrow>Built for accountability</SectionEyebrow>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[#0D1B14] sm:text-4xl">
            Everything a report needs to be taken seriously.
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-[#E3EAE5] bg-[#E3EAE5] sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-7 transition-colors hover:bg-[#FBFDFB]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF4EE] text-[#0B6E4F]">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-base font-semibold text-[#0D1B14]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3F4B45]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

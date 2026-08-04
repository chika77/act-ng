import { ArrowRight, PlayCircle } from "lucide-react";
import { Container } from "./shared/Container";
import { SectionEyebrow } from "./shared/SectionEyebrow";
import { JurisdictionLadder } from "./icons/JurisdictionLadder";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-x-0 -top-24 h-72 bg-gradient-to-b from-[#EAF4EE] to-transparent"
        aria-hidden="true"
      />

      <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div className="max-w-xl">
          <SectionEyebrow>Presidency to your LGA</SectionEyebrow>

          <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight text-[#0D1B14] sm:text-5xl lg:text-[3.25rem]">
            Hold Every Level of Government Accountable.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-[#3F4B45] sm:text-lg">
            ACT NG helps Nigerians report issues, demand accountability, and
            follow government responses from the Presidency to their Local
            Government Area.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#0B6E4F] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#095A41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6E4F]"
            >
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-[#D8E3DC] px-6 py-3 text-sm font-semibold text-[#0D1B14] transition-colors hover:border-[#0B6E4F] hover:text-[#0B6E4F]"
            >
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              Learn More
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[#E3EAE5] pt-6">
            <div>
              <dt className="font-[family-name:var(--font-mono)] text-2xl font-semibold text-[#0D1B14]">
                36+1
              </dt>
              <dd className="mt-1 text-xs text-[#5B6B61]">States &amp; FCT covered</dd>
            </div>
            <div>
              <dt className="font-[family-name:var(--font-mono)] text-2xl font-semibold text-[#0D1B14]">
                774
              </dt>
              <dd className="mt-1 text-xs text-[#5B6B61]">Local Government Areas</dd>
            </div>
            <div>
              <dt className="font-[family-name:var(--font-mono)] text-2xl font-semibold text-[#0D1B14]">
                3
              </dt>
              <dd className="mt-1 text-xs text-[#5B6B61]">Tiers of government, one thread</dd>
            </div>
          </dl>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm rounded-2xl border border-[#E3EAE5] bg-[#FBFDFB] p-8 shadow-[0_20px_60px_-30px_rgba(13,27,20,0.35)]">
            <JurisdictionLadder />
            <p className="mt-6 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[#5B6B61]">
              Every report follows a visible path
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

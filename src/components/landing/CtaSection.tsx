import { ArrowRight } from "lucide-react";
import { Container } from "./shared/Container";

export function CtaSection() {
  return (
    <section id="get-started" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-[#E3EAE5] bg-[#F6F8F6] px-6 py-14 text-center sm:px-16">
          <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[#0D1B14] sm:text-4xl">
            Your report is the first step toward a fix.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-[#3F4B45] sm:text-base">
            Join citizens across all 36 states and the FCT holding their
            representatives to their word.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-md bg-[#0B6E4F] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#095A41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6E4F]"
          >
            Get Started
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}

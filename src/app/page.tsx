import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { WhyActNg } from "@/components/landing/WhyActNg";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";
import { spaceGrotesk, inter, plexMono } from "@/components/landing/fonts";

// ACT NG landing page. Composed entirely of reusable section
// components from src/components/landing — no auth or Supabase
// logic here yet, that comes in a later phase.
export default function Home() {
  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} font-[family-name:var(--font-body)]`}
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:m-3 focus:rounded-md focus:bg-[#0B6E4F] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <WhyActNg />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}

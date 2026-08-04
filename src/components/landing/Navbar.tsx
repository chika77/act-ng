"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "./shared/Container";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#why-act-ng" },
  { label: "How It Works", href: "#how-it-works" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E3EAE5] bg-white/85 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <a
            href="#home"
            className="flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[#0D1B14]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0B6E4F] text-sm font-bold text-white">
              A
            </span>
            ACT NG
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[#3F4B45] transition-colors hover:text-[#0B6E4F]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#sign-in"
              className="text-sm font-medium text-[#3F4B45] transition-colors hover:text-[#0B6E4F]"
            >
              Sign In
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center gap-1.5 rounded-md bg-[#0B6E4F] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#095A41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6E4F]"
            >
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#0D1B14] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="border-t border-[#E3EAE5] bg-white md:hidden">
          <Container>
            <ul className="flex flex-col gap-1 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#3F4B45] hover:bg-[#F6F8F6] hover:text-[#0B6E4F]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-[#E3EAE5] pt-3">
                <a
                  href="#sign-in"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#3F4B45] hover:bg-[#F6F8F6]"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  href="#get-started"
                  onClick={() => setOpen(false)}
                  className="mt-1 flex items-center justify-center gap-1.5 rounded-md bg-[#0B6E4F] px-3 py-2.5 text-sm font-semibold text-white"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}

import { Container } from "./shared/Container";

const FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Why ACT NG", href: "#why-act-ng" },
  ],
  Company: [
    { label: "About", href: "#why-act-ng" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#E3EAE5] bg-white py-12">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[#0D1B14]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0B6E4F] text-sm font-bold text-white">
                A
              </span>
              ACT NG
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#5B6B61]">
              A civic accountability platform connecting Nigerian citizens
              with every level of government.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wider text-[#5B6B61]">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#3F4B45] transition-colors hover:text-[#0B6E4F]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#E3EAE5] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#5B6B61]">
            © {new Date().getFullYear()} ACT NG. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#5B6B61]">
            Built for citizens, not campaigns.
          </p>
        </div>
      </Container>
    </footer>
  );
}

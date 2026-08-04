interface SectionEyebrowProps {
  children: string;
  tone?: "light" | "dark";
}

// Mono-set eyebrow tag. Echoes the FEDERAL / STATE / LGA labelling used
// in the hero's jurisdiction diagram, so the type treatment ties sections
// together instead of decorating them separately.
export function SectionEyebrow({ children, tone = "light" }: SectionEyebrowProps) {
  const textColor = tone === "light" ? "text-[#0B6E4F]" : "text-[#BFE3CE]";
  const dotColor = tone === "light" ? "bg-[#2FA366]" : "bg-white";

  return (
    <span
      className={`inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-[0.18em] ${textColor}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} aria-hidden="true" />
      {children}
    </span>
  );
}

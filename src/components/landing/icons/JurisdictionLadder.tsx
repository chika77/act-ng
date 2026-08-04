// The signature visual of the landing page. Nigeria's government is
// genuinely three tiers (Federal, State, LGA) and a report genuinely
// climbs that ladder when local response falls short — so the diagram
// encodes something true about the product rather than decorating it.
const RUNGS = [
  { label: "FEDERAL", width: "100%" },
  { label: "STATE", width: "76%" },
  { label: "LGA", width: "52%" },
] as const;

export function JurisdictionLadder() {
  return (
    <div
      role="img"
      aria-label="Diagram of Nigeria's three tiers of government — Federal, State, and Local Government Area — connected by a path a citizen report can climb"
      className="relative w-full max-w-sm"
    >
      <div className="flex flex-col gap-5">
        {RUNGS.map((rung) => (
          <div key={rung.label} className="flex items-center gap-3">
            <span className="w-16 shrink-0 font-[family-name:var(--font-mono)] text-[11px] font-medium tracking-wider text-[#5B6B61]">
              {rung.label}
            </span>
            <span
              className="h-9 rounded-md border border-[#CFE0D6] bg-gradient-to-r from-[#EAF4EE] to-[#F6F8F6]"
              style={{ width: rung.width }}
            />
          </div>
        ))}
      </div>

      {/* Vertical path a report travels, with a marker climbing it */}
      <div
        className="absolute left-[4.6rem] top-4 bottom-4 w-px bg-[#CFE0D6]"
        aria-hidden="true"
      />
      <div
        className="absolute left-[4.15rem] bottom-2 h-3 w-3 rounded-full bg-[#2FA366] shadow-[0_0_0_4px_rgba(47,163,102,0.18)] motion-safe:animate-[act-ng-climb_3.6s_ease-in-out_infinite]"
        aria-hidden="true"
      />

      <style>{`
        @keyframes act-ng-climb {
          0%, 100% { bottom: 0.5rem; }
          50% { bottom: 4.5rem; }
        }
      `}</style>
    </div>
  );
}

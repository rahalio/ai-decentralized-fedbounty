'use client';

type Tier = { minImprovementPercent: number; payoutAmount: string };

export function RewardCurveEditor({
  tiers,
}: {
  tiers: Tier[];
}) {
  return (
    <div className="border border-white/10 bg-ocean-900 p-4">
      <h3 className="mb-3 font-display text-sm uppercase tracking-widest text-steel">
        Reward curve
      </h3>
      <ul className="space-y-2">
        {tiers.map((t) => (
          <li
            key={`${t.minImprovementPercent}-${t.payoutAmount}`}
            className="flex items-center justify-between font-mono text-sm"
          >
            <span>≥ {t.minImprovementPercent}% holdout lift</span>
            <span className="text-ledger">${t.payoutAmount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

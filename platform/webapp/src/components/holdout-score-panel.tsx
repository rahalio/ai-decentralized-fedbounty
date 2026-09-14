'use client';

export function HoldoutScorePanel({
  improvementPercent,
  snapshotId,
  payoutEligible,
}: {
  improvementPercent: number;
  snapshotId: string;
  payoutEligible: boolean;
}) {
  return (
    <div className="motion-eval border border-white/10 bg-ocean-900 p-4" role="status">
      <h3 className="mb-2 font-display text-sm uppercase tracking-widest text-steel">
        Holdout score
      </h3>
      <p className="font-display text-3xl text-ink">
        {improvementPercent > 0 ? '+' : ''}
        {improvementPercent.toFixed(1)}%
      </p>
      <p className="mt-2 font-mono text-xs text-steel">snapshot {snapshotId}</p>
      <p className={`mt-2 text-sm ${payoutEligible ? 'text-ledger' : 'text-steel'}`}>
        {payoutEligible ? 'Payout eligible' : 'Not eligible'}
      </p>
    </div>
  );
}

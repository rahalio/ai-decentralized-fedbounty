'use client';

export function PoisonRejectBanner({
  publicMetricPercent,
  holdoutImprovementPercent,
}: {
  publicMetricPercent: number;
  holdoutImprovementPercent: number;
}) {
  return (
    <div
      className="border border-coral/40 bg-coral/10 px-4 py-3 text-sm text-ink"
      role="alert"
    >
      <strong className="font-display text-coral">Poison reject.</strong> Public
      metric rose to {publicMetricPercent.toFixed(1)}% while holdout fell to{' '}
      {holdoutImprovementPercent.toFixed(1)}%. No merge, no payout.
    </div>
  );
}

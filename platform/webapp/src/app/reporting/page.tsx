'use client';

import { ScreenHeader } from '@/components/screen-header';
import { PayoutAuditRow } from '@/components/payout-audit-row';
import { DEMO_PAYOUTS, DEMO_EVALS } from '@/lib/demo-data';

export default function ReportingPage() {
  const avgLift =
    DEMO_EVALS.reduce((s, e) => s + e.holdoutImprovementPercent, 0) /
    DEMO_EVALS.length;

  return (
    <div>
      <ScreenHeader
        kicker="Reporting"
        title="Export payouts tied to validation deltas and model hashes"
        brandSeal
      />
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="border border-white/10 bg-ocean-900 p-4">
          <p className="text-xs uppercase tracking-widest text-steel">Evaluations</p>
          <p className="font-display text-2xl">{DEMO_EVALS.length}</p>
        </div>
        <div className="border border-white/10 bg-ocean-900 p-4">
          <p className="text-xs uppercase tracking-widest text-steel">Avg lift</p>
          <p className="font-display text-2xl">{avgLift.toFixed(1)}%</p>
        </div>
        <div className="border border-white/10 bg-ocean-900 p-4">
          <p className="text-xs uppercase tracking-widest text-steel">Total paid</p>
          <p className="font-display text-2xl text-ledger">
            $
            {DEMO_PAYOUTS.filter((p) => p.status === 'paid')
              .reduce((s, p) => s + Number(p.amount), 0)
              .toFixed(2)}
          </p>
        </div>
      </div>
      <div className="mb-4 flex gap-3">
        <button type="button" className="border border-brand/40 bg-brand/10 px-4 py-2 text-sm text-brand">
          Replay dispute
        </button>
        <button type="button" className="border border-white/20 px-4 py-2 text-sm">
          Export audit
        </button>
      </div>
      <ul className="space-y-3">
        {DEMO_PAYOUTS.map((p) => (
          <li key={p.payoutId}>
            <PayoutAuditRow payout={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}

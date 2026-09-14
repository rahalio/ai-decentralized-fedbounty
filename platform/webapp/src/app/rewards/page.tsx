'use client';

import { ScreenHeader } from '@/components/screen-header';
import { EscrowPoolMeter } from '@/components/escrow-pool-meter';
import { PayoutAuditRow } from '@/components/payout-audit-row';
import { DEMO_PAYOUTS } from '@/lib/demo-data';

export default function RewardsPage() {
  return (
    <div>
      <ScreenHeader
        kicker="Rewards & escrow"
        title="Map improvement percent to payout — zero pay for non-positive lift"
        brandSeal
      />
      <div className="mb-8 grid gap-4 lg:grid-cols-2">
        <EscrowPoolMeter remaining="12450.00" perWorkerCap="500.00" />
        <div className="border border-white/10 bg-ocean-900 p-4">
          <h3 className="mb-2 font-display text-sm uppercase tracking-widest text-steel">
            Settlement
          </h3>
          <p className="text-sm text-steel">
            Auto-pay when holdout lift clears the reward curve. Drain attempts stop
            at per-worker caps.
          </p>
          <div className="mt-4 flex gap-3">
            <button type="button" className="border border-ledger/40 px-4 py-2 text-sm text-ledger">
              Confirm auto-pay
            </button>
            <button type="button" className="border border-white/20 px-4 py-2 text-sm">
              Pause escrow
            </button>
          </div>
        </div>
      </div>
      <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-steel">
        Payout log
      </h2>
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

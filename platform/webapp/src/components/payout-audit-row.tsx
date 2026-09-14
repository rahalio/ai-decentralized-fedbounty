'use client';

import type { DemoPayout } from '@/lib/demo-data';

export function PayoutAuditRow({ payout }: { payout: DemoPayout }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-3 border border-white/10 px-4 py-3 ${
        payout.status === 'paid' ? 'motion-pay' : ''
      }`}
    >
      <div>
        <p className="font-mono text-xs text-steel">{payout.payoutId}</p>
        <p className="font-mono text-sm text-brand">{payout.modelCid}</p>
      </div>
      <div className="text-right">
        <p className="font-display text-lg">
          {payout.holdoutImprovementPercent > 0 ? '+' : ''}
          {payout.holdoutImprovementPercent.toFixed(1)}%
        </p>
        <p
          className={
            payout.status === 'paid'
              ? 'text-ledger'
              : payout.status === 'zero'
                ? 'text-steel'
                : 'text-buoy'
          }
        >
          ${payout.amount} · {payout.status}
        </p>
      </div>
    </div>
  );
}

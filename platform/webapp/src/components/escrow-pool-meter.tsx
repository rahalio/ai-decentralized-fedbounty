'use client';

export function EscrowPoolMeter({
  remaining,
  perWorkerCap,
  currency = 'USD',
}: {
  remaining: string;
  perWorkerCap?: string;
  currency?: string;
}) {
  return (
    <div className="border border-white/10 bg-ocean-900 p-4">
      <h3 className="mb-2 font-display text-sm uppercase tracking-widest text-steel">
        Escrow pool
      </h3>
      <p className="font-display text-2xl text-ledger">
        {remaining} <span className="text-base text-steel">{currency}</span>
      </p>
      {perWorkerCap ? (
        <p className="mt-2 font-mono text-xs text-steel">
          per-worker cap {perWorkerCap} {currency}
        </p>
      ) : null}
    </div>
  );
}

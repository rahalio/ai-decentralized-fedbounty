'use client';

import Link from 'next/link';
import { ScreenHeader } from '@/components/screen-header';
import { EscrowPoolMeter } from '@/components/escrow-pool-meter';
import { DEMO_BOUNTIES, DEMO_EVALS } from '@/lib/demo-data';

export default function OrganiserHomePage() {
  const open = DEMO_BOUNTIES.filter((b) => b.status === 'open');
  const frozen = DEMO_BOUNTIES.filter((b) => b.status === 'frozen');
  const poison = DEMO_EVALS.filter((e) => e.poisonDetected).length;
  const totalEscrow = DEMO_BOUNTIES.reduce(
    (sum, b) => sum + Number(b.escrowRemaining),
    0,
  );

  return (
    <div>
      <ScreenHeader
        kicker="Organiser desk"
        title="Which bounties bought real holdout lift per escrow dollar?"
        brandSeal
      />
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section>
          <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-steel">
            Active bounties
          </h2>
          {open.length === 0 ? (
            <p className="text-steel">
              Publish a base model, holdout snapshot, and reward curve to open the
              first bounty.
            </p>
          ) : (
            <ul className="space-y-3">
              {open.map((b) => (
                <li key={b.bountyId}>
                  <Link
                    href="/bounties"
                    className="flex items-center justify-between border border-white/10 bg-ocean-900 px-4 py-3"
                  >
                    <span>
                      <span className="block font-display">{b.name}</span>
                      <span className="font-mono text-xs text-steel">
                        {b.bountyId}
                      </span>
                    </span>
                    <span className="text-ledger">
                      {b.liftPerDollar.toFixed(3)} lift/$
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex gap-3">
            <Link
              href="/bounties"
              className="border border-brand/40 bg-brand/10 px-4 py-2 text-sm text-brand"
            >
              Create bounty
            </Link>
            <Link href="/validations" className="border border-white/20 px-4 py-2 text-sm">
              Evaluation queue
            </Link>
            <Link href="/reporting" className="border border-white/20 px-4 py-2 text-sm">
              Export finance pack
            </Link>
          </div>
        </section>
        <aside className="space-y-6">
          <EscrowPoolMeter remaining={totalEscrow.toFixed(2)} perWorkerCap="500.00" />
          <section>
            <h2 className="mb-2 font-display text-sm uppercase tracking-widest text-steel">
              Poison rejects
            </h2>
            <p className="font-display text-2xl text-coral">{poison}</p>
            <p className="mt-1 text-sm text-steel">
              Public up / holdout down — rejected before merge.
            </p>
          </section>
          {frozen.length > 0 ? (
            <section className="motion-freeze border border-coral/30 bg-coral/10 p-4">
              <h2 className="mb-2 font-display text-sm uppercase tracking-widest text-coral">
                Freeze alerts
              </h2>
              <p className="text-sm">
                {frozen.length} bounty frozen on leakage suspicion. Evals and
                payouts halted.
              </p>
            </section>
          ) : null}
        </aside>
      </div>
    </div>
  );
}

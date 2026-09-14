'use client';

import { ScreenHeader } from '@/components/screen-header';
import { RewardCurveEditor } from '@/components/reward-curve-editor';
import { IpfsCidManifest } from '@/components/ipfs-cid-manifest';
import { EscrowPoolMeter } from '@/components/escrow-pool-meter';
import { DEMO_BOUNTIES } from '@/lib/demo-data';

export default function BountiesPage() {
  return (
    <div>
      <ScreenHeader
        kicker="Bounty catalogue"
        title="Publish base model, holdout binding, reward curve, and privacy flags"
      />
      <div className="mb-6 flex gap-3">
        <button type="button" className="border border-brand/40 bg-brand/10 px-4 py-2 text-sm text-brand">
          Publish
        </button>
        <button type="button" className="border border-white/20 px-4 py-2 text-sm">
          Freeze
        </button>
        <button type="button" className="border border-white/20 px-4 py-2 text-sm">
          Clone
        </button>
      </div>
      <div className="mb-8 grid gap-4 lg:grid-cols-2">
        <RewardCurveEditor
          tiers={[
            { minImprovementPercent: 0.5, payoutAmount: '50.00' },
            { minImprovementPercent: 1.0, payoutAmount: '150.00' },
            { minImprovementPercent: 2.0, payoutAmount: '420.00' },
          ]}
        />
        <EscrowPoolMeter remaining="12450.00" perWorkerCap="500.00" />
      </div>
      <ul className="space-y-4">
        {DEMO_BOUNTIES.map((b) => (
          <li key={b.bountyId} className="border border-white/10 bg-ocean-900 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-display text-lg">{b.name}</p>
                <p className="font-mono text-xs text-steel">{b.bountyId}</p>
              </div>
              <span
                className={
                  b.status === 'open'
                    ? 'text-ledger'
                    : b.status === 'frozen'
                      ? 'text-coral'
                      : 'text-buoy'
                }
              >
                {b.status}
              </span>
            </div>
            <div className="mt-3">
              <IpfsCidManifest cid={b.baseModelCid} label="base model" />
            </div>
            <p className="mt-2 text-sm text-steel">privacy mode: {b.privacyMode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

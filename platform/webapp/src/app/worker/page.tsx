'use client';

import Link from 'next/link';
import { ScreenHeader } from '@/components/screen-header';
import { WorkerAttestationChecklist } from '@/components/worker-attestation-checklist';
import { IpfsCidManifest } from '@/components/ipfs-cid-manifest';
import { DEMO_BOUNTIES } from '@/lib/demo-data';

export default function WorkerHomePage() {
  const open = DEMO_BOUNTIES.filter((b) => b.status === 'open');

  return (
    <div>
      <ScreenHeader
        kicker="Worker console"
        title="Enroll, attest, train locally — submit CIDs, never holdout labels"
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-steel">
            Open bounties
          </h2>
          <ul className="space-y-3">
            {open.map((b) => (
              <li key={b.bountyId} className="border border-white/10 bg-ocean-900 p-4">
                <p className="font-display">{b.name}</p>
                <p className="mt-1 text-sm text-steel">privacy: {b.privacyMode}</p>
                <div className="mt-3">
                  <IpfsCidManifest cid={b.baseModelCid} label="base" />
                </div>
                <Link
                  href="/bounties"
                  className="mt-3 inline-block text-sm text-brand"
                >
                  Enroll
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-steel">
            Environment attestation
          </h2>
          <WorkerAttestationChecklist />
          <p className="mt-4 text-sm text-steel">
            Failed attestation blocks base-model download. Training stays on your
            machine.
          </p>
          <Link
            href="/submissions"
            className="mt-4 inline-block border border-white/20 px-4 py-2 text-sm"
          >
            Open submit
          </Link>
        </section>
      </div>
    </div>
  );
}

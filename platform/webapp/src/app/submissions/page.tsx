'use client';

import { ScreenHeader } from '@/components/screen-header';
import { IpfsCidManifest } from '@/components/ipfs-cid-manifest';
import { DEMO_SUBMISSIONS } from '@/lib/demo-data';

export default function SubmissionsPage() {
  return (
    <div>
      <ScreenHeader
        kicker="Artifact intake"
        title="Content-addressed model updates — CIDs only, never on-chain weight blobs"
      />
      <div className="mb-6 flex gap-3">
        <button type="button" className="border border-brand/40 bg-brand/10 px-4 py-2 text-sm text-brand">
          Submit CID
        </button>
        <button type="button" className="border border-white/20 px-4 py-2 text-sm">
          Retry
        </button>
      </div>
      <ul className="space-y-3">
        {DEMO_SUBMISSIONS.map((s) => (
          <li key={s.submissionId} className="border border-white/10 bg-ocean-900 p-4">
            <div className="mb-2 flex justify-between">
              <span className="font-mono text-xs text-steel">{s.submissionId}</span>
              <span
                className={
                  s.status === 'evaluating'
                    ? 'text-buoy'
                    : s.status === 'rejected'
                      ? 'text-coral'
                      : 'text-ledger'
                }
              >
                {s.status}
              </span>
            </div>
            <IpfsCidManifest cid={s.modelCid} label="model" />
            <p className="mt-2 font-mono text-xs text-steel">
              worker {s.workerId}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

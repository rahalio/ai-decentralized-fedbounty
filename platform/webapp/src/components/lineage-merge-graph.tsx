'use client';

import type { DemoVersion } from '@/lib/demo-data';

export function LineageMergeGraph({ versions }: { versions: DemoVersion[] }) {
  return (
    <ul className="space-y-3">
      {versions.map((v) => (
        <li key={v.versionId} className="border border-white/10 bg-ocean-900 px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-brand">{v.modelCid}</span>
            <span className={v.canonical ? 'text-ledger' : 'text-steel'}>
              {v.canonical ? 'canonical' : 'candidate'}
            </span>
          </div>
          <p className="mt-2 text-xs text-steel">
            contributors: {v.contributorWorkerIds.join(', ')}
          </p>
          {v.mergeConflict ? (
            <p className="mt-2 text-sm text-coral">Merge conflict needs human resolve</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

'use client';

import { ScreenHeader } from '@/components/screen-header';
import { LineageMergeGraph } from '@/components/lineage-merge-graph';
import { DEMO_VERSIONS } from '@/lib/demo-data';

export default function LineagePage() {
  return (
    <div>
      <ScreenHeader
        kicker="Model lineage"
        title="Aggregate accepted improvements into canonical versions with provenance"
      />
      <div className="mb-6 flex gap-3">
        <button type="button" className="border border-brand/40 bg-brand/10 px-4 py-2 text-sm text-brand">
          Merge
        </button>
        <button type="button" className="border border-white/20 px-4 py-2 text-sm">
          Pin canonical
        </button>
      </div>
      <LineageMergeGraph versions={DEMO_VERSIONS} />
    </div>
  );
}

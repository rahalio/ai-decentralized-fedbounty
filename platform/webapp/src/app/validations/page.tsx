'use client';

import { ScreenHeader } from '@/components/screen-header';
import { HoldoutScorePanel } from '@/components/holdout-score-panel';
import { PoisonRejectBanner } from '@/components/poison-reject-banner';
import { DEMO_EVALS } from '@/lib/demo-data';

export default function ValidationsPage() {
  const poison = DEMO_EVALS.find((e) => e.poisonDetected);
  const good = DEMO_EVALS.find((e) => !e.poisonDetected);

  return (
    <div>
      <ScreenHeader
        kicker="Holdout validation desk"
        title="Score exclusively on organiser-held validation — surface anti-poison"
      />
      <div className="mb-6 flex gap-3">
        <button type="button" className="border border-brand/40 bg-brand/10 px-4 py-2 text-sm text-brand">
          Run eval
        </button>
        <button type="button" className="border border-white/20 px-4 py-2 text-sm">
          Dispute replay
        </button>
      </div>
      {poison ? (
        <div className="mb-6">
          <PoisonRejectBanner
            publicMetricPercent={poison.publicMetricPercent}
            holdoutImprovementPercent={poison.holdoutImprovementPercent}
          />
        </div>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        {good ? (
          <HoldoutScorePanel
            improvementPercent={good.holdoutImprovementPercent}
            snapshotId={good.snapshotId}
            payoutEligible={good.payoutEligible}
          />
        ) : null}
        {poison ? (
          <HoldoutScorePanel
            improvementPercent={poison.holdoutImprovementPercent}
            snapshotId={poison.snapshotId}
            payoutEligible={poison.payoutEligible}
          />
        ) : null}
      </div>
      <p className="mt-6 text-sm text-steel">
        Workers never see holdout labels or subsets. Snapshot ids are organiser-only
        custody evidence.
      </p>
    </div>
  );
}

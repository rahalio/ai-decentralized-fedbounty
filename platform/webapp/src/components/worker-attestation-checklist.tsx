'use client';

const CHECKS = [
  'Runtime matches bounty manifest',
  'Local-train only — no raw data egress',
  'Anti-poison terms accepted',
  'Holdout labels inaccessible',
];

export function WorkerAttestationChecklist({
  completed = [true, true, true, false],
}: {
  completed?: boolean[];
}) {
  return (
    <ul className="space-y-2">
      {CHECKS.map((label, i) => (
        <li
          key={label}
          className="flex items-center gap-3 border border-white/10 px-3 py-2 text-sm"
        >
          <span className={completed[i] ? 'text-ledger' : 'text-buoy'}>
            {completed[i] ? '✓' : '○'}
          </span>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}

'use client';

export function IpfsCidManifest({
  cid,
  label,
}: {
  cid: string;
  label?: string;
}) {
  return (
    <div className="flex items-baseline gap-3 border border-white/10 px-3 py-2">
      {label ? (
        <span className="text-xs uppercase tracking-widest text-steel">{label}</span>
      ) : null}
      <code className="font-mono text-sm text-brand">{cid}</code>
    </div>
  );
}

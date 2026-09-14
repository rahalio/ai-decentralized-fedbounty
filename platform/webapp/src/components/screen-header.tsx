export function ScreenHeader({
  kicker,
  title,
  brandSeal,
}: {
  kicker: string;
  title: string;
  brandSeal?: boolean;
}) {
  return (
    <header className="mb-8">
      <div className="mb-2 flex items-center gap-3">
        <p className="font-display text-xs uppercase tracking-widest text-steel">
          {kicker}
        </p>
        {brandSeal ? (
          <span className="font-display text-xs tracking-wide text-brand">
            Fedbounty
          </span>
        ) : null}
      </div>
      <h1 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-ink">
        {title}
      </h1>
    </header>
  );
}

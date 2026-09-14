'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { useAuth } from '@/contexts/auth-context';

export default function LoginPage() {
  const { signIn, signInWithDemoKey } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('admin@demo.local');
  const [password, setPassword] = useState('sandbox-admin-8');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      await signIn(email, password);
      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign-in failed');
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-ocean-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(6,16,24,0.2) 0%, rgba(6,16,24,0.85) 55%, #061018 100%), repeating-linear-gradient(90deg, transparent 0 47px, rgba(126,147,166,0.06) 47px 48px)',
        }}
      />
      <div className="relative mx-auto flex min-h-screen max-w-xl flex-col justify-end px-8 pb-20 pt-16">
        <p className="font-display text-4xl tracking-[0.12em] text-brand md:text-6xl">
          Fedbounty
        </p>
        <h1 className="mt-8 font-display text-3xl text-ink md:text-4xl">
          Pay for holdout lift, not uploads
        </h1>
        <p className="mt-3 max-w-md text-sm text-steel">
          Federated local training with escrow settled on organiser-held
          validation — not self-reported gradients.
        </p>
        <form className="mt-10 flex flex-col gap-3" onSubmit={onSubmit}>
          <label className="text-sm text-steel">
            Email
            <input
              className="mt-1 w-full border border-white/15 bg-ocean-900 px-3 py-2 text-ink"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="text-sm text-steel">
            Password
            <input
              type="password"
              className="mt-1 w-full border border-white/15 bg-ocean-900 px-3 py-2 text-ink"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error ? <p className="text-sm text-coral">{error}</p> : null}
          <button
            type="submit"
            className="mt-2 bg-ink px-5 py-3 font-display text-ocean-950"
          >
            Enter the exchange
          </button>
          <button
            type="button"
            className="text-left text-sm text-steel underline-offset-4 hover:text-ink hover:underline"
            onClick={() => {
              signInWithDemoKey();
              router.push('/');
            }}
          >
            Continue with demo API key
          </button>
        </form>
      </div>
    </div>
  );
}

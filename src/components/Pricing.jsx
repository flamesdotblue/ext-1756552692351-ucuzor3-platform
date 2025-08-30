import React from 'react';

export default function Pricing() {
  const tiers = [
    {
      name: 'Day Pass',
      price: '$24',
      details: ['All-day access', 'Bouldering + Auto-Belay', 'Youth (13-) $18'],
      cta: { label: 'Grab a Pass', href: '#' },
    },
    {
      name: '10-Visit Punch',
      price: '$199',
      details: ['Shareable', 'No expiry', 'Includes rentals x2'],
      highlight: true,
      cta: { label: 'Buy 10-Visit', href: '#' },
    },
    {
      name: 'Monthly Membership',
      price: '$89',
      details: ['Unlimited access', 'Guest pass monthly', 'Member events & comps'],
      cta: { label: 'Become a Member', href: '#' },
    },
    {
      name: 'Rentals',
      price: '$7',
      details: ['Shoes $7', 'Chalk $3', 'Harness $6'],
      cta: { label: 'Rent at Front Desk', href: '#' },
    },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Pricing</h2>
      <p className="mt-2 text-zinc-300 max-w-2xl">
        Simple options for every climber—from drop-ins to dedicated crushers.
      </p>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-2xl border p-6 flex flex-col ${
              t.highlight
                ? 'border-white/30 bg-zinc-900/70 shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset,0_20px_80px_-40px_rgba(255,255,255,0.3)]'
                : 'border-white/10 bg-zinc-900/40'
            }`}
          >
            {t.highlight && (
              <div className="absolute -top-3 left-4 px-2 py-1 rounded-md text-[10px] font-black tracking-wider uppercase bg-white text-zinc-900">
                Popular
              </div>
            )}
            <h3 className="text-lg font-bold">{t.name}</h3>
            <div className="mt-2 text-3xl font-black">{t.price}
              <span className="ml-1 text-xs font-semibold text-zinc-400">+tax</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {t.details.map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                  {d}
                </li>
              ))}
            </ul>
            <a
              href={t.cta.href}
              className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold transition-colors ${
                t.highlight ? 'bg-white text-zinc-900 hover:bg-zinc-100' : 'border border-white/20 bg-white/10 hover:bg-white/15'
              }`}
            >
              {t.cta.label}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 text-xs text-zinc-400">
        Prices in CAD. Student, youth, and family discounts available in-gym with valid ID.
      </div>
    </div>
  );
}

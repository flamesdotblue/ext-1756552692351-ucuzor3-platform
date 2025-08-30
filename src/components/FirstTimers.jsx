import React from 'react';

export default function FirstTimers() {
  const steps = [
    {
      title: 'Sign the Waiver',
      desc: 'Save time at the front desk. Complete your waiver online before you arrive.',
      cta: { label: 'Fill Out Waiver', href: '#' },
    },
    {
      title: 'Get Oriented',
      desc: '5-minute safety briefing and a tour of bouldering, auto-belays, and training zones.',
      cta: { label: 'What to Expect', href: '#' },
    },
    {
      title: 'Rent Gear',
      desc: 'Climbing shoes and chalk rentals available. Wear comfy athletic clothing.',
      cta: { label: 'Gear & Sizing', href: '#' },
    },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">First Time at Granite Lab?</h2>
      <p className="mt-2 text-zinc-300 max-w-2xl">
        Everyone is welcome—no experience needed. Our staff will get you set up and sending in minutes.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="relative rounded-xl border border-white/10 bg-zinc-900/40 p-6">
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-20 blur-2xl bg-white/20" />
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white text-zinc-900 font-black shadow">{i + 1}</div>
            <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
            <p className="mt-1 text-sm text-zinc-300">{s.desc}</p>
            <a href={s.cta.href} className="mt-4 inline-flex text-sm font-semibold text-white/90 hover:text-white">
              {s.cta.label}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=1200&auto=format&fit=crop"
            alt="First time climbers getting tips"
            className="w-full h-56 object-cover"
          />
          <div className="p-4 bg-zinc-900/60">
            <p className="text-sm text-zinc-300">Friendly coaches and a supportive community to help you try your first climbs.</p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1516567727245-03e7d4c8a9c8?q=80&w=1200&auto=format&fit=crop"
            alt="Bouldering wall"
            className="w-full h-56 object-cover"
          />
          <div className="p-4 bg-zinc-900/60">
            <p className="text-sm text-zinc-300">Fresh sets weekly across all grades, from V0 to V10+. Rentals available on site.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useMemo, useState } from 'react';

function statusFromPercent(p) {
  if (p < 35) return { label: 'Low', color: 'bg-emerald-500', text: 'text-emerald-400' };
  if (p < 70) return { label: 'Moderate', color: 'bg-amber-500', text: 'text-amber-400' };
  return { label: 'High', color: 'bg-rose-500', text: 'text-rose-400' };
}

export default function CrowdMeter() {
  const [percent, setPercent] = useState(() => 35 + Math.round(Math.random() * 40));

  useEffect(() => {
    const id = setInterval(() => {
      setPercent((prev) => {
        const delta = Math.round((Math.random() - 0.5) * 12);
        const next = Math.min(100, Math.max(0, prev + delta));
        return next;
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const status = useMemo(() => statusFromPercent(percent), [percent]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Live Crowd Meter</h2>
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live
        </div>
      </div>

      <p className="text-zinc-300 mb-6">Real-time estimate of gym occupancy. Updated every few seconds.</p>

      <div className="space-y-4">
        <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
          <div
            className={`${status.color} h-full rounded-full transition-all duration-700`}
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${status.color}`} />
            <span className="text-zinc-300">Now:</span>
            <span className={`font-semibold ${status.text}`}>{status.label}</span>
          </div>
          <div className="text-zinc-400">{percent}% capacity</div>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
        <div className="rounded-xl border border-white/10 p-4 bg-white/5">
          <p className="text-zinc-400">Typically Quiet</p>
          <p className="font-semibold text-zinc-100">Weekdays 6:30–9:00a</p>
        </div>
        <div className="rounded-xl border border-white/10 p-4 bg-white/5">
          <p className="text-zinc-400">Busiest</p>
          <p className="font-semibold text-zinc-100">Weeknights 6:00–8:30p</p>
        </div>
        <div className="rounded-xl border border-white/10 p-4 bg-white/5">
          <p className="text-zinc-400">Pro Tip</p>
          <p className="font-semibold text-zinc-100">Arrive 90 mins before close for more sends.</p>
        </div>
      </div>
    </div>
  );
}

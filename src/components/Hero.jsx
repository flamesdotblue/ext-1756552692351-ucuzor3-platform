import React from 'react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[70vh] md:h-[78vh] w-full overflow-hidden rounded-b-[2rem] border-b border-white/10">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2060&auto=format&fit=crop"
          alt="Climber on overhang"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto h-full px-4 flex flex-col justify-end pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-white/15 mb-4 text-xs tracking-wide uppercase">
              Vancouver, BC
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              Open Now
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)]">
              Climb Bold. Breathe Chalk.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-zinc-200">
              World-class bouldering and rope lines in the heart of Vancouver. Modern setting, fresh holds, and a community that sends.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold bg-white text-zinc-900 hover:bg-zinc-100 transition-colors">
                View Pricing
              </a>
              <a href="#first" className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold border border-white/20 bg-white/10 hover:bg-white/15 backdrop-blur">
                First Time? Start Here
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),transparent_60%)] blur-2xl" />
      </div>
    </section>
  );
}

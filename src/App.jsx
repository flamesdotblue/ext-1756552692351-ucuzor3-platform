import React from 'react';
import Hero from './components/Hero';
import CrowdMeter from './components/CrowdMeter';
import FirstTimers from './components/FirstTimers';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.05),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.06),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.08] mix-blend-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584169030024-9455733f0f87?q=80&w=1200&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 bg-zinc-950/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight text-xl">
            <span className="inline-block w-2 h-6 bg-white mr-1 shadow-[0_0_30px_#fff]" />
            Granite Lab Vancouver
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#crowd" className="hover:text-zinc-200">Crowd</a>
            <a href="#first" className="hover:text-zinc-200">First Timers</a>
            <a href="#pricing" className="hover:text-zinc-200">Pricing</a>
            <a href="#hours" className="hover:text-zinc-200">Hours</a>
          </nav>
        </div>
      </header>

      <main id="top" className="relative">
        <Hero />
        <section id="crowd" className="max-w-6xl mx-auto px-4 py-16">
          <CrowdMeter />
        </section>
        <section id="first" className="max-w-6xl mx-auto px-4 py-16">
          <FirstTimers />
        </section>
        <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">
          <Pricing />
        </section>
        <section id="hours" className="max-w-6xl mx-auto px-4 py-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6">Hours & Location</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-2 text-zinc-200">
                  <p>Mon–Fri: 6:30a – 11:00p</p>
                  <p>Sat–Sun: 8:00a – 10:00p</p>
                  <p className="text-sm text-zinc-400">Holiday hours may vary.</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-zinc-200">1200 Boulder Ave, Vancouver, BC</p>
                <a href="https://maps.google.com/?q=1200+Boulder+Ave+Vancouver+BC" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white">
                  Open in Maps
                  <span className="i-lucide-arrow-up-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Granite Lab Vancouver. Climb on.
      </footer>
    </div>
  );
}

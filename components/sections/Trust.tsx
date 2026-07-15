'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Trust() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Stats */}
            <div className="flex-1 space-y-12 animate-fade-in-left">
              <div className="animate-fade-in-up stagger-1">
                <p className="text-6xl font-bold text-[#ff6b35] mb-2">20</p>
                <p className="text-xl text-[#a0a0a0]">Videos / Month</p>
              </div>

              <div className="animate-fade-in-up stagger-2">
                <p className="text-6xl font-bold text-[#ff6b35] mb-2">2hrs</p>
                <p className="text-xl text-[#a0a0a0]">Your Time Only</p>
              </div>

              <div className="animate-fade-in-up stagger-3">
                <p className="text-6xl font-bold text-[#ff6b35] mb-2">5</p>
                <p className="text-xl text-[#a0a0a0]">Competitors Analyzed</p>
              </div>
            </div>

            {/* Trust Card */}
            <div className="flex-1">
              <div className="glass rounded-2xl p-8 glow-orange-sm animate-fade-in-right">
                <div className="flex gap-3 mb-6">
                  <span className="text-3xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-2xl font-bold mb-4">Trusted by founders & coaches</p>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Join creators who are already building their authority through strategic content. Proven system. Zero guesswork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function FinalCTA() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-animate text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready To Become An <span className="text-[#ff6b35]">Authority?</span>
          </h2>

          <p className="text-xl text-[#a0a0a0] mb-8 max-w-2xl mx-auto">
            Only 3 launch spots available. After these are claimed, the price goes up to full $2,995/month.
          </p>

          <div className="bg-[#ff6b35]/10 border-2 border-[#ff6b35]/50 rounded-xl p-8 mb-12 glow-orange-sm animate-fade-in-up stagger-1">
            <p className="text-2xl font-bold mb-4">
              <span className="text-[#ff6b35]">⚡ Launch Offer: $500 Month 1</span>
            </p>
            <p className="text-[#a0a0a0] mb-4">
              Get month 1 at 83% discount. Then $2,995/month. 45-day guarantee included.
            </p>
            <p className="text-sm text-[#606060]">
              🕐 Only 3 spots left
            </p>
          </div>

          <div className="space-y-4 mb-12 animate-fade-in-up stagger-2">
            <a
              href={getWhatsAppLink('Hi! I\'m ready to claim the $500 launch offer and start building my authority.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-10 py-5 bg-[#ff6b35] text-white text-xl font-bold rounded-full hover:bg-[#e55a28] hover-lift glow-orange transition-all animate-pulse-glow"
            >
              Claim Your Spot Now →
            </a>

            <p className="text-[#a0a0a0] text-sm">
              First response wins. We fill these fast.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-16 animate-fade-in-up stagger-3">
            <div className="glass rounded-lg p-6 border border-[#1f1f1f]">
              <p className="text-3xl mb-2">📱</p>
              <p className="font-bold mb-2">Quick Start</p>
              <p className="text-[#a0a0a0] text-sm">Response within 24 hours</p>
            </div>
            <div className="glass rounded-lg p-6 border border-[#1f1f1f]">
              <p className="text-3xl mb-2">🎯</p>
              <p className="font-bold mb-2">No Fluff</p>
              <p className="text-[#a0a0a0] text-sm">Direct chat about your goals</p>
            </div>
            <div className="glass rounded-lg p-6 border border-[#1f1f1f]">
              <p className="text-3xl mb-2">✅</p>
              <p className="font-bold mb-2">Guaranteed</p>
              <p className="text-[#a0a0a0] text-sm">45-day growth guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

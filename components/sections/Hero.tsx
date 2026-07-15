'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Hero() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="scroll-animate">
          {/* Launch Offer Badge */}
          <div className="mb-8 inline-block glass px-6 py-3 rounded-full border border-[#ff6b35]/30 animate-fade-in-up">
            <span className="text-[#ff6b35] font-semibold flex items-center gap-2">
              <span className="text-xl">⚡</span>
              Launch Offer: First 3 clients get Month 1 at $500
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up stagger-1">
            You Just Film.
            <br />
            <span className="text-[#ff6b35]">We Turn You</span>
            <br />
            Into An <span className="text-[#ff6b35]">Authority</span>.
          </h1>

          {/* Subheading */}
          <p className="text-xl text-[#a0a0a0] mb-8 max-w-lg animate-fade-in-up stagger-2">
            Research • Strategy • Viral Hooks • Scripts • Editing • Page Audit
          </p>

          <p className="text-lg text-[#606060] mb-12 animate-fade-in-up stagger-3">
            One monthly price. <span className="text-white font-semibold">Zero headaches.</span>
          </p>

          {/* CTA Button */}
          <a
            href={getWhatsAppLink('Hi! I\'m interested in the ArcTone launch offer. Can I claim Month 1 at $500?')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#ff6b35] text-white text-lg font-bold rounded-full hover:bg-[#e55a28] hover-lift glow-orange animate-fade-in-up stagger-4 transition-all"
          >
            Claim Launch Offer →
          </a>

          {/* Social Proof */}
          <p className="text-[#606060] text-sm mt-8 animate-fade-in-up stagger-5">
            ✓ Trusted by founders & coaches • ✓ Only 3 spots left
          </p>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:block">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b35]/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative glass rounded-3xl p-8 glow-orange-sm">
              <div className="bg-[#1a1a1a] rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl mb-4">📱</p>
                  <p className="text-[#a0a0a0]">See the transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

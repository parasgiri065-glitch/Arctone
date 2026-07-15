'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Pricing() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, Transparent <span className="text-[#ff6b35]">Pricing</span>
          </h2>
          <p className="text-xl text-[#a0a0a0] max-w-2xl">
            No hidden fees. One monthly price. Everything included.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Standard Plan */}
          <div className="glass rounded-2xl p-8 border border-[#1f1f1f] hover:border-[#ff6b35]/30 transition-all hover-lift animate-fade-in-left">
            <h3 className="text-3xl font-bold mb-2">Standard</h3>
            <p className="text-[#a0a0a0] mb-8">Perfect for most creators</p>

            <div className="mb-8">
              <span className="text-5xl font-bold">$2,995</span>
              <p className="text-[#a0a0a0] mt-2">per month</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                '20 videos per month',
                'Full content strategy',
                'Research & competitor analysis',
                'Viral hooks for every video',
                'Professional editing',
                'Thumbnail design',
                'Monthly page audit',
                'Direct messaging support',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[#a0a0a0]">
                  <span className="text-[#ff6b35] font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={getWhatsAppLink('Hi! I want to get started with the Standard plan.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block text-center px-8 py-3 bg-[#ff6b35] text-white font-bold rounded-lg hover:bg-[#e55a28] transition-all hover-lift"
            >
              Get Started
            </a>
          </div>

          {/* Launch Offer - Featured */}
          <div className="glass rounded-2xl p-8 border-2 border-[#ff6b35] glow-orange relative overflow-hidden hover-lift animate-fade-in-right">
            <div className="absolute top-0 right-0 bg-[#ff6b35] text-[#0a0a0a] px-4 py-1 text-sm font-bold">
              ONLY 3 LEFT
            </div>

            <h3 className="text-3xl font-bold mb-2">Launch Offer</h3>
            <p className="text-[#a0a0a0] mb-8">Limited time for first clients</p>

            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-[#ff6b35]">$500</span>
                <span className="text-[#a0a0a0] line-through">$2,995</span>
              </div>
              <p className="text-[#a0a0a0]">for your first month</p>
              <p className="text-[#606060] text-sm mt-2">Then $2,995/month</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                '20 videos per month',
                'Full content strategy',
                'Research & competitor analysis',
                'Viral hooks for every video',
                'Professional editing',
                'Thumbnail design',
                'Monthly page audit',
                'Priority support',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[#a0a0a0]">
                  <span className="text-[#ff6b35] font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={getWhatsAppLink('Hi! I\'m ready to claim the launch offer for $500 on month 1.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block text-center px-8 py-3 bg-[#ff6b35] text-[#0a0a0a] font-bold rounded-lg hover:bg-[#e55a28] transition-all hover-lift animate-pulse-glow"
            >
              Claim $500 Launch Offer
            </a>

            <p className="text-[#ff6b35] text-sm text-center mt-4 font-semibold">
              ⚡ Only 3 spots available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

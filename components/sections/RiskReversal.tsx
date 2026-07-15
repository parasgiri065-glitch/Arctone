'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function RiskReversal() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-animate">
          <div className="glass rounded-2xl p-12 border-2 border-[#ff6b35]/30 glow-orange-sm animate-scale-in">
            <div className="text-center">
              <p className="text-[#ff6b35] font-bold text-lg mb-4 animate-fade-in-up">
                🔒 THE ARCTONE GUARANTEE
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up stagger-1">
                We Remove The Risk.
              </h2>
              <p className="text-xl text-[#a0a0a0] mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-2">
                If you\'re not seeing meaningful engagement growth on your content by day 45, we\'ll work for free until you do.
              </p>

              <div className="bg-[#141414] rounded-xl p-8 mb-8 animate-fade-in-up stagger-3">
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-4">
                    <span className="text-[#ff6b35] text-2xl">✓</span>
                    <div>
                      <p className="font-bold mb-1">Week 1-4: Foundation</p>
                      <p className="text-[#a0a0a0]">We audit, strategize, and deliver first batch of videos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[#ff6b35] text-2xl">✓</span>
                    <div>
                      <p className="font-bold mb-1">Week 5-6: Day 45 Review</p>
                      <p className="text-[#a0a0a0]">We review your engagement metrics together</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[#ff6b35] text-2xl">✓</span>
                    <div>
                      <p className="font-bold mb-1">Not Satisfied?</p>
                      <p className="text-[#a0a0a0]">We work free until results appear. No questions asked.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[#a0a0a0] mb-12 animate-fade-in-up stagger-4">
                <span className="text-white font-semibold">This is how confident we are in our system.</span> We make money only when you succeed.
              </p>

              <a
                href={getWhatsAppLink('I want to join ArcTone with the risk reversal guarantee.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-[#ff6b35] text-white text-lg font-bold rounded-full hover:bg-[#e55a28] hover-lift glow-orange animate-fade-in-up stagger-5 transition-all"
              >
                Join With Full Confidence →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

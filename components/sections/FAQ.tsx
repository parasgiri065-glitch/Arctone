'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faqs = [
  {
    question: 'Do you work with all niches?',
    answer: 'We specialize in B2B creators, coaches, consultants, and thought leaders. If your goal is to build authority and attract high-ticket clients, we\'re the right fit.',
  },
  {
    question: 'What if I don\'t have existing content?',
    answer: 'That\'s perfectly fine. Many of our clients start from scratch. You just need to be willing to film 10-30 minutes of raw footage each month. That\'s it.',
  },
  {
    question: 'How long until I see results?',
    answer: 'Month 1 is about building foundation and initial momentum. By month 2-3, you\'ll see meaningful engagement growth. By month 4+, authority is undeniable.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. No long-term contracts. Month-to-month basis. That said, most clients stick around because the results speak for themselves.',
  },
  {
    question: 'What platform should I post on?',
    answer: 'Instagram Reels is our specialty. TikTok, YouTube Shorts, and LinkedIn work too with slight tweaks. We optimize for the platform that matters most for your niche.',
  },
  {
    question: 'Will you handle my social posting?',
    answer: 'You handle posting (or hire someone for $200-500/month). Our job is creating the content that makes you look like an authority when it goes live.',
  },
];

export default function FAQ() {
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-animate mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Common <span className="text-[#ff6b35]">Questions</span>
          </h2>
          <p className="text-xl text-[#a0a0a0]">
            Everything you need to know about working with ArcTone.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass rounded-lg border border-[#ff6b35]/20 overflow-hidden hover:border-[#ff6b35]/50 transition-all animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left font-bold text-lg flex items-center justify-between hover:bg-[#1f1f1f]/50 transition-colors group"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[#ff6b35] text-xl group-hover:scale-110 transition-transform">
                    {openIndex === i ? '−' : '+'}
                  </span>
                  {faq.question}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 py-4 bg-[#0a0a0a]/50 border-t border-[#1f1f1f] text-[#a0a0a0] animate-fade-in-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up">
          <p className="text-[#a0a0a0] mb-4">Still have questions?</p>
          <p className="text-white">
            Reach out on WhatsApp and let\'s chat about your specific situation.
          </p>
        </div>
      </div>
    </section>
  );
}

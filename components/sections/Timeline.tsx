'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const milestones = [
  {
    month: 'Month 1',
    title: 'Foundation & Launch',
    items: [
      'Audit your current presence',
      'Develop your unique positioning',
      'Create 20 strategic videos',
      'Build your launch sequence',
    ],
  },
  {
    month: 'Month 2-3',
    title: 'Authority Building',
    items: [
      'Consistent 20 videos/month delivery',
      'Optimize based on performance',
      'Refine your messaging',
      'First engagement growth appears',
    ],
  },
  {
    month: 'Month 4-6',
    title: 'Momentum',
    items: [
      'Your niche recognizes you',
      'Inbound inquiries increase',
      'Authority status established',
      'Premium positioning unlocked',
    ],
  },
  {
    month: '90+ Days',
    title: 'The Result',
    items: [
      'You\'re THE person in your niche',
      'Clients come to you',
      'Premium pricing justified',
      'Full authority achieved',
    ],
  },
];

export default function Timeline() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Your 90-Day <span className="text-[#ff6b35]">Authority Journey</span>
          </h2>
          <p className="text-xl text-[#a0a0a0] max-w-2xl">
            Here's exactly what happens when you commit to the system.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff6b35] to-[#ff6b35]/20 transform -translate-x-1/2 hidden lg:block"></div>

          <div className="grid md:grid-cols-2 gap-12">
            {milestones.map((milestone, i) => (
              <div
                key={i}
                className={`relative animate-fade-in-up ${i % 2 === 1 ? 'md:translate-y-12' : ''}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-8 w-6 h-6 bg-[#ff6b35] rounded-full transform -translate-x-1/2 hidden lg:block border-4 border-[#0a0a0a]"></div>

                <div className="glass rounded-xl p-8 border border-[#ff6b35]/20 hover:border-[#ff6b35]/50 transition-all hover-lift">
                  <span className="inline-block text-[#ff6b35] text-sm font-bold mb-2">
                    {milestone.month}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{milestone.title}</h3>

                  <ul className="space-y-3">
                    {milestone.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-[#a0a0a0] animate-fade-in-left"
                        style={{ animationDelay: `${i * 0.15 + j * 0.05}s` }}
                      >
                        <span className="text-[#ff6b35] mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in-up">
            <div className="inline-block glass rounded-xl p-8 border-2 border-[#ff6b35] glow-orange">
              <p className="text-2xl font-bold mb-2">
                90 Days. <span className="text-[#ff6b35]">One System.</span>
              </p>
              <p className="text-[#a0a0a0]">
                From invisible to undeniable. This is the ArcTone promise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

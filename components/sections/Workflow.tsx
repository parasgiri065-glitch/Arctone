'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'You Film',
    description: 'Record 10-30min of raw content. Phone camera is fine.',
    time: 'Week 1',
  },
  {
    number: '02',
    title: 'We Strategize',
    description: 'Research, audit competitors, identify your viral angles.',
    time: 'Week 1-2',
  },
  {
    number: '03',
    title: 'We Write Scripts',
    description: 'Convert scripts with hooks, CTA, and authority positioning.',
    time: 'Week 2',
  },
  {
    number: '04',
    title: 'We Edit',
    description: '20 videos delivered. Branded, optimized, ready to post.',
    time: 'Week 2-3',
  },
  {
    number: '05',
    title: 'You Launch',
    description: 'Post daily, build your audience, watch your authority grow.',
    time: 'Week 3+',
  },
];

export default function Workflow() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How It <span className="text-[#ff6b35]">Works</span>
          </h2>
          <p className="text-xl text-[#a0a0a0] max-w-2xl">
            Simple. Transparent. Proven. Here's exactly what happens when you join.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass rounded-xl p-8 border border-[#ff6b35]/10 hover:border-[#ff6b35]/50 transition-all hover-lift animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#ff6b35]/10 border border-[#ff6b35]/50">
                    <span className="text-2xl font-bold text-[#ff6b35]">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-[#a0a0a0] mb-3">{step.description}</p>
                  <p className="text-sm text-[#ff6b35] font-semibold">⏱️ {step.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#a0a0a0] text-lg">
            The entire process from filming to posting takes about 3 weeks.
            <br />
            <span className="text-white font-semibold">Then you post daily and watch your authority skyrocket.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

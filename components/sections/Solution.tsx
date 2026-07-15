'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const solutions = [
  {
    icon: '🔍',
    title: 'Research',
    description: 'We find what works in your niche. Every. Single. Month.',
  },
  {
    icon: '🎯',
    title: 'Strategy',
    description: 'Custom content angles that build authority in your specific market.',
  },
  {
    icon: '🪝',
    title: 'Viral Hooks',
    description: 'First 3 seconds that stop the scroll. Every. Single. Video.',
  },
  {
    icon: '✍️',
    title: 'Scripts',
    description: 'Copy that converts viewers to paying clients.',
  },
  {
    icon: '🎨',
    title: 'Editing',
    description: 'Professional cuts, effects, and branding applied.',
  },
  {
    icon: '📊',
    title: 'Page Audit',
    description: 'We optimize your entire presence for conversions.',
  },
];

export default function Solution() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-[#ff6b35]">Complete System</span>
          </h2>
          <p className="text-xl text-[#a0a0a0] max-w-2xl">
            Everything you need to build authority. Handled end-to-end so you can focus on what matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="glass rounded-xl p-6 border border-[#ff6b35]/10 hover:border-[#ff6b35]/50 hover-lift transition-all animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <p className="text-5xl mb-4">{solution.icon}</p>
              <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
              <p className="text-[#a0a0a0]">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

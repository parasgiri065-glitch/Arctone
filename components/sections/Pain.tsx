'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const painPoints = [
  {
    icon: '🎬',
    title: 'Hours of editing',
    description: 'Stuck in premiere pro losing client money',
  },
  {
    icon: '🧠',
    title: 'No strategy',
    description: 'Random content that doesn\'t convert',
  },
  {
    icon: '📉',
    title: 'Low engagement',
    description: 'Your best content flops, mediocre goes viral',
  },
  {
    icon: '💰',
    title: 'No authority',
    description: 'Struggling to charge premium rates',
  },
  {
    icon: '⚙️',
    title: 'Manual everything',
    description: 'Repeating the same process monthly',
  },
  {
    icon: '😤',
    title: 'Overwhelmed',
    description: 'Juggling content, business, and life',
  },
];

export default function Pain() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The Problem <span className="text-[#ff6b35]">You're Facing</span>
          </h2>
          <p className="text-xl text-[#a0a0a0] max-w-2xl">
            You've got the talent. The camera skills. The message. But something's missing that keeps you from building real authority.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="glass rounded-xl p-6 glow-orange-sm hover-lift animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="text-5xl mb-4">{point.icon}</p>
              <h3 className="text-lg font-bold mb-2">{point.title}</h3>
              <p className="text-[#a0a0a0]">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

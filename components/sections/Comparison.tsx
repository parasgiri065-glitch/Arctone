'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const comparison = [
  {
    feature: 'Content Strategy',
    arctone: true,
    diy: false,
    freelancer: false,
  },
  {
    feature: 'Monthly Research',
    arctone: true,
    diy: false,
    freelancer: true,
  },
  {
    feature: 'Viral Hook Formulas',
    arctone: true,
    diy: false,
    freelancer: false,
  },
  {
    feature: 'Professional Editing',
    arctone: true,
    diy: false,
    freelancer: true,
  },
  {
    feature: 'Unified Brand',
    arctone: true,
    diy: false,
    freelancer: false,
  },
  {
    feature: 'Page Audit',
    arctone: true,
    diy: false,
    freelancer: false,
  },
  {
    feature: 'Accountability',
    arctone: true,
    diy: false,
    freelancer: true,
  },
  {
    feature: 'Your Time Investment',
    arctone: '2 hrs/month',
    diy: '40+ hrs/month',
    freelancer: '10+ hrs/month',
  },
];

export default function Comparison() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How We <span className="text-[#ff6b35]">Compare</span>
          </h2>
          <p className="text-xl text-[#a0a0a0] max-w-2xl">
            Why ArcTone is the smartest choice for serious creators.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1f1f1f]">
                <th className="text-left py-4 px-6 font-bold text-[#a0a0a0]">
                  Feature
                </th>
                <th className="text-center py-4 px-6">
                  <div className="font-bold text-lg mb-2">ArcTone</div>
                  <div className="text-[#ff6b35] text-sm font-semibold">
                    Complete
                  </div>
                </th>
                <th className="text-center py-4 px-6">
                  <div className="font-bold text-lg mb-2">DIY</div>
                  <div className="text-[#a0a0a0] text-sm">
                    Do It Yourself
                  </div>
                </th>
                <th className="text-center py-4 px-6">
                  <div className="font-bold text-lg mb-2">Freelancer</div>
                  <div className="text-[#a0a0a0] text-sm">
                    Hire Individually
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className="border-b border-[#1f1f1f] hover:bg-[#0a0a0a]/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#a0a0a0]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.arctone === 'boolean' ? (
                      row.arctone ? (
                        <span className="text-[#ff6b35] text-2xl">✓</span>
                      ) : (
                        <span className="text-[#606060] text-2xl">✗</span>
                      )
                    ) : (
                      <span className="font-bold">{row.arctone}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.diy === 'boolean' ? (
                      row.diy ? (
                        <span className="text-[#606060] text-2xl">✓</span>
                      ) : (
                        <span className="text-[#606060] text-2xl">✗</span>
                      )
                    ) : (
                      <span className="text-[#a0a0a0]">{row.diy}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.freelancer === 'boolean' ? (
                      row.freelancer ? (
                        <span className="text-[#606060] text-2xl">✓</span>
                      ) : (
                        <span className="text-[#606060] text-2xl">✗</span>
                      )
                    ) : (
                      <span className="text-[#a0a0a0]">{row.freelancer}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center animate-fade-in-up">
          <p className="text-[#a0a0a0] text-lg">
            <span className="text-white font-bold">The ArcTone difference:</span> One unified system designed specifically for authority building. Not DIY. Not scattered freelancers. Everything cohesive. Everything strategic.
          </p>
        </div>
      </div>
    </section>
  );
}

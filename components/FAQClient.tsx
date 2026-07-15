'use client';

import { useState } from 'react';

export default function FAQClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqItems = [
    { q: 'How long does it take to see results?', a: 'Most clients see traction within 4-6 weeks with consistent content deployment.' },
    { q: 'What if I don\'t have video content yet?', a: 'We can help you plan and strategize your first pieces. That\'s part of our service.' },
    { q: 'Can you guarantee followers?', a: 'No, but we guarantee authority and engagement. Followers follow authority.' },
    { q: 'What\'s the onboarding process?', a: 'Quick 30-min strategy call, then we dive into research and content planning.' },
    { q: 'Can I pause or cancel?', a: 'Yes. 30 days notice required. But most clients stay because of results.' },
    { q: 'Do you handle posting?', a: 'Yes. Posting, optimizing captions, hashtags, and all distribution is included.' }
  ];

  return (
    <div className="space-y-4">
      {faqItems.map((item, i) => (
        <div key={i} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden">
          <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className="w-full p-6 text-left font-bold flex justify-between items-center hover:bg-[#2a2a2a] transition-all">
            {item.q}
            <span className="text-[#ff6b35]">{expandedFaq === i ? '−' : '+'}</span>
          </button>
          {expandedFaq === i && <div className="px-6 pb-6 text-[#a0a0a0] border-t border-[#2a2a2a]">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

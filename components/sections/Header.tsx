'use client';

import { useState } from 'react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1f1f1f]">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="animate-slide-down">
          <h1 className="text-2xl font-bold">
            Arc<span className="text-[#ff6b35]">Tone</span>
          </h1>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#ff6b35] text-3xl hover:opacity-80 transition-opacity animate-slide-down"
        >
          ☰
        </button>

        <a
          href={getWhatsAppLink('Hi! I want to claim the launch offer.')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-8 py-2 bg-[#ff6b35] text-white rounded-full font-semibold hover:bg-[#e55a28] hover-lift glow-orange-sm animate-slide-down"
        >
          Claim Offer
        </a>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-[#141414] border-b border-[#1f1f1f] p-4 animate-fade-in-down">
          <a
            href={getWhatsAppLink('Hi! I want to claim the launch offer.')}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-8 py-3 bg-[#ff6b35] text-white rounded-full font-semibold hover:bg-[#e55a28] text-center"
          >
            Claim Offer
          </a>
        </div>
      )}
    </header>
  );
}

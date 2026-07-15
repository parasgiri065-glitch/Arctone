'use client';

import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Arc<span className="text-[#ff6b35]">Tone</span>
            </h3>
            <p className="text-[#a0a0a0] text-sm">
              Turn creators into authorities. One strategic video at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#a0a0a0] text-sm">
              <li>
                <a
                  href={getWhatsAppLink('Hi! Tell me more about your services.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff6b35] transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink('Hi! How does your pricing work?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff6b35] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink('Hi! I have questions about the service.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff6b35] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink('Hi! I want to learn more about ArcTone.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff6b35] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-[#a0a0a0] text-sm">
              <li>Content Strategy</li>
              <li>Video Editing</li>
              <li>Research & Analysis</li>
              <li>Performance Audits</li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold mb-4">Ready?</h4>
            <a
              href={getWhatsAppLink('Hi! I\'m ready to start my authority journey with ArcTone.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#ff6b35] text-white font-bold rounded-lg hover:bg-[#e55a28] transition-colors hover-lift w-full text-center text-sm"
            >
              Claim Offer
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1f1f1f] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-[#606060] text-sm">
            <p>&copy; {year} ArcTone. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href={getWhatsAppLink('Hi! I want to connect with ArcTone.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff6b35] transition-colors"
              >
                WhatsApp
              </a>
              <a href="#" className="hover:text-[#ff6b35] transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-[#ff6b35] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

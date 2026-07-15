'use client';

import { motion } from 'framer-motion';
import FAQClient from '@/components/FAQClient';

const whatsappUrl = 'https://wa.me/917061781904?text=';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden" suppressHydrationWarning>
      {/* Header */}
      <header
        className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#1f1f1f]"
        suppressHydrationWarning
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-white">Arc</span>
            <span className="text-[#ff6b35]">Tone</span>
          </div>
          <a
            href={`${whatsappUrl}Hey, I want to claim the launch offer`}
            className="bg-[#ff6b35] hover:bg-[#e55a28] text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
          >
            WhatsApp Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="pt-32 pb-24 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#0f0f0f] relative overflow-hidden" suppressHydrationWarning>
        {/* Subtle background gradient circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            suppressHydrationWarning
          >
            <div className="inline-block bg-[#ff6b35]/15 border border-[#ff6b35]/40 rounded-full px-5 py-2">
              <p className="text-[#ff6b35] font-semibold text-sm">⚡ Launch Offer: First 3 clients get Month 1 at $899</p>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] text-center text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            suppressHydrationWarning
          >
            You Film.
            <br />
            <span className="text-[#ff6b35]">We Build Authority.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-[#b0b0b0] mb-12 text-center max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            suppressHydrationWarning
          >
            Research • Strategy • Viral Hooks • Scripts • Editing • Page Audit
            <br className="hidden sm:block" />
            <span className="text-[#a0a0a0]">One monthly price. Zero headaches.</span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            suppressHydrationWarning
          >
            <a
              href={`${whatsappUrl}I'm ready to claim my $899 launch offer!`}
              className="bg-[#ff6b35] hover:bg-[#e55a28] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Claim Launch Offer →
            </a>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            suppressHydrationWarning
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b35]/20 to-transparent rounded-3xl blur-2xl -z-10"></div>
            <img 
              src="/premium-hero.png" 
              alt="Professional content creation workspace" 
              className="w-full rounded-3xl shadow-2xl border border-[#ff6b35]/20"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Stats - Simplified */}
      <section className="py-20 px-4 bg-[#0a0a0a] border-t border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="text-[#ff6b35] text-lg font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ⭐⭐⭐⭐⭐ Trusted by founders & coaches
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: '20', label: 'Videos / Month' },
              { value: '2hrs', label: 'Your Time Only' },
              { value: '5', label: 'Competitors Analyzed' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-5xl md:text-6xl font-black text-[#ff6b35] mb-2">{stat.value}</p>
                <p className="text-[#a0a0a0] text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section id="services" className="py-32 px-4 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-20 text-center text-pretty"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            You Know the Struggle
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '📹', title: 'Film But Lost on Strategy', desc: 'Great content but no real growth system' },
              { emoji: '⏰', title: 'Overwhelmed by Editing', desc: 'Turns hours of footage into minutes of work' },
              { emoji: '🎣', title: 'Hooks Don\'t Convert', desc: 'People watch but don\'t engage or buy' },
              { emoji: '🔍', title: 'No Idea What to Film', desc: 'Paralyzed by infinite content possibilities' },
              { emoji: '📊', title: 'Can\'t Track What Works', desc: 'No audit of what\'s actually performing' },
              { emoji: '💼', title: 'Looking Like Amateur Hour', desc: 'Competitors look way more professional' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#ff6b35] transition-all group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <p className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.emoji}</p>
                <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solutions" className="py-32 px-4 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-20 text-center text-pretty"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Here's What We Do
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '1', title: 'Research', desc: 'Analyze your niche, competitors, and audience' },
              { num: '2', title: 'Strategy', desc: 'Content system designed specifically for YOU' },
              { num: '3', title: 'Viral Hooks', desc: 'Opening 3 seconds that stop the scroll' },
              { num: '4', title: 'Scripts', desc: 'Word-for-word speaking guides (if you want them)' },
              { num: '5', title: 'Editing', desc: 'Professional cuts, transitions, effects, music' },
              { num: '6', title: 'Page Audit', desc: 'Bio, thumbnails, links optimized for conversion' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-xl p-6 hover:border-[#ff6b35] transition-all group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, borderColor: '#ff6b35' }}
              >
                <p className="text-4xl font-black text-[#ff6b35] mb-3 group-hover:scale-110 transition-transform">{item.num}</p>
                <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="py-32 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-20 text-center text-pretty"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The ArcTone Workflow
          </motion.h2>
          <div className="space-y-6">
            {[
              { step: 'Day 1-2', title: 'Strategy & Planning', desc: 'Deep dive into your niche. Content pillars. Posting schedule. Script templates.' },
              { step: 'Day 3-5', title: 'Content Production', desc: 'You film simple videos. We handle research, hooks, and technical planning.' },
              { step: 'Days 6-10', title: 'Editing & Optimization', desc: 'Professional editing. Captions. Music. Hashtags. Bio optimization, whole month content done.' },
              { step: 'Day 11', title: 'Launch & Analyze', desc: 'Deploy content. Track engagement. Adjust strategy based on data.' },
              { step: 'Month 2', title: 'Scale What Works', desc: 'Rinse and repeat. More videos. Better performance. Real authority.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-4 items-start group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="bg-[#ff6b35] text-white font-bold px-4 py-2 rounded-lg min-w-fit text-sm md:text-base group-hover:shadow-lg group-hover:shadow-[#ff6b35]/50 transition-all">{item.step}</div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold mb-1 text-lg">{item.title}</h3>
                  <p className="text-[#a0a0a0] text-sm md:text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-4 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-20 text-center text-pretty"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Pricing
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Standard */}
            <motion.div
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 flex flex-col justify-between hover:border-[#ff6b35]/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">Standard</h3>
                <p className="text-[#a0a0a0] mb-6 text-sm">20 videos/month included</p>
                <p className="text-5xl font-black text-[#ff6b35] mb-8">$2,499<span className="text-sm text-[#a0a0a0] font-normal">/mo</span></p>
              </div>
              <a
                href={`${whatsappUrl}I want the standard plan`}
                className="bg-[#ff6b35] text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-[#e55a28] transition-all w-full"
              >
                Get Started
              </a>
            </motion.div>

            {/* Launch Offer */}
            <motion.div
              className="bg-gradient-to-br from-[#1a1a1a] to-[#151515] border-2 border-[#ff6b35] rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-[#ff6b35]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/10 via-transparent to-[#ff6b35]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="inline-block bg-[#ff6b35] text-white px-4 py-1 rounded-full text-xs font-bold mb-4">🎯 LIMITED TIME</div>
                <h3 className="text-2xl font-bold mb-2">Launch Offer</h3>
                <p className="text-[#a0a0a0] mb-6 text-sm">Month 1 only (Next 3 clients)</p>
                <div className="mb-8">
                  <p className="text-5xl font-black">
                    <span className="text-[#ff6b35]">$899</span>
                    <span className="text-sm text-[#a0a0a0] line-through ml-3 font-normal">$2,499</span>
                  </p>
                  <p className="text-[#a0a0a0] text-sm mt-3">Then $2,499/month</p>
                </div>
              </div>
              <a
                href={`${whatsappUrl}I want to claim the $899 launch offer!`}
                className="bg-[#ff6b35] text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-[#e55a28] transition-all w-full relative z-10"
              >
                Claim Offer
              </a>
            </motion.div>
          </div>

          {/* Results Image */}
          <motion.div
            className="mt-24 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="/premium-results.png" 
              alt="Results and ROI from ArcTone services" 
              className="w-full rounded-2xl shadow-lg border border-[#ff6b35]/20"
            />
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="py-32 px-4 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-16 text-center text-pretty"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ArcTone vs The Rest
          </motion.h2>
          <motion.div
            className="overflow-x-auto rounded-2xl border border-[#2a2a2a]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <table className="w-full text-left bg-[#1a1a1a]">
              <thead className="bg-[#0a0a0a] border-b border-[#2a2a2a]">
                <tr>
                  <th className="px-6 py-4 font-bold">Feature</th>
                  <th className="px-6 py-4 font-bold text-[#ff6b35]">ArcTone</th>
                  <th className="px-6 py-4 font-bold">DIY</th>
                  <th className="px-6 py-4 font-bold">Freelancers</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Strategy & Planning', true, false, false],
                  ['Viral Hooks Writing', true, false, true],
                  ['Video Editing', true, true, true],
                  ['One Clear Contact', true, false, false],
                  ['Results Guarantees', true, false, false],
                  ['Monthly Strategy Calls', true, false, false]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[#2a2a2a] hover:bg-[#0f0f0f] transition-colors">
                    <td className="px-6 py-4 font-medium">{row[0]}</td>
                    <td className="px-6 py-4 text-[#ff6b35] text-lg font-bold">{row[1] ? '✓' : '✗'}</td>
                    <td className="px-6 py-4 text-[#606060]">{row[2] ? '✓' : '✗'}</td>
                    <td className="px-6 py-4 text-[#606060]">{row[3] ? '✓' : '✗'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-32 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-20 text-center text-pretty"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Your 90-Day Authority Journey
          </motion.h2>
          <div className="space-y-8">
            {[
              { days: 'Days 1-30', title: 'Foundation', icon: '🏗️', desc: 'Strategy built. First 20 videos produced and published.' },
              { days: 'Days 31-60', title: 'Momentum', icon: '🚀', desc: 'Engagement increasing. 16 more videos. Patterns emerging.' },
              { days: 'Days 61-90', title: 'Authority', icon: '👑', desc: 'Real traction. 16 videos total. Authority established.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-6 items-start group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-6xl min-w-fit group-hover:scale-125 transition-transform">{item.icon}</div>
                <div className="flex-1 bg-gradient-to-r from-[#ff6b35]/10 to-transparent p-6 rounded-xl border border-[#2a2a2a] group-hover:border-[#ff6b35]/50 transition-all">
                  <p className="text-[#ff6b35] font-bold mb-1 text-sm">{item.days}</p>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[#a0a0a0] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-4 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-20 text-center text-pretty"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Questions?
          </motion.h2>
          <FAQClient />
        </div>
      </section>

      {/* Guarantee */}
      <section id="guarantee" className="py-32 px-4 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-pretty">45-Day Authority Guarantee</h2>
            <div className="bg-[#1a1a1a] border-2 border-[#ff6b35]/50 rounded-2xl p-8 md:p-12 mb-12">
              <p className="text-xl text-[#a0a0a0] mb-6 leading-relaxed">We're confident you'll see real progress. If you don't get meaningful engagement increases within 45 days, we'll work with you free until you do.</p>
              <p className="text-2xl font-bold">You risk NOTHING. We risk everything.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-32 px-4 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b35]/5 to-transparent -z-10"></div>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#ff6b35] text-white px-6 py-2 rounded-full text-sm font-bold mb-6">🎯 LIMITED TIME</div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-pretty">Ready to Become an Authority?</h2>
            <p className="text-xl text-[#a0a0a0] mb-10">Spots filling up fast. Claim your $899 month 1 before they're gone.</p>
            <a
              href={`${whatsappUrl}Let's do this! I want the $899 launch offer.`}
              className="inline-block bg-[#ff6b35] hover:bg-[#e55a28] text-white px-12 py-5 rounded-full font-bold text-xl transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              Start on WhatsApp Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">Arc</span>
                <span className="text-[#ff6b35]">Tone</span>
              </div>
              <p className="text-[#a0a0a0] text-sm">Turn creators into authorities.</p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#hero" className="text-[#a0a0a0] hover:text-[#ff6b35] transition-colors text-sm">About</a><br />
                <a href="#services" className="text-[#a0a0a0] hover:text-[#ff6b35] transition-colors text-sm">Services</a><br />
                <a href="#pricing" className="text-[#a0a0a0] hover:text-[#ff6b35] transition-colors text-sm">Pricing</a>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold mb-4">Support</h4>
              <div className="space-y-2">
                <a href="#contact" className="text-[#a0a0a0] hover:text-[#ff6b35] transition-colors text-sm">Contact</a><br />
                <a href="#faq" className="text-[#a0a0a0] hover:text-[#ff6b35] transition-colors text-sm">FAQ</a><br />
                <a href="#guarantee" className="text-[#a0a0a0] hover:text-[#ff6b35] transition-colors text-sm">Guarantee</a>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-col justify-start"
            >
              <a
                href={`${whatsappUrl}Let's talk!`}
                className="bg-[#ff6b35] text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-[#e55a28] transition-all"
              >
                Message us
              </a>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#1f1f1f] pt-8 text-center text-[#606060] text-sm">
            <p>&copy; 2026 ArcTone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

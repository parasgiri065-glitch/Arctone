'use client';

import GridCanvas from '@/components/GridCanvas';
import EnhancedHero from '@/components/EnhancedHero';
import PremiumFeatures from '@/components/PremiumFeatures';
import StatsSection from '@/components/StatsSection';

export default function Showcase() {
  const features = [
    {
      icon: '📊',
      title: 'Grid Canvas Background',
      description: 'Animated electric orange grid patterns that pulse and flow with your content'
    },
    {
      icon: '⚡',
      title: 'Electric Orange Styling',
      description: 'Premium neon glow effects and electric accent lines throughout the design'
    },
    {
      icon: '✨',
      title: 'Smooth Animations',
      description: 'Hover effects, floating elements, and pulsing grid animations for engagement'
    },
    {
      icon: '🎨',
      title: 'Premium Gradients',
      description: 'Sophisticated gradient backgrounds and button effects with hover states'
    },
    {
      icon: '🔥',
      title: 'Grid Intersections',
      description: 'Visual highlights at grid intersection points for premium geometric feel'
    },
    {
      icon: '🎯',
      title: 'Responsive Design',
      description: 'All components scale beautifully from mobile to ultra-wide displays'
    }
  ];

  const stats = [
    { value: '100', label: 'Grid Animations', suffix: '+' },
    { value: '8', label: 'Premium Components', suffix: 'new' },
    { value: '24', label: 'Custom Effects', suffix: '+' },
    { value: '1', label: 'Electric Orange', suffix: 'color' }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <EnhancedHero
        title="Grid Canvas & Electric Orange\nShowcase"
        subtitle="Premium Design System"
        description="Experience the enhanced ArcTone design with animated grid backgrounds and electric orange styling"
        ctaText="Explore Components"
        ctaUrl="#features"
        badge="✨ New Premium Design System"
      />

      <StatsSection
        title="Design Improvements"
        stats={stats}
      />

      <PremiumFeatures
        title="Premium Components"
        features={features}
        gridCols={3}
      />

      <GridCanvas animated className="py-20 px-4 bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">Grid Canvas Features</h2>
          <p className="text-[#a0a0a0] text-lg mb-12">
            The GridCanvas component provides multiple animation and style options to create stunning visual backgrounds.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#FF6B35]/50 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[#FF6B35]">Animated Grid</h3>
              <p className="text-[#a0a0a0]">Pulsing grid pattern that creates a living, breathing background</p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#FF6B35]/50 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[#FF6B35]">Diagonal Lines</h3>
              <p className="text-[#a0a0a0]">45-degree and -45-degree grid overlays for dynamic geometry</p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#FF6B35]/50 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[#FF6B35]">Intensity Control</h3>
              <p className="text-[#a0a0a0]">Choose from low, medium, or high intensity grid opacity</p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#FF6B35]/50 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[#FF6B35]">Electric Accents</h3>
              <p className="text-[#a0a0a0]">Neon orange glowing text and electric flowing lines</p>
            </div>
          </div>
        </div>
      </GridCanvas>

      <div className="py-20 px-4 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-12">Implementation Guide</h2>
          
          <div className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#FF6B35]">1. Import Component</h3>
            <pre className="bg-[#0f0f0f] p-4 rounded text-sm overflow-x-auto">
              <code>{`import GridCanvas from '@/components/GridCanvas';`}</code>
            </pre>
          </div>

          <div className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#FF6B35]">2. Wrap Content</h3>
            <pre className="bg-[#0f0f0f] p-4 rounded text-sm overflow-x-auto">
              <code>{`<GridCanvas animated diagonal intensity="high">
  <div>Your content here</div>
</GridCanvas>`}</code>
            </pre>
          </div>

          <div className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#FF6B35]">3. Customize</h3>
            <p className="text-[#a0a0a0] mb-4">
              Use CSS classes for additional effects:
            </p>
            <div className="flex flex-wrap gap-2">
              {['.grid-animate', '.grid-diagonal', '.neon-orange', '.electric-accent', '.grid-intersection'].map((cls) => (
                <span key={cls} className="bg-[#0f0f0f] text-[#FF6B35] px-4 py-2 rounded border border-[#FF6B35]/30">
                  {cls}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <GridCanvas animated className="py-20 px-4 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">Ready to Upgrade?</h2>
          <p className="text-[#a0a0a0] text-lg mb-10">
            Update your pages to use these premium components and elevate your ArcTone brand.
          </p>
          <a
            href="https://wa.me/7061781904?text=I want to upgrade my design with grid canvas components"
            className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] hover:from-[#ff8c5a] hover:to-[#FF6B35] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,107,53,0.4)]"
          >
            Contact Us for Setup
          </a>
        </div>
      </GridCanvas>
    </div>
  );
}

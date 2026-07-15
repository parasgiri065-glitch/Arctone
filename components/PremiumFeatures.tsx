import React from 'react';
import GridCanvas from './GridCanvas';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

interface PremiumFeaturesProps {
  title: string;
  features: Feature[];
  gridCols?: number;
}

export const PremiumFeatures: React.FC<PremiumFeaturesProps> = ({
  title,
  features,
  gridCols = 3,
}) => {
  return (
    <GridCanvas animated className="py-20 px-4 bg-[#0A0A0A] relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
          <span>{title}</span>
        </h2>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${gridCols} gap-6`}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#FF6B35]/50 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(255,107,53,0.2)]"
            >
              {/* Grid intersection points */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none">
                <div className="absolute top-4 left-4 w-2 h-2 bg-[#FF6B35]/40 rounded-full"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF6B35]/40 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#FF6B35]/40 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#FF6B35]/40 rounded-full"></div>
              </div>
              
              <div className="text-5xl mb-4">{feature.icon}</div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              
              <p className="text-[#a0a0a0] leading-relaxed mb-6">{feature.description}</p>
              
              <div className="flex items-center gap-2 text-[#FF6B35] font-semibold group-hover:gap-3 transition-all">
                <span>Learn more</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
              
              {/* Orange glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B35]/0 to-[#FF6B35]/0 group-hover:from-[#FF6B35]/5 group-hover:to-[#FF6B35]/10 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </GridCanvas>
  );
};

export default PremiumFeatures;

import React from 'react';
import GridCanvas from './GridCanvas';

interface EnhancedHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  badge?: string;
}

export const EnhancedHero: React.FC<EnhancedHeroProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaUrl,
  badge,
}) => {
  return (
    <GridCanvas animated diagonal className="pt-32 pb-20 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#111111] relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 left-0 w-80 h-80 bg-[#FF6B35]/3 rounded-full blur-3xl animate-float"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {badge && (
          <div className="mb-8 inline-block bg-[#FF6B35]/20 border border-[#FF6B35]/60 rounded-full px-6 py-2.5 backdrop-blur-sm">
            <p className="text-[#FF6B35] font-bold flex items-center gap-2 neon-orange">
              {badge}
            </p>
          </div>
        )}
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          {title.split('\n').map((line, i) => (
            <div key={i}>
              {line.split(' ').map((word, j) => (
                <span 
                  key={j} 
                  className={word === 'Authority' || word === 'Into' ? 'text-[#FF6B35] inline-block ml-2' : ''}
                >
                  {word}{' '}
                </span>
              ))}
            </div>
          ))}
        </h1>
        
        <p className="text-lg md:text-xl text-[#a0a0a0] mb-10 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        
        <a
          href={ctaUrl}
          className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] hover:from-[#ff8c5a] hover:to-[#FF6B35] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,107,53,0.4)] relative overflow-hidden group"
        >
          <span className="relative z-10">{ctaText}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>
    </GridCanvas>
  );
};

export default EnhancedHero;

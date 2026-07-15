import React from 'react';
import GridCanvas from './GridCanvas';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface StatsSectionProps {
  title?: string;
  stats: Stat[];
  highlighted?: boolean;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  title,
  stats,
  highlighted = true,
}) => {
  return (
    <GridCanvas diagonal animated className="py-24 px-4 bg-gradient-to-b from-[#111111] to-[#0A0A0A] relative overflow-hidden">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B35]/10 to-transparent opacity-50"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {title && (
          <h2 className="text-5xl font-black text-center mb-16">
            {title}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              {/* Card background */}
              <div className="bg-gradient-to-br from-[#1A1A1A]/50 to-[#0f0f0f]/50 backdrop-blur-sm border border-[#FF6B35]/20 rounded-2xl p-8 text-center transition-all duration-300 hover:border-[#FF6B35]/60 hover:shadow-[0_0_30px_rgba(255,107,53,0.3)]">
                <div className="text-5xl md:text-6xl font-black mb-4">
                  <span className="text-[#FF6B35]">{stat.value}</span>
                  {stat.suffix && <span className="text-2xl ml-1">{stat.suffix}</span>}
                </div>
                
                <p className="text-[#a0a0a0] font-semibold text-sm md:text-base tracking-wide">
                  {stat.label}
                </p>
              </div>
              
              {/* Animated grid intersection */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#FF6B35]/20 to-[#FF6B35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FF6B35]/40 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FF6B35]/40 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FF6B35]/40 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FF6B35]/40 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </GridCanvas>
  );
};

export default StatsSection;

import React from 'react';

interface GridCanvasProps {
  children: React.ReactNode;
  animated?: boolean;
  diagonal?: boolean;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export const GridCanvas: React.FC<GridCanvasProps> = ({
  children,
  animated = false,
  diagonal = false,
  intensity = 'medium',
  className = ''
}) => {
  const baseClass = 'grid-canvas';
  const animatedClass = animated ? 'grid-animate' : '';
  const diagonalClass = diagonal ? 'grid-diagonal' : '';
  const intensityClass = `grid-${intensity}`;
  
  return (
    <div className={`${baseClass} ${animatedClass} ${diagonalClass} ${intensityClass} ${className}`}>
      {children}
    </div>
  );
};

export default GridCanvas;

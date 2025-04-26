// components/CurvedDivider.tsx
import React from 'react';

interface CurvedDividerProps {
  topColor?: string;
  bottomColor?: string;
  height?: number;
  className?: string;
}

const CurvedDivider: React.FC<CurvedDividerProps> = ({
  topColor = 'white',
  bottomColor = '#1e1b4b', // Indigo-950 equivalent
  height = 60,
  className = '',
}) => {
  return (
    <div 
      className={`w-full overflow-hidden ${className} rotate-180`} 
      style={{ height: `${height}px` }}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ display: 'block' }}
      >
        <path
          d="M0,0 L1200,0 L1200,60 C900,20 300,20 0,60 L0,0 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
};

export default CurvedDivider;
import React, { memo } from "react";

const LaserField = memo(() => {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none opacity-40 overflow-hidden" 
      aria-hidden="true"
      style={{ willChange: 'transform' }}
    >
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1440 1600" 
        preserveAspectRatio="none"
        style={{ willChange: 'transform' }}
      >
        <line
          className="stroke-red-500 stroke-1 opacity-25 filter drop-shadow-[0_0_6px_rgba(239,68,68,0.6)] animate-laser"
          x1="-50"
          y1="0"
          x2="120"
          y2="1600"
          style={{ transform: 'translateZ(0)' }}
        />
        <line
          className="stroke-red-500 stroke-1 opacity-25 filter drop-shadow-[0_0_6px_rgba(239,68,68,0.6)] animate-laser"
          x1="180"
          y1="0"
          x2="340"
          y2="1600"
          style={{ animationDelay: "1.5s", transform: 'translateZ(0)' }}
        />
        <line
          className="stroke-red-500 stroke-1 opacity-25 filter drop-shadow-[0_0_6px_rgba(239,68,68,0.6)] animate-laser"
          x1="1320"
          y1="0"
          x2="1500"
          y2="900"
          style={{ animationDelay: "3s", transform: 'translateZ(0)' }}
        />
        <line
          className="stroke-red-500 stroke-[0.5] opacity-10"
          x1="0"
          y1="200"
          x2="1440"
          y2="200"
        />
        <line
          className="stroke-red-500 stroke-[0.5] opacity-10"
          x1="0"
          y1="500"
          x2="1440"
          y2="500"
        />
        <line
          className="stroke-red-500 stroke-[0.5] opacity-10"
          x1="0"
          y1="900"
          x2="1440"
          y2="900"
        />
        <line
          className="stroke-red-500 stroke-[0.5] opacity-10"
          x1="0"
          y1="1300"
          x2="1440"
          y2="1300"
        />
      </svg>
    </div>
  );
});

LaserField.displayName = 'LaserField';

export default LaserField;
import React, { memo } from "react";

const LaserDivider = memo(() => {
  return (
    <div className="relative h-px bg-white/10 mx-auto max-w-[1240px] overflow-hidden" aria-hidden="true">
      <div className="absolute top-0 left-0 h-px w-[120px] bg-gradient-to-r from-transparent via-red-400 to-transparent animate-travel" />
    </div>
  );
});

LaserDivider.displayName = 'LaserDivider';

export default LaserDivider;
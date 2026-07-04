import React from "react";

export default function LaserDivider() {
  return (
    <div className="relative h-px bg-line mx-auto max-w-[1240px] overflow-hidden" aria-hidden="true">
      <div className="absolute top-0 left-0 h-px w-[120px] bg-gradient-to-r from-transparent via-red-bright to-transparent animate-travel" />
    </div>
  );
}

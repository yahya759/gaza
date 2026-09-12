import React from 'react';

/**
 * Halftone & Dither Dot-Grain Texture Overlay
 * Recreates the printed newspaper / risograph / halftone screen dither texture
 * from the reference image across the entire canvas.
 */
export const HalftoneOverlay: React.FC = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden mix-blend-multiply opacity-[0.28]"
      aria-hidden="true"
    >
      {/* SVG Halftone Pattern */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="halftone-dots"
            x="0"
            y="0"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.1" fill="#111111" />
            <circle cx="5" cy="5" r="0.75" fill="#222222" />
          </pattern>
          <pattern
            id="fine-stipple"
            x="0"
            y="0"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.6" fill="#000000" />
            <circle cx="7" cy="4" r="0.8" fill="#1a1a1a" />
            <circle cx="4" cy="9" r="0.6" fill="#000000" />
            <circle cx="10" cy="11" r="0.7" fill="#1a1a1a" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#halftone-dots)" />
        <rect width="100%" height="100%" fill="url(#fine-stipple)" opacity="0.4" />
      </svg>

      {/* Subtle vignette grain */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/10 pointer-events-none" />
    </div>
  );
};

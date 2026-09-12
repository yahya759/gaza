import React from 'react';
import rescueHandsImg from '../assets/images/rescue_hands_duotone_1789191782207.jpg';

/**
 * Rescue Hands Illustration
 * Duotone Black & Palestinian Red (#CE1126) Halftone treatment
 * Depicting two human hands in a dramatic rescue gesture (one hand gripping and lifting the other)
 * Occupies ~50% viewport height and bleeds to edges.
 */
export const RescueHandsIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] overflow-hidden my-2 select-none">
      {/* Background blend to ensure paper-white edges */}
      <div className="absolute inset-0 bg-[#f6f5f0]" />

      {/* Main Duotone Halftone Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={rescueHandsImg}
          alt="أيدي إنسانية تتكاتف لإنقاذ وإعانة أهل غزة"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-95 mix-blend-multiply opacity-95 transition-transform duration-700 hover:scale-[1.01]"
        />

        {/* Palestinian Red Duotone Color Tint Overlay */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-color opacity-75"
          style={{ backgroundColor: '#CE1126' }}
        />

        {/* High-contrast shadows enhancement */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-50 bg-radial from-transparent via-[#111111]/30 to-[#111111]/80"
        />

        {/* Halftone dot-screen layer over the illustration for the exact newsprint dither */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-screen opacity-35"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 1.2px, transparent 1.3px)',
            backgroundSize: '4px 4px',
          }}
        />

        {/* Dot matrix screen shadow */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #111111 1px, transparent 1.2px)',
            backgroundSize: '5px 5px',
          }}
        />

        {/* Soft edge feathering so illustration merges seamlessly with page paper background */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f6f5f0] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f6f5f0] to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

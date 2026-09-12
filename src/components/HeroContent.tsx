import React from 'react';
import { ArrowUpLeft } from 'lucide-react';

interface HeroContentProps {
  onOpenDonate: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onOpenDonate }) => {
  return (
    <div className="relative z-20 flex flex-col items-center text-center px-3 sm:px-6 pt-4 sm:pt-8 md:pt-10 pb-4 w-full max-w-6xl mx-auto">
      {/* 2-Line Bold Headline (eyebrow-free, emotional, tight line-height) */}
      <h1 className="font-['Cairo'] font-black tracking-[-0.03em] text-[#111111] text-[32px] sm:text-[52px] md:text-[68px] lg:text-[80px] xl:text-[86px] leading-[1.12] sm:leading-[1.05] w-full max-w-5xl mx-auto">
        <span className="block">غزة بتنزف... وانت تقدر</span>
        <span className="block mt-1 sm:mt-2">
          <span className="relative inline-block">
            توقف نزيفها
            {/* Secondary Accent: subtle green underline under headline word */}
            <span
              className="absolute -bottom-1 sm:-bottom-2 right-0 left-0 h-[3px] sm:h-[4.5px] bg-[#007A3D] rounded-full opacity-90"
              aria-hidden="true"
            />
          </span>{' '}
          بـ <span className="text-[#111111]">5$</span>
        </span>
      </h1>

      {/* Subtext: regular weight, muted gray, ~16-18px, max-width ~500px, centered */}
      <p className="mt-4 sm:mt-6 text-[15px] sm:text-[17px] md:text-[18px] text-[#4a4a4a] font-normal leading-relaxed max-w-[560px] mx-auto text-balance px-2">
        كل دقيقة بتتأخر فيها المساعدة، عيلة كاملة بتنام جوعانة. تبرعك مش مجرد رقم — هو أكل ودواء وأمل لعيلة بغزة.
      </p>

      {/* Main Pill CTA Button with Arrow Icon */}
      <div className="mt-6 sm:mt-8">
        <button
          type="button"
          onClick={onOpenDonate}
          className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#111111] text-[#ffffff] text-[14px] sm:text-[15px] font-semibold tracking-wide transition-all duration-300 hover:bg-[#CE1126] hover:shadow-lg hover:shadow-[#CE1126]/20 active:scale-95 shadow-md shadow-black/15 cursor-pointer select-none"
        >
          <span>تبرع الآن بـ 5$</span>
          {/* Arrow icon matching the original ↗ / ↖ */}
          <ArrowUpLeft className="w-4 h-4 text-[#ffffff] transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
};

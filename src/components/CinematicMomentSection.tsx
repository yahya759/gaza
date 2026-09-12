import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpLeft } from 'lucide-react';
import schoolbagImg from '../assets/images/children_playing_camp_1789220596928.jpg';

interface CinematicMomentSectionProps {
  onOpenDonate: (cause: string, amount: number) => void;
}

/**
 * SECTION 3 — "A MOMENT YOU WON'T FORGET" (لحظة ما بتنسى)
 *
 * Full-bleed cinematic single section (100vh viewport), dark, no clutter, no nav.
 * Symbolic worn school bag in rubble, duotone black + red halftone dither.
 * Centered quote fades in sequentially over scroll position:
 *   Line 1 (small, gray): "هاي مو مجرد صورة."
 *   Line 2 (large, bold, white): "هاي طفل نسي شو طعم المدرسة."
 *   Line 3 (small, red accent): "وانت تقدر ترجعله ياها."
 *   Pill CTA: "كون سبب رجوعه للمدرسة — تبرع بـ 5$"
 */
export const CinematicMomentSection: React.FC<CinematicMomentSectionProps> = ({
  onOpenDonate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll through the section track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Scroll-linked transformations for each element (sequentially tied to scroll)
  // Line 1: reveals early in scroll
  const opacity1 = useTransform(scrollYProgress, [0.05, 0.22, 0.95, 1], [0, 1, 1, 0.7]);
  const y1 = useTransform(scrollYProgress, [0.05, 0.22], [24, 0]);

  // Line 2: large bold headline reveals next
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.45, 0.95, 1], [0, 1, 1, 0.7]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.45], [28, 0]);

  // Line 3: red accent reveals after headline
  const opacity3 = useTransform(scrollYProgress, [0.48, 0.68, 0.95, 1], [0, 1, 1, 0.7]);
  const y3 = useTransform(scrollYProgress, [0.48, 0.68], [24, 0]);

  // CTA button: appears last
  const opacityCta = useTransform(scrollYProgress, [0.7, 0.88, 0.95, 1], [0, 1, 1, 0.8]);
  const yCta = useTransform(scrollYProgress, [0.7, 0.88], [24, 0]);
  const scaleCta = useTransform(scrollYProgress, [0.7, 0.88], [0.95, 1]);

  // Image subtle zoom-in on scroll
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={containerRef}
      id="cinematic-moment-section"
      className="relative w-full h-[180vh] bg-black text-white select-none"
    >
      {/* Sticky 100vh Full-Bleed Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Background Full-Bleed Duotone Image */}
        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={schoolbagImg}
            alt="طفلان يلعبان بين الخيام في مخيم نزوح، طفولة سُرقت منها المدرسة"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter contrast-110 brightness-95"
          />

          {/* Duotone Palestinian Red tint overlay (#CE1126) — lightened so the photo stays visible */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-color opacity-30"
            style={{ backgroundColor: '#CE1126' }}
          />

          {/* Dark Vignette to direct focus to centered typography — softened */}
          <div
            className="absolute inset-0 pointer-events-none bg-radial from-black/15 via-black/55 to-black/85"
          />

          {/* Additional edge fades for total seamless dark immersion */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

          {/* Halftone / Dot-grain texture matching hero */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 1.2px, transparent 1.3px)',
              backgroundSize: '4px 4px',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-50"
            style={{
              backgroundImage:
                'radial-gradient(circle at center, #111111 1px, transparent 1.2px)',
              backgroundSize: '5px 5px',
            }}
          />
        </motion.div>

        {/* Pure Immersive Center Container: No nav, no clutter */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
          
          {/* Line 1 (small, gray): "هاي مش مجرد صورة." */}
          <motion.p
            style={{ opacity: opacity1, y: y1 }}
            className="text-[14px] sm:text-[18px] md:text-[20px] text-[#999999] font-medium tracking-wide mb-2.5 sm:mb-4"
          >
            هاي مش مجرد صورة.
          </motion.p>

          {/* Line 2 (large, bold, white): "هاد أطفال فقدوا مدرستهم." */}
          <motion.h2
            style={{ opacity: opacity2, y: y2 }}
            className="font-['Cairo'] font-black text-[26px] sm:text-[46px] md:text-[60px] lg:text-[72px] text-white leading-[1.15] sm:leading-[1.12] tracking-tight max-w-3xl mx-auto mb-3 sm:mb-6"
          >
            هاد أطفال فقدوا مدرستهم.
          </motion.h2>

          {/* Line 3 (small, red accent, appears last): "وانت تقدر ترجعلهم ياها." */}
          <motion.p
            style={{ opacity: opacity3, y: y3 }}
            className="font-['Cairo'] font-bold text-[15px] sm:text-[22px] md:text-[26px] text-[#CE1126] tracking-wide mb-6 sm:mb-10"
          >
            وانت تقدر ترجعلهم ياها.
          </motion.p>

          {/* Single CTA: pill button, black bg / white text */}
          <motion.div
            style={{ opacity: opacityCta, y: yCta, scale: scaleCta }}
            className="w-full flex justify-center px-2"
          >
            <button
              type="button"
              onClick={() => onOpenDonate('عودة أطفال غزة للمدارس', 5)}
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-[#111111] text-[#ffffff] text-[13px] sm:text-[16px] md:text-[17px] font-bold border border-white/20 shadow-2xl transition-all duration-300 hover:bg-[#CE1126] hover:border-[#CE1126] hover:shadow-[0_0_35px_rgba(206,17,38,0.4)] active:scale-95 cursor-pointer text-center"
            >
              <span>كونوا سبب رجوعهم للمدرسة — تبرع بـ 5$</span>
              <ArrowUpLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 shrink-0" />
            </button>
          </motion.div>

          {/* Subtle scroll indicator if at the very start of section */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.15], [0.8, 0]),
            }}
            className="absolute -bottom-20 flex flex-col items-center gap-1 pointer-events-none"
          >
            <span className="text-[11px] text-neutral-400 font-mono tracking-widest">
              مرّر للأسفل
            </span>
            <div className="w-1 h-5 rounded-full bg-neutral-600 animate-pulse" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

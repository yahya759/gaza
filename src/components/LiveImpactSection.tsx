import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpLeft, Activity } from 'lucide-react';

interface LiveImpactSectionProps {
  onOpenDonate: (cause?: string, amount?: number) => void;
}

interface CounterItem {
  id: string;
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const COUNTERS: CounterItem[] = [
  {
    id: 'meals',
    target: 1840,
    label: 'وجبة تم توزيعها',
  },
  {
    id: 'students',
    target: 560,
    label: 'طالب رجع للمدرسة',
  },
  {
    id: 'quran',
    target: 210,
    label: 'حافظ قرآن تحت الرعاية',
  },
];

/**
 * Animated Number Counter Hook with smooth ease-out ticking
 */
function useAnimatedCounter(target: number, isVisible: boolean, durationMs: number = 2000) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);

      // Ease out quartic curve for natural, mechanical deceleration
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOut * target);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
        setIsComplete(true);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, target, durationMs]);

  return { count, isComplete };
}

interface CounterCardProps {
  counter: CounterItem;
  isVisible: boolean;
  delayMs?: number;
}

const CounterCard: React.FC<CounterCardProps> = ({ counter, isVisible }) => {
  const { count, isComplete } = useAnimatedCounter(counter.target, isVisible, 2200);

  return (
    <div className="relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-xs transition-all hover:border-white/10 group">
      {/* Tactical Grid Corner Crosshairs (War-Room Aesthetic) */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20 pointer-events-none" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20 pointer-events-none" />

      {/* Huge Bold White Numerals */}
      <div className="relative inline-block mb-3">
        <span className="font-['Cairo'] font-black text-[52px] sm:text-[68px] md:text-[80px] lg:text-[92px] text-white tracking-tighter leading-none select-all">
          {count.toLocaleString('en-US')}
        </span>

        {/* Thin green (#007A3D) underline on count-complete (growth / hope signal) */}
        <div
          className={`absolute -bottom-1.5 sm:-bottom-2 right-0 left-0 h-[3.5px] bg-[#007A3D] rounded-full transition-all duration-700 ease-out shadow-[0_0_12px_rgba(0,122,61,0.6)] ${
            isComplete ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transformOrigin: 'center right' }}
          aria-hidden="true"
        />
      </div>

      {/* Label below numeral */}
      <p className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#bbbbbb] text-center tracking-tight">
        {counter.label}
      </p>

      {/* Subtle Live Signal Indicator */}
      <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
        <span className="w-1.5 h-1.5 rounded-full bg-[#007A3D]" />
        <span>تم التحقق ميدانياً</span>
      </div>
    </div>
  );
};

export const LiveImpactSection: React.FC<LiveImpactSectionProps> = ({ onOpenDonate }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="live-impact-section"
      className="relative w-full min-h-screen bg-[#0B0B0B] text-white flex flex-col justify-between py-12 sm:py-16 md:py-20 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden select-none"
    >
      {/* Tactical War-Room Scanline & Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* CRT Scanline effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) 1px, transparent 1px, transparent 3px)',
        }}
      />
      {/* Soft Radial Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-[#0B0B0B]/80 to-[#0B0B0B]" />

      {/* Header with Live Pulsing Red Dot */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-10 sm:mb-14 px-2">
        {/* Pulsing Red Dot + "التحديث لحظي" */}
        <div className="inline-flex items-center gap-2.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#CE1126]/10 border border-[#CE1126]/30 text-[#ffffff] mb-4 shadow-[0_0_15px_rgba(206,17,38,0.2)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CE1126] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#CE1126]" />
          </span>
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase text-[#CE1126]">
            التحديث لحظي • LIVE IMPACT MONITOR
          </span>
        </div>

        <h2 className="font-['Cairo'] font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          غرفة أمل... لا أرقام ضحايا
        </h2>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-[#888888] max-w-lg mx-auto leading-relaxed">
          هنا نرصد كل وجبة، كل قلم، وكل نور يعود إلى أيدي أهلنا في غزة بدعمكم المباشر.
        </p>
      </div>

      {/* 3 Giant Animated Counters */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 my-auto">
        {COUNTERS.map((counter) => (
          <CounterCard
            key={counter.id}
            counter={counter}
            isVisible={isInView}
          />
        ))}
      </div>

      {/* Full-width Bold Impact Statement */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-8 sm:my-10 px-4">
        <p className="font-['Cairo'] font-extrabold text-lg sm:text-2xl md:text-3xl text-white leading-snug">
          "كل رقم فوق... كان ممكن يصير صفر لولا ناس متلك"
        </p>
        <span className="block mt-2 text-xs sm:text-sm text-[#777777] font-normal">
          عطاؤك يحمي هذه الأرقام من التلاشي ويزيدها كل دقيقة
        </span>
      </div>

      {/* Final Giant CTA: Full-Width Black Bar with Centered Red Pill Button */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto mt-4">
        <div className="w-full py-5 sm:py-7 px-4 sm:px-8 md:px-10 rounded-3xl bg-[#111111] border border-white/10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-right">
          
          <div className="flex flex-col">
            <span className="font-['Cairo'] font-black text-lg sm:text-xl md:text-2xl text-white">
              لا تنتظر أن يتوقف النزيف لوحده
            </span>
            <span className="text-xs sm:text-sm text-[#999999] mt-1">
              مساهمتك بـ 5$ تسجل فوراً في شاشة الأثر الحي وتصل مباشرة
            </span>
          </div>

          {/* Centered Red Pill Button */}
          <button
            type="button"
            onClick={() => onOpenDonate('الأثر الحي المباشر', 5)}
            className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 rounded-full bg-[#CE1126] text-white text-sm sm:text-base md:text-lg font-bold shadow-[0_0_30px_rgba(206,17,38,0.4)] hover:shadow-[0_0_45px_rgba(206,17,38,0.6)] hover:bg-[#b00f20] transition-all duration-300 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>كن الرقم الجاي — تبرع بـ 5$</span>
            <ArrowUpLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
          </button>

        </div>
      </div>

    </section>
  );
};

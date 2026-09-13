import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, KeyRound, Sparkles } from 'lucide-react';
import doorOrphansImg from '../assets/images/door_orphans_1789275083753.jpg';
import doorEducationImg from '../assets/images/door_education_1789275158195.jpg';
import doorQuranImg from '../assets/images/door_quran_1789192250723.jpg';

interface DoorItem {
  id: string;
  title: string;
  tagline: string;
  stat: string;
  image: string;
  alt: string;
  defaultAmount: number;
}

const DOORS: DoorItem[] = [
  {
    id: 'orphans',
    title: 'باب الأيتام',
    tagline: 'كل يتيم يستاهل باب يفتحله حياة من جديد',
    stat: '+430 يتيم بانتظار كفيل',
    image: doorOrphansImg,
    alt: 'طفل يتيم واقف وحيد وسط بيت متواضع، نظرته تحمل رسالة صامتة',
    defaultAmount: 30,
  },
  {
    id: 'education',
    title: 'باب العلم',
    tagline: 'قلم بيد طفل غزاوي أقوى من أي دمار',
    stat: '+1,200 طالب بلا كتاب ولا قلم',
    image: doorEducationImg,
    alt: 'ثلاث طالبات مدرسة يذاكرن سوياً وسط ركام المباني المدمرة',
    defaultAmount: 15,
  },
  {
    id: 'quran',
    title: 'باب النور',
    tagline: 'كل آية يحفظوها نور ما بينطفي',
    stat: '+300 حافظ قرآن بحاجة رعاية',
    image: doorQuranImg,
    alt: 'صفحات القرآن الكريم تشع نوراً وهداية',
    defaultAmount: 50,
  },
];

interface ThreeDoorsSectionProps {
  onSelectCause: (causeTitle: string, defaultAmount: number) => void;
}

export const ThreeDoorsSection: React.FC<ThreeDoorsSectionProps> = ({ onSelectCause }) => {
  const [hoveredDoor, setHoveredDoor] = useState<string | null>(null);
  const [mobileActiveDoor, setMobileActiveDoor] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const doorRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Mobile intersection observer to auto-open doors sequentially on scroll
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return;

    const observers: IntersectionObserver[] = [];

    DOORS.forEach((door, index) => {
      const el = doorRefs.current[door.id];
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Staggered opening on mobile scroll
              setTimeout(() => {
                setMobileActiveDoor(door.id);
              }, index * 200);
            }
          });
        },
        { threshold: 0.45 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="three-doors-section"
      className="relative w-full min-h-screen bg-[#111111] text-white flex flex-col justify-between py-10 sm:py-14 md:py-16 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden select-none"
    >
      {/* Halftone / Stipple Grain on Section Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15 mix-blend-screen"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(255, 255, 255, 0.6) 1px, transparent 1.2px)',
          backgroundSize: '5px 5px',
        }}
      />

      {/* Subtle Section Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-8 sm:mb-12 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#CE1126] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ثلاث أبواب للأمل في غزة</span>
        </div>
        <h2 className="font-['Cairo'] font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          افتح باباً... تُنقذ حياة
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#888888] max-w-md mx-auto">
          حرّك المؤشر أو المس أي باب لترى النور المنبعث من قلب العطاء
        </p>
      </div>

      {/* Three Tall Doors Grid (~100vh feel on desktop) */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 flex-1 items-stretch">
        {DOORS.map((door, idx) => {
          const isOpen = hoveredDoor === door.id || mobileActiveDoor === door.id;

          return (
            <div
              key={door.id}
              ref={(el) => (doorRefs.current[door.id] = el)}
              className="relative flex flex-col justify-between group cursor-pointer"
              onMouseEnter={() => setHoveredDoor(door.id)}
              onMouseLeave={() => setHoveredDoor(null)}
              onClick={() => {
                setMobileActiveDoor((prev) => (prev === door.id ? null : door.id));
              }}
            >
              {/* Thin Red Vertical Seam Between Door Panels */}
              {idx < DOORS.length - 1 && (
                <div
                  className="hidden md:block absolute -left-2.5 sm:-left-3 lg:-left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#CE1126]/60 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              )}

              {/* The Tall Door Frame and Double-Leaf Architecture */}
              <div
                className={`relative w-full h-[340px] sm:h-[420px] md:h-[480px] lg:h-[540px] xl:h-[580px] rounded-2xl overflow-hidden border transition-all duration-500 bg-[#0a0a0a] shadow-2xl ${
                  isOpen
                    ? 'border-[#F59E0B]/50 shadow-[0_0_50px_rgba(245,158,11,0.25)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* 1. Inside Image (revealed behind the cracked door) */}
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
                  <img
                    src={door.image}
                    alt={door.alt}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover object-center filter contrast-125 brightness-95 transition-all duration-700 ${
                      isOpen ? 'scale-105 opacity-100' : 'scale-100 opacity-30'
                    }`}
                  />

                  {/* Halftone texture over the photo */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-40"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at center, #111111 1.2px, transparent 1.3px)',
                      backgroundSize: '4px 4px',
                    }}
                  />

                  {/* Warm Golden Light Spill Gradient (Active on open) */}
                  <div
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-500 mix-blend-screen ${
                      isOpen ? 'opacity-85' : 'opacity-0'
                    }`}
                    style={{
                      background:
                        'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.85) 0%, rgba(245, 158, 11, 0.45) 40%, rgba(17, 17, 17, 0.8) 90%)',
                    }}
                  />

                  {/* Vertical Golden Ray Beam through the center seam */}
                  <div
                    className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-16 bg-gradient-to-r from-transparent via-[#FDE68A] to-transparent mix-blend-screen transition-all duration-500 blur-sm ${
                      isOpen ? 'opacity-90 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                  />
                </div>

                {/* 2. Left Door Leaf (slides to the left on open) */}
                <div
                  className={`absolute top-0 bottom-0 left-0 w-1/2 bg-[#141414] border-r border-[#CE1126]/40 transition-transform duration-600 ease-out z-20 overflow-hidden ${
                    isOpen ? '-translate-x-[32%]' : 'translate-x-0'
                  }`}
                  style={{
                    boxShadow: isOpen ? 'inset -12px 0 25px rgba(0,0,0,0.8)' : 'none',
                  }}
                >
                  {/* Dark Halftone Stipple Texture on Door Flap */}
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at center, #333 1px, transparent 1px)',
                      backgroundSize: '6px 6px',
                    }}
                  />
                  {/* Subtle architectural door molding panel */}
                  <div className="absolute inset-3 border border-white/5 rounded-lg pointer-events-none" />
                  <div className="absolute top-1/2 -translate-y-1/2 right-1 w-1.5 h-8 rounded-full bg-neutral-700/80" />
                </div>

                {/* 3. Right Door Leaf (slides to the right on open) */}
                <div
                  className={`absolute top-0 bottom-0 right-0 w-1/2 bg-[#141414] border-l border-[#CE1126]/40 transition-transform duration-600 ease-out z-20 overflow-hidden ${
                    isOpen ? 'translate-x-[32%]' : 'translate-x-0'
                  }`}
                  style={{
                    boxShadow: isOpen ? 'inset 12px 0 25px rgba(0,0,0,0.8)' : 'none',
                  }}
                >
                  {/* Dark Halftone Stipple Texture on Door Flap */}
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at center, #333 1px, transparent 1px)',
                      backgroundSize: '6px 6px',
                    }}
                  />
                  {/* Subtle architectural door molding panel */}
                  <div className="absolute inset-3 border border-white/5 rounded-lg pointer-events-none" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-1 w-1.5 h-8 rounded-full bg-neutral-700/80" />
                </div>

                {/* 4. Center Keyhole / Faint Silhouette Icon when closed */}
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-75' : 'opacity-70 scale-100'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-neutral-400 backdrop-blur-xs shadow-lg">
                    <KeyRound className="w-5 h-5 text-neutral-400" />
                  </div>
                  <span className="block mt-2 text-[10px] text-neutral-500 text-center tracking-widest uppercase">
                    افتح
                  </span>
                </div>

                {/* 5. Door Frame Subtle Border Highlight */}
                <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-30" />
              </div>

              {/* Fixed Content Below Each Door (doesn't move) */}
              <div className="pt-5 pb-2 text-right">
                {/* Title (Bold, White) */}
                <h3 className="font-['Cairo'] font-extrabold text-xl sm:text-2xl text-white tracking-tight flex items-center justify-between">
                  <span>{door.title}</span>
                  <span
                    className={`text-xs font-normal transition-colors ${
                      isOpen ? 'text-[#F59E0B]' : 'text-neutral-500'
                    }`}
                  >
                    {isOpen ? 'مفتوح للنور' : 'انقر للفتح'}
                  </span>
                </h3>

                {/* Line under title */}
                <p className="text-xs sm:text-[13px] text-[#aaaaaa] mt-1 line-clamp-1">
                  {door.tagline}
                </p>

                {/* One-line stat (small, red accent #CE1126) */}
                <div className="mt-2.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CE1126]" />
                  <span className="font-['Cairo'] font-bold text-xs sm:text-sm text-[#CE1126]">
                    {door.stat}
                  </span>
                </div>

                {/* CTA text-link with arrow: "ادعم ←" */}
                <div className="mt-3.5 pt-2 border-t border-white/10">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCause(door.title, door.defaultAmount);
                    }}
                    className="group/btn inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#CE1126] transition-colors cursor-pointer"
                  >
                    <span>ادعم</span>
                    <ArrowLeft className="w-4 h-4 text-[#CE1126] transition-transform duration-200 group-hover/btn:-translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle Footer Note within Section */}
      <div className="relative z-10 text-center mt-8 pt-4 border-t border-white/5">
        <p className="text-[11px] text-neutral-500 font-mono">
          كل باب تفتحه يصل أثره مباشرة إلى الميدان عبر فرقنا الإغاثية المتطوعة داخل غزة
        </p>
      </div>
    </section>
  );
};

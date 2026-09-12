import React from 'react';
import { Heart, ShieldCheck, HandHeart } from 'lucide-react';

/**
 * SECTION — "قصتنا"
 * Standalone paper-toned section (matches hero palette), replaces the old popup drawer.
 */
export const OurStorySection: React.FC = () => {
  return (
    <section
      id="our-story-section"
      className="relative w-full bg-[#f6f5f0] text-[#111111] py-14 sm:py-20 md:py-24 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden"
    >
      {/* Subtle radial accent matching hero */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 20%, rgba(0, 122, 61, 0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007A3D]/10 border border-[#007A3D]/20 text-xs font-semibold text-[#007A3D] mb-4">
          <Heart className="w-3.5 h-3.5" />
          <span>قصتنا</span>
        </div>

        <h2 className="font-['Cairo'] font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight mb-5">
          نداء إنساني عاجل من قلب غزة
        </h2>

        <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#4a4a4a] leading-relaxed max-w-2xl mx-auto text-balance">
          انطلقت هذه المبادرة الإغاثية المستقلة لمواجهة الكارثة الإنسانية المتفاقمة في قطاع غزة.
          في ظل الحصار وانقطاع التحويلات البنكية التقليدية، نوفر قنوات دعم رقمية مباشرة وآمنة
          100% تصل إلى المتطوعين الميدانيين وفرق المخابز والمطابخ الخيرية لشراء وتوزيع الإمدادات
          فوراً.
        </p>

        {/* Three quick trust pillars */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto text-right">
          <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-xs">
            <div className="w-9 h-9 rounded-full bg-[#CE1126]/10 text-[#CE1126] flex items-center justify-center mb-2.5">
              <ShieldCheck className="w-4.5 h-4.5" />
            </div>
            <p className="text-sm font-bold text-[#111111] mb-1">دعم مباشر وآمن</p>
            <p className="text-xs text-[#666666] leading-relaxed">
              تحويلات رقمية مشفرة تصل للفرق الميدانية دون وسطاء
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-xs">
            <div className="w-9 h-9 rounded-full bg-[#007A3D]/10 text-[#007A3D] flex items-center justify-center mb-2.5">
              <HandHeart className="w-4.5 h-4.5" />
            </div>
            <p className="text-sm font-bold text-[#111111] mb-1">فرق متطوعة على الأرض</p>
            <p className="text-xs text-[#666666] leading-relaxed">
              شراء وتوزيع الإمدادات مباشرة داخل القطاع
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-xs">
            <div className="w-9 h-9 rounded-full bg-[#111111]/10 text-[#111111] flex items-center justify-center mb-2.5">
              <Heart className="w-4.5 h-4.5" />
            </div>
            <p className="text-sm font-bold text-[#111111] mb-1">أثر فوري</p>
            <p className="text-xs text-[#666666] leading-relaxed">
              كل تبرع يتحول لأكل ودواء وأمل خلال أيام
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

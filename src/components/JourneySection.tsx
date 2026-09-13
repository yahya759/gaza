import React from 'react';
import { Flag, Ban, Coins, Zap, MapPinned } from 'lucide-react';

interface Milestone {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const milestones: Milestone[] = [
  {
    icon: <Flag className="w-5 h-5" />,
    title: 'أول يوم بالحرب',
    text:
      'عملنا تحدي شخصي: ولا حدا من أهل حينا يحس إنه بالحرب — ما يحتاج أكل ولا فلوس. سدّينا احتياجات حينا بالكامل، ونجح التحدي.',
  },
  {
    icon: <Ban className="w-5 h-5" />,
    title: 'من حي لواجب',
    text:
      'من هون قررنا نرفع المستوى ونكون عون لأي حدا نقدر نوصلّه. واجهتنا تحديات حقيقية: كيف ندخل الفلوس، كيف نوصل لناس تثق بالفكرة، والتبرعات كانت قليلة قياساً بحجم الاحتياج. وحسابنا على انستقرام وتيك توك كان ينحظر بشكل متكرر لأننا ننزّل محتوى حقيقي ومؤثر يعرض واقع غزة كما هو.',
  },
  {
    icon: <Coins className="w-5 h-5" />,
    title: 'مرحلة تجار السيولة',
    text:
      'بالبداية اعتمدنا على تجار السيولة لتحويل الفلوس، وكنا نخسر جزء كبير منها بالعمولات والفروقات.',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'نقطة التحول — العملات الرقمية',
    text:
      'تعرّفنا على العملات الرقمية، وكان قرار استلام التبرعات فيها من أهم القرارات اللي اتخذناها. وفّر علينا مصاريف كتيرة وخلّى وصول الفلوس مباشر وأسرع.',
  },
  {
    icon: <MapPinned className="w-5 h-5" />,
    title: 'اليوم',
    text:
      'نعتمد بشكل رئيسي على العملات الرقمية لاستقبال التبرعات، وحسابنا على انستقرام وتيك توك نشط ومستمر. هدفنا نوصل لأكبر عدد ممكن من الناس بأقل مبلغ تبرع — 5$ بس — لحد ما تتحل مشكلة تحويل الفلوس لغزة بشكل جذري.',
  },
];

/**
 * SECTION — "رحلتنا" (Our Journey)
 * Vertical timeline from day one of the war until today.
 */
export const JourneySection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#111111] text-white py-14 sm:py-20 md:py-24 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
      {/* Subtle green/red glow accents */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 10%, rgba(206,17,38,0.10) 0%, transparent 45%), radial-gradient(circle at 85% 90%, rgba(0,122,61,0.10) 0%, transparent 45%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#e5e5e5] mb-4">
            <span>رحلتنا</span>
          </div>
          <h2 className="font-['Cairo'] font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight">
            من أول يوم بالحرب، لهلأ
          </h2>
        </div>

        <ol className="relative border-e-2 border-white/10 pe-6 sm:pe-10 space-y-10 sm:space-y-14">
          {milestones.map((m, i) => (
            <li key={i} className="relative">
              <span className="absolute -end-[calc(1.5rem+13px)] sm:-end-[calc(2.5rem+13px)] top-0.5 w-7 h-7 rounded-full bg-[#111111] border-2 border-[#CE1126] text-[#CE1126] flex items-center justify-center">
                {m.icon}
              </span>
              <h3 className="font-['Cairo'] font-extrabold text-lg sm:text-xl text-white mb-2">
                {m.title}
              </h3>
              <p className="text-[13.5px] sm:text-[15px] text-[#bbbbbb] leading-relaxed">
                {m.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

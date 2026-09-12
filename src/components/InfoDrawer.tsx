import React from 'react';
import { X, Mail, Sparkles } from 'lucide-react';

interface InfoDrawerProps {
  type: 'impact' | 'contact' | null;
  onClose: () => void;
  onOpenDonate: () => void;
}

export const InfoDrawer: React.FC<InfoDrawerProps> = ({ type, onClose, onOpenDonate }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150 text-right">
      <div 
        className="relative w-full max-w-md bg-[#fcfbfa] rounded-2xl border border-black/10 shadow-xl p-6 sm:p-7 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#111111] transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-4 h-4" />
        </button>

        {type === 'impact' && (
          <div>
            <div className="w-10 h-10 rounded-full bg-[#CE1126]/10 text-[#CE1126] flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-['Cairo'] font-extrabold text-xl text-[#111111] mb-2">
              أثر كل دولار تتبرع به
            </h3>
            <div className="space-y-2.5 text-sm text-[#444444] mb-4">
              <div className="p-2.5 rounded-lg bg-black/3 border border-black/5 flex items-center justify-between">
                <span>تأمين مياه شرب معقمة ووجبة ساخنة لشخصين</span>
                <span className="font-bold text-[#CE1126]">5$</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/3 border border-black/5 flex items-center justify-between">
                <span>طرد غذائي أساسي (دقيق، معلبات، زيت) لأسرة</span>
                <span className="font-bold text-[#CE1126]">15$</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/3 border border-black/5 flex items-center justify-between">
                <span>إمدادات طبية وإسعافات طارئة للنازحين</span>
                <span className="font-bold text-[#CE1126]">50$</span>
              </div>
            </div>
          </div>
        )}

        {type === 'contact' && (
          <div>
            <div className="w-10 h-10 rounded-full bg-[#111111]/10 text-[#111111] flex items-center justify-center mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-['Cairo'] font-extrabold text-xl text-[#111111] mb-2">
              تواصل معنا
            </h3>
            <p className="text-sm text-[#444444] leading-relaxed mb-4">
              للتنسيق الإغاثي والاستفسارات، تواصلوا معنا عبر منصات التواصل الخاصة بالمبادرة.
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenDonate();
          }}
          className="w-full py-2.5 rounded-xl bg-[#111111] hover:bg-[#CE1126] text-white text-sm font-bold transition-all cursor-pointer"
        >
          تبرع الآن بـ 5$
        </button>
      </div>
    </div>
  );
};

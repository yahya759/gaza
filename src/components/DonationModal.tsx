import React, { useState } from 'react';
import { X, Copy, Check, QrCode, HeartHandshake, ShieldCheck, ExternalLink } from 'lucide-react';
import usdtQrImg from '../assets/payment/usdt_trc20_qr.png';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCause?: string;
  initialAmount?: number;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  initialCause,
  initialAmount = 5,
}) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(initialAmount);
  const [copied, setCopied] = useState(false);

  // Sync selectedAmount when initialAmount changes
  React.useEffect(() => {
    if (initialAmount) {
      setSelectedAmount(initialAmount);
    }
  }, [initialAmount, isOpen]);

  if (!isOpen) return null;

  const walletAddress = 'TJ915j6tK2sVYWnLG95NU4ZSevBxqvw6xE';

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#fbfaf6] rounded-3xl border border-black/10 shadow-2xl p-6 sm:p-8 overflow-hidden text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Halftone Overlay inside modal */}
        <div className="absolute inset-0 pointer-events-none opacity-20 halftone-overlay" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#111111] transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#CE1126]/10 flex items-center justify-center text-[#CE1126]">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-['Cairo'] font-black text-xl text-[#111111]">
                {initialCause ? `دعم ${initialCause}` : 'تبرع مباشر لأهل غزة'}
              </h3>
              {initialCause && (
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#CE1126]/10 text-[#CE1126]">
                  مباشر
                </span>
              )}
            </div>
            <p className="text-xs text-[#666666]">
              يصل الدعم كاملاً لفرق الإغاثة الميدانية في القطاع
            </p>
          </div>
        </div>

        {/* Amount Selector */}
        <div className="mb-5">
          <label className="block text-xs font-bold text-[#333333] mb-2">
            اختر قيمة المساهمة (بالدولار / USDT):
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[5, 15, 30, 50].map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setSelectedAmount(amt)}
                className={`py-2 px-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                  selectedAmount === amt
                    ? 'bg-[#111111] text-white shadow-md'
                    : 'bg-white border border-black/10 text-[#333333] hover:border-[#CE1126]'
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>
          <div className="mt-2 text-xs text-[#007A3D] font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#007A3D]" />
            {selectedAmount === 5 && 'مساهمتك بـ 5$ تؤمن وجبتين ساخنتين ومياه نقية لشخصين'}
            {selectedAmount === 15 && 'مساهمتك بـ 15$ تؤمن طرد خبز وطعام يكفي أسرة كاملة لعدة أيام'}
            {selectedAmount === 30 && 'مساهمتك بـ 30$ تؤمن سلة غذائية وخضار طازجة لعائلة نازحة'}
            {selectedAmount === 50 && 'مساهمتك بـ 50$ تؤمن حزمة رعاية طبية وأدوية طوارئ'}
          </div>
        </div>

        {/* Network Badge */}
        <div className="mb-4">
          <label className="block text-xs font-bold text-[#333333] mb-1.5">
            شبكة الإيداع:
          </label>
          <div className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold bg-[#26A17B] text-white shadow-xs text-center">
            USDT (TRC-20 • شبكة TRON) • أقل رسوم
          </div>
        </div>

        {/* QR Code and Wallet Address Box */}
        <div className="bg-white rounded-2xl border border-black/10 p-4 flex flex-col items-center justify-center text-center shadow-xs mb-5">
          {/* Real QR Code */}
          <div className="relative w-40 h-40 bg-white p-2 rounded-xl border border-black/10 shadow-xs mb-3 flex items-center justify-center overflow-hidden">
            <img
              src={usdtQrImg}
              alt="رمز QR لعنوان محفظة USDT (شبكة TRON)"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-xs text-[#555555] mb-2 font-mono break-all px-2">
            {walletAddress}
          </p>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#111111] hover:bg-[#CE1126] text-white text-xs font-bold transition-all cursor-pointer active:scale-98 shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#00ff80]" />
                <span>تم نسخ عنوان المحفظة بنجاح!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>نسخ عنوان محفظة التبرع (USDT-TRC20)</span>
              </>
            )}
          </button>
        </div>

        {/* Footer Guarantee */}
        <div className="flex items-center justify-between text-[11px] text-[#777777] border-t border-black/5 pt-3">
          <span className="flex items-center gap-1 text-[#007A3D]">
            <ShieldCheck className="w-3.5 h-3.5" />
            تحويل مشفر ومباشر 100%
          </span>
          <span>جزاكم الله كل خير عن أهل غزة</span>
        </div>
      </div>
    </div>
  );
};

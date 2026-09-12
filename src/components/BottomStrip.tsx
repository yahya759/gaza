import React, { useState } from 'react';
import { Copy, Check, QrCode, ShieldCheck } from 'lucide-react';

interface BottomStripProps {
  onOpenDonateModal: () => void;
}

export const BottomStrip: React.FC<BottomStripProps> = ({ onOpenDonateModal }) => {
  const [copied, setCopied] = useState(false);
  const usdtAddress = "TF9y4K6YmQe72w1VqT3L8NxX7hK5p9Z4aR"; // Clean humanitarian TRC20 address

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(usdtAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="relative z-20 w-full pt-4 pb-8 sm:pb-10 px-3 sm:px-6 md:px-10 lg:px-16 max-w-[1600px] mx-auto">
      {/* Small Centered Label Above (matching "Trusted by teams of every scale") */}
      <div className="text-center mb-4 sm:mb-5">
        <p className="text-[13px] sm:text-[14px] text-[#555555] font-medium tracking-wide">
          تبرعك بيوصل مباشرة عبر
        </p>
      </div>

      {/* Row featuring USDT, QR Code, Scan-to-donate, and direct verification */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-10 py-3.5 px-4 sm:px-8 rounded-2xl bg-white/50 border border-black/5 shadow-xs backdrop-blur-xs w-full max-w-5xl mx-auto transition-all hover:bg-white/70">
        
        {/* USDT Official Mark & Networks */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Tether USDT Vector Logo */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#009393]/10 flex items-center justify-center border border-[#009393]/30 shrink-0">
            <svg viewBox="0 0 200 200" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
              <path
                d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0z"
                fill="#26A17B"
              />
              <path
                d="M116.7 82.5V64.8H148V46.6H52v18.2h31.3v17.7c-26.6 1.4-46.6 6.9-46.6 13.5 0 6.6 20 12.1 46.6 13.5v39.7h33.4v-39.7c26.6-1.4 46.6-6.9 46.6-13.5 0-6.6-20-12.1-46.6-13.5zm0 21.6c-2.4.2-8.5.4-16.7.4-8 0-14.1-.2-16.7-.4V90.6c11.1.8 22.3.8 33.4 0v13.5zm0-23.7c-2.6.2-8.4.3-16.7.3-8.2 0-14.1-.1-16.7-.3v-.1c0-.1 2-.8 6.4-1.6 4.4-.7 9.8-1.1 14.8-1.1 4.9 0 10.3.4 14.7 1.1 4.5.8 6.5 1.5 6.5 1.6l-2 0.1z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-['Cairo'] font-bold text-[15px] sm:text-[16px] text-[#111111]">
                USDT
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#111111]/5 text-[#333333]">
                TRC-20 / ERC-20
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-[#666666]">بدون وسيط بنكي أو رسوم تحويل</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-[1px] h-8 sm:h-9 bg-black/10" />

        {/* Prominent QR Code Badge */}
        <div 
          onClick={onOpenDonateModal}
          className="flex items-center gap-3 group cursor-pointer p-1.5 rounded-xl hover:bg-white/80 transition-all"
          title="انقر لتكبير رمز الاستجابة السريعة والتبرع"
        >
          {/* Micro QR Code SVG with USDT icon */}
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white p-1 border border-black/15 shadow-xs flex items-center justify-center group-hover:scale-105 group-hover:border-[#CE1126] transition-all shrink-0">
            <svg viewBox="0 0 29 29" className="w-full h-full" shapeRendering="crispEdges">
              <path fill="#111111" d="M0 0h7v7H0zM2 2h3v3H2zM22 0h7v7h-7zM24 2h3v3h-3zM0 22h7v7H0zM2 24h3v3H2zM9 1h2v2H9zM13 1h3v2h-3zM18 1h2v2h-2zM9 4h5v2H9zM16 4h3v2h-3zM9 7h2v2H9zM13 7h1v4h-1zM16 7h3v2h-3zM1 9h2v2H1zM4 9h2v4H4zM7 10h2v3H7zM19 10h2v2h-2zM24 9h4v2h-4zM24 12h2v3h-2zM1 14h2v2H1zM4 15h3v2H4zM10 14h2v3h-2zM14 13h3v2h-3zM18 13h2v4h-2zM21 14h2v2h-2zM26 15h2v3h-2zM9 18h2v2H9zM12 18h3v2h-3zM16 18h2v2h-2zM19 18h4v2h-4zM25 19h3v2h-3zM1 20h2v2H1zM4 18h2v3H4zM9 21h2v3H9zM13 22h2v2h-2zM17 21h3v2h-3zM21 21h2v4h-2zM24 22h4v2h-4zM9 25h3v2H9zM14 26h4v2h-4zM19 25h2v3h-2zM23 25h3v2h-3z" />
            </svg>
            {/* Center USDT dot icon */}
            <div className="absolute inset-0 m-auto w-3 h-3 bg-[#009393] rounded-full flex items-center justify-center border border-white">
              <span className="text-[7px] text-white font-bold leading-none">₮</span>
            </div>
          </div>

          {/* Label: "امسح الكود وتبرع" */}
          <div className="text-right">
            <span className="block text-[13px] sm:text-[14px] font-bold text-[#111111] group-hover:text-[#CE1126] transition-colors">
              امسح الكود وتبرع
            </span>
            <span className="block text-[11px] sm:text-[12px] text-[#666666]">
              دعم فوري ومباشر 100%
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1px] h-8 sm:h-9 bg-black/10" />

        {/* Copy Wallet Address Shortcut */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:block text-right">
            <span className="text-[11px] text-[#777777] block">عنوان المحفظة المعتمد:</span>
            <span className="text-[12px] font-mono text-[#222222] font-semibold">
              TF9y4K6Y...9Z4aR
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 bg-white/70 hover:bg-white text-[11px] sm:text-[12px] font-medium text-[#222222] transition-all cursor-pointer shadow-2xs hover:border-[#CE1126]"
            title="نسخ عنوان محفظة التبرع"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#007A3D]" />
                <span className="text-[#007A3D] font-semibold">تم النسخ!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#555555]" />
                <span>نسخ العنوان</span>
              </>
            )}
          </button>
        </div>

        {/* Verification Checkmark */}
        <div className="flex items-center gap-1 text-[#007A3D] text-[11px] sm:text-[12px] font-medium">
          <ShieldCheck className="w-4 h-4 text-[#007A3D] shrink-0" />
          <span>حساب إغاثي موثّق</span>
        </div>

      </div>
    </footer>
  );
};

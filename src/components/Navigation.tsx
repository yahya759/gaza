import React from 'react';

interface NavigationProps {
  onOpenDonate: () => void;
  onOpenStory?: () => void;
  onOpenImpact?: () => void;
  onOpenContact?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenDonate,
  onOpenStory,
  onOpenImpact,
  onOpenContact,
}) => {
  return (
    <header className="w-full relative z-30 pt-4 sm:pt-6 pb-3 sm:pb-4 px-3 sm:px-6 md:px-10 lg:px-12 xl:px-16">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between gap-3">
        {/* Right side in RTL (mirrored from left in reference): Wordmark/Logo + Nav Links */}
        <div className="flex items-center gap-4 sm:gap-8 lg:gap-12 min-w-0">
          {/* Logo / Wordmark */}
          <a
            href="#"
            className="flex items-center gap-1.5 sm:gap-2 group text-[#111111] transition-colors shrink-0"
          >
            <span className="font-['Cairo'] text-[16px] sm:text-[19px] md:text-[20px] font-black tracking-tight leading-none text-[#111111] group-hover:text-[#CE1126] transition-colors whitespace-nowrap">
              خليك عون لأهل غزة
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#007A3D] inline-block mb-1 shrink-0"
              title="فلسطين"
            />
          </a>

          {/* 3 Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#444444]">
            <button
              onClick={onOpenStory}
              className="hover:text-[#CE1126] transition-colors cursor-pointer"
            >
              قصتنا
            </button>
            <button
              onClick={onOpenImpact}
              className="hover:text-[#CE1126] transition-colors cursor-pointer"
            >
              أثر تبرعك
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-[#CE1126] transition-colors cursor-pointer"
            >
              تواصل معنا
            </button>
          </nav>
        </div>

        {/* Left side in RTL (mirrored from right in reference): Text link + Black pill button */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <button
            type="button"
            className="hidden sm:inline-block text-[13px] sm:text-[14px] font-medium text-[#333333] hover:text-[#CE1126] transition-colors cursor-pointer whitespace-nowrap"
            onClick={() => alert('مرحباً بك! تسجيل الدخول متاح للمتبرعين والشركاء الداعمين.')}
          >
            تسجيل الدخول
          </button>

          {/* Solid Black Pill Button */}
          <button
            type="button"
            onClick={onOpenDonate}
            className="h-9 sm:h-10 px-4 sm:px-5 rounded-full bg-[#111111] text-[#ffffff] text-[13px] sm:text-[14px] font-semibold transition-all duration-200 hover:bg-[#CE1126] active:scale-95 shadow-xs cursor-pointer flex items-center justify-center whitespace-nowrap"
          >
            تبرع الآن
          </button>
        </div>
      </div>
    </header>
  );
};

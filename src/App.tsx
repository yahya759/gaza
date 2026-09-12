import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroContent } from './components/HeroContent';
import { RescueHandsIllustration } from './components/RescueHandsIllustration';
import { BottomStrip } from './components/BottomStrip';
import { HalftoneOverlay } from './components/HalftoneOverlay';
import { OurStorySection } from './components/OurStorySection';
import { ThreeDoorsSection } from './components/ThreeDoorsSection';
import { CinematicMomentSection } from './components/CinematicMomentSection';
import { LiveImpactSection } from './components/LiveImpactSection';
import { DonationModal } from './components/DonationModal';
import { InfoDrawer } from './components/InfoDrawer';

export default function App() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState<string | undefined>(undefined);
  const [selectedAmount, setSelectedAmount] = useState<number>(5);
  const [infoType, setInfoType] = useState<'impact' | 'contact' | null>(null);

  const handleOpenDonate = (cause?: string, amount: number = 5) => {
    setSelectedCause(cause);
    setSelectedAmount(amount);
    setIsDonateOpen(true);
  };

  const scrollToDoors = () => {
    const el = document.getElementById('three-doors-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setInfoType('impact');
    }
  };

  const scrollToStory = () => {
    const el = document.getElementById('our-story-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="app-root"
      dir="rtl"
      className="relative min-h-screen w-full bg-[#f6f5f0] text-[#111111] overflow-x-hidden selection:bg-[#CE1126] selection:text-white flex flex-col"
    >
      {/* Halftone Dot-Grain Texture Overlay across whole page — disabled for testing */}
      {/* <HalftoneOverlay /> */}

      {/* SECTION 1: HERO SECTION (Paper-white palette, pixel-faithful layout) */}
      <div 
        className="relative z-10 w-full min-h-screen flex flex-col justify-between"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 30%, rgba(206, 17, 38, 0.03) 0%, transparent 60%)',
        }}
      >
        {/* Fixed / Top Navigation Bar */}
        <Navigation
          onOpenDonate={() => handleOpenDonate()}
          onOpenStory={scrollToStory}
          onOpenImpact={scrollToDoors}
          onOpenContact={() => setInfoType('contact')}
        />

        {/* Hero Section Container */}
        <main className="w-full flex-1 flex flex-col justify-center my-auto">
          {/* Centered Hero Block (Headline, Subtext, Pill CTA) */}
          <HeroContent onOpenDonate={() => handleOpenDonate()} />

          {/* Full-Bleed Duotone Illustration (occupying ~50% viewport height, bleeding edge-to-edge) */}
          <RescueHandsIllustration />
        </main>

        {/* Bottom Strip (Label + USDT + QR Code + Scan-to-Donate) */}
        <BottomStrip onOpenDonateModal={() => handleOpenDonate()} />
      </div>

      {/* SECTION 1.5: OUR STORY (قصتنا) */}
      <OurStorySection />

      {/* SECTION 2: THREE DOORS OF HOPE (ثلاث أبواب للأمل) */}
      <ThreeDoorsSection
        onSelectCause={(causeTitle, defaultAmount) =>
          handleOpenDonate(causeTitle, defaultAmount)
        }
      />

      {/* SECTION 3: A MOMENT YOU WON'T FORGET (لحظة ما بتنسى) */}
      <CinematicMomentSection
        onOpenDonate={(cause, amount) => handleOpenDonate(cause, amount)}
      />

      {/* SECTION 4: THE LIVE IMPACT (الأثر الحي) */}
      <LiveImpactSection
        onOpenDonate={(cause, amount) => handleOpenDonate(cause, amount)}
      />

      {/* Interactive Modals */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        initialCause={selectedCause}
        initialAmount={selectedAmount}
      />

      <InfoDrawer
        type={infoType}
        onClose={() => setInfoType(null)}
        onOpenDonate={() => {
          setInfoType(null);
          handleOpenDonate();
        }}
      />
    </div>
  );
}

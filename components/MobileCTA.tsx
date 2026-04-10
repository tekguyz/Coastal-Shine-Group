'use client';

import { useState, useEffect } from 'react';
import { BRAND } from '@/constants/brand';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past the hero section (approx 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 z-40 bg-gradient-to-t from-navy-deep to-transparent pb-6">
      <a
        href={`tel:${BRAND.PHONE.replace(/\D/g, '')}`}
        className="block w-full bg-chrome text-navy-deep text-center font-bold py-4 rounded-sm shadow-2xl active:scale-[0.98] transition-transform"
      >
        Call {BRAND.PHONE}
      </a>
    </div>
  );
}

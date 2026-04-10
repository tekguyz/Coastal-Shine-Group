'use client';

import { useState, useEffect } from 'react';
import { BRAND } from '@/constants/brand';

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-deep border-t border-chrome/40 flex">
      <a
        href={`tel:${BRAND.PHONE.replace(/\D/g, '')}`}
        className="flex-1 bg-navy-mid text-white text-center font-bold py-4 flex items-center justify-center gap-2 active:bg-navy-light transition-colors"
      >
        <span>📞</span> Call Us
      </a>
      <a
        href="#contact"
        className="flex-1 bg-chrome text-navy-deep text-center font-bold py-4 flex items-center justify-center gap-2 active:bg-white transition-colors"
      >
        <span>⚓</span> Free Quote
      </a>
    </div>
  );
}

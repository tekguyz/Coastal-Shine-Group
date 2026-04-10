import Link from 'next/link';
import { COPY } from '@/constants/copy';
import { BRAND } from '@/constants/brand';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-navy-deep overflow-hidden pt-32 pb-40 lg:pb-48">
      
      {/* Safe Background Lighting Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Massive Background Anchor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-chrome">
          <circle cx="12" cy="5" r="3"/>
          <line x1="12" y1="22" x2="12" y2="8"/>
          <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 lg:px-8 text-center flex flex-col items-center mt-auto mb-auto">
        <RevealOnScroll>
          {/* Eyebrow */}
          <div className="inline-block border border-chrome/35 text-chrome rounded-full px-6 py-2 text-sm font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-sm bg-white/5">
            {COPY.HERO_EYEBROW}
          </div>

          {/* Headline */}
          <h1 className="heading-serif text-white text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {COPY.HERO_HEADLINE}
          </h1>

          {/* Decorative Divider */}
          <div className="flex items-center gap-4 w-full max-w-[400px] mt-8 mb-8 mx-auto">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-chrome to-transparent opacity-50" />
            <span className="text-chrome text-xl">⚓</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-chrome to-transparent opacity-50" />
          </div>

          {/* Subheadline */}
          <p className="font-sans text-lg md:text-2xl text-text-muted leading-relaxed max-w-[700px] mx-auto drop-shadow-md">
            {COPY.HERO_SUBHEAD}
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-12 w-full sm:w-auto">
            <Link
              href="#contact"
              className="bg-chrome text-navy-deep rounded-sm px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 hover:bg-white transition-all duration-300 text-center uppercase tracking-widest w-full sm:w-auto"
            >
              Request Quote
            </Link>
            <a
              href={`tel:${BRAND.PHONE.replace(/\D/g, '')}`}
              className="bg-navy-deep/50 border border-chrome/50 text-white rounded-sm px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold hover:bg-chrome/10 backdrop-blur-sm transition-all duration-300 text-center uppercase tracking-widest w-full sm:w-auto"
            >
              Call {BRAND.PHONE}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
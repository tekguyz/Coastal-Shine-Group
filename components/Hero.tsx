import Link from 'next/link';
import { COPY } from '@/constants/copy';
import { BRAND } from '@/constants/brand';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-deep overflow-hidden pt-20">
      {/* CSS Radial Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(133, 133, 133, 0.15) 0%, rgba(34, 34, 34, 0) 60%)',
        }}
      />
      
      <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-block border border-chrome/35 text-chrome rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-widest mb-6">
          {COPY.HERO_EYEBROW}
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-white font-semibold leading-[1.1] mt-6">
          {COPY.HERO_HEADLINE}
        </h1>

        {/* Divider */}
        <div className="w-[60px] h-[2px] bg-chrome mx-auto mt-6 mb-6" />

        {/* Subheadline */}
        <p className="font-sans text-xl text-text-muted leading-relaxed max-w-[600px] mx-auto">
          {COPY.HERO_SUBHEAD}
        </p>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 w-full sm:w-auto">
          <Link
            href="#contact"
            className="bg-chrome text-navy-deep rounded-sm px-8 py-4 text-lg font-bold hover:bg-white transition-colors text-center"
          >
            Request Quote
          </Link>
          <a
            href={`tel:${BRAND.PHONE.replace(/\D/g, '')}`}
            className="bg-transparent border border-chrome text-white rounded-sm px-8 py-4 text-lg hover:bg-chrome/10 transition-colors text-center"
          >
            Call {BRAND.PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

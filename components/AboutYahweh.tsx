import { BRAND } from '@/constants/brand';
import { COPY } from '@/constants/copy';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function AboutYahweh() {
  return (
    <section id="about" className="relative bg-navy-deep py-24 md:py-32 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-chrome/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Visual Manifesto Side (Replacing the Image) */}
          <RevealOnScroll direction="left">
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-navy-mid border border-chrome/20 rounded-sm flex flex-col items-center justify-center p-12 text-center shadow-2xl">
              {/* Subtle Nautical Texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-chrome)_1px,_transparent_1px)] [background-size:32px_32px]" />
              
              {/* Large Ornamental Anchor */}
              <div className="mb-12 text-chrome/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V8m0 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3zM5 12H2a10 10 0 0 0 20 0h-3"/>
                </svg>
              </div>

              <div className="relative">
                <span className="absolute -top-8 -left-8 text-6xl text-chrome/20 font-serif">“</span>
                <p className="heading-serif text-3xl md:text-4xl text-white italic leading-tight mb-8">
                  Perfection isn&apos;t a goal. It&apos;s the standard.
                </p>
                <div className="w-16 h-0.5 bg-chrome mx-auto mb-6" />
                <p className="heading-serif text-chrome uppercase tracking-[0.3em] text-sm">
                  — {BRAND.LEAD_SPECIALIST}
                </p>
              </div>

              {/* Bottom "Seal" Badge */}
              <div className="absolute bottom-10 border border-chrome/30 px-6 py-3 rounded-sm backdrop-blur-md">
                <p className="text-[10px] text-chrome uppercase tracking-[0.4em] font-bold">
                  Master Marine Preservation
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Content Side */}
          <RevealOnScroll direction="right">
            <div>
              <div className="inline-block border border-chrome/35 text-chrome rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                The Philosophy
              </div>
              
              <h2 className="heading-serif text-4xl md:text-6xl text-white mb-10 leading-[1.1]">
                {COPY.ABOUT_HEADLINE}
              </h2>
              
              <div className="space-y-8 text-text-muted text-lg md:text-xl leading-relaxed font-sans">
                <p>
                  Since {BRAND.FOUNDED}, {BRAND.LEAD_SPECIALIST} has built {BRAND.BUSINESS_NAME} on a singular premise: 
                  marine vessels require an entirely different caliber of care than luxury automobiles.
                </p>
                
                <div className="flex gap-6 items-start">
                  <div className="mt-2 w-10 h-[1px] bg-chrome shrink-0" />
                  <p>
                    Operating exclusively along the <span className="text-white font-semibold">US-1 Corridor</span>, we bring dockside convenience without compromising the meticulous standards expected by yacht owners. 
                  </p>
                </div>

                <p>
                  From heavy oxidation removal to applying advanced ceramic sealants that withstand the harsh Florida sun, every project is personally overseen to ensure a flawless, showroom-grade finish.
                </p>
              </div>

              {/* Authority Stats Block */}
              <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/10 pt-10">
                <div className="group">
                  <p className="heading-serif text-5xl text-chrome mb-2 group-hover:scale-105 transition-transform origin-left">500+</p>
                  <p className="text-xs text-white/50 uppercase tracking-[0.2em] font-bold">Vessels Restored</p>
                </div>
                <div className="group">
                  <p className="heading-serif text-5xl text-chrome mb-2 group-hover:scale-105 transition-transform origin-left">100%</p>
                  <p className="text-xs text-white/50 uppercase tracking-[0.2em] font-bold">Mobile Excellence</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
import { COPY } from '@/constants/copy';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function ServicesBento() {
  return (
    <section id="services" className="relative bg-cream py-24 md:py-32 overflow-hidden">
      {/* Subtle Nautical Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-navy-deep)_1px,_transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="heading-serif text-5xl md:text-6xl text-navy-deep mb-6 drop-shadow-sm">
            Meticulous Marine Detailing
          </h2>
          <div className="w-24 h-1 bg-chrome mx-auto mb-6" />
          <p className="font-sans text-lg text-navy-deep/70 max-w-2xl mx-auto">
            Protecting your investment with marine-grade preservation and unmatched attention to detail.
          </p>
        </div>

        {/* Removed the fixed 300px height. Now dynamically scales to fit the content perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto">
          {COPY.SERVICES_COPY.map((service, index) => {
            // Anchor the grid by making the premium service massive and dark
            const isPremium = service.title === "Full Restoration";
            const gridClasses = isPremium 
              ? "md:col-span-2 md:row-span-2" 
              : service.span || "md:col-span-1";

            return (
              <RevealOnScroll key={index} delay={index * 0.1} className={gridClasses}>
                <div
                  className={`group relative h-full flex flex-col overflow-hidden rounded-sm border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    isPremium 
                      ? "bg-navy-deep border-chrome/30 text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-8 md:p-12" 
                      : "bg-white border-navy-deep/10 text-navy-deep shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8 hover:border-chrome/50"
                  }`}
                >
                  {/* Premium Lighting Effects - Only on the main card */}
                  {isPremium && (
                    <>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-chrome/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-chrome/20 transition-colors duration-700" />
                      <div className="absolute top-8 right-8 border border-chrome text-chrome px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-sm hidden sm:block">
                        Signature Service
                      </div>
                    </>
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Decorative Top Line */}
                    <div className={`w-12 h-1 mb-6 transition-all duration-500 ${isPremium ? 'bg-chrome group-hover:w-24' : 'bg-chrome/40 group-hover:bg-chrome group-hover:w-20'}`} />
                    
                    <h3 className={`heading-serif text-3xl md:text-4xl mb-4 ${isPremium ? 'text-white' : 'text-navy-deep'}`}>
                      {service.title}
                    </h3>
                    
                    {/* mt-auto pushes the description down slightly if there's extra space, keeping the layout grounded */}
                    <p className={`font-sans text-base md:text-lg leading-relaxed mt-auto ${isPremium ? 'text-white/80' : 'text-navy-deep/70'}`}>
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Bottom Right Icon Anchor */}
                  {!isPremium && (
                    <div className="absolute bottom-6 right-6 text-3xl opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 text-navy-deep pointer-events-none">
                      ⚓
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import Image from 'next/image';
import { BRAND } from '@/constants/brand';
import { COPY } from '@/constants/copy';

export default function AboutYahweh() {
  return (
    <section id="about" className="bg-navy-deep py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden border border-chrome/20">
            <Image
              src="https://picsum.photos/seed/yacht-detail/800/1000"
              alt="Master Detailer Yahweh working on a yacht"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-chrome font-serif text-2xl italic">
                &quot;Perfection isn&apos;t a goal. It&apos;s the standard.&quot;
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block border border-chrome/35 text-chrome rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-widest mb-6">
              The Master Detailer
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              {COPY.ABOUT_HEADLINE}
            </h2>
            
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Since {BRAND.FOUNDED}, {BRAND.LEAD_SPECIALIST} has built {BRAND.BUSINESS_NAME} on a singular premise: 
                marine vessels require an entirely different caliber of care than luxury automobiles.
              </p>
              <p>
                Operating exclusively along {BRAND.CITY}, {BRAND.STATE}, Yahweh brings 
                dockside convenience without compromising on the meticulous standards expected by 
                yacht owners. From heavy oxidation removal to applying advanced ceramic sealants 
                that withstand the harsh Florida sun and saltwater, every job is personally 
                overseen to ensure flawless execution.
              </p>
              <p>
                We don&apos;t just wash boats; we preserve investments.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-chrome/20 pt-8">
              <div>
                <p className="text-4xl font-serif text-chrome mb-2">500+</p>
                <p className="text-sm text-white/80 uppercase tracking-wider">Vessels Restored</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-chrome mb-2">100%</p>
                <p className="text-sm text-white/80 uppercase tracking-wider">Dockside Service</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

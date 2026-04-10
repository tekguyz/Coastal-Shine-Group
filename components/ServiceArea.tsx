import { BRAND } from '@/constants/brand';

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-chrome py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-navy-deep mb-6">
              Our Service Area
            </h2>
            <p className="text-navy-deep/80 text-lg leading-relaxed mb-8">
              We provide premium mobile dockside detailing exclusively along {BRAND.CITY}, {BRAND.STATE}. 
              We come directly to your marina, private dock, or dry storage facility.
            </p>
            
            <ul className="space-y-4">
              {[
                'Fort Lauderdale',
                'Pompano Beach',
                'Lighthouse Point',
                'Deerfield Beach',
                'Boca Raton'
              ].map((city, index) => (
                <li key={index} className="flex items-center gap-3 text-navy-deep font-medium text-lg">
                  <span className="text-white bg-navy-deep rounded-full w-6 h-6 flex items-center justify-center text-xs">✓</span>
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy-deep p-8 rounded-sm text-center">
            <div className="text-chrome text-5xl mb-4">📍</div>
            <h3 className="font-serif text-2xl text-white mb-4">Dockside Convenience</h3>
            <p className="text-text-muted mb-8">
              Fully equipped mobile units with spot-free water systems and marine-grade power tools.
            </p>
            <a
              href="#contact"
              className="inline-block border border-chrome text-chrome hover:bg-chrome hover:text-navy-deep transition-colors font-bold px-8 py-3 rounded-sm uppercase tracking-wide text-sm"
            >
              Check Availability
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

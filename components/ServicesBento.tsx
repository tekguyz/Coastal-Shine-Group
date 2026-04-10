import { COPY } from '@/constants/copy';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function ServicesBento() {
  return (
    <section id="services" className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-navy-deep text-center mb-16">
          Meticulous Marine Detailing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {COPY.SERVICES_COPY.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 0.1} className={service.span}>
              <div
                className={`bg-white rounded-sm border border-navy-deep/10 p-8 hover:border-chrome hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full`}
              >
                <h3 className="font-serif text-2xl text-navy-deep mb-4 group-hover:text-chrome-dark transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

import { COPY } from '@/constants/copy';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function TrustBar() {
  return (
    <section className="w-full bg-chrome py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 flex-wrap">
          {COPY.TRUST_BAR_STATS.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="flex items-center gap-2">
                <span className="text-xl" aria-hidden="true">{item.icon}</span>
                <span className="text-navy-deep font-semibold text-sm uppercase tracking-wide">
                  {item.label}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

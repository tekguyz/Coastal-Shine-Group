import { COPY } from '@/constants/copy';

export default function TrustBar() {
  return (
    <section className="relative z-20 px-4">
      {/* Note the -mt-24 pulls it up, but Hero's pb-48 protects the buttons */}
      <div className="max-w-7xl mx-auto bg-chrome text-navy-deep rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-10 px-8 -mt-20 md:-mt-24 border border-white/20 backdrop-blur-md">
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 md:gap-0">
          {COPY.TRUST_BAR_STATS.map((item, index) => (
            <div key={index} className="flex-1 w-full md:w-auto">
              <div className={`flex flex-col md:flex-row items-center justify-center gap-4 px-4 ${
                index !== COPY.TRUST_BAR_STATS.length - 1 ? 'border-none md:border-r border-navy-deep/20' : ''
              }`}>
                <span className="text-3xl md:text-4xl filter drop-shadow-sm text-navy-deep" aria-hidden="true">
                  {item.icon}
                </span>
                <div className="text-center md:text-left">
                  <span className="block text-navy-deep font-bold text-lg md:text-xl uppercase tracking-tight leading-none">
                    {item.label.split(' ')[0]}
                  </span>
                  <span className="block text-navy-deep/80 font-medium text-xs md:text-sm uppercase tracking-[0.2em] mt-1">
                    {item.label.split(' ').slice(1).join(' ')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
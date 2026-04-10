'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const REVIEWS = [
  {
    name: "Capt. Thomas R.",
    vessel: "65' Princess",
    text: "Yahweh and his team brought our hull back from the dead. The oxidation was severe, but after their multi-stage correction and ceramic coating, she looks better than the day she left the shipyard.",
  },
  {
    name: "Sarah M.",
    vessel: "42' Sea Ray",
    text: "Punctual, professional, and incredibly meticulous. They handled the interior vinyl and exterior detailing while we were docked in Pompano. The attention to detail is unmatched on the US-1 corridor.",
  },
  {
    name: "David L.",
    vessel: "55' Azimut",
    text: "I've used several detailing services in Fort Lauderdale over the years. Coastal Shine Group is the only one I trust now. The chrome polishing and teak cleaning were flawless.",
  },
];

export default function ReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="reviews" className="bg-cream-dark py-24 md:py-32 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-navy-deep mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Hear from the captains and owners who trust us with their vessels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div 
              key={index}
              style={{ y: index % 2 !== 0 ? y : 0 }}
              className="bg-white p-8 rounded-sm border border-navy-deep/10 shadow-sm relative"
            >
              <div className="text-chrome text-4xl font-serif absolute top-4 right-6 opacity-50">&quot;</div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-chrome">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div className="mt-auto border-t border-gray-100 pt-4">
                <p className="font-serif text-navy-deep font-bold text-lg">{review.name}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">{review.vessel}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

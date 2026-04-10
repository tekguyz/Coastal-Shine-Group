import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServicesBento from '@/components/ServicesBento';
import AboutYahweh from '@/components/AboutYahweh';
import ReviewsSection from '@/components/ReviewsSection';
import ServiceArea from '@/components/ServiceArea';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import RevealOnScroll from '@/components/RevealOnScroll';
import { BRAND } from '@/constants/brand';
import { COPY } from '@/constants/copy';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      
      <Hero />
      <TrustBar />

      <ServicesBento />

      <RevealOnScroll>
        <AboutYahweh />
      </RevealOnScroll>

      <ReviewsSection />

      <RevealOnScroll>
        <ServiceArea />
      </RevealOnScroll>

      {/* Contact Section */}
      <section id="contact" className="bg-navy-mid py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Col: Info */}
            <RevealOnScroll>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
                  {COPY.FORM_HEADING}
                </h2>
                <p className="text-text-muted text-lg mb-12 leading-relaxed">
                  {COPY.FORM_SUBHEADING}
                </p>

                <div className="space-y-8">
                  <div>
                    <p className="text-chrome font-semibold text-sm uppercase tracking-wider mb-1">Phone</p>
                    <a href={`tel:${BRAND.PHONE.replace(/\D/g, '')}`} className="text-white text-2xl font-serif hover:text-chrome transition-colors">
                      {BRAND.PHONE}
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-chrome font-semibold text-sm uppercase tracking-wider mb-1">Email</p>
                    <a href={`mailto:${BRAND.EMAIL}`} className="text-white text-xl hover:text-chrome transition-colors">
                      {BRAND.EMAIL}
                    </a>
                  </div>

                  <div>
                    <p className="text-chrome font-semibold text-sm uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-white text-lg">
                      Mon - Sat: 8:00 AM - 6:00 PM<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right Col: Form */}
            <RevealOnScroll delay={0.2}>
              <LeadForm />
            </RevealOnScroll>

          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </main>
  );
}

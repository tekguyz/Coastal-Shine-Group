import Link from 'next/link';
import { BRAND } from '@/constants/brand';
import { COPY } from '@/constants/copy';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep border-t border-chrome/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <span className="text-chrome text-2xl">⚓</span>
              <span className="text-chrome font-serif font-bold tracking-[0.05em] uppercase text-xl">
                {BRAND.BUSINESS_NAME}
              </span>
            </Link>
            <p className="text-text-muted max-w-md leading-relaxed">
              Premium mobile dockside marine detailing and high-end hull restoration. 
              Serving {BRAND.CITY}, {BRAND.STATE} since {BRAND.FOUNDED}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {COPY.SERVICES_COPY.map((service, index) => (
                <li key={index}>
                  <Link href="#services" className="text-text-muted hover:text-chrome transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-text-muted">
                <a href={`tel:${BRAND.PHONE.replace(/\D/g, '')}`} className="hover:text-chrome transition-colors">
                  {BRAND.PHONE}
                </a>
              </li>
              <li className="text-text-muted">
                <a href={`mailto:${BRAND.EMAIL}`} className="hover:text-chrome transition-colors">
                  {BRAND.EMAIL}
                </a>
              </li>
              <li className="text-text-muted">
                Mon - Sat: 8am - 6pm<br />
                Sun: By Appointment
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-chrome/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; {currentYear} {BRAND.BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            Designed for the discerning mariner.
          </p>
        </div>
      </div>
    </footer>
  );
}

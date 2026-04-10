import Link from 'next/link';
import { BRAND } from '@/constants/brand';
import { COPY } from '@/constants/copy';

import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep border-t border-chrome/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4 inline-flex">
              <span className="text-chrome text-2xl">⚓</span>
              <span className="text-chrome font-serif font-bold tracking-[0.05em] uppercase text-xl">
                {BRAND.BUSINESS_NAME}
              </span>
            </Link>
            
            <p className="text-chrome font-bold tracking-[0.3em] text-xs uppercase mb-6">
              {BRAND.SOCIAL_HANDLE}
            </p>

            <p className="text-text-muted max-w-md leading-relaxed mb-8">
              Premium mobile dockside marine detailing and high-end hull restoration. 
              Serving {BRAND.CITY}, {BRAND.STATE} since {BRAND.FOUNDED}.
            </p>

            <div className="flex flex-col">
              <p className="text-text-muted text-xs italic mb-4">
                Watch our latest hull restorations on Instagram.
              </p>
              <div className="flex gap-4">
                <a 
                  href={BRAND.INSTAGRAM} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center bg-white/5 hover:bg-chrome hover:text-navy-deep transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href={BRAND.FACEBOOK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center bg-white/5 hover:bg-chrome hover:text-navy-deep transition-all duration-300"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
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

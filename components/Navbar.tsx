'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { BRAND } from '@/constants/brand';
import { COPY } from '@/constants/copy';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Service Area', href: '#service-area' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-350 ease-in-out ${
          isScrolled
            ? 'bg-navy-deep/92 backdrop-blur-[20px] border-b border-chrome/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-chrome text-xl">⚓</span>
            <span className="text-chrome heading-serif font-bold tracking-[0.05em] uppercase group-hover:text-white transition-colors">
              {BRAND.BUSINESS_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-chrome transition-colors duration-200 text-sm font-medium relative group"
              >
                <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-chrome after:transition-all after:duration-300 hover:after:w-full">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={`tel:${BRAND.PHONE.replace(/\D/g, '')}`}
              className="text-white font-bold tracking-widest hover:text-chrome transition-all duration-300 mr-6 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group/phone relative"
            >
              {BRAND.PHONE}
              <span className="absolute inset-0 rounded-sm shadow-[0_0_15px_rgba(255,255,255,0)] group-hover/phone:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-500 animate-pulse" />
            </a>
            
            <div className="h-6 w-[1px] bg-white/10 mr-6" />

            <Link
              href="#contact"
              className="bg-chrome text-navy-deep font-bold rounded-sm px-5 py-2.5 hover:bg-white transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              <span>⚓</span> {COPY.NAVBAR_CTA}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-navy-deep flex flex-col items-center justify-between py-24 px-4">
          <div className="flex flex-col items-center gap-8 w-full">
            <a
              href={`tel:${BRAND.PHONE.replace(/\D/g, '')}`}
              className="bg-white text-navy-deep font-bold rounded-sm px-8 py-4 mb-4 hover:bg-chrome transition-colors w-full max-w-xs text-center text-xl flex items-center justify-center gap-3"
            >
              📞 CALL {BRAND.LEAD_SPECIALIST.toUpperCase()}
            </a>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-chrome text-3xl font-serif hover:text-white transition-colors tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-chrome text-navy-deep font-bold rounded-sm px-8 py-4 mt-4 hover:bg-white transition-colors w-full max-w-xs text-center text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {COPY.NAVBAR_CTA}
            </Link>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-8">
              <a href={BRAND.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-chrome hover:text-white transition-colors">
                <Instagram size={32} />
              </a>
              <a href={BRAND.FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-chrome hover:text-white transition-colors">
                <Facebook size={32} />
              </a>
            </div>
            <p className="text-chrome/50 text-xs font-bold tracking-[0.3em] uppercase">
              {BRAND.SOCIAL_HANDLE}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

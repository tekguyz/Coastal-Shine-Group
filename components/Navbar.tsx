'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
            ? 'bg-navy-deep/92 backdrop-blur-[20px] border-b border-chrome/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-chrome text-xl">⚓</span>
            <span className="text-chrome font-serif font-bold tracking-[0.05em] uppercase group-hover:text-white transition-colors">
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
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-chrome transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
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
        <div className="fixed inset-0 z-40 bg-navy-deep flex flex-col items-center justify-center pt-20 px-4">
          <div className="flex flex-col items-center gap-8 w-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-2xl font-serif hover:text-chrome transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-chrome text-navy-deep font-bold rounded-sm px-8 py-4 mt-8 hover:bg-white transition-colors w-full text-center text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {COPY.NAVBAR_CTA}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

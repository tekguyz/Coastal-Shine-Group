'use client';

import { useState } from 'react';
import { BRAND } from '@/constants/brand';
import { COPY } from '@/constants/copy';

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-navy-deep/90 backdrop-blur-xl rounded-md border border-chrome/20 p-12 text-center h-full flex flex-col items-center justify-center min-h-[500px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-chrome/20 blur-2xl rounded-full animate-pulse" />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="80" 
            height="80" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-chrome relative z-10"
          >
            <circle cx="12" cy="5" r="3"/>
            <line x1="12" y1="22" x2="12" y2="8"/>
            <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
          </svg>
        </div>
        <h3 className="heading-serif text-3xl text-white mb-4 tracking-tight">Request Received</h3>
        <p className="text-text-muted text-lg leading-relaxed max-w-xs mx-auto">
          Thank you for reaching out. Master Detailer {BRAND.LEAD_SPECIALIST} will contact you shortly to discuss your vessel.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-navy-deep/90 backdrop-blur-xl rounded-md border border-chrome/20 p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
      {/* Decorative Gradient Flare */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-chrome/10 rounded-full blur-3xl pointer-events-none" />
      
      <form 
        name="coastal-leads" 
        method="POST" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-8 relative z-10"
      >
        <input type="hidden" name="form-name" value="coastal-leads" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
          </label>
        </p>
        
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-chrome uppercase tracking-[0.2em] mb-3">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-navy-mid/50 text-white border border-chrome/30 rounded-sm px-5 py-4 min-h-[56px] focus:outline-none focus:ring-2 focus:ring-chrome focus:border-transparent transition-all outline-none placeholder:text-white/20 text-base"
              placeholder="Captain Ahab"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-chrome uppercase tracking-[0.2em] mb-3">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full bg-navy-mid/50 text-white border border-chrome/30 rounded-sm px-5 py-4 min-h-[56px] focus:outline-none focus:ring-2 focus:ring-chrome focus:border-transparent transition-all outline-none placeholder:text-white/20 text-base"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="vessel" className="block text-xs font-bold text-chrome uppercase tracking-[0.2em] mb-3">
              Vessel Make & Length
            </label>
            <input
              type="text"
              id="vessel"
              name="vessel"
              required
              className="w-full bg-navy-mid/50 text-white border border-chrome/30 rounded-sm px-5 py-4 min-h-[56px] focus:outline-none focus:ring-2 focus:ring-chrome focus:border-transparent transition-all outline-none placeholder:text-white/20 text-base"
              placeholder="e.g., 42' Sea Ray"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-bold text-chrome uppercase tracking-[0.2em] mb-3">
              Service Needed
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="w-full bg-navy-mid/50 text-white border border-chrome/30 rounded-sm px-5 py-4 min-h-[56px] focus:outline-none focus:ring-2 focus:ring-chrome focus:border-transparent transition-all appearance-none outline-none cursor-pointer text-base"
              >
                <option value="" disabled className="bg-navy-deep">Select a service...</option>
                <option value="Basic Wash" className="bg-navy-deep">Basic Wash</option>
                <option value="Full Detail" className="bg-navy-deep">Full Detail</option>
                <option value="Full Restoration" className="bg-navy-deep">Full Restoration</option>
                <option value="Custom" className="bg-navy-deep">Custom Add-ons / Other</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-chrome">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-chrome text-navy-deep font-bold rounded-sm px-8 py-5 text-lg uppercase tracking-widest hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-xl"
        >
          {isSubmitting ? 'Processing...' : 'Secure My Quote'}
        </button>

        <div className="mt-8 text-center space-y-4">
          <p className="text-text-muted text-xs uppercase tracking-widest">
            Join 500+ boat owners following our restoration work on <a href={BRAND.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-chrome hover:underline">Instagram</a> & <a href={BRAND.FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-chrome hover:underline">Facebook</a>.
          </p>
          <p className="text-white/60 text-sm">
            Need immediate help? <a href={`tel:${BRAND.PHONE.replace(/\D/g, '')}`} className="text-chrome underline underline-offset-4 hover:text-white transition-colors">Call {BRAND.LEAD_SPECIALIST} at {BRAND.PHONE}</a>
          </p>
        </div>
      </form>
    </div>
  );
}

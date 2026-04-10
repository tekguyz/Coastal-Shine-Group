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
      <div className="bg-navy-deep rounded-sm border border-chrome/20 p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="64" 
          height="64" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-chrome mb-6"
        >
          <circle cx="12" cy="5" r="3"/>
          <line x1="12" y1="22" x2="12" y2="8"/>
          <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
        </svg>
        <h3 className="font-serif text-2xl text-white mb-2">Request Received</h3>
        <p className="text-text-muted">
          Thank you for reaching out. Master Detailer {BRAND.LEAD_SPECIALIST} will contact you shortly to discuss your vessel.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-navy-deep rounded-sm border border-chrome/20 p-8">
      <form 
        name="coastal-leads" 
        method="POST" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="coastal-leads" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
          </label>
        </p>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-navy-mid text-white border border-chrome/30 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-chrome focus:border-transparent transition-all"
            placeholder="Captain Ahab"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full bg-navy-mid text-white border border-chrome/30 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-chrome focus:border-transparent transition-all"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="vessel" className="block text-sm font-medium text-white/80 mb-2">
            Vessel Make & Length
          </label>
          <input
            type="text"
            id="vessel"
            name="vessel"
            required
            className="w-full bg-navy-mid text-white border border-chrome/30 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-chrome focus:border-transparent transition-all"
            placeholder="e.g., 42' Sea Ray"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="w-full bg-navy-mid text-white border border-chrome/30 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-chrome focus:border-transparent transition-all appearance-none"
          >
            <option value="" disabled>Select a service...</option>
            <option value="Basic Wash">Basic Wash</option>
            <option value="Full Detail">Full Detail</option>
            <option value="Full Restoration">Full Restoration</option>
            <option value="Custom">Custom Add-ons / Other</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-chrome text-navy-deep font-bold rounded-sm px-8 py-4 hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-4"
        >
          {isSubmitting ? 'Sending...' : 'Request Quote'}
        </button>
      </form>
    </div>
  );
}

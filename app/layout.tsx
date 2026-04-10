import type { Metadata } from 'next';
import { Playfair_Display, Inter } from "next/font/google";
import './globals.css';
import { COPY } from '@/constants/copy';
import { BRAND } from '@/constants/brand';

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: COPY.META_TITLE,
  description: COPY.META_DESCRIPTION,
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: COPY.META_TITLE,
    description: COPY.META_DESCRIPTION,
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚓</text></svg>',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "name": BRAND.BUSINESS_NAME,
    "telephone": BRAND.PHONE,
    "email": BRAND.EMAIL,
    "url": process.env.APP_URL || "https://coastalshineboatcare.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": BRAND.CITY,
      "addressRegion": BRAND.STATE,
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:30",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "06:00",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "areaServed": ["Pompano Beach", "Fort Lauderdale", "Deerfield Beach"],
    "knowsAbout": ["Marine Detailing", "Boat Restoration", "Ceramic Coating"]
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}


'use client';

import { Phone } from 'lucide-react';

export default function CallButton() {
  return (
    <a
      href="tel:+918073589104"
      className="fixed bottom-24 right-6 z-50 bg-amber-600 text-white p-4 rounded-full shadow-2xl hover:bg-amber-700 transition-all hover:scale-110 md:bottom-28 md:right-10"
      aria-label="Call GS Craft"
    >
      <Phone size={32} />
    </a>
  );
}

'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = "918073589104";
  const message = "Hi GS Craft, I'm interested in your Sherwani/Coat services.";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 md:bottom-10 md:right-10"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}

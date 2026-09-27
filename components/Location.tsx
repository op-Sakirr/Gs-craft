'use client';

import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112103.01254359487!2d77.0655455!3d28.593282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e366ad%3A0x1e39a3a2412499d7!2sGS%20Craft!5e0!3m2!1sen!2sin!4v1711580000000!5m2!1sen!2sin";
  // The provided link was: https://maps.app.goo.gl/vVuBKtc5VyfY3f7x5
  // I will use a high-quality embed based on general Delhi NCR coordinates if not specific, 
  // but better to provide the link clearly.

  return (
    <section id="location" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 overflow-hidden rounded-[40px] bg-zinc-900 border border-white/5">
          <div className="lg:w-1/3 p-12 flex flex-col justify-center">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Visit Our Studio</h2>
            <h3 className="text-4xl font-serif text-white font-bold mb-6">Our Shivaji Nagar Studio</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Step into our flagship studio in the heart of Bengaluru for personal measurements and to feel the luxury of our premium fabrics firsthand.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-amber-500 shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold mb-1">Shivaji Nagar, Bengaluru</p>
                  <p className="text-gray-500 text-sm">#134, Ibrahim Sahib St, near Commercial Street, Tasker Town, Shivaji Nagar, Bengaluru, 560001</p>
                </div>
              </div>
              
              <a 
                href="https://maps.app.goo.gl/snFXHo6PKGfrm8xR9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all"
              >
                Get Directions <Navigation size={18} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-2/3 h-[350px] w-full relative group rounded-[2.5rem] overflow-hidden border border-zinc-800">
            <a 
              href="https://maps.app.goo.gl/snFXHo6PKGfrm8xR9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 cursor-pointer"
              title="Open in Google Maps"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </a>
            <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8186175653457!2d77.604724!3d12.9834572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16630f945371%3A0xc47e3073746a51ba!2sGS%20Craft!5e0!3m2!1sen!2sin!4v1711580000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

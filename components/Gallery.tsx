'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558227083-f90bc1b913d8?q=80&w=800&auto=format&fit=crop",
    alt: "Premium Fabric Collection",
    category: "Fabrics"
  },
  {
    src: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=800&auto=format&fit=crop",
    alt: "Handcrafted Detail",
    category: "Craftsmanship"
  },
  {
    src: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800&auto=format&fit=crop",
    alt: "Wedding Sherwani",
    category: "Wedding"
  },
  {
    src: "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?q=80&w=800&auto=format&fit=crop",
    alt: "Bespoke Suit",
    category: "Suits"
  },
  {
    src: "https://images.unsplash.com/photo-1598460937024-8835828ed141?q=80&w=800&auto=format&fit=crop",
    alt: "Custom Tailoring",
    category: "Workshop"
  },
  {
    src: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop",
    alt: "Premium Fitting",
    category: "Studio"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4"
          >
            The Studio Showcase
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white font-bold mb-6"
          >
            Our Masterpieces
          </motion.h3>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group rounded-[2rem] overflow-hidden break-inside-avoid"
            >
              <div className="relative aspect-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={1000}
                  className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">{image.category}</span>
                <h4 className="text-white text-xl font-serif font-bold">{image.alt}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

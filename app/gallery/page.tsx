'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import { motion } from 'motion/react';

export default function GalleryPage() {
  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-amber-500 selection:text-black">
      <Navbar />
      <div className="pt-24">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-zinc-900/50 py-12 border-b border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Our Gallery</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our collection of bespoke tailoring, premium fabrics, and handcrafted masterpieces from our studio.
            </p>
          </div>
        </motion.div>
        <Gallery />
      </div>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </main>
  );
}

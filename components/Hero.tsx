'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_sherwani_1790494908879.jpg"
          alt="Premium Sherwani GS Craft"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1 mb-6 border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-widest rounded-full">
            Mastering Bespoke Tailoring
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Elegance <br />
            <span className="text-amber-500 italic">Crafted</span> to Perfection
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
            Experience the finest collection of custom Sherwanis and Coats. At GS Craft, we believe every stitch tells a story of tradition and modern sophistication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition-all transform hover:scale-105 shadow-xl shadow-amber-900/40"
            >
              Order Online
            </button>
            <button 
              onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all"
            >
              View Collection
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative side element */}
      <div className="hidden lg:block absolute right-0 bottom-0 p-12 border-t border-l border-white/10 bg-black/20 backdrop-blur-sm rounded-tl-[3rem]">
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-amber-500 font-bold text-xl">15+</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Years of Craft</p>
          </div>
          <div className="h-10 w-px bg-white/20" />
          <div className="text-right">
            <p className="text-amber-500 font-bold text-xl">5k+</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Happy Grooms</p>
          </div>
        </div>
      </div>
    </section>
  );
}

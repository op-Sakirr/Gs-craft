'use client';

import { motion } from 'motion/react';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    if (pathname !== '/') {
      router.push(`/#${id}`);
      setIsOpen(false);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-500/20 bg-white shadow-lg shadow-amber-500/10">
              <Image 
                src="https://i.ibb.co/TMM4rJX8/file-0000000016f08211b007000bf7b8c431.png" 
                alt="GS Craft Logo" 
                fill 
                className="object-contain p-0.5"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-tighter text-white leading-none">
                GS <span className="text-amber-500">CRAFT</span>
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mt-1">
                Bespoke Tailoring
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('collection')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Collection</button>
            <button onClick={() => scrollToSection('process')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">How it Works</button>
            <Link href="/gallery" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Gallery</Link>
            <button onClick={() => scrollToSection('location')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Location</button>
            <button 
              onClick={() => scrollToSection('order')}
              className="px-6 py-2 bg-amber-600 text-white rounded-full text-sm font-semibold hover:bg-amber-700 transition-all shadow-lg shadow-amber-900/20"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/10 px-4 pt-2 pb-6 flex flex-col gap-4"
        >
          <button onClick={() => scrollToSection('collection')} className="text-left py-2 text-lg font-medium text-gray-300">Collection</button>
          <button onClick={() => scrollToSection('process')} className="text-left py-2 text-lg font-medium text-gray-300">How it Works</button>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-left py-2 text-lg font-medium text-gray-300">Gallery</Link>
          <button onClick={() => scrollToSection('location')} className="text-left py-2 text-lg font-medium text-gray-300">Location</button>
          <button 
            onClick={() => scrollToSection('order')}
            className="w-full py-3 bg-amber-600 text-white rounded-xl text-center font-bold"
          >
            Order Custom Suit
          </button>
        </motion.div>
      )}
    </nav>
  );
}

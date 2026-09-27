'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Ruler, Scissors, Award } from 'lucide-react';

const products = [
  {
    title: 'Traditional Wedding Sherwani',
    price: 'Premium range',
    image: '/images/product_sherwani_wedding_1790494930470.jpg',
    description: 'Intricate gold embroidery on royal blue velvet for the royal look.'
  },
  {
    title: 'Modern Tailored Coat',
    price: 'Custom fit',
    image: '/images/product_coat_1790494920240.jpg',
    description: 'Slim fit charcoal grey coat crafted from premium wool texture.'
  },
  {
    title: 'Luxury Ethnic Wear',
    price: 'Bespoke',
    image: '/images/hero_sherwani_1790494908879.jpg',
    description: 'Minimalist and elegant designs for formal events and celebrations.'
  }
];

const steps = [
  { icon: <Ruler className="text-amber-500" size={32} />, title: 'Consultation', desc: 'Discuss your style and fabric preferences with our master tailors.' },
  { icon: <Scissors className="text-amber-500" size={32} />, title: 'Perfect Fit', desc: 'Precise measurements taken to ensure a silhouette that fits like a glove.' },
  { icon: <Award className="text-amber-500" size={32} />, title: 'Master Crafting', desc: 'Each piece is hand-stitched with attention to the smallest details.' },
];

export default function Collection() {
  return (
    <section id="collection" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Our Signature Selection</h2>
          <p className="text-4xl md:text-5xl font-serif text-white font-bold">Featured Collections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all"
            >
              <div className="relative h-[450px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-8">
                <p className="text-amber-500 text-sm font-bold mb-2 uppercase">{product.price}</p>
                <h3 className="text-2xl font-serif text-white font-bold mb-4">{product.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{product.description}</p>
                <button 
                  onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 border border-amber-500/30 text-amber-500 font-bold rounded-xl group-hover:bg-amber-500 group-hover:text-black transition-all"
                >
                  Order This Style
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div id="process" className="py-20 border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white font-bold">The Crafting Journey</h2>
            <p className="text-gray-400 mt-4">How we create your masterpiece</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

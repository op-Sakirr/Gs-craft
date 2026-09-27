'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, MessageSquare } from 'lucide-react';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'Sherwani',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format WhatsApp message
    const text = `Namaste GS Craft! My name is ${formData.name}. I am interested in a custom ${formData.type}. ${formData.message ? `Details: ${formData.message}` : ''} Please contact me at ${formData.phone}.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918073589104?text=${encodedText}`, '_blank');
  };

  return (
    <section id="order" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Start Your Custom Order</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white font-bold mb-8 leading-tight">
              Ready to Wear Your <br /> 
              <span className="text-amber-500">Perfect Fit?</span>
            </h3>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Fill out the form below or message us directly on WhatsApp to book a consultation or place an order. Our master tailors are ready to bring your vision to life.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10">
                  <Phone className="text-amber-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Call Us</p>
                  <p className="text-xl font-bold">+91 80735 89104</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <MessageSquare className="text-green-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">WhatsApp</p>
                  <p className="text-xl font-bold text-green-500">Fast Inquiry</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 p-8 md:p-12 rounded-[40px] border border-white/5 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Your Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter full name"
                    className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91-00000-00000"
                      className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Looking For</label>
                    <select 
                      className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                    >
                      <option>Sherwani</option>
                      <option>Coat / Suit</option>
                      <option>Indo Western</option>
                      <option>Kurta Pajama</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Additional Details</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about the occasion or specific requirements..."
                    className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-amber-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-amber-700 transition-all shadow-xl shadow-amber-900/20"
                >
                  Place Online Order Inquiry <Send size={20} />
                </button>
                <p className="text-center text-xs text-gray-500">
                  By clicking, you will be redirected to WhatsApp for faster communication.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

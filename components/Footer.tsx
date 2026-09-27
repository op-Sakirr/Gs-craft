import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-500/20 bg-white shadow-lg shadow-amber-500/10">
                <Image 
                  src="https://i.ibb.co/TMM4rJX8/file-0000000016f08211b007000bf7b8c431.png" 
                  alt="GS Craft Logo" 
                  fill 
                  className="object-contain p-0.5"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tighter text-white">
                GS <span className="text-amber-500">CRAFT</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Premium coat and sherwani makers dedicated to preserving the art of traditional tailoring with a modern touch. Every piece is a masterpiece.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-500 hover:text-amber-500 transition-colors text-sm">Home</Link></li>
              <li><Link href="/#collection" className="text-gray-500 hover:text-amber-500 transition-colors text-sm">Our Collection</Link></li>
              <li><Link href="/gallery" className="text-gray-500 hover:text-amber-500 transition-colors text-sm font-bold text-amber-500/80">Gallery Showcase</Link></li>
              <li><Link href="/#location" className="text-gray-500 hover:text-amber-500 transition-colors text-sm">Locate Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Studio Location</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              #134, Ibrahim Sahib St,<br />
              Tasker Town, Shivaji Nagar,<br />
              Bengaluru, 560001
            </p>
            <p className="text-amber-500 font-bold text-sm">+91 80735 89104</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            © 2026 GS Craft. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-xs uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-xs uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Crown } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 bg-obsidian/95 backdrop-blur-sm border-b border-gold/10">
      <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
        <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 flex-shrink-0">
          <span className="font-serif text-gold flex items-center justify-center">
            <Crown size={16} strokeWidth={2} />
          </span>
        </div>
        <span className="font-serif text-lg md:text-xl tracking-tighter text-gold uppercase whitespace-nowrap">BENGALURU</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-gold opacity-60">
        <a href="#vision" className="hover:opacity-100 transition-opacity">Vision</a>
        <a href="#pillars" className="hover:opacity-100 transition-opacity">The Pillars</a>
        <a href="#legacy" className="hover:opacity-100 transition-opacity">Legacy</a>
        <a href="#gallery" className="hover:opacity-100 transition-opacity">Venues</a>
      </div>

      <a href="tel:+919999999999" className="flex-shrink-0 flex items-center justify-center font-mono border border-gold/30 bg-gold/5 text-gold px-3 py-1.5 md:px-6 md:py-2 text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-gold hover:text-obsidian transition-colors whitespace-nowrap">
        Contact Bid<span className="hidden md:inline">&nbsp;Committee</span>
      </a>
    </nav>
  );
}

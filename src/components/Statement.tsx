import React from 'react';
import { motion } from 'motion/react';

export function Statement() {
  return (
    <section id="vision" className="relative py-32 px-6 md:px-12 bg-obsidian border-b border-gold/10 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-chess-grid" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 lg:border-r border-gold/10 lg:pr-8">
             <span className="font-mono text-gold text-[10px] opacity-60 uppercase tracking-[0.4em] block mb-4">Official Bid Statement</span>
          </div>
          <div className="lg:col-span-8 bg-gold/5 border border-gold/10 p-8 md:p-12 relative">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-5xl font-light italic leading-snug uppercase text-gold"
            >
              India invented chess. <br/>
              <span className="font-normal opacity-80">Karnataka is its rightful home.</span>
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="mt-12 text-sm md:text-base opacity-80 font-mono tracking-wider leading-relaxed max-w-2xl uppercase"
            >
              We are not merely offering a venue; we are offering a homecoming. By co-hosting both the Open and Women's World Chess Championships, Bengaluru sets a historic precedent for gender equity in the sport, framed against the backdrop of Asia's most dynamic technological and cultural hub.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

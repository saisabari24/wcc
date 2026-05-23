import React from 'react';
import { motion } from 'motion/react';

export function Stats() {
  return (
    <section id="legacy" className="py-32 bg-obsidian border-b border-gold/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-chess-grid" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="flex flex-col justify-center lg:col-span-5 lg:border-r border-gold/10 lg:pr-10">
            <h2 className="text-[40px] sm:text-5xl md:text-7xl lg:text-5xl xl:text-6xl leading-[0.85] font-light italic uppercase mb-8 text-gold max-w-full">Unmatched<br/><span className="mt-2 block">Scale</span></h2>
            <p className="font-mono text-[10px] md:text-xs uppercase opacity-80 tracking-wider leading-relaxed max-w-md">
              Bringing the championship to India is not just a geographic shift; it is unlocking the largest concentrated demographic of chess enthusiasts on earth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 lg:col-span-7">
            {[
              { label: "Active Players in India", value: "60M+" },
              { label: "Grandmasters", value: "84" },
              { label: "Global Tech Hub Rank", value: "Top 5" },
              { label: "Simultaneous Events", value: "02" }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-10 border border-gold/10 bg-gold/5 hover:bg-gold/10 transition-colors"
              >
                <div className="text-5xl md:text-6xl font-light italic text-gold mb-4">{stat.value}</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

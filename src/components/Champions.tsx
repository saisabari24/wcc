import React from 'react';
import { motion } from 'motion/react';
import { useLightbox, EnlargeButton } from './Lightbox';

export function Champions() {
  const { openLightbox } = useLightbox();

  return (
    <section className="py-32 px-6 md:px-12 bg-obsidian border-b border-gold/10">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 border-b border-gold/10 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-[84px] leading-[0.85] font-light uppercase italic mb-6 text-gold">A Royal<br/><span className="mt-2 block">Crowning</span></h2>
            <p className="font-mono text-[10px] md:text-xs uppercase opacity-80 tracking-wider leading-relaxed">
              Visualizing the ultimate triumph on home soil. A historic double victory where Indian prodigies D. Gukesh and R. Vaishali lift the World Championship trophies before a passionate home crowd.
            </p>
          </div>
          <span className="font-mono text-gold text-[10px] tracking-[0.4em] uppercase opacity-60 border-l border-gold/30 pl-4">The 2026 Vision</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden border border-gold/10 bg-gold/5 p-2 flex flex-col h-full"
          >
             <EnlargeButton onClick={() => openLightbox("/gukesh-champion.jpg", "image", "D. Gukesh Crowned Champion")} />
             <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden flex-shrink-0">
                <img 
                  src="/gukesh-champion.jpg" 
                  alt="D Gukesh receiving championship trophy" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 p-4 border border-gold/20 bg-obsidian/90 z-10 flex-1 flex flex-col justify-center">
                <span className="font-mono text-gold text-[9px] tracking-[0.3em] uppercase block mb-2 opacity-60">Open Championship Vision</span>
                <span className="text-lg uppercase italic text-gold block leading-tight mb-2">D. Gukesh Crowned Champion</span>
                <span className="font-mono text-[9px] text-white/70 block uppercase tracking-widest leading-relaxed">Lifting the ultimate trophy on home soil in Bengaluru</span>
              </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group overflow-hidden border border-gold/10 bg-gold/5 p-2 flex flex-col h-full"
          >
             <EnlargeButton onClick={() => openLightbox("/vaishali-champion.jpg", "image", "R. Vaishali Makes History")} />
             <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden flex-shrink-0">
                <img 
                  src="/vaishali-champion.jpg" 
                  alt="R Vaishali receiving championship trophy" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 p-4 border border-gold/20 bg-obsidian/90 z-10 flex-1 flex flex-col justify-center">
                <span className="font-mono text-gold text-[9px] tracking-[0.3em] uppercase block mb-2 opacity-60">Women's Championship Vision</span>
                <span className="text-lg uppercase italic text-gold block leading-tight mb-2">R. Vaishali Makes History</span>
                <span className="font-mono text-[9px] text-white/70 block uppercase tracking-widest leading-relaxed">Lifting the ultimate trophy on home soil in Bengaluru</span>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

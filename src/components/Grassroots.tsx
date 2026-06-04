import React from 'react';
import { motion } from 'motion/react';
import { useLightbox, EnlargeButton } from './Lightbox';

export function Grassroots() {
  const { openLightbox } = useLightbox();

  return (
    <section className="py-32 px-6 md:px-12 bg-obsidian border-b border-gold/10">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 border-b border-gold/10 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-[84px] leading-[0.85] font-light uppercase italic mb-6 text-gold">Grassroots<br/><span className="mt-2 block">Initiative</span></h2>
            <p className="font-mono text-[10px] md:text-xs uppercase opacity-80 tracking-wider leading-relaxed">
              Empowering the next generation. Karnataka CM D.K. Shivakumar drives a pioneering initiative to integrate chess into government schools, fostering strategic thinking and bringing the sport to every child.
            </p>
          </div>
          <span className="font-mono text-gold text-[10px] tracking-[0.4em] uppercase opacity-60 border-l border-gold/30 pl-4">State Vision</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden border border-gold/10 bg-gold/5 p-2 flex flex-col h-full"
          >
             <EnlargeButton onClick={() => openLightbox("/dk-shivakumar-giving-chess-sets.jpg", "image", "Distributing Chess Sets in Schools")} />
             <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-[4/3] overflow-hidden flex-shrink-0">
                <img 
                  src="/dk-shivakumar-giving-chess-sets.jpg" 
                  alt="CM D.K. Shivakumar distributing chess sets to government school children" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 p-4 border border-gold/20 bg-obsidian/90 z-10 flex-1 flex flex-col justify-center">
                <span className="font-mono text-gold text-[9px] tracking-[0.3em] uppercase block mb-2 opacity-60">Empowering Youth</span>
                <span className="text-sm lg:text-lg uppercase italic text-gold block leading-tight mb-2">Equipping Government Schools</span>
                <span className="font-mono text-[9px] text-white/70 block uppercase tracking-widest leading-relaxed">Providing high-quality chess sets to nurture young talent</span>
              </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group overflow-hidden border border-gold/10 bg-gold/5 p-2 flex flex-col h-full"
          >
             <EnlargeButton onClick={() => openLightbox("/dk-shivakumar-playing-chess.jpg", "image", "Playing Chess with Future Champions")} />
             <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-[4/3] overflow-hidden flex-shrink-0">
                <img 
                  src="/dk-shivakumar-playing-chess.jpg" 
                  alt="CM D.K. Shivakumar playing chess with school children" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 p-4 border border-gold/20 bg-obsidian/90 z-10 flex-1 flex flex-col justify-center">
                <span className="font-mono text-gold text-[9px] tracking-[0.3em] uppercase block mb-2 opacity-60">Fostering Talent</span>
                <span className="text-sm lg:text-lg uppercase italic text-gold block leading-tight mb-2">Engaging With Future Champions</span>
                <span className="font-mono text-[9px] text-white/70 block uppercase tracking-widest leading-relaxed">Inspiring strategic thinking and intellectual growth</span>
              </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group overflow-hidden border border-gold/10 bg-gold/5 p-2 flex flex-col h-full md:col-span-1"
          >
             <EnlargeButton onClick={() => openLightbox("/dk-shivakumar-chess-mat.jpg", "image", "Custom Chess Mat With CM D.K. Shivakumar's Vision")} />
             <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-[4/3] overflow-hidden flex-shrink-0">
                <img 
                  src="/dk-shivakumar-chess-mat.jpg" 
                  alt="Custom chess mat featuring CM D.K. Shivakumar's portrait" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 p-4 border border-gold/20 bg-obsidian/90 z-10 flex-1 flex flex-col justify-center">
                <span className="font-mono text-gold text-[9px] tracking-[0.3em] uppercase block mb-2 opacity-60">Custom Equipment</span>
                <span className="text-sm lg:text-lg uppercase italic text-gold block leading-tight mb-2">Branded Mats For Schools</span>
                <span className="font-mono text-[9px] text-white/70 block uppercase tracking-widest leading-relaxed">Custom chess mats emphasizing the state's sporting vision</span>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

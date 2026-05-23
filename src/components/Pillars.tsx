import React from 'react';
import { motion } from 'motion/react';

const PILLARS = [
  {
    num: "01",
    title: "The Homeland",
    desc: "Originating as Chaturanga, the game returns to its ancient cradle. Karnataka preserves this civilizational heritage while advancing its modern future."
  },
  {
    num: "02",
    title: "Commercial Apex",
    desc: "India boasts over 60 million active chess players. The commercial, broadcast, and sponsorship upside for FIDE is unprecedented."
  },
  {
    num: "03",
    title: "Tech Infrastructure",
    desc: "Bengaluru is the Silicon Valley of Asia. We offer flawless broadcast tech, anti-cheating infrastructure, and global connectivity."
  },
  {
    num: "04",
    title: "Historic Equity",
    desc: "Co-hosting the Open and Women's championships simultaneously. Equal stages. Equal prestige. A defining milestone for FIDE."
  },
  {
    num: "05",
    title: "Royal Hospitality",
    desc: "From the palaces of Mysuru to the luxury towers of Bengaluru, players and officials will experience unmatched comfort and security."
  },
  {
    num: "06",
    title: "Cultural Magnetism",
    desc: "A city where ancient stone temples stand beside aerospace labs. A magnetic destination for international media and traveling fans."
  }
];

export function Pillars() {
  return (
    <section id="pillars" className="py-32 px-6 md:px-12 bg-obsidian border-b border-gold/10 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 flex items-baseline justify-between border-b border-gold/10 pb-8">
          <h2 className="text-5xl md:text-[84px] leading-[0.85] uppercase italic font-light tracking-tight text-gold">Why Karnataka</h2>
          <span className="font-mono text-gold opacity-60 text-[10px] tracking-[0.4em] uppercase hidden md:inline-block">The Six Pillars</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {PILLARS.map((pillar, i) => (
            <motion.div 
              key={pillar.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group p-8 border border-gold/10 bg-gold/5"
            >
              {/* Ghost Numeral */}
              <div className="absolute -top-12 -left-4 text-[180px] font-bold text-gold/5 select-none pointer-events-none transition-opacity duration-500 group-hover:opacity-10 leading-none">
                {pillar.num}
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-2 items-center mb-6 border-b border-gold/10 pb-4">
                   <span className="font-mono text-gold text-[10px] tracking-widest uppercase opacity-60">0{i+1}</span>
                </div>
                <h3 className="text-lg uppercase leading-tight text-gold mb-4">{pillar.title}</h3>
                <p className="font-mono text-[10px] leading-relaxed opacity-80 uppercase tracking-wider">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

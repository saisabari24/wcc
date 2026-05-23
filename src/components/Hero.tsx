import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://storage.googleapis.com/generativeai-downloads/images/ad157ec2-9e4a-4467-bc89-fc4e2b02e77b.png")' }}
      />
      <div className="absolute inset-0 z-10 bg-obsidian/80 mix-blend-multiply" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
      <div className="absolute inset-0 z-10 bg-chess-grid border-b border-gold/10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20 border-x border-t border-gold/10 p-12 bg-obsidian/30 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="font-mono text-gold tracking-[0.3em] uppercase text-xs opacity-60 mb-6 border-b border-gold/10 pb-2">
            The Official Bid
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-light leading-[0.85] uppercase italic tracking-tight mb-6 flex flex-col">
            <span className="text-gold drop-shadow-lg">KARNATAKA</span>
            <span className="text-gold mt-2 drop-shadow-lg">2026</span>
          </h1>
          <p className="font-mono uppercase opacity-80 max-w-2xl text-[10px] md:text-xs tracking-wider leading-relaxed mt-4">
            WORLD CHESS CHAMPIONSHIP &bull; WOMEN'S WORLD CHESS CHAMPIONSHIP
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="w-[1px] h-24 bg-gold/30 mb-8" />
          <span className="font-mono text-gold text-[10px] tracking-widest uppercase opacity-60">Make Your Move</span>
        </motion.div>
      </div>
    </section>
  );
}

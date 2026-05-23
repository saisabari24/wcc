import React from 'react';
import { motion } from 'motion/react';
import { useLightbox, EnlargeButton } from './Lightbox';

const MEDIA = [
  {
    type: 'video' as const,
    url: "/vidhana-soudha-mapping.mp4",
    alt: "Vidhana Soudha Projection Mapping",
    caption: "Vidhana Soudha Projection Mapping"
  },
  {
    type: 'image' as const,
    url: "/gallery-airport.jpg",
    alt: "Bengaluru Airport Chess Installation",
    caption: "KIA Airport Installations"
  },
  {
    type: 'image' as const,
    url: "/gallery-metro.jpg",
    alt: "Namma Metro Chess Livery",
    caption: "City Transit Integration"
  },
  {
    type: 'image' as const,
    url: "/gallery-subway.jpg",
    alt: "Subway Station Golden King",
    caption: "Cultural Immersion"
  },
  {
    type: 'image' as const,
    url: "/gallery-vidhana-photo.jpg",
    alt: "Vidhana Soudha Event Setup",
    caption: "Iconic Venues"
  },
  {
    type: 'image' as const,
    url: "/gallery-kia-terminal.jpg",
    alt: "KIA Terminal Welcome",
    caption: "Airport Arrivals"
  }
];

export function Gallery() {
  const { openLightbox } = useLightbox();

  return (
    <section id="gallery" className="py-32 px-6 md:px-12 bg-obsidian border-b border-gold/10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-gold/10 pb-10">
          <div className="max-w-xl">
             <h2 className="text-5xl md:text-[84px] leading-[0.85] font-light uppercase italic mb-6 text-gold">A City <br/><span className="mt-2 block">Transformed</span></h2>
             <p className="font-mono text-[10px] md:text-xs uppercase opacity-80 tracking-wider leading-relaxed">Bengaluru will become a living chessboard. From dedicated transit corridors to monumental public art, the entire city will celebrate the unified championships.</p>
          </div>
          <a href="#" className="font-mono text-gold text-[10px] tracking-[0.3em] uppercase border-b border-gold/30 pb-1 hover:opacity-100 opacity-60 transition-colors self-start md:self-end">View Full Venue Deck</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {MEDIA.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group overflow-hidden border border-gold/10 bg-gold/5 p-2 flex flex-col h-full ${i === 0 || i === 5 ? 'md:col-span-2' : ''}`}
            >
              <EnlargeButton onClick={() => openLightbox(item.url, item.type, item.caption)} />
              <div className={`relative w-full overflow-hidden flex-shrink-0 aspect-square ${i === 0 || i === 5 ? 'md:aspect-[21/9]' : 'md:aspect-[4/3]'}`}>
                {item.type === 'video' ? (
                  <video 
                    src={item.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                ) : (
                  <img 
                    src={item.url} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="mt-2 p-4 md:p-6 border border-gold/20 bg-obsidian/90 z-10 flex-1 flex flex-col justify-center">
                <span className="font-mono text-gold text-[9px] tracking-[0.3em] uppercase block mb-2 opacity-60">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-lg uppercase italic text-gold block leading-tight">{item.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

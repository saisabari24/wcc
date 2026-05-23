import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';

type MediaType = 'image' | 'video';

interface LightboxContextType {
  openLightbox: (src: string, type: MediaType, caption: string) => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<{ src: string; type: MediaType; caption: string } | null>(null);

  const openLightbox = (src: string, type: MediaType, caption: string) => {
    setContent({ src, type, caption });
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setTimeout(() => setContent(null), 300); // clear after animation
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      <AnimatePresence>
        {isOpen && content && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/95 backdrop-blur-xl p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-gold/60 hover:text-gold p-2 transition-colors z-10"
              aria-label="Close fullscreen"
            >
              <X size={32} strokeWidth={1} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="relative w-full max-w-7xl max-h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {content.type === 'video' ? (
                <video 
                  src={content.src} 
                  autoPlay 
                  controls 
                  playsInline
                  loop
                  className="max-w-full max-h-[85vh] object-contain border border-gold/20"
                />
              ) : (
                <img 
                  src={content.src} 
                  alt={content.caption} 
                  className="max-w-full max-h-[85vh] object-contain border border-gold/20"
                />
              )}
              <div className="mt-6 text-center">
                <span className="text-xl md:text-2xl uppercase italic text-gold">{content.caption}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}

export function EnlargeButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      className="absolute top-4 right-4 z-20 p-2 bg-obsidian/80 border border-gold/30 text-gold backdrop-blur hover:bg-gold hover:text-obsidian transition-colors group/btn opacity-0 group-hover:opacity-100 focus:opacity-100"
      aria-label="Enlarge image"
    >
      <Maximize2 size={18} strokeWidth={1.5} className="group-hover/btn:scale-110 transition-transform" />
    </button>
  );
}

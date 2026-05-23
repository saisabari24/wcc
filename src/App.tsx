import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Statement } from './components/Statement';
import { Pillars } from './components/Pillars';
import { Stats } from './components/Stats';
import { Champions } from './components/Champions';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { LightboxProvider } from './components/Lightbox';

export default function App() {
  return (
    <LightboxProvider>
      <div className="min-h-screen bg-obsidian text-gold selection:bg-gold selection:text-obsidian relative border-[6px] border-gold/10 font-serif overflow-x-hidden">
      {/* Corner Accents */}
      <div className="fixed top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold z-50"></div>
      <div className="fixed top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold z-50"></div>
      <div className="fixed bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold z-50"></div>
      <div className="fixed bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold z-50"></div>

      <Navigation />
      <main className="relative z-10 w-full">
        <Hero />
        <Statement />
        <Champions />
        <Gallery />
        <Pillars />
        <Stats />
      </main>
      <Footer />
      </div>
    </LightboxProvider>
  );
}

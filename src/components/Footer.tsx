import React from 'react';

export function Footer() {
  return (
    <footer className="bg-obsidian pt-32 pb-16 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-chess-grid pointer-events-none" />
      
      <div className="absolute -bottom-20 -left-10 text-[480px] font-bold text-gold opacity-5 leading-none z-0 pointer-events-none">
        26
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-6 lg:col-span-5 lg:border-r border-gold/10 lg:pr-10">
            <h3 className="text-[84px] leading-[0.85] text-gold font-light italic uppercase mb-8">Your<br/>Move</h3>
            <p className="font-mono text-[10px] md:text-xs opacity-80 uppercase tracking-wider mb-8 max-w-sm leading-relaxed">
              We invite the FIDE evaluation committee and delegates to discuss the Bengaluru 2026 unified championship bid.
            </p>
            <a href="mailto:bid@worldchesschampionship26.com" className="inline-block border border-gold/30 bg-gold/5 text-gold px-8 py-4 font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-obsidian transition-colors">
              Contact Committee
            </a>
          </div>
          
          <div className="md:col-span-3 lg:col-start-8">
            <div className="font-mono text-gold text-[10px] uppercase tracking-[0.4em] opacity-60 mb-6">Partners</div>
            <ul className="space-y-4 font-mono text-[10px] md:text-xs uppercase tracking-wider opacity-80 text-gold">
              <li>Government of Karnataka</li>
              <li>All India Chess Federation</li>
              <li>Karnataka State Chess Association</li>
              <li>Bengaluru Tourism Board</li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
             <div className="font-mono text-gold text-[10px] uppercase tracking-[0.4em] opacity-60 mb-6">Media</div>
            <ul className="space-y-4 font-mono text-[10px] md:text-xs uppercase tracking-wider opacity-80 text-gold">
              <li><a href="#" className="hover:opacity-100 transition-opacity underline underline-offset-4 decoration-gold/30">Press Releases</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity underline underline-offset-4 decoration-gold/30">Bid Dossier PDF</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity underline underline-offset-4 decoration-gold/30">Brand Assets</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between font-mono text-[9px] uppercase tracking-[0.3em] opacity-50 gap-4">
          <p>&copy; 2026 Karnataka Bid Committee. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="opacity-50">Host City</div>
              <div className="text-xs tracking-[0.1em] text-gold opacity-100 mt-1">Bengaluru</div>
            </div>
            <div className="w-[1px] h-8 bg-gold/30"></div>
            <div className="text-right">
              <div className="opacity-50">State</div>
              <div className="text-xs tracking-[0.1em] text-gold opacity-100 mt-1">Karnataka</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

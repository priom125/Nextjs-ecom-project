import React from 'react'

function Hero() {

    const IconArrowRight = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);
  return (
    
     
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="relative h-[600px] rounded-[3rem] overflow-hidden bg-slate-900 flex items-center p-12 group">
      <div className="relative z-10 max-w-2xl text-white">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-400 mb-6 block">
          New Season Arrival
        </span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10">
          REDEFINE <br/>YOUR <span className="text-slate-400 italic">STYLE</span>.
        </h1>
        <button className="bg-white text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center space-x-3">
          <span>Shop Collection</span>
          <IconArrowRight size={18} />
        </button>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-slate-800 to-transparent opacity-50"></div>
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-overlay"></div>
    </div>
  </section>
    
  )
}

export default Hero
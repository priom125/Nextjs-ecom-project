import React from 'react'

function Testimonials() {
    const IconBag = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
);
const IconSearch = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const IconUser = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const IconArrowRight = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);
const IconStar = ({ size = 16, fill = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
  return (
    <section className="bg-black text-white py-24 rounded-[4rem] mx-4 sm:mx-6 lg:mx-8">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="flex justify-center space-x-1 mb-8 text-indigo-400">
        {[1, 2, 3, 4, 5].map(s => <IconStar key={s} />)}
      </div>
      <p className="text-3xl md:text-4xl font-medium tracking-tight mb-12 leading-snug">
        "The quality of the oversized wool coat exceeded my expectations. It feels heavy, luxurious, and perfectly tailored. Truly an investment piece."
      </p>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-slate-800 rounded-full mb-4"></div>
        <h5 className="font-black uppercase tracking-widest text-xs">Sarah Jenkins</h5>
        <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">Verified Buyer, London</p>
      </div>
    </div>
  </section>
  )
}

export default Testimonials
import React from 'react'

function BrandStory() {
  return (
   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden">
           <div className="w-full h-full bg-slate-300"></div>
        </div>
        <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2rem] shadow-2xl max-w-xs hidden md:block border border-slate-50">
          <p className="text-slate-900 font-bold italic">"Sustainability isn't a trend for us; it's the foundation of everything we sew."</p>
          <p className="text-xs font-black uppercase tracking-widest mt-4 text-indigo-600">— Founder's Note</p>
        </div>
      </div>
      <div>
        <h2 className="text-5xl font-black tracking-tighter uppercase mb-8 leading-none">Crafting <br/>Conscious <br/>Luxury.</h2>
        <p className="text-slate-600 mb-8 text-lg leading-relaxed">
          Founded in 2024, LuxeThread was born from a desire to merge timeless silhouettes with radical transparency. We partner exclusively with family-owned mills in Italy and Portugal to ensure every fiber meets the highest ethical standards.
        </p>
        <ul className="space-y-4">
          {['100% Organic Cotton', 'Ethical Supply Chain', 'Carbon Neutral Shipping'].map(item => (
            <li key={item} className="flex items-center space-x-3 text-sm font-bold uppercase tracking-wide text-slate-800">
              <span className="w-6 h-6 bg-slate-100 flex items-center justify-center rounded-full text-indigo-600">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
  )
}

export default BrandStory
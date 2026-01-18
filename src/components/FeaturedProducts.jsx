import React from 'react'

function FeaturedProducts() {
  return (
<section className="bg-slate-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-black tracking-tighter uppercase mb-12 text-center">Trending Now</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[3/4] bg-white rounded-[2rem] overflow-hidden mb-4 relative">
              <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[10px] font-bold uppercase rounded-full">New</div>
              <div className="w-full h-full bg-slate-200"></div>
              <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur py-3 rounded-xl font-bold translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                Quick Add +
              </button>
            </div>
            <h4 className="font-bold text-slate-900">Premium Cotton Tee</h4>
            <div className="flex justify-between items-center mt-1">
              <p className="text-slate-500 text-sm">$45.00</p>
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-black border border-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-400 border border-slate-200"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default FeaturedProducts
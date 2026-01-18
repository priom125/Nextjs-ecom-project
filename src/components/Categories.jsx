import React from 'react'

function Categories() {
  return (
   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="flex justify-between items-end mb-10">
      <h2 className="text-4xl font-black tracking-tighter uppercase">Categories</h2>
      <a href="#" className="text-sm font-bold border-b-2 border-black pb-1">Browse All</a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {['Men', 'Women', 'Accessories'].map((cat) => (
        <div key={cat} className="h-96 rounded-[2.5rem] bg-slate-100 p-8 flex flex-col justify-end border border-slate-100 hover:border-slate-300 transition-all cursor-pointer group relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-200 animate-pulse group-hover:hidden"></div>
          <h3 className="text-3xl font-black tracking-tight relative z-10">{cat}</h3>
          <p className="text-slate-500 text-sm mt-2 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">Explore Category —&gt;</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Categories
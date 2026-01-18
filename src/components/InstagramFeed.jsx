import React from 'react'

function InstagramFeed() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="text-center mb-16">
      <h2 className="text-sm font-black uppercase tracking-[0.4em] text-indigo-600 mb-2">Social</h2>
      <h3 className="text-4xl font-black tracking-tighter uppercase">#LuxeInThread</h3>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="aspect-square bg-slate-100 rounded-2xl overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
          <div className="w-full h-full bg-slate-200"></div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default InstagramFeed
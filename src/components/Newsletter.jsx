import React from 'react'

function Newsletter() {
  return (
     <section className="bg-indigo-600 py-24">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">Join the Insider List</h2>
      <p className="text-indigo-100 mb-10 text-lg">Receive early access to seasonal drops and limited collection previews.</p>
      <form className="flex flex-col sm:row gap-4">
        <input 
          type="email" 
          placeholder="Email Address" 
          className="flex-grow px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-lg"
        />
        <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform uppercase">
          Subscribe
        </button>
      </form>
      <p className="text-indigo-200 text-[10px] uppercase tracking-widest mt-6 font-bold">Privacy protected. Unsubscribe anytime.</p>
    </div>
  </section>
  )
}

export default Newsletter
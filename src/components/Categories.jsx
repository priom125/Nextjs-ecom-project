import React from 'react';

/**
 * Modern Categories Component
 * Optimized with inline SVGs to avoid external dependency issues.
 * Features high-quality background images and a premium fashion aesthetic.
 */
const Categories = () => {
  // Inline SVG Icons for reliability
  const Icons = {
    ShoppingBag: () => (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
        <path d="M3 6h18"></path>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    ),
    ArrowRight: () => (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    ),
    User: () => (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    UserPlus: () => (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <line x1="20" y1="8" x2="20" y2="14"></line>
        <line x1="23" y1="11" x2="17" y2="11"></line>
      </svg>
    ),
    Clock: () => (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    ChevronRight: () => (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    )
  };

  const categoryData = [
    {
      id: 'men',
      name: 'Men',
      image: 'https://images.unsplash.com/photo-1488161628813-244a2dcba2aa?auto=format&fit=crop&q=80&w=800',
      icon: <Icons.User />,
      count: '120+ Products',
      description: 'Rugged elegance and everyday essentials.'
    },
    {
      id: 'women',
      name: 'Women',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
      icon: <Icons.UserPlus />,
      count: '250+ Products',
      description: 'Chic silhouettes and timeless pieces.'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
      icon: <Icons.Clock />,
      count: '85+ Products',
      description: 'The finishing touches for any look.'
    }
  ];

  return (
    <section className="bg-white py-24 sm:py-32 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
              <Icons.ShoppingBag />
              <span>Curated Collections</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 uppercase">
              Shop by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
                Categories
              </span>
            </h2>
          </div>
          
          <div className="flex items-center group cursor-pointer">
            <a href="#" className="text-lg font-bold text-slate-900 mr-2 border-b-2 border-black pb-1 group-hover:pr-4 transition-all duration-300">
              View All Collections
            </a>
            <div className="w-5 h-5 group-hover:translate-x-1 transition-transform">
               <Icons.ArrowRight />
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoryData.map((cat) => (
            <div 
              key={cat.id} 
              className="group relative h-[500px] rounded-[3rem] bg-slate-900 border border-slate-200 flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Card Padding Wrapper */}
              <div className="relative z-10 p-10 flex flex-col h-full">
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center mb-auto shadow-sm group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <div className="text-2xl">{cat.icon}</div>
                </div>

                {/* Content */}
                <div className="text-white">
                  <span className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2 block">
                    {cat.count}
                  </span>
                  <h3 className="text-4xl font-black tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {cat.name}
                  </h3>
                  
                  {/* Expandable Section */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                    <div className="overflow-hidden">
                      <p className="text-white/80 text-lg leading-relaxed mb-8">
                        {cat.description}
                      </p>
                      
                      {/* CTA Button */}
                      <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors duration-300 mb-4">
                        Explore Now
                        <Icons.ChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Texture Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories
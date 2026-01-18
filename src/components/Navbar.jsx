'use client';

import React, { useState, useEffect, memo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { isAuthenticated, logout } from '@/lib/auth';

const IconUser = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const IconBag = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
    <path d="M3 6h18"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const IconShirt = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
  </svg>
);

const IconMenu = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

const IconX = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

const Navbar = ({ cartCount = 0 }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track login state
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isAuthenticated());
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
    setLoggedIn(isAuthenticated()); // update login state on navigation
  };

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
    router.push('/');
    setIsMobileMenuOpen(false);
  };

  const getLinkClass = (path) => {
    const isActive = pathname.startsWith(path);
    return `text-sm font-medium px-2 py-1 rounded-md transition-all ${
      isActive ? 'text-indigo-600 bg-indigo-50/50 font-semibold' : 'text-slate-600 hover:text-indigo-600'
    }`;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all backdrop-blur-xl ${scrolled ? 'bg-white shadow-lg' : 'bg-white/90'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div onClick={() => handleNavClick('/')} className="flex items-center cursor-pointer">
            <div className="bg-gradient-to-tr from-indigo-600 to-fuchsia-600 text-white p-2 rounded-xl mr-3">
              <IconShirt />
            </div>
            <span className="text-xl font-black">LuxeThread</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => handleNavClick('/')} className={getLinkClass('/')}>Home</button>
            <button onClick={() => handleNavClick('/shop')} className={getLinkClass('/shop')}>Shop</button>
            <button onClick={() => handleNavClick('/items')} className={getLinkClass('/items')}>Items</button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Login / Logout */}
            {loggedIn ? (
              <button onClick={handleLogout} className="p-2 hover:bg-slate-100 rounded-xl flex items-center gap-1">
                <IconUser />
                <span className="hidden sm:inline text-sm font-medium">Logout</span>
              </button>
            ) : (
              <button onClick={() => handleNavClick('/login')} className="p-2 hover:bg-slate-100 rounded-xl flex items-center gap-1">
                <IconUser />
                <span className="hidden sm:inline text-sm font-medium">Login</span>
              </button>
            )}

            {/* Cart */}
            <button onClick={() => handleNavClick('/cart')} className="relative p-2 hover:bg-slate-100 rounded-xl">
              <IconBag />
              {cartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 bg-indigo-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 hover:bg-slate-100 rounded-xl">
              {isMobileMenuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-6 space-y-3 shadow-lg">
          {['/','/shop','/items'].map((p,i)=>(
            <button key={i} onClick={()=>handleNavClick(p)} className="block w-full text-left text-lg font-bold py-2 border-b">
              {p === '/' ? 'Home' : p.replace('/','')}
            </button>
          ))}

          {/* Login / Logout Mobile */}
          {loggedIn ? (
            <button onClick={handleLogout} className="block w-full text-left text-lg font-bold py-2 border-b">
              Logout
            </button>
          ) : (
            <button onClick={() => handleNavClick('/login')} className="block w-full text-left text-lg font-bold py-2 border-b">
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default memo(Navbar);

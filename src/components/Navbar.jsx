'use client';

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaTruck, FaShieldAlt, FaCreditCard, FaArrowRight } from 'react-icons/fa';

// Custom SVG Icon Components
const IconBag = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
);

const IconSearch = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

const IconUser = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const IconChevronDown = ({ className }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);

const IconMenu = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const IconX = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const IconShirt = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
);

const CATEGORIES = ['New Arrivals', 'Men', 'Women', 'Accessories', 'Sale'];

// Navbar Component
const Navbar = ({ currentPath, onNavigate, cartCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = (path) => {
    const isActive = currentPath === path;
    return `text-sm font-medium capitalize transition-all hover:text-indigo-600 px-2 py-1 rounded-md ${
      isActive ? 'text-indigo-600 bg-indigo-50/50 font-semibold' : 'text-slate-600'
    }`;
  };

  const handleNavClick = (path) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200 font-sans transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 py-4">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('/')}
            className="flex-shrink-0 flex items-center group cursor-pointer"
          >
            <div className="bg-gradient-to-tr from-indigo-600 to-violet-600 text-white p-2 rounded-xl mr-3 shadow-indigo-200 shadow-lg group-hover:scale-110 transition-transform">
              <IconShirt size={22} />
            </div>
            <span className="text-xl font-black tracking-tight uppercase bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
              LuxeThread
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => handleNavClick('/')} className={getLinkClass('/')}>
              Home
            </button>
            <button onClick={() => handleNavClick('/shop')} className={getLinkClass('/shop')}>
              Shop
            </button>
            <button onClick={() => handleNavClick('/items')} className={getLinkClass('/items')}>
              Items
            </button>
            
            {/* Category Dropdown */}
            <div className="relative group cursor-pointer flex items-center text-sm font-medium text-slate-600 hover:text-indigo-600 py-2">
              Categories <IconChevronDown className="ml-1 group-hover:rotate-180 transition-transform" />
              <div className="absolute top-full left-0 mt-1 w-52 bg-white shadow-2xl rounded-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 translate-y-4 group-hover:translate-y-0 z-50">
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => handleNavClick(`/category/${cat.toLowerCase().replace(' ', '-')}`)}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-colors font-medium text-slate-700"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button className="p-2.5 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors hidden sm:block">
              <IconSearch size={22} />
            </button>
            
            <button 
              onClick={() => handleNavClick('/login')}
              className={`p-2.5 rounded-xl transition-colors ${
                currentPath === '/login' ? 'bg-indigo-100 text-indigo-600' : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Login"
            >
              <IconUser size={22} />
            </button>

            <button 
              onClick={() => handleNavClick('/cart')}
              className="relative p-2.5 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <IconBag size={22} />
              <span className="absolute top-1.5 right-1.5 bg-indigo-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold border-2 border-white">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-8 space-y-4 shadow-2xl">
          <button 
            onClick={() => handleNavClick('/')}
            className="block w-full text-left text-xl font-bold py-2 border-b border-slate-50"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('/shop')}
            className="block w-full text-left text-xl font-bold py-2 border-b border-slate-50"
          >
            Shop
          </button>
          <button 
            onClick={() => handleNavClick('/items')}
            className="block w-full text-left text-xl font-bold py-2 border-b border-slate-50"
          >
            Items
          </button>
          <button 
            onClick={() => handleNavClick('/login')}
            className="block w-full text-left text-xl font-bold py-2 border-b border-slate-50"
          >
            Login
          </button>
          <div className="pt-4">
            <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">Explore Collections</p>
            <div className="grid grid-cols-2 gap-3">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => handleNavClick(`/category/${cat.toLowerCase().replace(' ', '-')}`)}
                  className="block text-left py-3 px-4 bg-slate-50 rounded-xl text-slate-700 font-semibold text-sm active:bg-indigo-100 active:text-indigo-600 transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
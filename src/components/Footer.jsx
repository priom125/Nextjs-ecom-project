import React from 'react';

// --- CUSTOM SVG ICONS ---
const IconTruck = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
);
const IconShield = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconCreditCard = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
);
const IconArrowRight = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);

// Social Icons
const IconFacebook = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const IconInstagram = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const IconTwitter = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const IconYoutube = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { label: 'New Arrivals', href: '#' },
    { label: 'Best Sellers', href: '#' },
    { label: 'Men', href: '#' },
    { label: 'Women', href: '#' },
    { label: 'Kids', href: '#' },
    { label: 'Accessories', href: '#' },
    { label: 'Sale', href: '#' },
  ];

  const customerServiceLinks = [
    { label: 'Contact Us', href: '#' },
    { label: 'Shipping Info', href: '#' },
    { label: 'Returns & Exchanges', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Track Order', href: '#' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Store Locator', href: '#' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ];

  const paymentMethods = [
    { name: 'Visa', color: 'bg-blue-600' },
    { name: 'Mastercard', color: 'bg-red-600' },
    { name: 'Amex', color: 'bg-blue-500' },
    { name: 'PayPal', color: 'bg-indigo-600' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 w-full">
      {/* Features Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-900/20">
                  <IconTruck className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Free Shipping</h3>
                <p className="text-sm text-slate-400">On orders over $50</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-900/20">
                  <IconShield className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Secure Payment</h3>
                <p className="text-sm text-slate-400">100% secure transactions</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 sm:col-span-2 lg:col-span-1">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-900/20">
                  <IconCreditCard className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Easy Returns</h3>
                <p className="text-sm text-slate-400">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tighter uppercase">LuxeThread</h2>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              Elevate your daily wardrobe with pieces designed for longevity, style, and comfort. Quality fashion delivered to your doorstep.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3 text-sm">Subscribe to our newsletter</h3>
              <div className="flex max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white placeholder-slate-500 transition-all text-sm"
                />
                <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-r-xl transition-colors group">
                  <IconArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-sm">Follow Us</h3>
              <div className="flex space-x-3">
                {[IconFacebook, IconInstagram, IconTwitter, IconYoutube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-slate-800 hover:bg-indigo-600 hover:text-white rounded-xl flex items-center justify-center transition-all hover:-translate-y-1">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-5 text-xs uppercase tracking-widest">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-5 text-xs uppercase tracking-widest">Customer Service</h3>
            <ul className="space-y-3">
              {customerServiceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-5 text-xs uppercase tracking-widest">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-xs text-slate-500">
                © {currentYear} LUXETHREAD. Crafted for the modern individual.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                {legalLinks.map((link, index) => (
                  <a key={index} href={link.href} className="text-[10px] text-slate-600 hover:text-slate-400 transition-colors uppercase tracking-widest font-bold">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mr-2">Payment:</span>
              {paymentMethods.map((method, index) => (
                <div key={index} className={`${method.color} px-2 py-1 rounded text-white text-[10px] font-bold shadow-sm`}>
                  {method.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
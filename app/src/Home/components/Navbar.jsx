
import React, { useState } from 'react';

const Navbar = ({ isScrolled, onLoginClick, onSignupClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#2E8B57] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">SafeGuard <span className="text-[#2E8B57]">DBMS</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10 text-sm font-semibold text-slate-600">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:text-[#2E8B57] transition-colors">{link.name}</a>
          ))}
          <div className="h-6 w-px bg-slate-200"></div>
          <a href="/login" onClick={onLoginClick} className="hover:text-slate-900 transition-colors">Log In</a>
          <a href="/signup" onClick={onSignupClick} className="bg-[#2E8B57] text-white px-6 py-2.5 rounded-xl hover:bg-[#257045] transition-all shadow-md active:scale-95">Get Started</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer (Dashboard Sidebar Style) */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-10">
              <span className="font-bold text-xl text-slate-900">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-slate-100 rounded-lg">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-grow space-y-4">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-lg font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#2E8B57] transition-all">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <a href='/Login' onClick={() => { setIsMobileMenuOpen(false); onLoginClick(); }} className="w-full py-4 text-center font-bold text-slate-600 hover:text-slate-900 transition-colors">Log In</a>
              <a href='/Signup' onClick={() => { setIsMobileMenuOpen(false); onSignupClick(); }} className="w-full py-4 bg-[#2E8B57] text-white rounded-2xl font-bold shadow-lg shadow-[#2E8B57]/20 active:scale-95 transition-all">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
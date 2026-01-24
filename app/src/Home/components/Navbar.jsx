
import React from 'react';

const Navbar = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#2E8B57]">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className={`text-xl font-bold ${isScrolled ? 'text-slate-800' : 'text-slate-900'}`}>SafeGuard <span className="text-[#2E8B57]">DBMS</span></span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-[#2E8B57] transition-colors">About</a>
          <a href="#features" className="hover:text-[#2E8B57] transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-[#2E8B57] transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-[#2E8B57] transition-colors">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="/login" className="text-[#2E8B57] font-semibold text-sm hover:underline transition-all">
            Log In
          </a>
          <a href="/signup" className="bg-[#2E8B57] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#257045] transition-all shadow-lg hover:shadow-xl active:scale-95">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

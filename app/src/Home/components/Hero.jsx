
import React from 'react';

const Hero = ({ onGetStarted }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-52 md:pb-32 bg-[#F8FAFC]">
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#E0F2F1] to-transparent pointer-events-none opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E0F2F1] text-[#2E8B57] text-xs font-bold uppercase tracking-wider border border-[#2E8B57]/10">
              <span className="flex h-2 w-2 rounded-full bg-[#2E8B57] animate-pulse"></span>
              <span>Enterprise Child Protection</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              A Unified Shield for <span className="text-[#2E8B57]">Every Case.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              The professional database solution designed for high-stakes child welfare management. Secure, real-time, and built for frontline efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href='/Login' onClick={onGetStarted} className="px-10 py-4 bg-[#2E8B57] text-white rounded-2xl font-bold text-lg hover:bg-[#257045] transition-all shadow-xl shadow-[#2E8B57]/20 hover:-translate-y-1 active:scale-95">
                Report a Case
              </a>
              <a href='/Signup' className="px-10 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:border-[#2E8B57] hover:text-[#2E8B57] transition-all shadow-sm active:scale-95">
                Explore System
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-6 pt-4 border-t border-slate-200 lg:border-none">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">99.9%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Uptime</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">Security</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Industry Standard</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">Instant</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Agent Response</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-3 md:p-4 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <div className="rounded-[2rem] overflow-hidden bg-slate-100 aspect-video lg:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
                  alt="System Overview" 
                  className="w-full h-full object-cover opacity-90" 
                />
              </div>
              
              {/* Floating Stat Card (Dashboard Style) */}
              <div className="absolute -bottom-6 -left-6 md:left-auto md:right-10 bg-white p-5 rounded-2xl shadow-2xl border border-slate-50 flex items-center space-x-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2E8B57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Safety Rating</p>
                  <p className="text-xl font-black text-slate-900">Grade A+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
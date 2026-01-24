

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#2E8B57]/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Secure your Child's future today.</h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed">
                Contact our support team for a full security audit, assistance and assessment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#2E8B57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold">compliance@safeguard.io</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#2E8B57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold">SafeGuard Plaza, DC</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-white p-8 rounded-[2rem] text-slate-900 shadow-xl">
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={e => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/30 transition-all" placeholder="John Agent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Agency Email</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/30 transition-all" placeholder="name@gov.uk" />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Inquiry Type</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/30 transition-all appearance-none">
                      <option>System Implementation</option>
                      <option>Data Migration</option>
                      <option>Security Partnership</option>
                      <option>Confidentiality Agreement</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 pt-4">
                    <button className="w-full bg-[#2E8B57] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#257045] transition-all active:scale-[0.98] shadow-lg shadow-[#2E8B57]/20">
                      Submit Request
                    </button>
                    <p className="text-[10px] text-center text-slate-400 mt-4 font-bold uppercase tracking-[0.2em]">End-to-End SSL Encrypted</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

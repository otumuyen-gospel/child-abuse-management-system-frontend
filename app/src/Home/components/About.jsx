

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="bg-slate-50 p-4 rounded-[3rem] shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=800" 
                alt="Community Support" 
                className="rounded-[2.5rem] shadow-2xl object-cover aspect-[4/3] w-full" 
              />
            </div>
            <div className="absolute -top-6 -right-6 md:-right-12 bg-[#2E8B57] text-white p-8 rounded-3xl shadow-2xl border-4 border-white rotate-3">
              <p className="text-4xl font-black leading-none">ISO</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-1">27001 Certified</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-[#2E8B57] font-bold tracking-widest uppercase text-xs md:text-sm">Humanitarian Intelligence</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">Technology for the world's most critical cases.</h3>
            
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We believe that data management shouldn't be a hurdle for those protecting children. SafeGuard DBMS provides the robust infrastructure needed to turn fragmented case files into actionable protection plans.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start space-x-4 text-left">
                <div className="w-2 h-2 rounded-full bg-[#2E8B57] mt-2"></div>
                <div>
                  <p className="font-bold text-slate-900">Rapid Deployment</p>
                  <p className="text-xs text-slate-500 mt-1">Ready for agency-wide use in under 48 hours.</p>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start space-x-4 text-left">
                <div className="w-2 h-2 rounded-full bg-[#2E8B57] mt-2"></div>
                <div>
                  <p className="font-bold text-slate-900">Custom Modules</p>
                  <p className="text-xs text-slate-500 mt-1">Adapt the system to local laws and workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
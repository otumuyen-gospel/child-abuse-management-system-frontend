
import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#E0F2F1] to-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Data-Driven <span className="text-[#2E8B57]">Protection</span> for the Most Vulnerable.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">
              SafeGuard Child Abuse Database Management system provides secure, scalable, and intelligent tools needed to manage child protection cases and save lives through accurate tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="/signup" className="bg-[#2E8B57] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#257045] transition-all shadow-xl hover:-translate-y-1">
                Get Started
              </a>
              <a href="/login" className="bg-white text-[#2E8B57] border-2 border-[#2E8B57] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#F0FFF4] transition-all">
                Report a Case
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start space-x-4 grayscale opacity-60">
              <span className="text-xs font-bold uppercase tracking-widest">Trusted by agencies in</span>
              <div className="flex space-x-3 italic text-sm font-medium">
                <span>WHO</span> • <span>UNICEF</span> • <span>UNHCR</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#2E8B57] opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="bg-white rounded-2xl shadow-2xl p-4 transform hover:scale-[1.02] transition-transform">
              <img 
                src="https://picsum.photos/id/1/800/600" 
                alt="System Dashboard" 
                className="rounded-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#2E8B57] text-white p-6 rounded-2xl shadow-xl hidden lg:block">
                <div className="text-2xl font-bold">12k+</div>
                <div className="text-xs opacity-90 uppercase">Active Cases Managed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Elena Rossi",
      role: "Child Welfare Director",
      text: "SafeGuard DBMS transformed our response time. Data that used to take days to find is now available in seconds, literally saving lives."
    },
    {
      name: "Detective Mark Thorne",
      role: "Vulnerable Persons Unit",
      text: "Safeguard child Abuse Database management system is the best I've seen. Seamless communication with social services is now a reality."
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#2E8B57] font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Trusted Voices</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">Success Stories</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] text-left relative flex flex-col justify-between h-full border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="absolute top-0 right-10 transform -translate-y-1/2 text-6xl md:text-8xl text-[#2E8B57]/10 font-serif select-none">“</div>
                
                <div className="relative z-10">
                  <p className="text-slate-700 italic text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
                    "{t.text}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2E8B57]/10 flex items-center justify-center font-bold text-[#2E8B57] text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg leading-tight">{t.name}</p>
                    <p className="text-sm text-[#2E8B57] font-semibold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Partners Ribbon */}
          <div className="mt-16 pt-8 border-t border-slate-100 opacity-40">
            <p className="text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Implementing Partners</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale">
              {['UNICEF', 'RED CROSS', 'GOV.UK', 'AMNESTY'].map(partner => (
                <span key={partner} className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 select-none">{partner}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
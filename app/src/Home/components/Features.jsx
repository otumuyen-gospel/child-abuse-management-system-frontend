
import React from 'react';

const Features = () => {
  const features = [
    { title: "Automated Reporting", description: "Generate court-ready documents in seconds using verified data modules.", icon: "📄" },
    { title: "Cross-Agency Sync", description: "Seamless data exchange between police, schools, and social services.", icon: "👥" },
    { title: "Smart Case Tracking", description: "AI-assisted prioritization of high-risk cases based on behavioral data.", icon: "📈" },
    { title: "Field-Ready Mobile", description: "Update cases instantly during site visits with offline persistence.", icon: "📱" },
    { title: "Advanced Security", description: "advanced security protocols protecting the most sensitive personal data.", icon: "🔐" },
    { title: "Full Audit Trail", description: "Compliance-ready logs tracking every access and modification event.", icon: "⚖️" }
  ];
  return (
    <section id="features" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-16 space-y-4">
          <h2 className="text-[#2E8B57] font-bold tracking-widest uppercase text-xs md:text-sm">Advanced Infrastructure</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">Built for the mission, designed for efficiency.</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#2E8B57]/30 hover:shadow-xl hover:shadow-[#2E8B57]/5 transition-all group">
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#E0F2F1] group-hover:scale-110 transition-all duration-300">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

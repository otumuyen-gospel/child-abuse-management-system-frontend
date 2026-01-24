
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-[#2E8B57] font-bold tracking-widest uppercase text-sm mb-4">Our Mission</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Efficiency in Protection</h3>
          <p className="text-slate-600 text-lg">
            In child protection, every second counts and every byte of information matters. SafeGuard DBMS was built by a collaborative effort of technologists and social advocates to solve the fragmentation of data in the child welfare sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/id/101/400/500" alt="Work" className="rounded-2xl shadow-lg mt-12" />
            <img src="https://picsum.photos/id/102/400/500" alt="Care" className="rounded-2xl shadow-lg" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Why centralized data matters</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#E0F2F1] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-[#2E8B57]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 1.414z"/></svg>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Zero Documentation Latency</h5>
                  <p className="text-slate-600">Immediate access to case histories across regional offices ensures no child falls through the gaps.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#E0F2F1] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-[#2E8B57]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 1.414z"/></svg>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Robust Security Standards</h5>
                  <p className="text-slate-600">Secured Role-based system with high authorization and authentication features to protect sensitive victim identities.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#E0F2F1] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-[#2E8B57]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 1.414z"/></svg>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Efficient Search & Reporting</h5>
                  <p className="text-slate-600">Fast efficiency search and reporting capabilities and proper case documentation</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

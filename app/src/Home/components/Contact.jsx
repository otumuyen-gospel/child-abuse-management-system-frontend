
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#E0F2F1]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2E8B57] opacity-5 -mr-20 -mt-20 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Get in Touch with our Support Team</h2>
              <p className="text-slate-600 text-lg mb-10">
                We Are your trusted agency we manage your case effectively and securedly? have a child abuse case and don't know what to do? Our team is available 24/7 for urgent technical assistance or onboarding requests.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-slate-50 rounded-2xl">
                  <div className="w-12 h-12 bg-[#2E8B57] text-white rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Email Address</h5>
                    <p className="text-[#2E8B57]">support@safeguard-dbms.org</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-slate-50 rounded-2xl">
                  <div className="w-12 h-12 bg-[#2E8B57] text-white rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">24/7 Hotlines</h5>
                    <p className="text-[#2E8B57]">+1 (555) 0123-4567 / +44 20 7946 0958</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-slate-50 rounded-2xl">
                  <div className="w-12 h-12 bg-[#2E8B57] text-white rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Headquarters</h5>
                    <p className="text-[#2E8B57]">121 Protection Way, Geneva, CH-1201</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2E8B57] rounded-[2rem] p-10 text-white relative">
              <h3 className="text-3xl font-bold mb-6">Partnering with Us</h3>
              <p className="mb-8 opacity-90">
                We provide custom white-label instances for national governments. Our engineering team will assist with data migration from legacy systems (WAV, CSV, Excel) to our servers no extra cost.
              </p>
              <div className="flex space-x-4">
                <a href="/signup" className="bg-white text-[#2E8B57] px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all">
                  Get Started
                </a>
              </div>
              <div className="mt-12 flex space-x-4 opacity-50 text-2xl">
                <span>𝕏</span> <span>LinkedIn</span> <span>Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

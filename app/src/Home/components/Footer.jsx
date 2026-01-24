
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F8FAFC] py-20 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#2E8B57] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">SafeGuard <span className="text-[#2E8B57]">DBMS</span></span>
            </div>
            <p className="max-w-md text-slate-500 font-medium leading-relaxed">
              Standardizing child protection data management for a safer digital world. Trusted by agencies across 12 countries.
            </p>
            <div className="flex space-x-4">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#2E8B57] hover:border-[#2E8B57] transition-all cursor-pointer">
                  <div className="w-5 h-5 bg-current rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">System</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-500">
              <li><a href="#" className="hover:text-[#2E8B57] transition-colors">Core API</a></li>
              <li><a href="#" className="hover:text-[#2E8B57] transition-colors">Security Patch Logs</a></li>
              <li><a href="#" className="hover:text-[#2E8B57] transition-colors">Incident Response</a></li>
              <li><a href="#" className="hover:text-[#2E8B57] transition-colors">Uptime Report</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">Compliance</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-500">
              <li><a href="#" className="hover:text-[#2E8B57] transition-colors">GDPR Controls</a></li>
              <li><a href="#" className="hover:text-[#2E8B57] transition-colors">HIPAA Standards</a></li>
              <li><a href="#" className="hover:text-[#2E8B57] transition-colors">COPPA Compliance</a></li>
              <li><a href="#" className="hover:text-[#2E8B57] transition-colors">Data Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 text-center space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} SafeGuard Child Protection Systems. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-slate-900 transition-colors">Security Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
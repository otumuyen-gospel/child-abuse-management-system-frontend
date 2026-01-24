
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#2E8B57] rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xl font-bold">SafeGuard <span className="text-[#2E8B57]">DBMS</span></span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Empowering global child protection through advanced technology, secure data management, and real-time collaboration.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-lg">Product</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Security Specs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Hosting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise Migration</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-lg">Legal</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance Certs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} SafeGuard Database Management Systems. All rights reserved.</p>
          <p className="mt-2 italic">Dedicated to the safety and well-being of every child.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

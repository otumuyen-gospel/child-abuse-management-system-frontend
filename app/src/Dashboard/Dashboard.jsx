
import React, { useState, useEffect } from 'react';

const SidebarItem = ({ icon, label, active, onClick, collapsed }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
      active 
        ? 'bg-[#2E8B57] text-white shadow-lg shadow-[#2E8B57]/20' 
        : 'text-slate-500 hover:bg-slate-50 hover:text-[#2E8B57]'
    }`}
  >
    <span className={`flex-shrink-0 transition-colors duration-200 ${active ? 'text-white' : 'text-slate-400 group-hover:text-[#2E8B57]'}`}>
      {icon}
    </span>
    {(!collapsed || window.innerWidth < 768) && (
      <span className="text-sm font-semibold truncate animate-in fade-in slide-in-from-left-2 duration-300">{label}</span>
    )}
  </button>
);

const Dashboard = ({ onLogout }) => {
  const [activeMenu, setActiveMenu] = useState('Dashboard Home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Close mobile sidebar on menu change
  const handleMenuClick = (label) => {
    setActiveMenu(label);
    setMobileSidebarOpen(false);
  };

  const user = {
    name: "Agent Sarah Jenkins",
    email: "s.jenkins@safeguard-dbms.org",
    role: "Senior Welfare Officer",
    avatar: "https://picsum.photos/id/64/100/100"
  };

  const menuItems = [
    { label: "Dashboard Home", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { label: "Abuse Type", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> },
    { label: "Agency", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { label: "Actions", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { label: "Allegations", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { label: "Profile", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    { label: "Register", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> },
    { label: "Case", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { label: "Contact", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
    { label: "Evidence", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
    { label: "Investigation", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
    { label: "Message", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg> },
    { label: "Permissions", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg> },
    { label: "Roles", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
    { label: "Perpetrators", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg> },
    { label: "Person", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    { label: "Placement", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
    { label: "Reporters", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg> },
    { label: "Reports", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { label: "Screening", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg> },
    { label: "Services", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
    { label: "Users", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
    { label: "Victims", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
    { label: "Worker", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
  ];

  const renderContent = () => {
    return (
      <div className="animate-in fade-in duration-500">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">{activeMenu}</h2>
            <p className="text-slate-500 text-xs md:text-sm">System administration and data management</p>
          </div>
          <div className="flex w-full sm:w-auto space-x-2 md:space-x-3">
            <button className="flex-1 sm:flex-none bg-white border border-slate-200 text-slate-600 px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-semibold hover:bg-slate-50 transition-colors">Export</button>
            <button className="flex-[2] sm:flex-none bg-[#2E8B57] text-white px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-semibold hover:bg-[#257045] transition-colors shadow-lg shadow-[#2E8B57]/20 whitespace-nowrap">+ Add Entry</button>
          </div>
        </div>

        {activeMenu === 'Dashboard Home' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">Total Victims</p>
              <h4 className="text-2xl md:text-3xl font-extrabold text-slate-800">4,281</h4>
              <div className="mt-2 text-emerald-500 text-[10px] md:text-xs font-bold flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                12.5% increase
              </div>
            </div>
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">Pending Cases</p>
              <h4 className="text-2xl md:text-3xl font-extrabold text-slate-800">156</h4>
              <div className="mt-2 text-amber-500 text-[10px] md:text-xs font-bold">Active monitoring</div>
            </div>
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">High Risk</p>
              <h4 className="text-2xl md:text-3xl font-extrabold text-slate-800">42</h4>
              <div className="mt-2 text-red-500 text-[10px] md:text-xs font-bold">Immediate action</div>
            </div>
            <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E0F2F1] text-[#2E8B57] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">Resolved</p>
              <h4 className="text-2xl md:text-3xl font-extrabold text-slate-800">3,109</h4>
              <div className="mt-2 text-emerald-500 text-[10px] md:text-xs font-bold">94% Success</div>
            </div>
            
            <div className="lg:col-span-4 bg-white p-5 md:p-8 rounded-3xl border border-slate-100 shadow-sm mt-6 overflow-hidden">
               <h3 className="text-base md:text-lg font-bold text-slate-800 mb-6">Recent Investigation Logs</h3>
               <div className="overflow-x-auto -mx-5 md:mx-0 px-5 md:px-0">
                 <table className="w-full text-left min-w-[600px]">
                   <thead>
                     <tr className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider border-b border-slate-50">
                       <th className="pb-4 px-2">Case ID</th>
                       <th className="pb-4">Victim</th>
                       <th className="pb-4">Category</th>
                       <th className="pb-4">Status</th>
                       <th className="pb-4 text-right">Action</th>
                     </tr>
                   </thead>
                   <tbody className="text-xs md:text-sm">
                     {[1,2,3,4,5].map(i => (
                       <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                         <td className="py-4 px-2 font-mono text-[10px] text-[#2E8B57]">#SG-24-0{i}</td>
                         <td className="py-4 font-bold text-slate-700">Victim_{i*10}</td>
                         <td className="py-4 text-slate-500">Physical</td>
                         <td className="py-4">
                           <span className={`px-2 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase ${i % 2 === 0 ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                             {i % 2 === 0 ? 'Pending' : 'Done'}
                           </span>
                         </td>
                         <td className="py-4 text-right">
                           <button className="text-[#2E8B57] font-bold hover:underline">View</button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-10 md:p-20 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
             <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-300">
               {menuItems.find(m => m.label === activeMenu)?.icon}
             </div>
             <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{activeMenu} Management</h3>
             <p className="text-slate-500 text-sm max-w-sm px-4">This module allows for field configuration and oversight of all records.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans overflow-hidden relative">
      
      {/* Mobile Backdrop */}
      {mobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-300"
          onClick={() => setMobileSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`
          ${sidebarCollapsed ? 'md:w-20' : 'md:w-72'} 
          ${mobileSidebarOpen ? 'translate-x-0 w-72' : '-translate-x-full md:translate-x-0 w-0 md:w-auto'} 
          fixed md:relative top-0 left-0 h-full bg-white border-r border-slate-100 flex flex-col transition-all duration-300 z-50 shadow-sm overflow-hidden
        `}
      >
        <div className="p-6 flex items-center space-x-3 mb-4 flex-shrink-0">
          <div className="w-10 h-10 rounded-xl bg-[#2E8B57] flex-shrink-0 flex items-center justify-center shadow-lg shadow-[#2E8B57]/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          {(!sidebarCollapsed || mobileSidebarOpen) && (
            <span className="text-xl font-bold text-slate-800 tracking-tight whitespace-nowrap animate-in fade-in duration-500">
              SafeGuard <span className="text-[#2E8B57]">DBMS</span>
            </span>
          )}
        </div>

        <nav className="flex-grow px-4 overflow-y-auto custom-scrollbar space-y-1 pb-10">
           {menuItems.map((item) => (
             <SidebarItem 
               key={item.label}
               icon={item.icon}
               label={item.label}
               active={activeMenu === item.label}
               onClick={() => handleMenuClick(item.label)}
               collapsed={sidebarCollapsed}
             />
           ))}
        </nav>

        <div className="p-4 border-t border-slate-50 hidden md:block">
           <button 
             onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
             className="w-full flex items-center justify-center p-2 rounded-xl text-slate-400 hover:bg-slate-50 transition-colors"
           >
             <svg className={`w-5 h-5 transition-transform duration-300 ${sidebarCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-w-0 h-screen">
        
        {/* Navbar */}
        <header className="h-16 md:h-20 bg-white border-b border-slate-100 flex items-center justify-between px-4 md:px-8 flex-shrink-0 relative z-20">
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Hamburger Toggle */}
            <button 
              onClick={() => setMobileSidebarOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>

            <div className="relative group flex-grow">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </span>
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all w-32 sm:w-64 md:w-80 lg:w-96"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-[#2E8B57] transition-all relative"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-4 w-64 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-50">
                    <h5 className="font-bold text-slate-800 text-sm">Notifications</h5>
                    <button className="text-[10px] font-bold text-[#2E8B57] uppercase">Mark read</button>
                  </div>
                  <div className="space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar">
                    <div className="p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                      <p className="text-xs font-bold text-slate-800">Critical: New allegation #492</p>
                      <p className="text-[10px] text-slate-500">Requires urgent assessment</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 md:space-x-3 hover:bg-slate-50 p-1 md:p-2 rounded-2xl transition-all"
              >
                <div className="text-right hidden sm:block">
                  <p className="text-xs md:text-sm font-bold text-slate-800 leading-none">{user.name}</p>
                  <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-wider">{user.role}</p>
                </div>
                <img src={user.avatar} className="w-8 h-8 md:w-10 md:h-10 rounded-xl border-2 border-[#2E8B57]/10" alt="Avatar" />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-4 w-56 sm:w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-4 sm:p-6 border-b border-slate-50 bg-slate-50/50">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Signed in as</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">{user.email}</p>
                  </div>
                  <div className="p-2">
                    <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#2E8B57] transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      <span className="text-xs sm:text-sm font-semibold">My Profile</span>
                    </button>
                    <div className="my-1 border-t border-slate-50"></div>
                    <button 
                      onClick={onLogout}
                      className="w-full flex items-center space-x-3 px-4 py-2 rounded-xl text-red-500 hover:bg-red-50 transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                      <span className="text-xs sm:text-sm font-bold">Log Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-grow p-4 md:p-8 overflow-y-auto custom-scrollbar">
           {renderContent()}
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;

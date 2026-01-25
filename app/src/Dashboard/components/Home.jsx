const Home = ({ menuItems, activeMenu }) => {
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
      </div>
    )
}

export default Home;
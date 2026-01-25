const AbuseType = ({ menuItems, activeMenu }) => {
    return (
        <div className="animate-in fade-in duration-500">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">{activeMenu}</h2>
            <p className="text-slate-500 text-xs md:text-sm">List Of Child Abuse Types</p>
          </div>
          <div className="flex w-full sm:w-auto space-x-2 md:space-x-3">
            <button className="flex-1 sm:flex-none bg-white border border-slate-200 text-slate-600 px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-semibold hover:bg-slate-50 transition-colors">Export</button>
            <button className="flex-[2] sm:flex-none bg-[#2E8B57] text-white px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-semibold hover:bg-[#257045] transition-colors shadow-lg shadow-[#2E8B57]/20 whitespace-nowrap">+ Add Entry</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="lg:col-span-4 bg-white p-5 md:p-8 rounded-3xl border border-slate-100 shadow-sm mt-6 overflow-hidden">
               <h3 className="text-base md:text-lg font-bold text-slate-800 mb-6">Abuse Type Records</h3>
               <div className="overflow-x-auto -mx-5 md:mx-0 px-5 md:px-0">
                 <table className="w-full text-left min-w-[600px]">
                   <thead>
                     <tr className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider border-b border-slate-50">
                       <th className="pb-4 px-2">Type ID</th>
                       <th className="pb-4">Type Name</th>
                       <th className="pb-4">Description</th>
                       <th className="pb-4">Update Action</th>
                       <th className="pb-4 text-right">Delete Action</th>
                     </tr>
                   </thead>
                   <tbody className="text-xs md:text-sm">
                     {[1,2,3,4,5].map(i => (
                       <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                         <td className="py-4 px-2 font-mono text-[10px] text-[#2E8B57]">#SG-24-0{i}</td>
                         <td className="py-4 font-bold text-slate-700">Sexual Abuse</td>
                         <td className="py-4 text-slate-500">Having sexual contact with a child</td>
                          <td className="py-4 text-right">
                           <button className="text-[#2E8B57] font-bold hover:underline">Update</button>
                         </td>
                         <td className="py-4 text-right">
                           <button className="text-[#2E8B57] font-bold hover:underline">Delete</button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                 <div className="flex w-full sm:w-auto space-x-2 md:space-x-3">
                    <button className="flex-1 sm:flex-none bg-white border border-slate-200 text-slate-600 px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-semibold hover:bg-slate-50 transition-colors">
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>
                    <button className="flex-[2] sm:flex-none bg-[#2E8B57] text-white px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-semibold hover:bg-[#257045] transition-colors shadow-lg shadow-[#2E8B57]/20 whitespace-nowrap">
                       <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>
                 </div>
               </div>
      </div>
    )
}

export default AbuseType;
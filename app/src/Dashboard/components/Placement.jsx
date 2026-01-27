const Placement = ( { menuItems, activeMenu}) =>{
    return(
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
          <div className="bg-white p-10 md:p-20 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
             <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-300">
               {menuItems.find(m => m.label === activeMenu)?.icon}
             </div>
             <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{activeMenu} Management</h3>
             <p className="text-slate-500 text-sm max-w-sm px-4">This module allows for field configuration and oversight of all records.</p>
          </div>
      </div>
    )
}
export default Placement;
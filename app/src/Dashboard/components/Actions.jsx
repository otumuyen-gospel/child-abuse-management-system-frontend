import MessageBox from "../../Util/MessageBox";
import Dialog from "../../Util/Dialog";
import { useState } from "react";
import { useGlobalVariable } from "../../Util/GlobalContext";
const Actions = ({ menuItems, activeMenu }) => {
  const { globalVariable, setGlobalVariable } = useGlobalVariable();
  const [isLoading, setIsLoading] = useState(false);
  const [openExport, setOpenExport] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [openMsgBox, setOpenMsgBox] = useState()
  const [title, setTitle] = useState("")
  const [type, setType] = useState("")
  const [message, setMessage] = useState("")
  const [cancelLabel, setCancelLabel] = useState("Cancel")
  const [confirmLabel, setConfirmLabel] = useState("OK")

  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
  const [dialogTitle, setDialogTitle] = useState("")
  const [dialogDesc, setDialogDesc] = useState("")


  const handleOtherMessageBox = (open,title, type, message, confirmLabel)=>{
    setOpenMsgBox(open)
    setTitle(title)
    setType(type)
    setMessage(message)
    setConfirmLabel(confirmLabel)

  }

  const handleOpenMessageBox = (openExport,openDelete,title, type, message, cancelLabel, confirmLabel)=>{
    setOpenExport(openExport)
    setOpenDelete(openDelete)
    setTitle(title)
    setType(type)
    setMessage(message)
    setCancelLabel(cancelLabel)
    setConfirmLabel(confirmLabel)

  }

  const handleOpenDialogBox = (openCreate, openUpdate, title, description)=>{
    setOpenCreateDialog(openCreate)
    setOpenUpdateDialog(openUpdate)
    setDialogTitle(title)
    setDialogDesc(description)
  }

  const handleCloseDialogBox = ()=>{
    setOpenCreateDialog(false)
    setOpenUpdateDialog(false)
    setIsLoading(false)
  }

  const handleCloseMessageBox = ()=>{
    setOpenExport(false)
    setOpenDelete(false)
    setOpenMsgBox(false)
    setIsLoading(false)
  }
  const handleConfirmMessageBox = (operationType)=>{
     //check operation type and call appropriate operations to run
     setIsLoading(true)
    if(operationType === "delete"){
      //call the function API operation and then reset loading to false
       //setOpenExport(false)
       //setIsLoading(false)
    }
    else if(operationType === "export"){
       //call the function API operation and then reset loading to false
       //setOpenExport(false)
       //setIsLoading(false)
    }
     else if(operationType === "create"){
       //call the function API operation and then reset loading to false
       //setOpenCreateDialog(false)
       //setIsLoading(false)
    }
     else if(operationType === "update"){
       //call the function API operation and then reset loading to false
       //setOpenUpdateDialog(false)
       //setIsLoading(false)
    }
   
  }
    return (
        <div className="animate-in fade-in duration-500">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">{activeMenu}</h2>
            <p className="text-slate-500 text-xs md:text-sm">Actions Taken</p>
          </div>
          <div className="flex w-full sm:w-auto space-x-2 md:space-x-3">
            <button onClick={()=>handleOpenMessageBox(true, false, "Export actions", 
            "info", "This action will create an excel record on all the actions record","Cancel", "OK")} 
            className="flex-1 sm:flex-none bg-white border border-slate-200 text-slate-600 px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-semibold hover:bg-slate-50 transition-colors">
              Export</button>
            <button onClick={()=>handleOpenDialogBox(true, false, "New Action", "Please Enter Details of Action taken")}
            className="flex-[2] sm:flex-none bg-[#2E8B57] text-white px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-semibold hover:bg-[#257045] transition-colors shadow-lg shadow-[#2E8B57]/20 whitespace-nowrap">
              + Add Entry</button>
          </div>
        </div>
        <p className="text-xs mt-0 mb-0">Search Results: {globalVariable}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="lg:col-span-4 bg-white p-5 md:p-8 rounded-3xl border border-slate-100 shadow-sm mt-6 overflow-hidden">
               <h3 className="text-base md:text-lg font-bold text-slate-800 mb-6">Actions Records</h3>
               <div className="overflow-x-auto -mx-5 md:mx-0 px-5 md:px-0">
                 <table className="w-full text-left min-w-[600px]">
                   <thead>
                     <tr className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider border-b border-slate-50">
                       <th className="pb-4 px-2">Actions ID</th>
                       <th className="pb-4">Case</th>
                       <th className="pb-4">Legal status</th>
                       <th className="pb-4">Attorney</th>
                       <th className="pb-4">Petition</th>
                       <th className="pb-4">Action</th>
                       <th className="pb-4">Court Action</th>
                       <th className="pb-4">Action Type</th>
                       <th className="pb-4">Update Action</th>
                       <th className="pb-4 text-right">Delete Action</th>
                     </tr>
                   </thead>
                   <tbody className="text-xs md:text-sm">
                     {[1,2,3,4,5].map(i => (
                       <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                         <td className="py-4 px-2 font-mono text-[10px] text-[#2E8B57]">#SG-24-0{i}</td>
                         <td className="py-4 font-bold text-slate-700">Case</td>
                         <td className="py-4 text-slate-500">Legal Status</td>
                         <th className="pb-4">Attorney</th>
                         <th className="pb-4">Petition</th>
                         <th className="pb-4">Action</th>
                         <th className="pb-4">Court Actions</th>
                         <th className="pb-4">Action Type</th>
                          <td className="py-4 text-right">
                           <button onClick={()=>handleOpenDialogBox(false, true, "Update Action", "Please Enter New Details Below")}
                           className="text-[#2E8B57] font-bold hover:underline">Update</button>
                         </td>
                         <td className="py-4 text-right">
                           <button className="text-[#2E8B57] font-bold hover:underline" onClick={()=>handleOpenMessageBox(false, true, "Delete This Item", 
                           "warning", "This action will delete the selected record are sure to do this ?","Cancel", "YES")}>Delete</button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 mt-4">
                 <div className="flex w-full sm:w-auto space-x-2 md:space-x-3">
                    <button className="flex-1 bg-white border border-slate-200 text-slate-600 px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-semibold hover:bg-slate-50 transition-colors">
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button className="flex-[1] bg-[#2E8B57] text-white px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-semibold hover:bg-[#257045] transition-colors shadow-lg shadow-[#2E8B57]/20 whitespace-nowrap">
                       <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                       </svg>
                    </button>
                 </div>
               </div>
               {/*}
               <button onClick={()=>handleOtherMessageBox(true,"message alert",'error',"type error has occured","Close")}>
                test other message box
               </button> {*/}

               <MessageBox isOpen={openExport} isLoading={isLoading} title={title} message={message}
               type={type} onClose={handleCloseMessageBox} 
               onConfirm={()=>handleConfirmMessageBox("export")} cancelLabel={cancelLabel} confirmLabel={confirmLabel}/>
               
               <MessageBox isOpen={openDelete} isLoading={isLoading} title={title} message={message}
               type={type} onClose={handleCloseMessageBox} 
               onConfirm={()=>handleConfirmMessageBox("delete")} cancelLabel={cancelLabel} confirmLabel={confirmLabel}/>

               <MessageBox isOpen={openMsgBox} message={message} title={title}
               type={type} onClose={handleCloseMessageBox} confirmLabel={confirmLabel}/>

               <Dialog isOpen={openCreateDialog} title={dialogTitle} description={dialogDesc} 
               onClose={handleCloseDialogBox}
               children={
                <div className="space-y-6 py-2">
                  <div className="space-y-1.5">
                          <label htmlFor="Case" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">
                             Select Case
                          </label>
                          <select name="Case"
                        required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all font-medium text-slate-900 appearance-none">
                           <option value="" selected disabled>Select Case</option>
                           <option value="0">Case 1</option>
                           <option value="1">Case 2</option>
                           <option value="2">Case 3</option>
                           <option value="2">Case 4</option>
                        </select>
                    </div>
                   <div className="space-y-1.5">
                       <label htmlFor="status" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">
                        Legal Status</label>
                       <input 
                           id="status"
                           type="text" 
                           defaultValue="Legal Status"
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all font-medium text-slate-900" 
                           placeholder="e.g. in court" 
                        />
                   </div>

                   <div className="space-y-1.5">
                       <label htmlFor="attorney" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">
                        Attorney</label>
                       <input 
                           id="attorney"
                           type="text" 
                           defaultValue="Barrister"
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all font-medium text-slate-900" 
                           placeholder="e.g. Barrister Jombo" 
                        />
                   </div>
            
                   <div className="space-y-1.5">
                          <label htmlFor="Petition" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">
                              Petition
                          </label>
                          <textarea 
                              id="Petition"
                              rows="5"
                              defaultValue="Rape case"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all resize-none font-medium text-slate-900 leading-relaxed" 
                              placeholder="Petition"
                          />
                    </div>

                    <div className="space-y-1.5">
                          <label htmlFor="Action" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">
                              Action
                          </label>
                          <input 
                              id="Action"
                              type="text"
                              defaultValue="Actions"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all resize-none font-medium text-slate-900 leading-relaxed" 
                              placeholder="Actions"
                          />
                    </div>

                    <div className="space-y-1.5">
                          <label htmlFor="court_action" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">
                              Court actions
                          </label>
                          <input
                              id="court_action"
                              type="text"
                              defaultValue="court action"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all resize-none font-medium text-slate-900 leading-relaxed" 
                              placeholder="court action"
                          />
                    </div>

                    <div className="space-y-1.5">
                          <label htmlFor="type_action" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">
                            Action Type
                          </label>
                          <input
                              id="type_action"
                              type="text"
                              defaultValue="action type"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all resize-none font-medium text-slate-900 leading-relaxed" 
                              placeholder="action type"
                          />
                    </div>

                    <div className="p-4 bg-[#E0F2F1]/50 rounded-2xl border border-[#2E8B57]/10">
                       <p className="text-xs font-semibold text-[#257045] flex items-center space-x-2">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                      <span>This form creates new data record in the database.</span>
                      </p>
                   </div>
                </div>}
               footerActions={
                 <>
                   <button  onClick={()=>handleConfirmMessageBox("create")} disabled={isLoading}
                       className="w-full sm:w-auto px-8 py-2.5 bg-[#2E8B57] text-white rounded-xl font-bold shadow-lg shadow-[#2E8B57]/10 hover:bg-[#257045] transition-all"
                    >
        
                       {isLoading ? (
                            <>
                              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            </>
                        ) : (
                            <span>Create</span>
                        )}
                    </button>
                   <button 
                     onClick={handleCloseDialogBox}
                     className="w-full sm:w-auto px-8 py-2.5 bg-white text-slate-600 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all"
                    >Cancel</button>
                 </>
                }
               />

               <Dialog isOpen={openUpdateDialog} title={dialogTitle} description={dialogDesc} 
               onClose={handleCloseDialogBox}
               children={
                <div className="space-y-6 py-2">
                  <div className="space-y-1.5">
                          <label htmlFor="Case" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">
                             Select Case
                          </label>
                          <select name="Case"
                        required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all font-medium text-slate-900 appearance-none">
                           <option value="" selected disabled>Select Case</option>
                           <option value="0">Case 1</option>
                           <option value="1">Case 2</option>
                           <option value="2">Case 3</option>
                           <option value="2">Case 4</option>
                        </select>
                    </div>
                   <div className="space-y-1.5">
                       <label htmlFor="status" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">
                        Legal Status</label>
                       <input 
                           id="status"
                           type="text" 
                           defaultValue="Legal Status"
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all font-medium text-slate-900" 
                           placeholder="e.g. in court" 
                        />
                   </div>

                   <div className="space-y-1.5">
                       <label htmlFor="attorney" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">
                        Attorney</label>
                       <input 
                           id="attorney"
                           type="text" 
                           defaultValue="Barrister"
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all font-medium text-slate-900" 
                           placeholder="e.g. Barrister Jombo" 
                        />
                   </div>
            
                   <div className="space-y-1.5">
                          <label htmlFor="Petition" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">
                              Petition
                          </label>
                          <textarea 
                              id="Petition"
                              rows="5"
                              defaultValue="Rape case"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all resize-none font-medium text-slate-900 leading-relaxed" 
                              placeholder="Petition"
                          />
                    </div>

                    <div className="space-y-1.5">
                          <label htmlFor="Action" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">
                              Action
                          </label>
                          <input 
                              id="Action"
                              type="text"
                              defaultValue="Actions"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all resize-none font-medium text-slate-900 leading-relaxed" 
                              placeholder="Actions"
                          />
                    </div>

                    <div className="space-y-1.5">
                          <label htmlFor="court_action" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">
                              Court actions
                          </label>
                          <input
                              id="court_action"
                              type="text"
                              defaultValue="court action"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all resize-none font-medium text-slate-900 leading-relaxed" 
                              placeholder="court action"
                          />
                    </div>

                    <div className="space-y-1.5">
                          <label htmlFor="type_action" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">
                            Action Type
                          </label>
                          <input
                              id="type_action"
                              type="text"
                              defaultValue="action type"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/20 transition-all resize-none font-medium text-slate-900 leading-relaxed" 
                              placeholder="action type"
                          />
                    </div>

                    <div className="p-4 bg-[#E0F2F1]/50 rounded-2xl border border-[#2E8B57]/10">
                       <p className="text-xs font-semibold text-[#257045] flex items-center space-x-2">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                      <span>This form creates new data record in the database.</span>
                      </p>
                   </div>
                </div>}
               footerActions={
                 <>
                   <button  onClick={()=>handleConfirmMessageBox("update")}
                       className="w-full sm:w-auto px-8 py-2.5 bg-[#2E8B57] text-white rounded-xl font-bold shadow-lg shadow-[#2E8B57]/10 hover:bg-[#257045] transition-all"
                    >
                      {isLoading ? (
                            <>
                              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            </>
                        ) : (
                            <span>Update</span>
                        )}
                    </button>
                   <button 
                     onClick={handleCloseDialogBox}
                     className="w-full sm:w-auto px-8 py-2.5 bg-white text-slate-600 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all"
                    >Cancel</button>
                 </>
                }
              />

      </div>
    )
}

export default Actions;
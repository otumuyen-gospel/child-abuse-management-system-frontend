
import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Config } from "../Util/Configs";

const Forgot = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isDisabled, setIsDisabled] = useState(false)

  const handleSubmit = (e) => {
    setError('');
    setSuccess('');
    e.preventDefault();
    setIsDisabled(true);
    axios.post(Config.SERVER_BASE_URL+"/auth/reset/request/",
      { email }).then((res) => {
        setIsDisabled(false)  //re-enable button
        setSuccess(res.data['message']);
        setTimeout(() => {navigate("/Verification/", {state:{ userEmail:email, }})}, 2000);
      }).catch((err) => {
        setIsDisabled(false)  //re-enable button
        if (err.response) {
          setError(JSON.stringify(err.response.data["error"]));
        }else{
          setError("Error : Unable to connnect to servers");
        }
      })
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#E0F2F1] -skew-y-6 transform -translate-y-24 z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2E8B57] opacity-5 rounded-full blur-3xl"></div>
      
      {/* Back button */}
      <a href='/'>
      <button 
        className="absolute top-8 left-8 z-20 flex items-center space-x-2 text-slate-600 hover:text-[#2E8B57] transition-colors font-medium group"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back to Home</span>
      </button>
      </a>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 border border-slate-100 backdrop-blur-sm bg-white/95">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#2E8B57] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#2E8B57]/20">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-500 font-medium">SafeGuard DBMS Management Portal</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {error && (
                  <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl font-medium flex items-center animate-shake">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </div>
                )}

                {success && (
                  <div className="p-4 bg-green-50 border border-green-100 text-green-600 text-sm rounded-xl font-medium flex items-center animate-shake">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {success}
                  </div>
                )}

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                  </svg>
                </span>
                <input 
                  type="text" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your email"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2E8B57]/20 focus:border-[#2E8B57] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <a href='/Login' type="button" className="text-xs font-bold text-[#2E8B57] hover:underline">Remembered My Password?</a>
              </div>
            </div>
            <center>
            <button 
                type="submit"
                disabled={isDisabled}
                className="w-full bg-[#2E8B57] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#257045] transition-all shadow-xl shadow-[#2E8B57]/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center space-x-3"
              >
                {isDisabled ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    <span>Submitting Data...</span>
                  </>
                ) : (
                  <span>Submit & Proceed</span>
                )}
              </button>
              </center>
              
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center space-x-4">
            <div className="flex-grow h-px bg-slate-200"></div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">or Create New Account Below</span>
            <div className="flex-grow h-px bg-slate-200"></div>
          </div>
        </div>

        {/* Footer Link */}
        <p className="text-center mt-8 text-slate-500 font-medium">
          New Reporter Account? <a href='/Signup' className="text-[#2E8B57] font-bold hover:underline">Signup Here</a>
        </p>

        {/* Legal links */}
        <div className="mt-12 flex justify-center space-x-6 text-xs text-slate-400 font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-slate-600">Privacy</a>
          <a href="#" className="hover:text-slate-600">Terms</a>
          <a href="#" className="hover:text-slate-600">Security</a>
        </div>
      </div>
    </div>
  );
};

export default Forgot;

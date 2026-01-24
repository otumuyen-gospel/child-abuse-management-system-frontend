
import React, { useState } from 'react';

const Signup = ({ onBack, onLoginRedirect, onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    middleName: '',
    maidenName: '',
    dob: '',
    phone: '',
    email: '',
    entranceDate: '',
    gender: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Registering user:', formData);
    
    // Simulate API registration process
    setTimeout(() => {
      setIsLoading(false);
      onSignupSuccess();
    }, 2000);
  };

  const inputStyle = "w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2E8B57]/20 focus:border-[#2E8B57] transition-all text-sm";
  const labelStyle = "text-xs font-bold text-slate-700 ml-1 mb-1 block uppercase tracking-wider";
  const iconStyle = "absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none";

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 md:p-12 relative overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#E0F2F1] -skew-y-6 transform -translate-y-24 z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2E8B57] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 -left-24 w-64 h-64 bg-[#2E8B57] opacity-5 rounded-full blur-2xl"></div>

      {/* Back button */}
      <a href='/'>
      <button 
        onClick={onBack}
        className="absolute top-8 left-8 z-20 flex items-center space-x-2 text-slate-600 hover:text-[#2E8B57] transition-colors font-medium group"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back to Home</span>
      </button>
      </a>

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-4xl">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-slate-100 backdrop-blur-sm bg-white/95">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#2E8B57] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#2E8B57]/20">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Reporter Registration</h1>
            <p className="text-slate-500 font-medium italic">Create a secure portal account to start managing cases.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Account Details Section */}
              <div className="lg:col-span-3">
                <h3 className="text-sm font-bold text-[#2E8B57] border-b border-slate-100 pb-2 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-[#2E8B57] rounded-full mr-2"></span>
                  Security Credentials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className={labelStyle}>Username</label>
                    <div className="relative">
                      <span className={iconStyle}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      </span>
                      <input name="username" value={formData.username} onChange={handleChange} required type="text" placeholder="jdoe_admin" className={inputStyle} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className={labelStyle}>Password</label>
                    <div className="relative">
                      <span className={iconStyle}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      </span>
                      <input 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        className={inputStyle} 
                      />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                        {showPassword ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.882 9.882L9.882 9.882zM21 12a9.965 9.965 0 01-1.563 3.029m-5.858-5.858l4.242 4.242" /></svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Details Section */}
              <div className="lg:col-span-3 mt-4">
                <h3 className="text-sm font-bold text-[#2E8B57] border-b border-slate-100 pb-2 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-[#2E8B57] rounded-full mr-2"></span>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <label className={labelStyle}>First Name</label>
                    <div className="relative">
                      <span className={iconStyle}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></span>
                      <input name="firstName" value={formData.firstName} onChange={handleChange} required type="text" placeholder="John" className={inputStyle} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className={labelStyle}>Middle Name</label>
                    <div className="relative">
                      <span className={iconStyle}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></span>
                      <input name="middleName" value={formData.middleName} onChange={handleChange} type="text" placeholder="Quincy" className={inputStyle} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className={labelStyle}>Last Name</label>
                    <div className="relative">
                      <span className={iconStyle}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></span>
                      <input name="lastName" value={formData.lastName} onChange={handleChange} required type="text" placeholder="Doe" className={inputStyle} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className={labelStyle}>Maiden Name</label>
                    <div className="relative">
                      <span className={iconStyle}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></span>
                      <input name="maidenName" value={formData.maidenName} onChange={handleChange} type="text" placeholder="Smith" className={inputStyle} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Administrative Details Section */}
              <div className="lg:col-span-3 mt-4">
                <h3 className="text-sm font-bold text-[#2E8B57] border-b border-slate-100 pb-2 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-[#2E8B57] rounded-full mr-2"></span>
                  Administrative & Contact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   <div className="space-y-1">
                    <label className={labelStyle}>Gender</label>
                    <div className="relative">
                      <span className={iconStyle}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></span>
                      <select name="gender" value={formData.gender} onChange={handleChange} required className={`${inputStyle} appearance-none`}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="private">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className={labelStyle}>Date of Birth</label>
                    <div className="relative">
                      <span className={iconStyle}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></span>
                      <input name="dob" value={formData.dob} onChange={handleChange} required type="date" className={inputStyle} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className={labelStyle}>Email Address</label>
                    <div className="relative">
                      <span className={iconStyle}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" /></svg></span>
                      <input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="john.doe@agency.gov" className={inputStyle} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className={labelStyle}>Phone Number</label>
                    <div className="relative">
                      <span className={iconStyle}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                      <input name="phone" value={formData.phone} onChange={handleChange} required type="tel" placeholder="+1 (555) 000-0000" className={inputStyle} />
                    </div>
                  </div>
                  <div className="space-y-1 lg:col-span-2">
                    <label className={labelStyle}>Entrance Date (System Entry)</label>
                    <div className="relative">
                      <span className={iconStyle}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>
                      <input name="entranceDate" value={formData.entranceDate} onChange={handleChange} required type="datetime-local" className={inputStyle} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center pt-6 space-y-4">
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full md:w-auto px-16 bg-[#2E8B57] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#257045] transition-all shadow-xl shadow-[#2E8B57]/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center space-x-3"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    <span>Submitting Data...</span>
                  </>
                ) : (
                  <span>Register Account</span>
                )}
              </button>
              
              <p className="text-slate-500 text-sm font-medium">
                Already have a portal account? <a href='/Login' onClick={onLoginRedirect} className="text-[#2E8B57] font-bold hover:underline">Sign In</a>
              </p>
            </div>
          </form>
        </div>

        {/* Security Footer Badge */}
        <div className="mt-8 flex justify-center items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
            <svg className="w-4 h-4 text-[#2E8B57]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.9L10 1.55l7.834 3.35a1 1 0 01.616.92v5.14c0 4.34-2.327 8.322-6.096 10.435a1 1 0 01-.908 0C7.327 15.962 5 11.98 5 7.64V2.47a1 1 0 01.616-.92L10 1.55z" clipRule="evenodd" /></svg>
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Secure TLS 1.3 Encryption</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
             <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">HIPAA/GDPR Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

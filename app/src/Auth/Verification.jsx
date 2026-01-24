
import React, { useState, useRef, useEffect } from 'react';

const Verification = ({ onBack, onVerifySuccess }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const inputs = useRef([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newCode = [...code];
    newCode[index] = value.substring(value.length - 1);
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Backspace to previous input
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      console.log('Verifying code:', fullCode);
      // Simulate verification logic
      onVerifySuccess();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#E0F2F1] -skew-y-6 transform -translate-y-24 z-0"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#2E8B57] opacity-5 rounded-full blur-3xl"></div>

      {/* Back button */}
      <a href='/'>
      <button 
        onClick={onBack}
        className="absolute top-8 left-8 z-20 flex items-center space-x-2 text-slate-600 hover:text-[#2E8B57] transition-colors font-medium group"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back to Login</span>
      </button>
      </a>

      {/* Verification Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 border border-slate-100 backdrop-blur-sm bg-white/95 text-center">
          {/* Header */}
          <div className="mb-10">
            <div className="w-16 h-16 bg-[#2E8B57] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#2E8B57]/20 relative">
               <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md">
                 <svg className="w-4 h-4 text-[#2E8B57]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.9L10 1.55l7.834 3.35a1 1 0 01.616.92v5.14c0 4.34-2.327 8.322-6.096 10.435a1 1 0 01-.908 0C7.327 15.962 5 11.98 5 7.64V2.47a1 1 0 01.616-.92L10 1.55zM10 3.12L4 5.69v1.95c0 3.65 1.95 6.94 5 8.76l1-1.74l1 1.74c3.05-1.82 5-5.11 5-8.76V5.69L10 3.12z" clipRule="evenodd" />
                 </svg>
               </div>
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-3.04l.53-.265m12.14-12.14l-.53.265M11.24 16.17a6 6 0 11-3.536-3.536M11.24 16.17a6 6 0 113.536-3.536" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Security Check</h1>
            <p className="text-slate-500 font-medium px-4">
              We've sent a 6-digit verification code to your agency email address.
            </p>
          </div>

          {/* Verification Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex justify-between items-center space-x-2">
              {code.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputs.current[idx] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  className="w-12 h-14 bg-slate-50 border-2 border-slate-100 rounded-xl text-center text-2xl font-bold text-slate-800 focus:outline-none focus:border-[#2E8B57] focus:ring-4 focus:ring-[#2E8B57]/10 transition-all"
                  autoFocus={idx === 0}
                />
              ))}
            </div>

            <div className="space-y-6">
              <button 
                type="submit"
                disabled={code.some(d => d === '')}
                className="w-full bg-[#2E8B57] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#257045] transition-all shadow-xl shadow-[#2E8B57]/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
              >
                Verify & Continue
              </button>

              <div className="text-sm font-medium">
                {timer > 0 ? (
                  <p className="text-slate-500">
                    Resend code in <span className="text-[#2E8B57] font-bold">0:{timer < 10 ? `0${timer}` : timer}</span>
                  </p>
                ) : (
                  <button 
                    type="button"
                    onClick={() => setTimer(59)}
                    className="text-[#2E8B57] font-bold hover:underline"
                  >
                    Didn't get the code? Resend
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Support Message */}
        <p className="text-center mt-12 text-slate-500 font-medium px-8">
          Problems with verification? Contact our <button className="text-[#2E8B57] font-bold hover:underline">Security Operations Center</button> immediately.
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

export default Verification;

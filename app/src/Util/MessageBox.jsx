import React, { useEffect } from 'react';

/**
 * A specialized Dialog for messages, alerts, and confirmations.
 * 
 * @param {boolean} isOpen - Controls visibility
 * @param {function} onClose - Called when closing/cancelling
 * @param {function} onConfirm - Called when primary action is clicked
 * @param {string} type - 'success' | 'error' | 'warning' | 'info'
 * @param {string} title - Header text
 * @param {string} message - Body text
 * @param {string} confirmLabel - Text for the primary button
 * @param {string} cancelLabel - Text for the secondary button (if provided, shows cancel button)
 */
const MessageBox = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  type = 'info', 
  title, 
  message, 
  confirmLabel = 'OK', 
  cancelLabel, 
  isLoading = false
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const config = {
    success: {
      bg: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      buttonBg: 'bg-[#2E8B57]',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    error: {
      bg: 'bg-red-50',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      buttonBg: 'bg-red-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      )
    },
    warning: {
      bg: 'bg-amber-50',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      buttonBg: 'bg-amber-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    info: {
      bg: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      buttonBg: 'bg-blue-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  };

  const current = config[type] || config.info;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />
      
      <div 
        className="relative w-full max-w-sm bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="alertdialog"
      >
        <div className={`p-8 flex flex-col items-center text-center ${current.bg}`}>
          <div className={`w-16 h-16 ${current.iconBg} ${current.iconColor} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
            {current.icon}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{message}</p>
        </div>

        <div className="p-6 bg-white flex flex-col sm:flex-row gap-3">
          {cancelLabel && (
            <button 
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all active:scale-95"
            >
              {cancelLabel}
            </button>
          )}
          <button disabled={isLoading}
            onClick={() => {
              if (onConfirm) onConfirm();
              else onClose();
            }}
            className={`flex-1 px-6 py-3 ${current.buttonBg} text-white rounded-xl font-bold text-sm shadow-lg transition-all hover:brightness-110 active:scale-95`}
          >
            <center>
            {isLoading ? (
                            <>
                              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            </>
                        ) : (
                            <span>{confirmLabel}</span>
                        )}
            </center>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
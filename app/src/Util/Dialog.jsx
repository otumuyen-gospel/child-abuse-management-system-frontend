import React, { useEffect } from 'react';

/**
 * A highly customizable, mobile-friendly Dialog (Modal) component.
 * 
 * @param {boolean} isOpen - Controls visibility
 * @param {function} onClose - Called when closing
 * @param {string} title - Header title
 * @param {string} description - Optional sub-header text
 * @param {React.ReactNode} children - Main content (usually a form)
 * @param {React.ReactNode} footerActions - Action buttons for the bottom
 * @param {string} maxWidth - Tailwind class for max width (default: max-w-lg)
 */
const Dialog = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  children, 
  footerActions, 
  maxWidth = 'max-w-lg' 
}) => {
  // Prevent scrolling on body when modal is open
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />
      
      {/* Dialog Panel */}
      <div 
        className={`relative w-full ${maxWidth} bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            {description && (
              <p className="text-sm text-slate-500 mt-0.5">{description}</p>
            )}
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-400 hover:text-slate-600"
            aria-label="Close dialog"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto p-6 scroll-smooth">
          {children}
        </div>

        {/* Footer Actions */}
        {footerActions && (
          <div className="px-6 py-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row-reverse gap-3 sticky bottom-0 z-10">
            {footerActions}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dialog;
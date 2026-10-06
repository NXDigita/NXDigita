import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const CookieBanner = () => {
  const [show, setShow] = useState(false);
 
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
  const consent = localStorage.getItem("cookie-consent");
  if (consent) return undefined;      // was: return;  or nothing

  const t = setTimeout(() => setShow(true), 1000);
  return () => clearTimeout(t);
}, []);
  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[90] p-4 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-card/80 backdrop-blur-xl border border-border shadow-2xl rounded-2xl p-6 pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-accent/5 pointer-events-none" />
            <div className="relative z-10 flex-1">
              <p className="text-sm text-card-foreground">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-3 shrink-0">
              <button 
                onClick={() => setIsVisible(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Decline
              </button>
              <button 
                onClick={acceptCookies}
                className="px-6 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:scale-105 transition-transform"
              >
                Accept All
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors absolute top-2 right-2 sm:hidden"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

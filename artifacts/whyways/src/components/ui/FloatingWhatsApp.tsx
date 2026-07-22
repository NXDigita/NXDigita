import React from 'react';
import { SiWhatsapp } from 'react-icons/si';

export const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/15550000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp size={28} />
    </a>
  );
};

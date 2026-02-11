import React from "react";

const Footer = () => {
  return (
    <footer className="relative px-6 md:px-12 py-12 bg-white border-t border-slate-100 overflow-hidden">
     
      <div
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

    
      <div className="text-slate-500 text-sm font-medium text-center">
        © 2026 Sakibul Hasan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

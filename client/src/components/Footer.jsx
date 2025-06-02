import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
      <aside className="flex flex-col items-center space-y-2">
        {/* ReKindle Text replacing the SVG */}
        <div className="text-4xl font-extrabold tracking-wide select-none">
          <div className="logo-main">
        <span className="logo-blue">{'{Re}'}</span>Kindle
      </div>
        </div>
        <p className="font-bold text-lg">By Nexora</p>
        <p className="text-m opacity-80">
Empowering innovation since 2025

        </p>
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>

     
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer
      className="
        mt-8
        border-t
        border-gray-300 dark:border-[#33353F]
        bg-white dark:bg-[#111827]
        transition-colors duration-300
      "
    >
      <div
        className="
          container
          mx-auto
          p-6 md:p-12
          flex flex-col md:flex-row
          justify-between items-center
          gap-4 md:gap-0
        "
      >
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-black cursor-pointer text-gray-900 dark:text-white">
          IsaacDev<span className="text-primary">.</span>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base text-center">
          © {new Date().getFullYear()} IsaacDev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
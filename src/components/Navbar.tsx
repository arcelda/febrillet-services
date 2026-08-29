"use client";

import React, { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-navy/95 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex flex-col">
          <span className="text-xl sm:text-2xl font-black tracking-tight leading-none">
            FEBRILLET
          </span>
          <span className="text-xs sm:text-sm font-bold text-brand-orange uppercase tracking-wider">
            Does It All Services LLC
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Contact
          </a>
          <a
            href="tel:8605140114"
            className="bg-brand-orange hover:bg-orange-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow transition duration-200 inline-flex items-center gap-2"
          >
            <span>📞</span> (860) 514-0114
          </a>
        </nav>

        {/* Mobile Menu Hamburger Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark px-6 py-5 border-t border-slate-800 space-y-4">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block text-slate-200 hover:text-brand-orange text-base font-medium py-1"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-slate-200 hover:text-brand-orange text-base font-medium py-1"
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-slate-200 hover:text-brand-orange text-base font-medium py-1"
          >
            Contact
          </a>
          <div className="pt-2">
            <a
              href="tel:8605140114"
              className="w-full bg-brand-orange hover:bg-orange-600 text-white text-center font-bold py-3 rounded-lg block shadow"
            >
              Call (860) 514-0114
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
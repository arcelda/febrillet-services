import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Slogan */}
        <div className="md:col-span-2 space-y-3">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Febrillet Does It All <span className="text-brand-orange">Services LLC</span>
          </h3>
          <p className="text-slate-400 max-w-sm text-xs sm:text-sm leading-relaxed">
            Professional drywall, painting, remodeling, and property maintenance. Quality you can trust, completed on time and built to last.
          </p>
          <div className="pt-2">
            <span className="inline-block bg-slate-900 border border-slate-800 text-brand-orange text-xs font-semibold px-3 py-1 rounded-md">
              Licensed & Insured
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-sm">Quick Links</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <a href="#" className="hover:text-brand-orange transition">Home</a>
            </li>
            <li>
              <a href="#services" className="hover:text-brand-orange transition">Services</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-brand-orange transition">Recent Work</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-brand-orange transition">Request a Quote</a>
            </li>
          </ul>
        </div>

        {/* Direct Contact */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-sm">Contact Info</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <span className="block text-slate-500 text-xs">Call or Text</span>
              <a href="tel:8605140114" className="text-white font-medium hover:text-brand-orange transition">
                (860) 514-0114
              </a>
            </li>
            <li>
              <span className="block text-slate-500 text-xs">Service Region</span>
              <span className="text-slate-300">Connecticut & Surrounding Areas</span>
            </li>
            <li>
              <span className="block text-slate-500 text-xs">Hours</span>
              <span className="text-slate-300">Mon – Sat: 7:00 AM – 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-900 py-6 px-6 text-center text-xs text-slate-500">
        <p>© {currentYear} Febrillet Does It All Services LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};
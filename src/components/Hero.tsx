import React from "react";

export const Hero = () => {
  return (
    <section className="bg-brand-navy text-white py-20 px-6 text-center lg:py-32">
      <div className="max-w-4xl mx-auto space-y-6">
        <span className="inline-block bg-brand-orange/20 text-brand-orange font-semibold px-4 py-1.5 rounded-full text-sm uppercase tracking-wide">
          Licensed • Insured • Reliable
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Febrillet Does It All <span className="text-brand-orange">Services LLC</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
          We Do It All – Quality You Can Trust. Professional drywall, remodeling, painting, and property maintenance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="tel:8605140114"
            className="w-full sm:w-auto bg-brand-orange hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition duration-200"
          >
            Call (860) 514-0114
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold py-3.5 px-8 rounded-lg transition duration-200"
          >
            Get Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
};
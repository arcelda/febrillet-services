import React from "react";

export const Hero = () => {
  return (
    // 1. Container section: needs relative positioning so the child background works.
    // Set text color to white for the entire section.
    <section className="relative bg-brand-navy text-white overflow-hidden py-24 px-6 lg:py-36">
      
      {/* 2. Background Image Container */}
      {/* Absolute positioning covers the full parent, 
          using the custom `bg-hero-pattern` utility. */}
      <div 
        className="absolute inset-0 bg-hero-pattern z-0" 
        aria-hidden="true" 
      />

      {/* 3. Navy Blue Transparency Overlay (Crucial for text contrast) */}
      {/* This sits ON TOP of the image and BELOW the text.
          The `bg-brand-navy/90` adds 90% opacity over the image. */}
      <div 
        className="absolute inset-0 bg-brand-navy/90 z-10" 
        aria-hidden="true" 
      />

      {/* 4. Content Container */}
      {/* Relative positioning with higher z-index places it above the background and overlay. */}
      <div className="relative z-20 max-w-5xl mx-auto space-y-7">
        <span className="inline-block bg-brand-orange/20 text-brand-orange font-semibold px-4 py-1.5 rounded-full text-sm uppercase tracking-wide">
          Licensed • Insured • Reliable
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Febrillet Does It All <span className="text-brand-orange">Services LLC</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-100 max-w-3xl mx-auto md:mx-0">
          We Do It All – Quality You Can Trust. Professional drywall, remodeling, painting, and property maintenance.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-5 pt-5 md:justify-start">
          <a
            href="tel:8605140114"
            className="w-full sm:w-auto bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition duration-200 text-center"
          >
            Call Today (860) 514-0114
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-transparent border-2 border-white/40 hover:border-white text-white font-semibold py-4 px-10 rounded-xl transition duration-200 text-center"
          >
            Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
};
import React from "react";
import { SERVICES_DATA } from "../data/services";

export const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-orange font-bold text-sm tracking-wider uppercase">
            What We Do / Lo Que Hacemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">
            Professional Construction & Repair
          </h2>
          <p className="mt-4 text-slate-600">
            From minor repairs to complete remodels, we provide dependable craftsmanship with results that last.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-orange/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold mb-5">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-brand-navy">
                  {service.titleEn}
                </h3>
                <p className="text-sm font-semibold text-brand-blue mb-3">
                  {service.titleEs}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.descriptionEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact"
                  className="text-sm font-bold text-brand-orange hover:text-orange-600 transition-colors inline-flex items-center gap-1 unavailable"
                >
                  Free Estimate &rarr (Coming Soon);
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
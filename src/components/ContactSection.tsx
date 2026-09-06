"use client";

import React, { useState } from "react";

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For presentation/demo purposes: simulate submission
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Direct Info */}
        <div className="space-y-6">
          <span className="inline-block bg-brand-orange/20 text-brand-orange font-semibold px-3.5 py-1 rounded-full text-xs uppercase tracking-wide">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Start Your <span className="text-brand-orange">Next Project?</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Reach out for a personalized quote on drywall, remodeling, painting, or general repairs. We respond quickly and work around your schedule.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-navy border border-slate-800 text-brand-orange text-xl">
                📞
              </span>
              <div>
                <p className="text-xs text-slate-400 font-medium">Direct Phone</p>
                <a
                  href="tel:8605140114"
                  className="text-lg font-bold hover:text-brand-orange transition"
                >
                  (860) 514-0114
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-navy border border-slate-800 text-brand-orange text-xl">
                📍
              </span>
              <div>
                <p className="text-xs text-slate-400 font-medium">Service Area</p>
                <p className="text-base font-semibold text-slate-200">
                  Connecticut & Surrounding Communities
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-navy border border-slate-800 text-brand-orange text-xl">
                ⏱️
              </span>
              <div>
                <p className="text-xs text-slate-400 font-medium">Availability</p>
                <p className="text-base font-semibold text-slate-200">
                  Monday – Saturday | Free Consultations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Estimate Form */}
        <div className="bg-brand-navy border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <span className="text-5xl">✅</span>
              <h3 className="text-2xl font-bold text-white">Thank You!</h3>
              <p className="text-slate-300 max-w-sm mx-auto text-sm">
                Your request has been received. We will contact you shortly to confirm details and schedule your free estimate.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-semibold text-brand-orange hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Request a Quote
              </h3>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange text-sm transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(860) 000-0000"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange text-sm transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange text-sm transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Service Needed
                </label>
                <select
                  defaultValue=""
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white focus:outline-none focus:border-brand-orange text-sm transition"
                >
                  <option value="" disabled className="text-slate-500">
                    Select a service...
                  </option>
                  <option value="drywall">Drywall & Sheetrock</option>
                  <option value="painting">Interior / Exterior Painting</option>
                  <option value="flooring">Flooring Installation</option>
                  <option value="remodeling">Kitchen / Bathroom Remodeling</option>
                  <option value="decks">Decks & Carpentry</option>
                  <option value="roofing">Roofing & Siding</option>
                  <option value="handyman">General Handyman / Repairs</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your project, timeline, or any specific requirements..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange text-sm transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3.5 rounded-lg shadow-lg transition duration-200 text-sm"
              >
                Submit Quote Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
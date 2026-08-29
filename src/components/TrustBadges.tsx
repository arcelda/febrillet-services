import React from "react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: "🛡️",
      titleEn: "Licensed & Insured",
      titleEs: "Licenciado y Asegurado",
      desc: "Full coverage and compliance for total peace of mind on every job.",
    },
    {
      icon: "⭐",
      titleEn: "Quality You Can Trust",
      titleEs: "Confianza Que Se Nota",
      desc: "Top-tier craftsmanship with durable materials and clean finishes.",
    },
    {
      icon: "📋",
      titleEn: "Free Estimates",
      titleEs: "Estimados Gratis",
      desc: "Upfront, transparent quotes with zero hidden surprises.",
    },
  ];

  return (
    <section className="bg-brand-navy border-y border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800"
          >
            <span className="text-3xl p-2 rounded-lg bg-brand-orange/10">
              {badge.icon}
            </span>
            <div>
              <h3 className="text-lg font-bold text-white leading-snug">
                {badge.titleEn}
              </h3>
              <p className="text-xs font-semibold text-brand-orange mb-1">
                {badge.titleEs}
              </p>
              <p className="text-sm text-slate-300">
                {badge.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
import React from "react";
import Image from "next/image";

interface ProjectItem {
  title: string;
  category: string;
  image?: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
}

const projects: ProjectItem[] = [
  {
    title: "Kitchen Remodel & Transformation",
    category: "Remodeling",
    beforeImage: "/projects/kitchen_before.jpeg",
    afterImage: "/projects/kitchen_after.jpeg",
    description: "Complete overhaul from initial demolition to modernized countertops, cabinetry, and fresh paint.",
  },
  {
    title: "Interior Stairwell Transformation",
    category: "Carpentry & Paint",
    image: "/projects/stairwell_before_after.jpeg",
    description: "Before-and-after structural reinforcement, step revitalization, and clean trim finish.",
  },
  {
    title: "Exterior Staircase Renovation",
    category: "Exterior",
    image: "/projects/exterior_stairwell_before_after.jpeg",
    description: "Complete rebuild and weatherproofing of outdoor steps for safety, durability, and curb appeal.",
  },
  {
    title: "Patio Construction & Upgrades",
    category: "Outdoor Living",
    image: "/projects/patio.jpeg",
    description: "Custom outdoor patio build designed for long-term weather resistance and functional relaxation.",
  },
  {
    title: "Custom Shed & Outbuilding Build",
    category: "Carpentry",
    image: "/projects/shed.jpeg",
    description: "Solid framing, secure exterior siding, and custom-built residential storage structure.",
  },
];

export const ProjectGallery = () => {
  return (
    <section id="gallery" className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block bg-brand-orange/20 text-brand-orange font-semibold px-3.5 py-1 rounded-full text-xs uppercase tracking-wide">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Craftsmanship You Can <span className="text-brand-orange">Count On</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A look at recent drywall, remodeling, painting, and maintenance projects completed for local homeowners.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-brand-navy border border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 shadow-md flex flex-col"
            >
              {/* Image Frame */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                {project.beforeImage && project.afterImage ? (
                    // Side-by-side split view for Kitchen Before & After
                    <div className="flex h-full w-full">
                    <div className="relative w-1/2 h-full border-r border-slate-800">
                        <Image
                        src={project.beforeImage}
                        alt={`${project.title} - Before`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw"
                        className="object-cover"
                        />
                        <span className="absolute bottom-2 left-2 bg-black/75 text-slate-200 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase backdrop-blur-sm">
                        Before
                        </span>
                    </div>
                    <div className="relative w-1/2 h-full">
                        <Image
                        src={project.afterImage}
                        alt={`${project.title} - After`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw"
                        className="object-cover"
                        />
                        <span className="absolute bottom-2 right-2 bg-brand-orange text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase shadow-sm">
                        After
                        </span>
                    </div>
                    </div>
                ) : (
                    // Standard single image view
                    <Image
                    src={project.image || "/hero-bg.jpg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                )}

                {/* Category Pill */}
                <span className="absolute top-3 left-3 bg-brand-navy/90 text-brand-orange border border-slate-700/60 text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {project.category}
                </span>
                </div>      

              {/* Description */}
              <div className="p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
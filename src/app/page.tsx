import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <ServicesGrid />
      <ProjectGallery />
      <ContactSection />
      <Footer />
    </main>
  );
}
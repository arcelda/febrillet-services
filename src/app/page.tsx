import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { ServicesGrid } from "@/components/ServicesGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <ServicesGrid />
    </main>
  );
}
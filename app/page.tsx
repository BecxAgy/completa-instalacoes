import Navbar from "@/components/Navbar";
import AboutUsSection from "@/components/sections/AboutUsSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}

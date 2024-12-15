import Navbar from "@/components/Navbar";
import AboutUsSection from "@/components/sections/AboutUsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden ">
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

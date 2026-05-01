import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import Web2ProjectsSection from "@/components/Web2ProjectsSection";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <Web2ProjectsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

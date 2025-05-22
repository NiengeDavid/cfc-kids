import AboutSection from "@/components/aboutSection";
import ContactSection from "@/components/contactSection";
import EventsSection from "@/components/eventSection";
import GallerySection from "@/components/gallerySection";
import HeroSection from "@/components/heroSection";
import InstructorsSection from "@/components/instructorsSection";
import LandingNavbar from "@/components/landingNavbar";

export default function HomePage() {
  return (
    <div className="bg-[#fdf6e3]">
      <LandingNavbar />
      <HeroSection />
      <AboutSection />
      <InstructorsSection />
      <GallerySection />
      <EventsSection />
      <ContactSection />
    </div>
  );
}

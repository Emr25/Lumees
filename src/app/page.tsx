import ContactSection from "@/components/ContactSection";
import ControlSection from "@/components/ControlSections";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ModelListSection from "@/components/ModelListSection";
import OfferSection from "@/components/OfferSection";
import OneInfoSection from "@/components/OneInfoSection"
import ResearchSection from "@/components/ResearchSection";



export default function Home() {
  return (
    <>

      <Hero />
      <OneInfoSection />
      <OfferSection />
      <ControlSection />
      <ModelListSection />
      <ResearchSection />
      <ContactSection />
      <Footer />
    </>

  );
}

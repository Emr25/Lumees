import ContactSection from "@/components/ContactSection"
import ControlSection from "@/components/ControlSections"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import ModelListSection from "@/components/ModelListSection"
import OfferSection from "@/components/OfferSection"
import OneInfoSection from "@/components/OneInfoSection"
import ResearchSection from "@/components/ResearchSection"
import SectionProgress from "@/components/SectionProgress"
import PageWrapper from "@/components/PageWrapper" // ekledim

export default function Home() {
  return (
    <PageWrapper>

      <Hero />


      <SectionProgress>
        <OneInfoSection />
      </SectionProgress>

      <SectionProgress>
        <OfferSection />
      </SectionProgress>

      <SectionProgress>
        <ControlSection />
      </SectionProgress>

      <SectionProgress>
        <ModelListSection />
      </SectionProgress>

      <SectionProgress>
        <ResearchSection />
      </SectionProgress>

      <SectionProgress>
        <ContactSection />
      </SectionProgress>



      <SectionProgress>
        <Footer />
      </SectionProgress>
    </PageWrapper>
  )
}

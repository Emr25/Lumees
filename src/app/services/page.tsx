import ServicesHero from "@/components/ServicesHero"
import Services1 from "@/components/Services1"
import Footer from "@/components/Footer"
import SectionProgress from "@/components/SectionProgress"
import PageWrapper from "@/components/PageWrapper"

const ServicesPage = () => {
    return (
        <PageWrapper>

            <ServicesHero />


            <SectionProgress>
                <Services1 />
            </SectionProgress>

            <SectionProgress>
                <Footer />
            </SectionProgress>
        </PageWrapper>
    )
}

export default ServicesPage

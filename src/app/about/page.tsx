import AboutHero from "@/components/AboutHero"
import About1 from "@/components/About1"
import About2 from "@/components/About2"
import About3 from "@/components/About3"
import About4 from "@/components/About4"
import Footer from "@/components/Footer"
import SectionProgress from "@/components/SectionProgress"
import PageWrapper from "@/components/PageWrapper"

const AboutPage = () => {
    return (
        <PageWrapper>

            <AboutHero />


            <SectionProgress>
                <About1 />
            </SectionProgress>

            <SectionProgress>
                <About2 />
            </SectionProgress>

            <SectionProgress>
                <About3 />
            </SectionProgress>

            <SectionProgress>
                <About4 />
            </SectionProgress>

            <SectionProgress>
                <Footer />
            </SectionProgress>
        </PageWrapper>
    )
}

export default AboutPage

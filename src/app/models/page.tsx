import ModelHero from "@/components/ModelHero"
import Model1 from "@/components/Model1"
import Footer from "@/components/Footer"
import SectionProgress from "@/components/SectionProgress"
import PageWrapper from "@/components/PageWrapper"

const ModelPage = () => {
    return (
        <PageWrapper>

            <ModelHero />


            <SectionProgress>
                <Model1 />
            </SectionProgress>

            <SectionProgress>
                <Footer />
            </SectionProgress>
        </PageWrapper>
    )
}

export default ModelPage

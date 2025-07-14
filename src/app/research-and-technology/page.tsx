import ResearchHero from "@/components/ResearchHero"
import Research1 from "@/components/Research1"
import Footer from "@/components/Footer"
import PageWrapper from "@/components/PageWrapper"
import SectionProgress from "@/components/SectionProgress"

const ResearchPage = () => {
    return (
        <div>
            <PageWrapper>

                <ResearchHero />


                <SectionProgress>
                    <Research1 />
                </SectionProgress>

                <SectionProgress>
                    <Footer />
                </SectionProgress>
            </PageWrapper>
        </div>
    )
}

export default ResearchPage

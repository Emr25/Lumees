import RoadMapHero from "@/components/RoadMapHero"
import RoadMap1 from "@/components/RoadMap1"
import RoadMap2 from "@/components/RoadMap2"
import RoadMap3 from "@/components/RoadMap3"
import Footer from "@/components/Footer"
import SectionProgress from "@/components/SectionProgress"
import PageWrapper from "@/components/PageWrapper"

const RoadMapPage = () => {
    return (
        <PageWrapper>

            <RoadMapHero />


            <SectionProgress>
                <RoadMap1 />
            </SectionProgress>

            <SectionProgress>
                <RoadMap2 />
            </SectionProgress>

            <SectionProgress>
                <RoadMap3 />
            </SectionProgress>

            <SectionProgress>
                <Footer />
            </SectionProgress>
        </PageWrapper>
    )
}

export default RoadMapPage

import BlogHero from "@/components/BlogHero"
import Blog1 from "@/components/Blog1"
import Footer from "@/components/Footer"
import SectionProgress from "@/components/SectionProgress"
import PageWrapper from "@/components/PageWrapper"

const BlogPage = () => {
    return (
        <PageWrapper>

            <BlogHero />


            <SectionProgress>
                <Blog1 />
            </SectionProgress>

            <SectionProgress>
                <Footer />
            </SectionProgress>
        </PageWrapper>
    )
}

export default BlogPage

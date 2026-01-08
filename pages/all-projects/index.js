import PortfolioSection from "@/components/home/PortfolioSection";
import Head from "next/head";

function Index() {

    return (
        <>
            <Head>
                <title>
                    Our Projects | Nextech Service Solutions – Portfolio
                </title>

                <meta
                    name="description"
                    content="Explore our portfolio at Nextech Service Solutions. Discover web, mobile, and software projects delivered with innovation, quality, and performance."
                />

                <link
                    rel="canonical"
                    href="https://www.nextechservicessolutions.com/all-projects"
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Our Projects | Nextech Service Solutions"
                />
                <meta
                    property="og:description"
                    content="View our successful projects and digital solutions built for startups and enterprises worldwide."
                />
                <meta
                    property="og:url"
                    content="https://www.nextechservicessolutions.com/all-projects"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://www.nextechservicessolutions.com/portfolio-banner.png"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Our Portfolio | Nextech Service Solutions"
                />
                <meta
                    name="twitter:description"
                    content="Explore real-world digital projects delivered by Nextech Service Solutions."
                />
                <meta
                    name="twitter:image"
                    content="https://www.nextechservicessolutions.com/portfolio-banner.png"
                />
            </Head>

            {/* Portfolio Section */}
            <PortfolioSection />
        </>

    )
}
export default Index;
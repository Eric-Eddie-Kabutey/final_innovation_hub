import Hero from "@/components/impact/Hero";

import heroImage from "@/public/assets/images/leveling-Biuf2Qjx.png"
import impactMapImg from "@/public/assets/images/impactMap.png";
import InfoSection from "@/components/impact/InfoSection";
import SuccessfulProjects from "@/components/impact/SuccessfulProjects";

export default function MentorshipPage() {
    return (<>
        {/* Hero section */}
        <Hero
        subtitle="Our Journey"
        title="Building the Future, Together"
        mobileTitle="Building the Future"
        imageSrc={heroImage}
        imageAlt="A team collaborating in an office"
      />
      {/* More info */}
       <InfoSection
        title="Our Technology"
        subtitle="Cutting-Edge Platform for Seamless Growth"
        text="Our robust platform is designed to scale with you, offering unparalleled performance, security, and a suite of powerful features."
        link="/technology"
        imageSrc={impactMapImg} 
        imageAlt="Screenshot of a technology platform"        
      />

      {/* successful project */}
      <SuccessfulProjects />
    </>)
}
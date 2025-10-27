import Navbar from "@/components/shared/Navbar"
import FooterSection from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";
import GreenEnergy from "@/components/home/green-energy";
import OurServices from "@/components/home/our-services";
import DemocratisingLuck from "@/components/home/democratising-luck";
import ImpactDriven from "@/components/home/impact-driven";
import HomeMentorship from "@/components/home/mentorship";
import AlumniNetwork from "@/components/home/alumni-network";
import Faqs from "@/components/home/faqs";
import QuickLinks from "@/components/home/quick-links";

export default function Home() {
  return (
    <>
      <Navbar />
          <Hero />
          <GreenEnergy />
          <OurServices />
          <DemocratisingLuck />
          <ImpactDriven />
          <HomeMentorship />
          <AlumniNetwork />
          <Faqs />
          <QuickLinks />
          
      <FooterSection />
    </>
  );
}

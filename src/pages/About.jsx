import HeroSection from "../components/About/HeroSection";
import CompanyIntro from "../components/About/CompanyIntro";
import WhyChooseUs from "../components/About/WhyChooseUs";
import TeamSection from "../components/About/TeamSection";
import CallToAction from "../components/About/CallToAction";
import MissionVision from "../components/About/MissionVision";

export default function About() {
  return (
    <div className="pt-24">
      <HeroSection
        title="About Us"
        breadcrumb="About"
        bgImage="/assets/banner/banner02.jpg"
      />
      <CompanyIntro />
      <MissionVision />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
}

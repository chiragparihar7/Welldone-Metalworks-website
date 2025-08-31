import HeroSection from "../components/About/HeroSection";
import ServicesList from "../components/Services/ServiceList";
import ServiceProcess from "../components/Services/ServiceProcess";

export default function Services() {
  return (
    <div className="pt-24">
      <HeroSection
        title="Our Services"
        breadcrumb="Services"
        bgImage="/assets/banner/banner02.jpg"
      />
      <ServicesList />
      <ServiceProcess />
    </div>
  )
}



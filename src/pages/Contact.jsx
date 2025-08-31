import HeroSection from "../components/About/HeroSection";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import MapEmbed from "../components/Contact/MapEmbed";
export default function Contact() {
  return (
    <div className="pt-24">
      <HeroSection
        title="Contact Us"
        breadcrumb="Contact"
        bgImage="/assets/banner/banner02.jpg"
      />
      <ContactInfo />
      <ContactForm />
      <MapEmbed />
    </div>
  );
}

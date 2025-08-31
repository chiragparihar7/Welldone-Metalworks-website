import { Contact } from "lucide-react";
import HeroSection from "../components/About/HeroSection";
import ContactInfo from "../components/Enquiry/ContactInfo";
import EnquiryForm from "../components/Enquiry/EnquiryForm";

export default function Enquiry() {
  return (
    <div className='pt-24'>
      <HeroSection   title="Enquiry Form"
        breadcrumb="Enquiry"
        bgImage="/assets/banner/banner02.jpg"/>
        <ContactInfo />
        <EnquiryForm /> 
    </div>
  )
}



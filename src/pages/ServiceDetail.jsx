// src/pages/ServiceDetail.jsx
import { useParams, Link } from "react-router-dom";
import {
  FaHammer,
  FaWrench,
  FaTools,
  FaCogs,
  FaShieldAlt,
  FaPaintBrush,
  FaCheckCircle,
} from "react-icons/fa";
import HeroSection from "../components/About/HeroSection";

// Services Data
const servicesData = {
  "custom-metal-fabrication": {
    icon: <FaHammer />,
    title: "Custom Metal Fabrication",
    description:
      "We design and build unique metal solutions tailored to your needs. Whether it's industrial or decorative, precision is guaranteed.",
    highlights: [
      "High-quality stainless steel, aluminum & iron work",
      "Advanced CNC cutting & bending machines",
      "Durable designs built for long-lasting use",
      "Fully customized to your requirements",
    ],
    process: [
      "Consultation & requirement gathering",
      "Design & 3D modeling",
      "Fabrication & assembly",
      "Quality testing & delivery",
    ],
    whyChoose: [
      "Expert team with 10+ years of experience",
      "On-time delivery with no compromise on quality",
      "Competitive pricing and transparent process",
    ],
    image: "/assets/servicesImg/custom_fabrication.jpg",
  },
  "structural-metalworks": {
    icon: <FaWrench />,
    title: "Structural Metalworks",
    description:
      "From industrial frameworks to construction supports, we deliver safe and strong structures that stand the test of time.",
    highlights: [
      "Beams, columns, and trusses fabrication",
      "Earthquake & weather-resistant structures",
      "Compliance with international safety standards",
    ],
    process: [
      "Structural design & analysis",
      "Material preparation & cutting",
      "Assembly & welding",
      "Final inspection & approval",
    ],
    whyChoose: [
      "Trusted by major industries & contractors",
      "State-of-the-art welding & assembly techniques",
      "Expert quality inspection at every stage",
    ],
    image: "/assets/servicesImg/structucal02.jpg",
  },
  "decorative-metalwork": {
    icon: <FaTools />,
    title: "Decorative Metalwork",
    description:
      "We craft stunning decorative elements like railings, gates, panels, and furniture, blending modern aesthetics with traditional craftsmanship.",
    highlights: [
      "Elegant gates, railings & balconies",
      "Custom metal furniture & art pieces",
      "Combination of durability & beauty",
    ],
    process: [
      "Concept design & sketching",
      "Metal shaping & engraving",
      "Finishing & detailing",
      "Installation & customer approval",
    ],
    whyChoose: [
      "Unique designs that enhance spaces",
      "Attention to fine details",
      "Blend of traditional and modern styles",
    ],
    image: "/assets/servicesImg/decorative01.jpg",
  },
  "metal-finishing": {
    icon: <FaCogs />,
    title: "Metal Finishing & Coating",
    description:
      "Our finishing process includes polishing, powder coating, painting, and galvanizing to protect against corrosion and enhance appearance.",
    highlights: [
      "Rust & corrosion resistance",
      "Wide range of textures & colors",
      "Durable powder coating & galvanization",
    ],
    process: [
      "Surface preparation",
      "Coating application",
      "Curing & hardening",
      "Final inspection",
    ],
    whyChoose: [
      "Premium quality finishing",
      "Long-lasting protection",
      "Improves both durability & aesthetics",
    ],
    image: "/assets/servicesImg/metal_coating.jpg",
  },
  "welding-repairs": {
    icon: <FaShieldAlt />,
    title: "Welding and Repairs",
    description:
      "We provide MIG, TIG, and arc welding with precision. Our repair services ensure your existing metal structures regain strength and reliability.",
    highlights: [
      "Expert MIG, TIG & arc welding",
      "Emergency repair services",
      "Reinforcement of damaged structures",
    ],
    process: [
      "Damage assessment",
      "Preparation & cleaning",
      "Welding & repair",
      "Strength testing",
    ],
    whyChoose: [
      "Certified & skilled welders",
      "Fast and reliable services",
      "Restores strength & functionality",
    ],
    image: "/assets/servicesImg/welding.jpg",
  },
  "custom-painting": {
    icon: <FaPaintBrush />,
    title: "Custom Painting & Design",
    description:
      "Our painting and design services help your metal projects stand out with personalized colors, textures, and patterns.",
    highlights: [
      "Custom paint jobs with unique patterns",
      "Durable coatings for lasting beauty",
      "Specialized textures and finishes",
    ],
    process: [
      "Surface preparation",
      "Primer application",
      "Painting & design work",
      "Protective coating",
    ],
    whyChoose: [
      "Creative and personalized designs",
      "High-quality paints & coatings",
      "Perfect balance of style & protection",
    ],
    image: "/assets/servicesImg/decorative02.jpg",
  },
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return <p className="text-center text-red-500 mt-20">Service not found.</p>;
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <HeroSection
        title="Services Details"
        breadcrumb="Services"
        bgImage="/assets/banner/banner02.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="rounded-2xl shadow-lg w-full max-h-[450px] object-cover"
            />
          </div>

          {/* Right - Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl text-[var(--color-primary)]">
                {service.icon}
              </div>
              <h1 className="text-4xl font-bold text-[var(--color-dark)]">
                {service.title}
              </h1>
            </div>
            <p className="text-lg text-gray-700 mb-6">{service.description}</p>

            {/* Highlights */}
            <h2 className="text-2xl font-semibold mb-3">Key Highlights</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              {service.highlights.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process Section */}
        {service.process && (
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center text-[var(--color-dark)] mb-8">
              Our Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all"
                >
                  <div className="text-[var(--color-primary)] font-bold text-xl mb-2">
                    Step {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Why Choose Us */}
        {service.whyChoose && (
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center text-[var(--color-dark)] mb-8">
              Why Choose This Service?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.whyChoose.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-gray-50 p-5 rounded-xl shadow-sm"
                >
                  <FaCheckCircle className="text-[var(--color-primary)] text-xl mt-1" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-block bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white px-8 py-3 rounded-full font-semibold hover:from-[var(--color-secondary)] hover:to-[var(--color-accent)] transition-all duration-300"
          >
            ← Back to Services
          </Link>
        </div>
      </section>
    </div>
  );
}

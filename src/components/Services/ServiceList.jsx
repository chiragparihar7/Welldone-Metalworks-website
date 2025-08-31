// src/components/ServicesList.jsx
import { Link } from "react-router-dom";
import { FaHammer, FaWrench, FaTools, FaCogs, FaShieldAlt, FaPaintBrush } from "react-icons/fa";

function ServiceCard({ icon, title, description, id }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-4 hover:shadow-2xl hover:bg-gradient-to-r hover:from-[var(--color-primary)]/10 hover:to-[var(--color-secondary)]/10">
      
      {/* Icon */}
      <div className="text-[50px] mb-4 text-[var(--color-primary)] transition-transform duration-500 hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2 text-[var(--color-dark)] transition-all duration-300 hover:bg-gradient-to-r hover:from-[var(--color-primary)] hover:to-[var(--color-accent)] hover:bg-clip-text hover:text-transparent">
        {title}
      </h3>

      <p className="text-gray-600">{description}</p>

      {/* CTA Button */}
      <Link
        to={`/services/${id}`}
        className="mt-4 inline-block text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-6 py-2 rounded-full font-semibold hover:from-[var(--color-secondary)] hover:to-[var(--color-accent)] transition-all duration-300 transform hover:-translate-y-1"
      >
        Learn More
      </Link>
    </div>
  );
}

export default function ServicesList() {
  const services = [
    { id: "custom-metal-fabrication", icon: <FaHammer />, title: "Custom Metal Fabrication", description: "Precision metal fabrication tailored to your specifications." },
    { id: "structural-metalworks", icon: <FaWrench />, title: "Structural Metalworks", description: "Strong and durable structural components for industrial needs." },
    { id: "decorative-metalwork", icon: <FaTools />, title: "Decorative Metalwork", description: "Stylish, elegant, and creative metal designs for interiors and exteriors." },
    { id: "metal-finishing", icon: <FaCogs />, title: "Metal Finishing & Coating", description: "High-quality finishing and protective coatings for long-lasting performance." },
    { id: "welding-repairs", icon: <FaShieldAlt />, title: "Welding and Repairs", description: "Reliable welding and repair services for all metal structures." },
    { id: "custom-painting", icon: <FaPaintBrush />, title: "Custom Painting & Design", description: "Adding aesthetics with custom paint finishes and design elements." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Welldone Metalworks provides high-quality metal services with precision, durability, and creativity. Explore what we offer!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

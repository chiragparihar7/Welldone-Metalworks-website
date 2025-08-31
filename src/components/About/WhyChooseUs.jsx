// src/components/WhyChooseUs.jsx
import { FaCogs, FaUsers, FaClock, FaShieldAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-50 py-20 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-[var(--color-primary)] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-16 w-72 h-72 bg-[var(--color-secondary)] rounded-full opacity-20 animate-pulse"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[var(--color-primary)]">
          Why Choose Us
        </h2>
        <p className="text-gray-700 text-lg mb-16 max-w-3xl mx-auto">
          Welldone Metalworks stands out by combining skill, precision, and customer focus to deliver exceptional metalwork solutions.
        </p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {[
            {
              icon: <FaCogs size={28} />,
              title: "Expert Craftsmanship",
              desc: "Precision-driven metal fabrication by experienced professionals.",
            },
            {
              icon: <FaUsers size={28} />,
              title: "Customer Focused",
              desc: "We prioritize your requirements and ensure full satisfaction.",
            },
            {
              icon: <FaClock size={28} />,
              title: "Timely Delivery",
              desc: "Projects completed on schedule without compromising quality.",
            },
            {
              icon: <FaShieldAlt size={28} />,
              title: "Quality Assurance",
              desc: "High-quality materials and rigorous inspection for reliability.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-center group"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white rounded-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

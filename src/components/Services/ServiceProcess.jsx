// src/components/ServiceProcess.jsx
import { FaRegLightbulb, FaTools, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaRegLightbulb />,
    title: "Consultation",
    description: "We understand your requirements and provide expert advice for your metalwork project."
  },
  {
    icon: <FaTools />,
    title: "Design & Fabrication",
    description: "Our team designs and fabricates precise, high-quality metal components tailored to your needs."
  },
  {
    icon: <FaCheckCircle />,
    title: "Delivery & Support",
    description: "We ensure timely delivery and provide ongoing support for maintenance and modifications."
  }
];

export default function ServiceProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-[var(--color-primary)]/5 to-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] mb-4">
            Our Process
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From consultation to delivery, we follow a clear process to ensure your satisfaction and top-quality metalwork.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Number Badge */}
              <div className="absolute -top-5 bg-[var(--color-primary)] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg shadow-md">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="text-5xl text-[var(--color-secondary)] mb-4 transition-transform duration-500 hover:rotate-12">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-[var(--color-dark)] hover:text-[var(--color-accent)] transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Hammer, Wrench, Star, Layers, Shield, Grid } from "lucide-react";
import { useNavigate } from "react-router-dom"; // if using react-router

const services = [
  {
    icon: <Hammer size={28} className="text-white" />,
    title: "Custom Fabrication",
    description:
      "We craft high-quality steel and metal structures customized to your requirements.",
    features: [
      "Tailored designs",
      "Durable materials",
      "Precision engineering",
    ],
    slug: "custom-metal-fabrication", // used for routing
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Wrench size={28} className="text-white" />,
    title: "Gazebo & Garden Structures",
    description:
      "Transform your outdoor spaces with elegant gazebos and garden structures.",
    features: ["Custom sizes", "Weather-resistant", "Stylish design"],
    slug: "",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Star size={28} className="text-white" />,
    title: "Polycarbonate Roofing",
    description: "Durable, stylish, and energy-efficient roofing solutions.",
    features: ["UV protection", "Lightweight & strong", "Long-lasting"],
    slug: "",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Layers size={28} className="text-white" />,
    title: "Railing & Fencing",
    description:
      "Secure and decorative railing and fencing solutions for homes and offices.",
    features: ["Custom designs", "Strong materials", "Easy installation"],
    slug: "",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: <Shield size={28} className="text-white" />,
    title: "Security Gates",
    description: "High-quality, sturdy gates for safety and aesthetics.",
    features: ["Durable steel", "Custom locking", "Elegant look"],
    slug: "",
    color: "from-red-400 to-pink-500",
  },
  {
    icon: <Grid size={28} className="text-white" />,
    title: "Metal Grills & Panels",
    description: "Decorative and functional metal panels for interior and exterior.",
    features: ["Custom patterns", "Strong build", "Easy maintenance"],
    slug: "",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function ServicesHome() {
  const navigate = useNavigate(); // react-router navigation

  return (
    <section className="py-10 px-6 bg-gray-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          High-quality fabrication services designed with precision, durability, and style.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative bg-white rounded-3xl shadow-2xl p-8 cursor-pointer overflow-hidden hover:shadow-xl transition"
          >
            {/* Angled background shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-tr from-cyan-300 to-purple-400 opacity-30 rotate-12 pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-pink-300 to-yellow-400 opacity-30 -rotate-12 pointer-events-none"></div>

            {/* Icon */}
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-to-tr ${service.color} shadow-lg`}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-3">{service.description}</p>

            {/* Features List */}
            <ul className="text-gray-500 text-sm mb-5 list-disc list-inside space-y-1">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={() => navigate(`/services/${service.slug}`)}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

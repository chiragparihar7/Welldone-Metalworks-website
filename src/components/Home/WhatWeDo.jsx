import { motion } from "framer-motion";
import { Hammer, Building, Layers, Shield, Star, Wrench } from "lucide-react";

const activities = [
  {
    icon: <Hammer size={28} className="text-white" />,
    title: "Custom Fabrication",
    description:
      "We craft steel and metal structures tailored to your exact specifications for residential and commercial projects.",
    details: [
      "Bespoke steel and metal design",
      "Residential & commercial projects",
      "Precision welding and finishing",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Building size={28} className="text-white" />,
    title: "Gazebo & Outdoor Structures",
    description:
      "Design and build elegant gazebos, pergolas, and other outdoor structures that elevate any space.",
    details: [
      "Custom gazebo and pergola designs",
      "Durable materials for outdoor use",
      "Enhances garden aesthetics",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Layers size={28} className="text-white" />,
    title: "Modular & Prefabricated Solutions",
    description:
      "Modular metal frameworks for quick installation, versatility, and long-lasting durability.",
    details: [
      "Fast and flexible installation",
      "Prefabricated modules for efficiency",
      "Long-lasting and durable design",
    ],
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Shield size={28} className="text-white" />,
    title: "Security & Safety Installations",
    description:
      "We provide sturdy gates, railings, and fencing systems to ensure both safety and aesthetic appeal.",
    details: [
      "Gates, railings, and fencing",
      "Enhanced security solutions",
      "Stylish and robust design",
    ],
    color: "from-green-400 to-teal-500",
  },
  {
    icon: <Star size={28} className="text-white" />,
    title: "Premium Finishes & Coatings",
    description:
      "High-quality finishes and protective coatings for all metal surfaces, ensuring longevity and shine.",
    details: [
      "Protective powder coatings",
      "Polished and aesthetic finishes",
      "Long-lasting and corrosion-resistant",
    ],
    color: "from-red-400 to-pink-500",
  },
  {
    icon: <Wrench size={28} className="text-white" />,
    title: "Maintenance & Custom Support",
    description:
      "Ongoing maintenance, repairs, and custom support for all our fabricated structures.",
    details: [
      "Preventive maintenance",
      "Repair services for metal structures",
      "Custom support and consultation",
    ],
    color: "from-indigo-500 to-purple-500",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-10 px-6 bg-gray-50 relative">
      <div className="max-w-[1280px] mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          What We Do
        </h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          From design to installation, we provide complete fabrication solutions that combine precision, durability, and style.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8, scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative bg-white rounded-3xl shadow-lg p-8 overflow-hidden border border-gray-200"
          >
            {/* Decorative Background Shapes */}
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-gradient-to-tr from-cyan-200 to-blue-300 opacity-20 rotate-12 pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-gradient-to-tr from-pink-200 to-yellow-300 opacity-20 -rotate-12 pointer-events-none"></div>

            {/* Icon */}
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-to-tr ${activity.color} shadow-lg`}
            >
              {activity.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>

            {/* Description */}
            <p className="text-gray-700 text-sm mb-3">{activity.description}</p>

            {/* Additional Details */}
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              {activity.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

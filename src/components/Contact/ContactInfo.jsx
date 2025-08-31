import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo() {
  const info = [
    { icon: <MapPin size={28} />, title: "Our Address", detail: "2 Laxmi Chuna Factory, Sola Gham, Ahmedabad" },
    { icon: <Phone size={28} />, title: "Call Us", detail: "+91 96499 57698" },
    { icon: <Mail size={28} />, title: "Email Us", detail: "panchalsourav32@gmail.com" },
    { icon: <Clock size={28} />, title: "Business Hours", detail: "Mon - Sat: 9:00 AM - 7:00 PM" },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      {info.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          whileHover={{ y: -10, scale: 1.05 }}
          className="relative group bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] 
          p-6 rounded-2xl shadow-lg overflow-hidden border border-gray-700/50"
        >
          {/* Floating Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/20 
          opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl" />

          {/* Icon */}
          <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-xl 
          bg-gradient-to-tr from-cyan-500 to-purple-600 text-white shadow-lg mb-4">
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="relative z-10 text-lg font-semibold text-white">{item.title}</h3>

          {/* Detail */}
          <p className="relative z-10 text-gray-300 text-sm mt-2">{item.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}

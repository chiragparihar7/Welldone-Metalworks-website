import { Users2, Hammer, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutHome() {
  const stats = [
    { icon: <Users2 size={26} className="text-cyan-500" />, title: "Experienced Team", value: "10+ Years" },
    { icon: <Hammer size={26} className="text-purple-500" />, title: "Projects Completed", value: "500+" },
    { icon: <Star size={26} className="text-yellow-400" />, title: "Satisfied Clients", value: "300+" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-16">
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6 text-gray-800"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Welldone Metalworks
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            At Welldone Metalworks, we provide top-notch fabrication services tailored to your needs.  
            From custom metal structures and gazebos to polycarbonate roofing solutions, our skilled team ensures precision, durability, and timely delivery for every project.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl p-6 shadow-md"
              >
                <div className="mb-2">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-cyan-500 font-bold text-xl">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="rounded-3xl overflow-hidden shadow-lg border border-gray-200"
        >
          <img
            src="/assets/gazebo/gazebo03.jpg"
            alt="Fabrication Showcase"
            className="w-full h-90 md:h-96 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

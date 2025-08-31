import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slidesData = [
  {
    image: "/assets/banner/banner01.jpg",
    title: "Custom Fabrication",
    subtitle: "High-quality steel and metal structures",
    cta: "Learn More",
  },
  {
    image: "/assets/banner/banner02.jpg",
    title: "Gazebo & Garden Structures",
    subtitle: "Designs that enhance outdoor spaces",
    cta: "View Gallery",
  },
  {
    image: "/assets/banner/banner03.jpg",
    title: "Polycarbonate Roofing",
    subtitle: "Durable & stylish roofing solutions",
    cta: "Get a Quote",
  },
];

export default function Banner() {
  const slides = useMemo(() => slidesData, []);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover brightness-75"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/70" />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 xl:px-32 text-white z-10">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-2 sm:mb-4 leading-tight"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-sm sm:text-base md:text-xl xl:text-2xl 2xl:text-3xl mb-4 sm:mb-6 max-w-xl"
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg font-semibold hover:scale-105 transition text-sm sm:text-base"
            >
              {slides[current].cta}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full transition ${
              current === idx ? "bg-cyan-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// src/components/MissionVision.jsx
import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Driving innovation, quality, and excellence in every metalwork project we undertake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="relative group bg-[var(--color-primary)]/10 rounded-3xl p-10 shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500">
            {/* Decorative Circle */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-primary)]/20 rounded-full animate-ping"></div>

            <div className="flex items-center mb-6 space-x-4">
              <div className="text-[var(--color-primary)] text-4xl">
                <FaBullseye />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-dark)]">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Delivering top-notch metal fabrication solutions with precision and creativity, 
              empowering businesses with reliable and sustainable metalworks.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative group bg-[var(--color-accent)]/10 rounded-3xl p-10 shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500">
            {/* Decorative Circle */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--color-accent)]/20 rounded-full animate-ping"></div>

            <div className="flex items-center mb-6 space-x-4">
              <div className="text-[var(--color-accent)] text-4xl">
                <FaEye />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-dark)]">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become a global leader in the metalworks industry, setting new standards in 
              quality, innovation, and sustainable solutions for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/HeroSection.jsx
export default function HeroSection({ title, breadcrumb, bgImage }) {
  return (
    <section
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-[1280px] mx-auto px-6 w-full">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {title}
        </h2>

        {/* Breadcrumb */}
        <ul className="flex space-x-2 mt-4 text-gray-200 text-sm sm:text-base">
          <li>
            <a
              href="/"
              className="transition-colors text-cyan-400 hover:text-blue-500"
            >
              Home
            </a>
          </li>
          <li>/</li>
          <li className="text-white font-semibold">{breadcrumb}</li>
        </ul>
      </div>
    </section>
  );
}

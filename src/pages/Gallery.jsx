import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import HeroSection from "../components/About/HeroSection";

export default function Gallery() {
  // Categories
  const categories = [
    "All",
    "Garden Structure",
    "Gazebo Structure",
    "Railing Structure",
    "Heavy Conventional",
    "Polycarbonate Roofing",
  ];

  // Images grouped by category
  const galleryData = [
    {
      category: "Garden Structure",
      images: [
        "/assets/gallery/garden/garden01.jpg",
        "/assets/gallery/garden/garden02.jpg",
        "/assets/gallery/garden/garden03.jpg",
        "/assets/gallery/garden/garden04.jpg",
        "/assets/gallery/garden/garden05.jpg",
        "/assets/gallery/garden/garden06.jpg",
        "/assets/gallery/garden/garden07.jpg",
        "/assets/gallery/garden/garden08.jpg",
        "/assets/gallery/garden/garden09.jpg",
        "/assets/gallery/garden/garden10.jpg",
        "/assets/gallery/garden/garden11.jpg",
        "/assets/gallery/garden/garden12.jpg",
        "/assets/gallery/garden/garden13.jpg",
        "/assets/gallery/garden/garden14.jpg",
        "/assets/gallery/garden/garden15.jpg",
      ],
    },
    {
      category: "Gazebo Structure",
      images: [
        "/assets/gallery/gazebo/gazebo01.jpg",
        "/assets/gallery/gazebo/gazebo03.jpg",
        "/assets/gallery/gazebo/gazebo04.jpg",
        "/assets/gallery/gazebo/gazebo05.jpg",
        "/assets/gallery/gazebo/gazebo06.jpg",
        "/assets/gallery/gazebo/gazebo07.jpg",
        "/assets/gallery/gazebo/gazebo08.jpg",
        "/assets/gallery/gazebo/gazebo09.jpg",
        "/assets/gallery/gazebo/gazebo10.jpg",
        "/assets/gallery/gazebo/gazebo11.jpg",
        "/assets/gallery/gazebo/gazebo12.jpg",
        "/assets/gallery/gazebo/gazebo13.jpg",
        "/assets/gallery/gazebo/gazebo14.jpg",
        "/assets/gallery/gazebo/gazebo15.jpg",
        "/assets/gallery/gazebo/gazebo16.jpg",
        "/assets/gallery/gazebo/gazebo17.jpg",
        "/assets/gallery/gazebo/gazebo18.jpg",
        "/assets/gallery/gazebo/gazebo19.jpg",
        "/assets/gallery/gazebo/gazebo20.jpg",
        "/assets/gallery/gazebo/gazebo21.jpg",
        "/assets/gallery/gazebo/gazebo22.jpg",
        "/assets/gallery/gazebo/gazebo23.jpg",
        "/assets/gallery/gazebo/gazebo24.jpg",
        "/assets/gallery/gazebo/gazebo25.jpg",
        "/assets/gallery/gazebo/gazebo26.jpg",
        "/assets/gallery/gazebo/gazebo27.jpg",
        "/assets/gallery/gazebo/gazebo28.jpg",
        "/assets/gallery/gazebo/gazebo29.jpg",
        "/assets/gallery/gazebo/gazebo30.jpg",
        "/assets/gallery/gazebo/gazebo31.jpg",
        "/assets/gallery/gazebo/gazebo32.jpg",
        "/assets/gallery/gazebo/gazebo33.jpg",
        "/assets/gallery/gazebo/gazebo34.jpg",
        "/assets/gallery/gazebo/gazebo35.jpg",
        "/assets/gallery/gazebo/gazebo36.jpg",
        "/assets/gallery/gazebo/gazebo37.jpg",
        "/assets/gallery/gazebo/gazebo38.jpg",
        "/assets/gallery/gazebo/gazebo39.jpg",
        "/assets/gallery/gazebo/gazebo40.jpg",
        "/assets/gallery/gazebo/gazebo41.jpg",
        "/assets/gallery/gazebo/gazebo42.jpg",
        "/assets/gallery/gazebo/gazebo43.jpg",
        "/assets/gallery/gazebo/gazebo44.jpg",
        "/assets/gallery/gazebo/gazebo45.jpg",
        "/assets/gallery/gazebo/gazebo46.jpg",
        "/assets/gallery/gazebo/gazebo47.jpg",
        "/assets/gallery/gazebo/gazebo48.jpg",
        "/assets/gallery/gazebo/gazebo49.jpg",
        "/assets/gallery/gazebo/gazebo50.jpg",
        "/assets/gallery/gazebo/gazebo51.jpg",
        "/assets/gallery/gazebo/gazebo52.jpg",
        "/assets/gallery/gazebo/gazebo53.jpg",
        "/assets/gallery/gazebo/gazebo54.jpg",
        "/assets/gallery/gazebo/gazebo55.jpg",
        "/assets/gallery/gazebo/gazebo56.jpg",
        "/assets/gallery/gazebo/gazebo57.jpg",
        "/assets/gallery/gazebo/gazebo58.jpg",
        "/assets/gallery/gazebo/gazebo59.jpg",
        "/assets/gallery/gazebo/gazebo60.jpg",
        "/assets/gallery/gazebo/gazebo61.jpg",
        "/assets/gallery/gazebo/gazebo62.jpg",
        "/assets/gallery/gazebo/gazebo63.jpg",
        "/assets/gallery/gazebo/gazebo64.jpg",
        "/assets/gallery/gazebo/gazebo65.jpg",
        "/assets/gallery/gazebo/gazebo66.jpg",
        "/assets/gallery/gazebo/gazebo67.jpg",
      ],
    },
    {
      category: "Railing Structure",
      images: [
        "/assets/gallery/railing/ralling01.jpg",
        "/assets/gallery/railing/ralling02.jpg",
        "/assets/gallery/railing/ralling03.jpg",
        "/assets/gallery/railing/ralling04.jpg",
        "/assets/gallery/railing/ralling05.jpg",
        "/assets/gallery/railing/ralling06.jpg",
        "/assets/gallery/railing/ralling07.jpg",
        "/assets/gallery/railing/ralling08.jpg",
        "/assets/gallery/railing/ralling09.jpg",
        "/assets/gallery/railing/ralling10.jpg",
        "/assets/gallery/railing/ralling11.jpg",
        "/assets/gallery/railing/ralling12.jpg",
        "/assets/gallery/railing/ralling13.jpg",
        "/assets/gallery/railing/ralling14.jpg",
        "/assets/gallery/railing/ralling15.jpg",
        "/assets/gallery/railing/ralling16.jpg",
        "/assets/gallery/railing/ralling17.jpg",
        "/assets/gallery/railing/ralling18.jpg",
        "/assets/gallery/railing/ralling19.jpg",
        "/assets/gallery/railing/ralling20.jpg",
        "/assets/gallery/railing/ralling21.jpg",
        "/assets/gallery/railing/ralling22.jpg",
        "/assets/gallery/railing/ralling23.jpg",
        "/assets/gallery/railing/ralling24.jpg",
        "/assets/gallery/railing/ralling25.jpg",
        "/assets/gallery/railing/ralling26.jpg",
        "/assets/gallery/railing/ralling27.jpg",
        "/assets/gallery/railing/ralling28.jpg",
        "/assets/gallery/railing/ralling29.jpg",
        "/assets/gallery/railing/ralling30.jpg",
        "/assets/gallery/railing/ralling31.jpg",
      ],
    },
    {
      category: "Heavy Conventional",
      images: [
        "/assets/gallery/heavy/heavy_convenstional01.jpg",
        "/assets/gallery/heavy/heavy_convenstional02.jpg",
        "/assets/gallery/heavy/heavy_convenstional03.jpg",
        "/assets/gallery/heavy/heavy_convenstional04.jpg",
        "/assets/gallery/heavy/heavy_convenstional05.jpg",
        "/assets/gallery/heavy/heavy_convenstional06.jpg",
      ],
    },
    {
      category: "Polycarbonate Roofing",
      images: [
        "/assets/gallery/roof/polycarbonate_roof01.jpg",
        "/assets/gallery/roof/polycarbonate_roof02.jpg",
        "/assets/gallery/roof/polycarbonate_roof03.jpg",
        "/assets/gallery/roof/polycarbonate_roof04.jpg",
        "/assets/gallery/roof/polycarbonate_roof05.jpg",
        "/assets/gallery/roof/polycarbonate_roof06.jpg",
        "/assets/gallery/roof/polycarbonate_roof07.jpg",
        "/assets/gallery/roof/polycarbonate_roof08.jpg",
        "/assets/gallery/roof/polycarbonate_roof09.jpg",
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Flatten images for filtering
  const allImages = galleryData.flatMap((group) =>
    group.images.map((src) => ({
      src,
      category: group.category,
    }))
  );

  // Apply filter
  const filteredImages =
    activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-24">
      <HeroSection
        title="Our Gallery"
        breadcrumb="Gallery"
        bgImage="/assets/banner/banner02.jpg"
      />
      <div className="pt-10 pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center mb-8 text-[var(--color-dark)]">
            Our Gallery
          </h1>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((img, index) => {
              const globalIndex = allImages.findIndex((i) => i.src === img.src);
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => {
                    setCurrentIndex(globalIndex);
                    setOpen(true);
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.category}
                    loading="lazy"
                    className="rounded-xl shadow-md w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold rounded-xl">
                    View
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={allImages.map((img) => ({ src: img.src }))}
        />
      </div>
    </div>
  );
}

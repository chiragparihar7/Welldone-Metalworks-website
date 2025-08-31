// src/components/CompanyIntro.jsx
export default function CompanyIntro() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            About Welldone Metalworks
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At Welldone Metalworks, we craft top-quality metal components with
            precision and care. Our team combines skilled craftsmanship with
            modern technology to deliver exceptional results for every project.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              "High Quality Materials",
              "Expert Craftsmanship",
              "Custom Metal Solutions",
              "Fast & Reliable Delivery",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-gray-700 font-medium"
              >
                <span
                  className="w-10 h-10 flex items-center justify-center rounded-full font-bold text-white text-lg"
                  style={{
                    background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                  }}
                >
                  ✔
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:from-[var(--color-secondary)] hover:to-[var(--color-accent)] text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Learn More
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/assets/garden/garden03.jpg"
            alt="Company Overview"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

// src/components/CallToAction.jsx
export default function CallToAction() {
  return (
    <section className="relative w-full bg-gray-50 py-24 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[var(--color-primary)] rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[var(--color-accent)] rounded-full opacity-20 animate-pulse-slow"></div>

      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative transform rotate-3 hover:rotate-0 transition-all duration-700">
          <img
            src="/assets/garden/garden03.jpg"
            alt="Showcase"
            className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] animate-fadeIn">
            Let’s Build Something Extraordinary
          </h2>
          <p className="text-gray-700 text-lg md:text-xl animate-fadeIn delay-200">
            Collaborate with us for innovative metalwork solutions that deliver precision, quality, and lasting impact.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 animate-fadeIn delay-400">
            <a
              href="/contact"
              className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:from-[var(--color-accent)] hover:to-[var(--color-secondary)] transition-all transform hover:-translate-y-1 hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all transform hover:-translate-y-1 hover:scale-105"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
    
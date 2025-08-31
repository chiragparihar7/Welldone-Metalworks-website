export default function MapEmbed() {
  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-700 relative group">
      {/* Neon Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-3xl pointer-events-none" />

      {/* Map iframe */}
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.548114837026!2d72.51192117792944!3d23.081344460350355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9cca5ad4ea27%3A0x25e59dc16b03bd0c!2sSola%2C%20Ahmedabad%2C%20Gujarat%20380060!5e1!3m2!1sen!2sin!4v1737885590640!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        className="relative z-10 border-0 rounded-3xl shadow-inner"
      />

      {/* Overlay Glow Border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-cyan-500/30 pointer-events-none animate-pulse" />
    </div>
  );
}

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom"; // 👈 Import Link

export default function Footer() {
  const pages = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Enquiry", href: "/enquiry" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-tr from-[#0f172a] to-[#1e293b] text-gray-200 pt-10 pb-10 overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            At Welldone Metalworks, we craft premium metal components with precision and care, delivering high-quality fabrication solutions.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-cyan-400 transition"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-pink-400 transition"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-red-500 transition"><FaYoutube size={18} /></a>
          </div>
        </div>

        {/* Pages Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Pages
          </h2>
          <ul className="space-y-2 text-gray-400">
            {pages.map((page, idx) => (
              <li key={idx}>
                <Link
                  to={page.href} // 👈 Use Link instead of <a>
                  className="hover:text-cyan-400 transition"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Services
          </h2>
          <ul className="space-y-2 text-gray-400">
            {["Custom Metal Fabrication","Structural Metalworks","Decorative Metalwork","Metal Finishing & Coating","Welding & Repairs","Polycarbonate Roofing"].map((service, idx) => (
              <li key={idx}>
                <Link to="/services" className="hover:text-cyan-400 transition">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Gallery
          </h2>
          <div className="grid grid-cols-3 gap-2">
            <img src="/assets/garden/garden01.jpg" alt="gallery" className="rounded-lg h-20 w-full object-cover" />
            <img src="/assets/garden/garden02.jpg" alt="gallery" className="rounded-lg h-20 w-full object-cover" />
            <img src="/assets/garden/garden03.jpg" alt="gallery" className="rounded-lg h-20 w-full object-cover" />
            <img src="/assets/gazebo/gazebo01.jpg" alt="gallery" className="rounded-lg h-20 w-full object-cover" />
            <img src="/assets/gazebo/gazebo02.jpg" alt="gallery" className="rounded-lg h-20 w-full object-cover" />
            <img src="/assets/gazebo/gazebo03.jpg" alt="gallery" className="rounded-lg h-20 w-full object-cover" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        <p>Copyright © Welldone Metalworks, {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
}

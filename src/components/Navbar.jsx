import { useState } from "react";
import { Menu, X, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom"; 
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Gallery", to: "/gallery" },
    { name: "Enquiry", to: "/enquiry" },
    { name: "Contact Us", to: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* ---------- Header Top ---------- */}
      <div className="hidden md:block bg-gradient-to-r from-[var(--color-dark)] to-slate-800 text-gray-200 text-sm">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-6 py-2">
          <div className="flex space-x-6">
            <span>📞 +91 96499 57698</span>
            <span>✉️ panchalsourav32@gmail.com</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[var(--color-primary)] transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-[var(--color-primary)] transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-[var(--color-primary)] transition">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-[var(--color-primary)] transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Main Navbar ---------- */}
      <div className="bg-white text-gray-800 shadow-md">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <div className="flex">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="Welldone Metalworks" className="h-[72px] w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10 font-medium text-lg">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                className="hover:text-[var(--color-primary)] transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:from-[var(--color-secondary)] hover:to-[var(--color-accent)] text-white px-8 py-3 rounded-lg shadow-md font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--color-primary)]/40"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* ---------- Mobile Menu ---------- */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 text-lg shadow">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="block hover:text-[var(--color-primary)] transition"
              onClick={() => setIsOpen(false)} // ✅ Close menu on click
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            className="block bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:from-[var(--color-secondary)] hover:to-[var(--color-accent)] text-white px-8 py-3 rounded-lg text-center shadow-md font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--color-primary)]/40"
            onClick={() => setIsOpen(false)} // ✅ Close menu on CTA click
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}

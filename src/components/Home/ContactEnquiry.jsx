import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactEnquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null });

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_d3cmn09",
        "template_896zkcf",
        templateParams,
        "VNkGJBgBYKU8OjweK"
      )
      .then(() => {
        setStatus({ loading: false, success: true });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => setStatus({ loading: false, success: false }));
  };

  return (
    <section className="py-10 px-6 bg-gradient-to-b from-gray-150 to-gray-300">
      {/* Main Heading */}
      <div className="max-w-[1280px] mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Get in Touch With Us
        </h1>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          Whether you have a question, a project idea, or need a quote, our team is ready to assist you. Fill out the enquiry form or reach out through the contact info below.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info Card */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden flex flex-col justify-between"
        >
          {/* Decorative Gradient Circles */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-tr from-cyan-200 to-purple-300 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-tr from-pink-200 to-yellow-300 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

          {/* Top Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
              Contact Info
            </h2>
            <p className="text-gray-600 mb-8">
              Reach out to discuss your fabrication project, ask questions, or request a detailed quote.
            </p>
            <div className="space-y-5 text-gray-700">
              <p className="flex items-center gap-3">
                <Mail size={20} className="text-cyan-500" /> panchalsourav32@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <Phone size={20} className="text-purple-500" /> +91 96499 57698
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={20} className="text-yellow-500" /> 2 Laxmi Chuna Factory, Sola Gham, Ahmedabad
              </p>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h3>
            <div className="flex items-center gap-4 text-gray-600">
              <a href="#" className="hover:text-cyan-500 transition"><Facebook size={24} /></a>
              <a href="#" className="hover:text-purple-500 transition"><Instagram size={24} /></a>
              <a href="#" className="hover:text-blue-600 transition"><Linkedin size={24} /></a>
            </div>
            <div className="mt-6 text-gray-600">
              <h4 className="font-semibold mb-1">Working Hours:</h4>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat: 10:00 AM - 4:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </motion.div>

        {/* Enquiry Form Card */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Send an Enquiry
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "subject"].map((field, idx) => (
              <div key={idx} className="relative">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 bg-gray-100 text-gray-800 focus:ring-2 focus:ring-cyan-400 outline-none transition"
                />
                <label className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-cyan-500">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                rows="5"
                required
                className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 bg-gray-100 text-gray-800 focus:ring-2 focus:ring-purple-400 outline-none transition"
              />
              <label className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-purple-500">
                Message
              </label>
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {status.success === true && (
              <p className="mt-4 text-green-500 font-semibold">
                Message sent successfully!
              </p>
            )}
            {status.success === false && (
              <p className="mt-4 text-red-500 font-semibold">
                Failed to send message. Try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactEnquiry;

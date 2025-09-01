import { useState } from "react";
import {
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
  Mail,
  Phone,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
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

    // 1️⃣ Send email via EmailJS
    emailjs
      .send(
        "service_d3cmn09", // your EmailJS service ID
        "template_896zkcf", // your EmailJS template ID
        templateParams,
        "VNkGJBgBYKU8OjweK" // your EmailJS public key
      )
      .then(() => {
        // 2️⃣ Send data to Google Sheet
        fetch(
          "https://script.google.com/macros/s/AKfycbz3fVU1goR7DCWhPm-wXYeGYHpAFfv9sjsGfXpCfDQa3ol2JYikB-gn43z8ZhaV145Wjw/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
            }),
          }
        );

        setStatus({ loading: false, success: true });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus({ loading: false, success: false });
      });
  };

  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 bg-gray-900/70 backdrop-blur-xl 
                   border border-gray-800 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* LEFT SIDE */}
        <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 relative">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let’s Connect 🚀
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Have a project in mind, or just want to say hi? Drop me a message
            and I’ll get back to you soon.
          </p>

          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3">
              <Mail className="text-cyan-400" size={20} />{" "}
              panchalsourav32@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-purple-400" size={20} /> +91 96499 57698
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-8">
            <a
              href="https://github.com/"
              target="_blank"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <Github className="text-gray-200" size={22} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <Linkedin className="text-gray-200" size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        {/* RIGHT SIDE (FORM) */}
        <div className="p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "subject"].map((field, i) => (
              <div key={i} className="relative group">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-gray-950/80 border border-gray-700 text-gray-100 placeholder-transparent focus:outline-none 
                     focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                />
                <label
                  className="absolute left-4 top-3 text-gray-400 text-sm pointer-events-none 
                     transition-all duration-300 
                     peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
                     peer-focus:top-3 peer-focus:text-sm peer-focus:text-cyan-400"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {/* Neon Glow Effect */}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-400 opacity-0 group-focus:opacity-100 transition-all duration-300" />
              </div>
            ))}

            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                rows="5"
                required
                className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-gray-950/80 border border-gray-700 text-gray-100 placeholder-transparent 
                   focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              />
              <label
                className="absolute left-4 top-3 text-gray-400 text-sm pointer-events-none 
                   transition-all duration-300 
                   peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
                   peer-focus:top-3 peer-focus:text-sm peer-focus:text-purple-400"
              >
                Message
              </label>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-400 opacity-0 group-focus:opacity-100 transition-all duration-300" />
            </div>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status.loading}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 
                   text-white px-8 py-3 rounded-full shadow-lg hover:shadow-purple-500/50 
                   transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
                {status.loading ? "Sending..." : "Send Message"}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

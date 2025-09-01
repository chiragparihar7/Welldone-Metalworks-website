import { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "emailjs-com"; // ✅ Import EmailJS

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, success: null }); // ✅ Added status state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null });

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_category: formData.category,
      message: formData.message,
    };

    // 1️⃣ Send email via EmailJS
    emailjs
      .send(
        "service_d3cmn09", // 🔹 Your EmailJS service ID
        "template_896zkcf", // 🔹 Your EmailJS template ID
        templateParams,
        "VNkGJBgBYKU8OjweK" // 🔹 Your EmailJS public key
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
              phone: formData.phone,
              category: formData.category,
              message: formData.message,
            }),
          }
        );

        setStatus({ loading: false, success: true });
        setFormData({ name: "", email: "", phone: "", category: "", message: "" }); // ✅ Reset form
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus({ loading: false, success: false });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black py-16 px-6">
      <div className="max-w-3xl w-full bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-[0_0_25px_rgba(0,255,255,0.2)] p-10 border border-gray-700">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
          Send Us an Enquiry
        </h2>
        <p className="text-center text-gray-400 mb-10">
          We’re here to assist you with our services.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-cyan-400 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-cyan-400 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-cyan-400 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-fuchsia-400 focus:border-fuchsia-400 outline-none transition"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-cyan-400 mb-2">
              Service Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-gray-100 focus:ring-2 focus:ring-fuchsia-400 focus:border-fuchsia-400 outline-none transition"
            >
              <option value="">Select a category</option>
              <option>Garden Structure</option>
              <option>Gazebo Structure</option>
              <option>Railing Structure</option>
              <option>Heavy Conventional</option>
              <option>Polycarbonate Roofing</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-cyan-400 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your enquiry..."
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={status.loading}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.6)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,255,0.7)] transition-transform font-semibold"
            >
              {status.loading ? "Submitting..." : <><Send size={18} /> Submit Enquiry</>}
            </button>
          </div>
        </form>

        {/* Status Message */}
        {status.success === true && (
          <p className="text-green-400 text-center mt-4">✅ Enquiry submitted successfully!</p>
        )}
        {status.success === false && (
          <p className="text-red-400 text-center mt-4">❌ Failed to submit enquiry. Try again!</p>
        )}
      </div>
    </div>
  );
}

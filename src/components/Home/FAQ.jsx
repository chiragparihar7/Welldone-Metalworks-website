import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of metal fabrication do you offer?",
    answer:
      "We specialize in custom steel, aluminum, and polycarbonate fabrication for residential and commercial projects, including gazebos, railings, and decorative panels.",
  },
  {
    question: "How can I get a quote for my project?",
    answer:
      "Simply fill out our enquiry form or call our office with your project details. We will provide a detailed and accurate estimate promptly.",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "Yes, we handle complete installation services for all fabricated structures, ensuring precision and safety throughout the process.",
  },
  {
    question: "Can I customize the designs?",
    answer:
      "Absolutely. All our projects are fully customizable in design, materials, finishes, and dimensions to meet your specific requirements.",
  },
  {
    question: "What materials are used in your products?",
    answer:
      "We use high-quality steel, aluminum, and polycarbonate, ensuring durability, safety, and aesthetic appeal for all structures.",
  },
  {
    question: "Do you provide maintenance and support?",
    answer:
      "Yes, we offer ongoing maintenance, repairs, and technical support to ensure your fabricated structures remain in top condition.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 px-6 bg-gray-150">
      <div className="max-w-[1280px] mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          Answers to common questions about our metal fabrication services and processes.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-8 relative">
        {/* Timeline line */}
        <div className="hidden md:block w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mx-4"></div>

        <div className="flex-1 flex flex-col gap-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-cyan-500 hover:shadow-2xl transition cursor-pointer relative"
              onClick={() => toggleFAQ(idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500"
                >
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Timeline dot */}
              <span className="hidden md:block absolute -left-3 top-6 w-5 h-5 bg-cyan-500 rounded-full border-4 border-white shadow"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

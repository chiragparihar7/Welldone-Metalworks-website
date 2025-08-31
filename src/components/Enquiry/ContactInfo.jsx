import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  const contacts = [
    {
      icon: <MapPin className="w-7 h-7 text-white" />,
      title: "Our Office",
      detail: "123 Business Street, New Delhi, India",
      bg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
    {
      icon: <Phone className="w-7 h-7 text-white" />,
      title: "Phone Number",
      detail: "+91 98765 43210",
      bg: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      icon: <Mail className="w-7 h-7 text-white" />,
      title: "Email Address",
      detail: "info@company.com",
      bg: "bg-gradient-to-br from-pink-500 to-rose-600",
    },
    {
      icon: <Clock className="w-7 h-7 text-white" />,
      title: "Working Hours",
      detail: "Mon - Sat : 9:00 AM - 6:00 PM",
      bg: "bg-gradient-to-br from-yellow-500 to-orange-600",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {contacts.map((item, idx) => (
          <div
            key={idx}
            className="relative p-6 rounded-2xl shadow-lg border border-white/30 bg-white/20 backdrop-blur-lg hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              {/* Icon circle */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full ${item.bg} shadow-lg`}
              >
                {item.icon}
              </div>
              {/* Text info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

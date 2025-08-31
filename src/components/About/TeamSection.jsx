const team = [
  { name: "Ramesh Sharma", role: "Founder & CEO" },
  { name: "Priya Mehta", role: "Lead Designer" },
  { name: "Amit Verma", role: "Project Manager" },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-700">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

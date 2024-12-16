import React from "react";

const Interests: React.FC = () => {
  const interests = [
    {
      title: "Cybersecurity Trends",
      description:
        "Exploring the latest developments in cybersecurity, from zero-trust architectures to quantum-safe encryption.",
      icon: "🔒",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Diving into how AI enhances cybersecurity, such as anomaly detection and automated threat responses.",
      icon: "🤖",
    },
    {
      title: "Personal Tech Projects",
      description:
        "Building and experimenting with tools, like password managers, vulnerability scanners, and home lab setups.",
      icon: "🛠️",
    },
    {
      title: "Hiking & Outdoor Adventures",
      description:
        "Spending weekends hiking trails and enjoying nature for a balanced lifestyle.",
      icon: "🌲",
    },
    {
      title: "Tech Blogging",
      description:
        "Writing articles to share insights on cybersecurity practices and tutorials for aspiring professionals.",
      icon: "✍️",
    },
  ];

  return (
    <section id="interests" className="bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          My Interests
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl text-gray-600 mb-4 text-center">
                {interest.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {interest.title}
              </h3>
              <p className="text-gray-600">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;

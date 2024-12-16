import React from "react";

const ResumeSection: React.FC = () => {
  const experience = [
    {
      role: "Cybersecurity Analyst",
      company: "SecureTech Solutions",
      date: "Jan 2022 - Present",
      description:
        "Monitor and analyze security threats, implement security protocols, and ensure compliance with industry standards.",
    },
    {
      role: "IT Support Specialist",
      company: "TechSphere Inc.",
      date: "Jun 2020 - Dec 2021",
      description:
        "Provided technical support, resolved network issues, and maintained IT infrastructure for a mid-sized organization.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Cybersecurity",
      institution: "Tech University",
      date: "Aug 2016 - May 2020",
      description:
        "Focused on network security, cryptography, and ethical hacking. Graduated with honors.",
    },
  ];

  const skills = [
    "Network Security",
    "Ethical Hacking",
    "Incident Response",
    "Penetration Testing",
    "Risk Assessment",
    "Cloud Security",
    "Python, JavaScript",
    "SIEM Tools",
  ];

  return (
    <section id="resume" className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Resume
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Experience
            </h3>
            <ul className="space-y-6">
              {experience.map((item, index) => (
                <li key={index} className="bg-white shadow-lg p-5 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-800">
                    {item.role} -{" "}
                    <span className="text-gray-600">{item.company}</span>
                  </h4>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Education
            </h3>
            <ul className="space-y-6">
              {education.map((item, index) => (
                <li key={index} className="bg-white shadow-lg p-5 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-800">
                    {item.degree}
                  </h4>
                  <p className="text-sm text-gray-500">{item.institution}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

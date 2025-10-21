"use client";

export default function Experience() {
  const experiences = [
    {
      title: "Founding SWE Intern",
      company: "Bookdatt (Stealth Startup)",
      duration: "Sept 2025 – Present",
      description:
        "Leading Stripe Connect KYC integration and full-stack TypeScript development for a pre-seed $6.5M events marketplace startup launching Jan 2026.",
    },
    {
      title: "Software Development Engineer Intern",
      company: "Amazon Web Services (AWS)",
      duration: "May 2025 – Aug 2025",
      description:
        "Developed a sentiment-case ingestion pipeline using SNS, SQS, Lambda, and DynamoDB for internal support leaders, optimizing data retrieval and analysis.",
    },
    {
      title: "Software Engineering Intern",
      company: "Cisco Systems",
      duration: "May 2024 – Aug 2024",
      description:
        "Built a Django-based digital twin dashboard and secure Xterm.js terminal for Cisco Live 2024, improving internal system observability and management.",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full bg-white text-gray-900 py-32 flex flex-col items-center justify-center"
    >
      <div className="max-w-5xl w-full px-6 text-center space-y-12">
        <h2 className="text-4xl font-bold tracking-tight">Experience</h2>
        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="text-left bg-gray-50 hover:bg-gray-100 transition rounded-2xl shadow-sm p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              <p className="text-blue-600 font-medium mt-1">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.duration}</p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

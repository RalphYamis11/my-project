
import React from "react";

const workExperience = [
  {
    company: "WebStudios Ltd.",
    position: "Frontend Developer",
    period: "2021 – 2023",
    description: "Developed responsive UI for SaaS apps using React and Tailwind. Collaborated with backend team to implement API integrations and state management.",
  },
  {
    company: "Acme Agency",
    position: "Junior Web Developer",
    period: "2019 – 2021",
    description: "Maintained and updated client websites (WordPress & Laravel). Learned the foundations of modern web development.",
  },
];

const PriorWork = () => (
  <section className="bg-white rounded-xl shadow p-6 mb-8">
    <h3 className="text-xl font-semibold mb-2 text-primary">Prior Work Experience</h3>
    <div className="space-y-4">
      {workExperience.map((job, idx) => (
        <div key={idx} className="p-4 border-l-4 border-primary bg-gray-50 rounded transition-shadow hover:shadow-lg">
          <div className="flex justify-between flex-wrap mb-1">
            <span className="font-medium">{job.position} @ {job.company}</span>
            <span className="font-mono text-xs text-gray-500">{job.period}</span>
          </div>
          <p className="text-gray-700 text-sm">{job.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PriorWork;

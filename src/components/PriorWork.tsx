
import React from "react";

const workExperience = [
  {
    company: "FJ Weagon Farm",
    position: "Egg collector",
    period: "2021 – 2022",
    description: "I collect chicken eggs in my designated section/rows.",
  },
  {
    company: "Country Village Hotel",
    position: "Waiter",
    period: "20 – 2022",
    description: "Helps with anything a waiter can do.",
  },
];

const PriorWork = () => (
  <section className="bg-emerald-50 rounded-xl shadow p-6 mb-8 border border-emerald-100">
    <h3 className="text-xl font-semibold mb-2 text-emerald-600">Prior Work Experience</h3>
    <div className="space-y-4">
      {workExperience.map((job, idx) => (
        <div key={idx} className="p-4 border-l-4 border-emerald-400 bg-white/60 rounded transition-shadow hover:shadow-lg">
          <div className="flex justify-between flex-wrap mb-1">
            <span className="font-medium text-emerald-800">{job.position} @ {job.company}</span>
            <span className="font-mono text-xs text-emerald-700/60">{job.period}</span>
          </div>
          <p className="text-gray-700 text-sm">{job.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PriorWork;

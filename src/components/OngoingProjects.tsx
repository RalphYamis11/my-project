
import React from "react";

const projects = [
  {
    name: "Portfolio Builder",
    desc: "A React web app to help developers quickly spin up personal portfolios with Live Preview.",
    tech: ["React", "Tailwind", "Vite"],
    link: "#"
  },
  {
    name: "Student Budget App",
    desc: "A Laravel + Vue application for collaborative family expense tracking and planning.",
    tech: ["Laravel", "Vue", "PostgreSQL"],
    link: "#"
  },
  {
    name: "MusicMatch",
    desc: "A social music discovery platform built with Next.js, GraphQL, and Tailwind.",
    tech: ["Next.js", "GraphQL", "Tailwind"],
    link: "#"
  },
];

const cardColors = [
  "from-purple-200 to-pink-100 border-purple-100",
  "from-blue-200 to-emerald-100 border-emerald-100",
  "from-yellow-100 to-orange-100 border-orange-100",
];

const OngoingProjects = () => (
  <section className="bg-blue-50 rounded-xl shadow p-6 mb-8 border border-blue-100">
    <h3 className="text-xl font-semibold mb-4 text-blue-700">Projects I'm Working On</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <a
          href={project.link}
          className={`block bg-gradient-to-br ${cardColors[i % cardColors.length]} rounded-lg p-4 shadow hover:shadow-lg transition transform hover:-translate-y-1 border`}
          key={project.name}
          target="_blank" rel="noopener"
        >
          <h4 className="font-bold mb-1 text-lg">{project.name}</h4>
          <p className="text-gray-900 mb-2 text-sm min-h-[48px]">{project.desc}</p>
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((tech) => (
              <span key={tech} className="text-xs bg-white/70 border text-blue-800 border-blue-200 rounded px-2 py-0.5">{tech}</span>
            ))}
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default OngoingProjects;

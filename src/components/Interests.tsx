
import React from "react";

const interests = [
  "UI/UX Design",
  "Open Source",
  "Photography",
  "Music Production",
  "Machine Learning",
  "Basketball",
  "Traveling",
];

const pastelColors = [
  "bg-pink-200 text-pink-800",
  "bg-blue-200 text-blue-800",
  "bg-orange-200 text-orange-800",
  "bg-emerald-200 text-emerald-800",
  "bg-yellow-200 text-yellow-800",
  "bg-purple-200 text-purple-800",
  "bg-teal-200 text-teal-800",
];

const Interests = () => (
  <section className="bg-yellow-50 rounded-xl shadow p-6 mb-8 border border-yellow-100">
    <h3 className="text-xl font-semibold mb-2 text-yellow-700">Personal Interests</h3>
    <div className="flex flex-wrap gap-3">
      {interests.map((interest, idx) => (
        <span
          key={interest}
          className={`px-3 py-1 rounded-full text-sm shadow-sm hover:opacity-80 transition font-medium border border-white/30 ${pastelColors[idx % pastelColors.length]}`}
        >
          {interest}
        </span>
      ))}
    </div>
  </section>
);

export default Interests;


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

const Interests = () => (
  <section className="bg-white rounded-xl shadow p-6 mb-8">
    <h3 className="text-xl font-semibold mb-2 text-primary">Personal Interests</h3>
    <div className="flex flex-wrap gap-3">
      {interests.map((interest) => (
        <span
          key={interest}
          className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm shadow-sm hover:bg-primary/90 transition"
        >
          {interest}
        </span>
      ))}
    </div>
  </section>
);

export default Interests;

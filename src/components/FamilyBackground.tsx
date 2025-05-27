
import React from "react";

const FamilyBackground = () => (
  <section className="bg-indigo-50 rounded-xl p-6 shadow mb-8 border border-indigo-100">
    <h3 className="text-xl font-semibold mb-2 text-indigo-600">Family Background</h3>
    <p className="text-gray-700 leading-relaxed">
      I was raised in a family that values creativity and learning. My parents, both educators, encouraged curiosity;
      my older sibling helped introduce me to computers at a young age. We enjoy family board game nights and yearly hiking trips!
    </p>
    <ul className="mt-3 space-y-1 ml-5 list-disc text-gray-800 text-sm">
      <li>Father: High School Mathematics Teacher</li>
      <li>Mother: Literature Professor</li>
      <li>Siblings: 1 Sister (Graphic Designer), 1 Brother (high school)</li>
    </ul>
  </section>
);

export default FamilyBackground;

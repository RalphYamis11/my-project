
import React from "react";

const PersonalInfo = () => {
  return (
    <section className="bg-pink-50/60 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center mb-8 border border-pink-100">
      <img 
        src="/avatar(2).png" 
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-emerald-200 mb-4 shadow"
      />
      <h2 className="text-2xl font-bold mb-1 tracking-tight text-pink-700">Ralp Lorenz Yamis</h2>
      <p className="text-emerald-700 text-sm mb-2">Information Technology Student</p>
      <p className="max-w-prose text-gray-700 text-center mb-2">
        Have plenty of habits and loves to spend some time alone and play some games.
      </p>
      <div className="flex gap-4 mt-2">
        <a href="https://www.youtube.com/@BoozerL4D2" className="text-pink-600 hover:underline text-sm">Boozer_L4D2</a>
        <a href="https://github.com/RalphYamis11" target="_blank" rel="noopener" className="text-gray-700 hover:underline text-sm">GitHub</a>
        <a href="https://www.instagram.com/ralpnlorenz/" target="_blank" rel="noopener" className="text-gray-700 hover:underline text-sm">Instagram</a>
      </div>
    </section>
  );
};

export default PersonalInfo;

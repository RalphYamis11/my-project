
import React from "react";

const PersonalInfo = () => {
  return (
    <section className="bg-pink-50/60 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center mb-8 border border-pink-100">
      <img 
        src="https://source.unsplash.com/128x128/?avatar,person" 
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-emerald-200 mb-4 shadow"
      />
      <h2 className="text-2xl font-bold mb-1 tracking-tight text-pink-700">Alex Webman</h2>
      <p className="text-emerald-700 text-sm mb-2">Full Stack Web Developer</p>
      <p className="max-w-prose text-gray-700 text-center mb-2">
        Passionate about building modern web apps. Always curious, always learning.
      </p>
      <div className="flex gap-4 mt-2">
        <a href="mailto:alexwebman@email.com" className="text-pink-600 hover:underline text-sm">alexwebman@email.com</a>
        <a href="https://github.com/alexwebman" target="_blank" rel="noopener" className="text-gray-700 hover:underline text-sm">GitHub</a>
        <a href="https://www.linkedin.com/in/alexwebman" target="_blank" rel="noopener" className="text-gray-700 hover:underline text-sm">LinkedIn</a>
      </div>
    </section>
  );
};

export default PersonalInfo;

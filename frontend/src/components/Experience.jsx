import React from "react";

export default function Experience() {
  const experiences = [
    { title: "3nd year college", subtitle: "Freelancing", year: "2025" },
    { title: "2nd year college", subtitle: "exploring MERN Stack and building small projects", year: "2024" },
    { title: "1st year college", subtitle: "learned how to print Hello World", year: "2023" },
  ];

  return (
    <div className="bg-radial-[at_25%_25%] from-white-700 to-zinc-900 to-75% p-6 rounded-xl text-gray-100 mx-5 sm:mx-10 md:mx-10 lg:mx-90 my-40">
      <h2 className="text-xl font-semibold mb-6">Experience</h2>

      <div className="relative pl-8">
       
        <div className="absolute left-3 top-3 bottom-0 w-[2px] bg-gray-700"></div>

        <ul className="space-y-6">
          {experiences.map((exp, i) => (
            <li key={i} className="relative">
            
              <span className="absolute -left-6.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-gray-600 bg-gray-900"></span>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-100">{exp.title}</h3>
                  <p className="text-sm text-gray-400">{exp.subtitle}</p>
                </div>
                <span className="text-xs border border-gray-600 rounded-full px-3 py-0.5 text-gray-300">
                  {exp.year}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

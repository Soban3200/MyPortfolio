import React from "react";
import checkmark from './assets/checkmark.png';

const Skills = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS","React Native"];
  const backendSkills = ["Node.js", "Express", "MongoDB"];
  const repairSkills = [
    "Hardware Troubleshooting",
    "Software Installation",
    "System Maintenance",
  ];

  return (
    <div id='skills' className="mt-20 px-5">
      <div className="text-center mb-5">
        <h5 className="text-lg text-gray-600">Explore my</h5>
        <h1 className="text-3xl font-semibold text-gray-800">
          Technical Proficiencies
        </h1>
      </div>

      <div className="flex justify-center gap-10 flex-wrap">
        {/* Frontend Skills */}
        <div className="border rounded-lg p-6 w-[400px]">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Frontend
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
            {frontendSkills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <img
                  src={checkmark}
                  alt="Checkmark"
                  className="w-4 h-4 mr-2"
                />
                <span className="text-gray-700">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="border rounded-lg p-6 w-[400px]">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Backend
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
            {backendSkills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <img
                  src={checkmark}
                  alt="Checkmark"
                  className="w-4 h-4 mr-2"
                />
                <span className="text-gray-700">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Computer Repair Skills */}
        <div className="border rounded-lg p-6 w-[400px]">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Computer Repair
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
            {repairSkills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <img
                  src={checkmark}
                  alt="Checkmark"
                  className="w-4 h-4 mr-2"
                />
                <span className="text-gray-700">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

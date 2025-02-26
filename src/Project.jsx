import React from "react";
import portfolio from "./assets/Portfolio.jpg";
import eccomerce from "./assets/Ecommerce.png";

const Projects = () => {
  const projects = [
    {
      title: "BennyQ Systems eCommerce",
      description:
        "Full-stack eCommerce platform with product listings, search, filtering, and order management. Built using MongoDB, Express, React, and Node.js.",
      image: eccomerce,
      link: "https://bennyqsystemsprojectfrontend.onrender.com",
      codeLink: "https://github.com/Soban3200/BennyQsystemsProjectFrontend", // Update this URL
    },
    {
      title: "Shop Website",
      description:
        "A modern and responsive portfolio website built with React and Tailwind CSS. Showcases projects and skills with a clean, minimalistic design and smooth navigation.",
      image: portfolio,
      link: "#", // Replace with your deployed link
      codeLink: "https://github.com/Soban3200/MyPortfolio", // Update this URL
    },
  ];

  return (
    <div id="projects" className="mt-20">
      <div className="text-center text-2xl mb-10">
        <h5 className="text-xl text-gray-600">Showcasing my</h5>
        <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
      </div>

      <div className="flex justify-center gap-10 flex-wrap">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative flex flex-col my-6 bg-white border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  {project.title}
                </h6>
                <p className="text-slate-600 leading-normal">
                  {project.description}
                </p>
              </div>

              <div className="flex justify-between p-4 border-t">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                >
                  Visit Site →
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 text-sm font-semibold"
                >
                  Source Code →
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;

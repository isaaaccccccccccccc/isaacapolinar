
import React from "react";

import proj1 from "../assets/sample1.png";
import proj2 from "../assets/sample4.png";
import proj3 from "../assets/sample3.png";
import proj4 from "../assets/sample5.png";
import proj5 from "../assets/sample6.png";
import proj6 from "../assets/sample2.png";
import proj7 from "../assets/proj7.png";
import proj8 from "../assets/proj8.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: proj1,
      title: "Online Coffee Shop",
      description: "Modern Web Cafe",
      technologies: ["HTML", "CSS", "JavaScript"],
    },

    {
      id: 2,
      image: proj2,
      title: "Mutya ng Maligaya",
      description: "Tabulation System for Pageant",
      technologies: ["SQL", "PHP", "JavaScript", "HTML", "CSS"],
    },

    {
      id: 3,
      image: proj3,
      title: "Online Document Request with QR Authentication",
      description: "Document Request and Verification System",
      technologies: ["SQL", "PHP", "JavaScript", "HTML", "CSS"],
    },

    

    {
      id: 5,
      image: proj5,
      title: "HealthConnect",
      description: "Patient Appointment Management Platform",
      technologies: ["ReactJS", "Python", "JavaScript"],
    },

    {
      id: 6,
      image: proj6,
      title: "Talent Agency",
      description: "Social Media Influencers Talent Agency Website with Live KPI and MediaKits",
      
      technologies: ["ReactJS", "Python", "JavaScript"],
    },

    {
      id: 7,
      image: proj7,
      title: "Tax Medics Website",
      description: "Gives individuals and business owners structure, clarity, and strategic direction through complex IRS and tax situations",

      technologies: ["ReactJS", "Python", "JavaScript"],
    },

    {
      id: 8,
      image: proj8,
      title: "Photography Website",
      description: "Photography built around how you actually run your business.",

      technologies: ["HTML", "CSS", "JavaScript"],
    },
    
    {
      id: 4,
      image: proj4,
      title: "Client Portal",
      status: "Coming Soon",
      description: "Landing Page for Lead Generation",
      technologies: ["SQL", "PHP", "JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
           Featured Projects
          </h2>

          <div className="w-28 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                group
                bg-white
                dark:bg-gray-800
                rounded-xl
                overflow-hidden
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110 ${
                    project.status
                      ? "opacity-40"
                      : "group-hover:opacity-90"
                  }`}
                />

                {project.status && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <span className="px-6 py-2 text-lg font-bold tracking-wider bg-primary text-white rounded-lg">
                      COMING SOON
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="
                        text-xs
                        px-3
                        py-1
                        rounded-full
                        bg-gray-200
                        dark:bg-gray-700
                        text-gray-700
                        dark:text-gray-300
                        hover:bg-primary
                        hover:text-white
                        transition-colors
                        duration-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


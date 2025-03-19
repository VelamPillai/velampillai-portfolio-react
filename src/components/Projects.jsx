import React from "react"
import ProjectItem from "./ProjectItem.jsx"
import projectDetails from '../assets/projectDetails.jsx';

const Projects = () => {
  // Separate featured projects from regular ones
  const featuredProjects = projectDetails.filter(project => project.featured);
  const regularProjects = projectDetails.filter(project => !project.featured);

  return (
    <div id="projects" className="w-full py-16 bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-600">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-emerald-400 rounded-full mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            A collection of my recent work showcasing my expertise in web and mobile development.
            Each project demonstrates different aspects of my technical skills and problem-solving abilities.
          </p>
        </div>

        {/* Featured Projects - Full Width */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm mr-3">
                Highlighted
              </span>
              Professional Work
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, idx) => (
                <ProjectItem
                  key={`featured-${idx}`}
                  image={project.image}
                  title={project.title}
                  implementation={project.implementation}
                  projectLink={project.projectLink}
                  description={project.description}
                  featured={project.featured}
                  isMobileApp={project.isMobileApp}
                  bgColor={project.bgColor}
                  appIcon={project.appIcon}
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        {regularProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Personal Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {regularProjects.map((project, idx) => (
                <ProjectItem
                  key={`regular-${idx}`}
                  image={project.image}
                  title={project.title}
                  implementation={project.implementation}
                  projectLink={project.projectLink}
                  description={project.description}
                  featured={project.featured}
                  isMobileApp={project.isMobileApp}
                  bgColor={project.bgColor}
                  appIcon={project.appIcon}
                />
              ))}
            </div>
          </div>
        )}

        {/* Additional Note */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-sm">
            More projects available on my <a href="https://github.com/VelamPillai" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline">GitHub profile</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
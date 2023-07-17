import React from "react"
import ProjectItem from "./ProjectItem.jsx"
import projectDetails from '../assets/projectDetails.jsx';
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      
      <div className="py-8 grid sm:grid-cols-2 gap-12">
        {projectDetails.map((item, idx) => (
          <ProjectItem
            key={idx}
            image={item.image}
            title={item.title}
            implementation={item.implementation}
            projectLink={item.projectLink}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects
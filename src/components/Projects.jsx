import React from "react"
import ProjectItem from "./ProjectItem.jsx"
import projectDetails from '../assets/projectDetails.jsx';
import projectBG from "../assets/projectBG.jpg";
const Projects = () => {
  return (
    <div id="main" className="w-full   h-[150vh]  sm:h-[100vh] relative ">
      <img
        src={projectBG}
        alt="mainBG"
        className="w-[100%] h-[100%] object-center  scale-x-[1] flex justify-center items-center absolute top-0 left-0  "
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/10">

    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16  ">
      <h1 className="text-4xl font-bold text-center text-[#eaebf0]">
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
        </div>
      </div>
  );
}
export default Projects
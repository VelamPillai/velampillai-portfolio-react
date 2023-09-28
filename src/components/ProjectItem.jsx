import React from "react"


const ProjectItem = ({title,implementation,image,projectLink}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-400 to-[#96b1f5]">
      <img
        src={image}
        alt="img"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-[#001b5e] tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-[#001b5e] text-center">{implementation}</p>
        <p
          className="text-center p-3 rounded-lg bg-white text-[#001b5e] font-bold cursor-pointer text-lg hover:translate-x-1 "
          onClick={() => window.open(projectLink)}
        >
          Go Live
        </p>{" "}
      </div>
    </div>
  );
}
export default ProjectItem
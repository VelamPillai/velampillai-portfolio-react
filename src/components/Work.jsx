import React from "react";
import workDetails from "../assets/workDetails.jsx";
import WorkItem from "./WorkItem.jsx";
import workBG from "../assets/workBG.jpg";
const Work = () => {
  return (
    <div id="main" className="w-full h-[175vh]  sm:h-[100vh] relative ">
      <img
        src={workBG}
        alt="mainBG"
        className="w-[100%] h-[100%] object-center  scale-x-[1]  absolute top-0 left-0 "
      />
      <div className="w-full h-[100%] absolute top-0 left-0  bg-[#1e1e1e]/80">

        <div id="work" className="max-w-[1040px]  m-auto md:pl-20 p-4 py-16 ">
      <h1 className=" text-4xl flex justify-center items-center font-bold mb-2 text-[#e4e7eb]  ">
        Work
      </h1>
      {workDetails.map((item, idx) => (
        <WorkItem
          key={idx}
          title={item.title}
          company={item.company}
          duration={item.duration}
          responsibility={item.responsibility}
        />
      ))}
      </div>
      </div>
      </div>
  );
}
export default Work
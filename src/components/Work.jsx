import React from "react";
import workDetails from "../assets/workDetails.jsx";
import WorkItem from "./WorkItem.jsx";
const Work = () => {
  return (
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
          
          <h1 className="text-4xl flex justify-center items-center font-bold mb-2">Work</h1>
          {
              workDetails.map((item, idx) => (
                  <WorkItem key={idx} title={item.title} company={item.company} duration={item.duration}
                  responsibility = {item.responsibility} />
              ))
          }

    </div>
  )
}
export default Work
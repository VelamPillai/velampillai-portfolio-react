import React from "react"

const WorkItem = ({ title, company, duration, responsibility }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 ">
      <li className="mb-10 ml-4 ">
        <div
          className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white
        "
        ></div>
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-normal text-xs text-blue-900 rounded-md  bg-[#96b1f5] ">
            {duration}
          </span>
          <span className="text-lg font-semibold text-[#96b1f5] ">{title}</span>
          <span className="my-1 text-xs font-normal leading-none text-stone-200">
            {company}
          </span>
          <span>
            <ol>
              {responsibility.map((item, idx) => (
                <li key={idx} className="my-2 text-sm text-stone-200">
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </span>
        </p>
      </li>
    </ol>
  );
};
export default WorkItem
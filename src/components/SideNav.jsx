import React, {useState} from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

const SideNav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
        
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-[20]">
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200  "
          >
            <AiOutlineHome className="size-[20]" />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200  "
          >
            <GrProjects className="size-[20]" />
            <span className="pl-4">Work</span>
          </a>
          <a
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200  "
          >
            <AiOutlineProject className="size-[20]" />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#resume"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200  "
          >
            <BsPerson className="size-[20]" />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200  "
          >
            <AiOutlineMail className="size-[20]" />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}
export default SideNav
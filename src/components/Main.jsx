import React from "react";
import mainBG from "../assets/mainBG.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithubSquare, FaLinkedin, FaXingSquare } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        src={mainBG}
        alt="mainBG"
        className="w-full h-screen object-center  scale-x-[-1]"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center items-center lg:items-start ">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Velammal MP Pillai
          </h1>
          <h3 className="sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                "Web developer",
                1000,
                "Coder",
                1000,
                "React developer",
                1000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em" ,display:"inline-block"}}
              repeat={Infinity}
            />
          </h3>
          <div className="flex justify-between pt-6 max-w-[200px] w-full  ">
            <FaLinkedin className="cursor-pointer" size={20} />
            <FaXingSquare className="cursor-pointer" size={20} />
            <FaGithubSquare className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main 
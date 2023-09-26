import React from "react";
import mainBG from "../assets/mainBG.jpg";
import desktopBG from "../assets/desktopBG.jpeg";
import arrow from "../assets/arrowblack.jpeg";
import { TypeAnimation } from "react-type-animation";
import { FaGithubSquare, FaLinkedin, FaXingSquare } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen relative bg-blue-300">
       <img
        src={desktopBG}
        alt="mainBG"
        className="w-[50%] h-[50%] object-center  scale-x-[1] flex justify-center items-center absolute top-[25%] left-[25%] "
      /> 
      <div className="w-full h-screen absolute top-0 left-0 bg-blue/80">
        
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center items-center lg:items-start p-[5rem] mt-6 ">
          <h1 className="sm:text-5xl text-2xl font-bold text-gray-200">
          Velammal M 
          </h1>
          <h3 className="sm:text-3xl text-1xl pt-4 text-green-800">
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
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h3>
          <div className="flex justify-between pt-6 max-w-[100px] w-full text-orange-600 ">
            <FaLinkedin
              className="cursor-pointer"
              size={20}
              onClick={() =>
                window.open("https://www.linkedin.com/in/velam-pillai/")
              }
            />

            <FaGithubSquare
              className="cursor-pointer "
              size={20}
              onClick={() => window.open("https://github.com/VelamPillai")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main 
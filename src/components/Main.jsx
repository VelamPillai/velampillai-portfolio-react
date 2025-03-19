import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-600 flex items-center justify-center relative overflow-hidden">
      {/* Static background shapes - no animations */}
      {/* Large blurred gradient shapes */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-40 h-40 bg-emerald-500/30 rounded-full blur-2xl"></div>

      {/* 3D Cube - static */}
      <div className="absolute top-20 right-20 w-16 h-16" style={{ perspective: "800px", transformStyle: "preserve-3d" }}>
        <div className="absolute inset-0 border-2 border-white/30 bg-white/5 transform rotateX(0deg) translateZ(8px)"></div>
        <div className="absolute inset-0 border-2 border-white/30 bg-white/5 transform rotateX(180deg) translateZ(8px)"></div>
        <div className="absolute inset-0 border-2 border-white/30 bg-white/5 transform rotateY(90deg) translateZ(8px)"></div>
        <div className="absolute inset-0 border-2 border-white/30 bg-white/5 transform rotateY(-90deg) translateZ(8px)"></div>
        <div className="absolute inset-0 border-2 border-white/30 bg-white/5 transform rotateX(90deg) translateZ(8px)"></div>
        <div className="absolute inset-0 border-2 border-white/30 bg-white/5 transform rotateX(-90deg) translateZ(8px)"></div>
      </div>

      {/* 3D Pyramid - static */}
      <div className="absolute bottom-32 left-20 w-20 h-20" style={{ perspective: "800px", transformStyle: "preserve-3d" }}>
        <div className="absolute left-0 right-0 bottom-0 h-0 w-0 border-l-[40px] border-r-[40px] border-b-[40px] border-l-transparent border-r-transparent border-b-emerald-400/30"></div>
        <div className="absolute left-0 top-0 h-0 w-0 border-l-[40px] border-b-[40px] border-l-transparent border-b-pink-400/30 transform -rotate-90 translate-y-10"></div>
        <div className="absolute right-0 top-0 h-0 w-0 border-r-[40px] border-b-[40px] border-r-transparent border-b-blue-400/30 transform rotate-90 translate-y-10"></div>
        <div className="absolute left-0 right-0 top-0 h-0 w-0 border-l-[40px] border-r-[40px] border-b-[40px] border-l-transparent border-r-transparent border-b-purple-400/30 transform rotate-180 translate-y-20"></div>
      </div>

      {/* Static circles */}
      <div className="absolute top-1/3 right-1/3 w-24 h-24" style={{ perspective: "800px", transformStyle: "preserve-3d" }}>
        <div className="absolute inset-0 border-2 border-white/40 rounded-full"></div>
        <div className="absolute inset-2 border-2 border-emerald-300/40 rounded-full transform rotate-45"></div>
        <div className="absolute inset-4 border-2 border-blue-300/40 rounded-full transform rotate-90"></div>
      </div>

      {/* Static circles with shadow */}
      <div className="absolute top-10 left-1/3 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full shadow-lg shadow-purple-500/20"></div>
      <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full shadow-lg shadow-blue-500/20"></div>

      {/* Static torus/ring */}
      <div className="absolute bottom-40 right-40 w-28 h-28 border-8 border-yellow-400/30 rounded-full">
        <div className="absolute inset-0 border-8 border-yellow-400/10 rounded-full transform rotate-45"></div>
      </div>

      {/* Static cylinder */}
      <div className="absolute top-40 left-40 w-14 h-20" style={{ perspective: "800px" }}>
        <div className="absolute inset-0 bg-cyan-500/20 rounded-full transform rotateX(70deg) shadow-lg shadow-cyan-500/20"></div>
        <div className="absolute inset-0 bg-cyan-500/10 rounded-full transform rotateX(-70deg) shadow-lg shadow-cyan-500/10"></div>
        <div className="absolute inset-x-0 top-0 h-5 bg-cyan-500/30 rounded-full"></div>
        <div className="absolute inset-x-0 bottom-0 h-5 bg-cyan-500/30 rounded-full"></div>
      </div>

      {/* Content container */}
      <div className="max-w-5xl w-full px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center md:items-start space-y-6">
          {/* Glass card */}
          <div className="backdrop-blur-sm bg-white/10 p-8 md:p-10 rounded-2xl shadow-xl border border-white/20 w-full max-w-2xl">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Velammal M
              </h1>

              <div className="h-1 w-20 bg-emerald-400 rounded-full"></div>

              {/* New Title Animation Design */}
              <div className="relative h-12 md:h-16 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/10 p-1">
                <div className="absolute inset-0 flex items-center justify-center">
                  <TypeAnimation
                    sequence={[
                      "Software Developer",
                      1500,
                      "Frontend Developer",
                      1500,
                      "React/React Native Developer",
                      1500,
                      "Full Stack Developer",
                      1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300"
                    repeat={Infinity}
                  />
                  <div className="absolute left-0 top-0 h-full w-1/6 bg-gradient-to-r from-indigo-900/80 to-transparent"></div>
                  <div className="absolute right-0 top-0 h-full w-1/6 bg-gradient-to-l from-indigo-900/80 to-transparent"></div>
                </div>
              </div>

              <p className="text-gray-300 text-lg max-w-lg">
                Experienced in developing high-performance web and mobile applications using React Native and React.js. Dedicated to creating responsive, user-centric designs and leveraging modern tools to deliver robust solutions. Passionate about writing clean, efficient code and continuously improving user experiences.
              </p>

              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/velam-pillai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 transition-colors p-3 rounded-full text-white"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="https://github.com/VelamPillai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 transition-colors p-3 rounded-full text-white"
                >
                  <FaGithub size={22} />
                </a>
              </div>

              {/* <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>View Portfolio</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add the custom animation to your global CSS or create a Tailwind plugin
// This is just for reference
// In tailwind.config.js:
// theme: {
//   extend: {
//     animation: {
//       'spin-slow': 'spin 20s linear infinite',
//       'float': 'float 6s ease-in-out infinite',
//     },
//     keyframes: {
//       float: {
//         '0%, 100%': { transform: 'translateY(0)' },
//         '50%': { transform: 'translateY(-20px)' },
//       }
//     }
//   }
// }

export default Main;
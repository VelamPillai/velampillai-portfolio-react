import React, { useState, useEffect } from "react";
import resumeLink from "../assets/Resume_Velammal_portfolio.pdf";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail
} from "react-icons/ai";
import { BsPerson, BsBriefcase, BsDownload } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("main");

  const handleNav = () => {
    setNav(!nav);
  };

  // Handle resume download
  const handleResumeDownload = (e) => {
    e.preventDefault();
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeLink;
    link.download = 'Velammal_M_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (nav) {
      handleNav(); // Close mobile menu if open
    }
  };

  useEffect(() => {
    // Function to determine which section is currently in view
    const handleScroll = () => {
      const sections = ["main", "work", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Adding offset to improve detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Initial call to set the active section on page load
    handleScroll();

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to determine if a section is active
  const isActive = (section) => activeSection === section;

  return (
    <div>
      {/* Mobile Toggle Button */}
      <button
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden rounded-full bg-white/10 backdrop-blur-sm p-3 shadow-lg text-white border border-white/20"
        aria-label="Toggle Navigation"
      >
        {nav ? <IoMdClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>

      {/* Mobile Menu */}
      {nav && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-br from-indigo-900/95 via-blue-800/95 to-blue-600/95 backdrop-blur-sm flex flex-col justify-center items-center z-[20]">
          <div className="w-[85%] max-w-md space-y-4">
            <a
              href="#main"
              className={`w-full flex items-center rounded-xl shadow-lg border p-4 cursor-pointer transition-all duration-300 ${isActive("main")
                ? "bg-emerald-500/20 border-emerald-400/50"
                : "bg-white/10 border-white/20 hover:bg-white/20"
                }`}
              onClick={handleNav}
            >
              <div className={`p-3 rounded-full mr-4 ${isActive("main") ? "bg-emerald-500/30" : "bg-emerald-500/20"
                }`}>
                <AiOutlineHome className="text-emerald-400" size={20} />
              </div>
              <span className="text-white text-lg font-medium">Home</span>
            </a>

            <a
              href="#work"
              className={`w-full flex items-center rounded-xl shadow-lg border p-4 cursor-pointer transition-all duration-300 ${isActive("work")
                ? "bg-emerald-500/20 border-emerald-400/50"
                : "bg-white/10 border-white/20 hover:bg-white/20"
                }`}
              onClick={handleNav}
            >
              <div className={`p-3 rounded-full mr-4 ${isActive("work") ? "bg-emerald-500/30" : "bg-emerald-500/20"
                }`}>
                <BsBriefcase className="text-emerald-400" size={20} />
              </div>
              <span className="text-white text-lg font-medium">Experience</span>
            </a>

            <a
              href="#projects"
              className={`w-full flex items-center rounded-xl shadow-lg border p-4 cursor-pointer transition-all duration-300 ${isActive("projects")
                ? "bg-emerald-500/20 border-emerald-400/50"
                : "bg-white/10 border-white/20 hover:bg-white/20"
                }`}
              onClick={handleNav}
            >
              <div className={`p-3 rounded-full mr-4 ${isActive("projects") ? "bg-emerald-500/30" : "bg-emerald-500/20"
                }`}>
                <AiOutlineProject className="text-emerald-400" size={20} />
              </div>
              <span className="text-white text-lg font-medium">Projects</span>
            </a>

            <a
              href="#resume"
              onClick={handleResumeDownload}
              className="w-full flex items-center rounded-xl shadow-lg bg-white/10 border border-white/20 p-4 cursor-pointer hover:bg-white/20 transition-all duration-300"
            >
              <div className="bg-emerald-500/20 p-3 rounded-full mr-4">
                <BsPerson className="text-emerald-400" size={20} />
              </div>
              <span className="text-white text-lg font-medium">Resume</span>
              <BsDownload className="text-emerald-400 ml-auto" size={16} />
            </a>

            <a
              href="#contact"
              className={`w-full flex items-center rounded-xl shadow-lg border p-4 cursor-pointer transition-all duration-300 ${isActive("contact")
                ? "bg-emerald-500/20 border-emerald-400/50"
                : "bg-white/10 border-white/20 hover:bg-white/20"
                }`}
              onClick={handleNav}
            >
              <div className={`p-3 rounded-full mr-4 ${isActive("contact") ? "bg-emerald-500/30" : "bg-emerald-500/20"
                }`}>
                <AiOutlineMail className="text-emerald-400" size={20} />
              </div>
              <span className="text-white text-lg font-medium">Contact</span>
            </a>
          </div>
        </div>
      )}

      {/* Desktop Side Navigation */}
      <div className="hidden md:block fixed top-[25%] right-4 z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className={`group relative rounded-full shadow-lg backdrop-blur-sm border m-2 p-4 cursor-pointer transition-all duration-300 text-white ${isActive("main")
              ? "bg-emerald-500/20 border-emerald-400/50"
              : "bg-white/10 border-white/20 hover:bg-white/20"
              }`}
          >
            <span className="absolute right-[4.5rem] top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-lg shadow-lg text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Home
            </span>
            <AiOutlineHome size={20} />
          </a>

          <a
            href="#work"
            className={`group relative rounded-full shadow-lg backdrop-blur-sm border m-2 p-4 cursor-pointer transition-all duration-300 text-white ${isActive("work")
              ? "bg-emerald-500/20 border-emerald-400/50"
              : "bg-white/10 border-white/20 hover:bg-white/20"
              }`}
          >
            <span className="absolute right-[4.5rem] top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-lg shadow-lg text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Experience
            </span>
            <BsBriefcase size={20} />
          </a>

          <a
            href="#projects"
            className={`group relative rounded-full shadow-lg backdrop-blur-sm border m-2 p-4 cursor-pointer transition-all duration-300 text-white ${isActive("projects")
              ? "bg-emerald-500/20 border-emerald-400/50"
              : "bg-white/10 border-white/20 hover:bg-white/20"
              }`}
          >
            <span className="absolute right-[4.5rem] top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-lg shadow-lg text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Projects
            </span>
            <AiOutlineProject size={20} />
          </a>

          <a
            href="#resume"
            className="group relative rounded-full shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 m-2 p-4 cursor-pointer hover:bg-white/20 transition-all duration-300 text-white"
            onClick={handleResumeDownload}
          >
            <span className="absolute right-[4.5rem] top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-lg shadow-lg text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Download Resume
            </span>
            <BsPerson size={20} />
          </a>

          <a
            href="#contact"
            className={`group relative rounded-full shadow-lg backdrop-blur-sm border m-2 p-4 cursor-pointer transition-all duration-300 text-white ${isActive("contact")
              ? "bg-emerald-500/20 border-emerald-400/50"
              : "bg-white/10 border-white/20 hover:bg-white/20"
              }`}
          >
            <span className="absolute right-[4.5rem] top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-lg shadow-lg text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Contact
            </span>
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
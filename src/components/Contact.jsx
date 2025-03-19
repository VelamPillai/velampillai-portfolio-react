import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaFilePdf, FaDownload } from "react-icons/fa";
import resumePDF from "../assets/Resume_Velammal_portfolio.pdf";

const Contact = () => {
  return (
    <div id="contact" className="w-full py-16 bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-600">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact For Opportunities</h2>
          <div className="h-1 w-20 bg-emerald-400 rounded-full mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            I'm currently available for full-time positions and freelance projects.
            Please feel free to reach out to discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <FaEnvelope className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:velam.m@gmail.com" className="text-white hover:text-emerald-400 transition-colors">
                    velam.m@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <FaPhoneAlt className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+1 (525) 607-0377</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <FaLinkedin className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/velam-pillai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 transition-colors"
                  >
                    linkedin.com/in/velam-pillai
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <FaGithub className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a
                    href="https://github.com/VelamPillai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 transition-colors"
                  >
                    github.com/VelamPillai
                  </a>
                </div>
              </div>
            </div>

            {/* Resume download */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-white font-semibold mb-4">Download Resume</h4>
              <a
                href={resumePDF}
                download="Velammal_M_Resume.pdf"
                className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 w-full justify-center"
              >
                <FaFilePdf />
                <span>Download PDF Resume</span>
                <FaDownload className="ml-2" size={14} />
              </a>
              <p className="text-gray-400 text-xs mt-2 text-center">Click to download my latest resume</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form method="POST" name="contact" className="space-y-4">
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label className="text-gray-300 block mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-2" htmlFor="subject">
                  Subject
                </label>
                <select
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  name="subject"
                  required
                >
                  <option value="" className="bg-blue-900">Select a subject</option>
                  <option value="job-opportunity" className="bg-blue-900">Job Opportunity</option>
                  <option value="interview-request" className="bg-blue-900">Interview Request</option>
                  <option value="project-collaboration" className="bg-blue-900">Project Collaboration</option>
                  <option value="other" className="bg-blue-900">Other</option>
                </select>
              </div>

              <div>
                <label className="text-gray-300 block mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  name="message"
                  rows="5"
                  required
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mt-4"
                type="submit"
              >
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Additional Resume Download Banner */}
        {/* <div className="backdrop-blur-sm bg-white/10 p-6 rounded-xl shadow-xl border border-white/20 mt-10 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white">Need my resume for your records?</h3>
              <p className="text-gray-300 text-sm mt-1">Download a copy of my resume to review my qualifications offline</p>
            </div>

            <a
              href={resumePDF}
              download="Velammal_M_Resume.pdf"
              className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaFilePdf size={20} />
              <span>Download Resume</span>
            </a>
          </div>
        </div> */}

        {/* Additional note */}
        <div className="text-center mt-12">
          <p className="text-gray-300 text-sm">
            Currently open to relocate for the right opportunity • Available for interviews • References available upon request
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
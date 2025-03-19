import React from "react"
import {
  FaExternalLinkAlt,
  FaGithub,
  FaMobileAlt,
  FaGooglePlay,
  FaLeaf,
  FaSeedling,
  FaTree,
  FaMobile
} from "react-icons/fa"

const ProjectItem = ({
  title,
  implementation,
  image,
  projectLink,
  description,
  featured,
  isMobileApp,
  bgColor,
  appIcon
}) => {
  // Split implementation string into array of technologies
  const technologies = implementation.split(',').map(tech => tech.trim());

  // Style classes for featured vs regular projects
  const containerClasses = featured
    ? "group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-emerald-500/30 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 col-span-2"
    : "group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20";

  // Determine if it's a mobile app or web project
  const isMobileProject = isMobileApp || implementation.toLowerCase().includes('react native') ||
    implementation.toLowerCase().includes('mobile');

  // Get the appropriate icon based on the app type
  const getAppIcon = () => {
    switch (appIcon) {
      case 'FaLeaf':
        return <FaLeaf className="text-white text-5xl mx-auto mb-4" />;
      case 'FaSeedling':
        return <FaSeedling className="text-white text-5xl mx-auto mb-4" />;
      case 'FaTree':
        return <FaTree className="text-white text-5xl mx-auto mb-4" />;
      default:
        return <FaMobile className="text-white text-5xl mx-auto mb-4" />;
    }
  };

  // Default gradient background if none specified
  const defaultBgGradient = "from-indigo-800 to-blue-600";
  const gradientClass = bgColor || defaultBgGradient;

  return (
    <div className={containerClasses}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          Featured Project
        </div>
      )}

      {/* Project Image or Color Background for Mobile Apps */}
      <div className={`relative ${featured ? 'md:h-80' : 'h-64'} overflow-hidden`}>
        {isMobileProject ? (
          /* Color background for mobile apps */
          <div className={`w-full h-full flex items-center justify-center bg-gradient-to-r ${gradientClass}`}>
            <div className="text-center p-8">
              {getAppIcon()}
              <h3 className="text-2xl font-bold text-white mb-2">
                {title}
              </h3>
              <p className="text-white/80 mb-4">
                {description ? description.substring(0, 100) + "..." : "Mobile application"}
              </p>
              <div className="flex justify-center gap-2 flex-wrap">
                {technologies.slice(0, 2).map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-white/20 text-white rounded-full px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}

        {/* Overlay - only for non-mobile projects */}
        {!isMobileProject && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>View Project</span>
                <FaExternalLinkAlt size={14} />
              </a>
            </div>
          </div>
        )}

        {/* Special overlay for mobile apps */}
        {isMobileProject && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-lg"
            >
              <span>View on Google Play</span>
              <FaGooglePlay size={18} />
            </a>
          </div>
        )}
      </div>

      {/* Project Info - Visible by default */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          {isMobileProject && <FaMobileAlt className="text-emerald-400 mt-1" />}
        </div>

        {/* Show description for featured projects */}
        {featured && description && (
          <p className="text-gray-300 mb-4">{description}</p>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
        >
          <span>{isMobileProject ? 'View on Google Play' : 'View Project'}</span>
          {isMobileProject ? <FaGooglePlay size={14} /> : <FaExternalLinkAlt size={14} />}
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
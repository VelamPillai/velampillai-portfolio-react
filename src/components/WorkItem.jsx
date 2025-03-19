import React from "react";

const WorkItem = ({ title, company, duration, responsibility }) => {
  return (
    <div className="backdrop-blur-sm bg-white/10 p-6 md:p-8 rounded-2xl shadow-xl border border-white/20">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column - Job Info */}
        <div className="md:w-1/3">
          <div className="mb-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${duration.includes("Present")
                ? "bg-emerald-500/20 text-emerald-400" // Green for current job
                : "bg-blue-500/20 text-blue-300" // Blue for past jobs
                }`}
            >
              {duration}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

          <div className="text-gray-300 mb-4">
            {company}
          </div>
        </div>

        {/* Right Column - Responsibilities */}
        <div className="md:w-2/3">
          <h4 className="text-lg font-medium text-emerald-400 mb-3">Responsibilities</h4>

          <ul className="space-y-2">
            {responsibility.map((item, idx) => (
              <li key={idx} className="flex items-start text-gray-300">
                <span className="mr-2 mt-1 text-emerald-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
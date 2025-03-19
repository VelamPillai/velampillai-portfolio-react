import React from "react";
import workDetails from "../assets/workDetails.jsx";
import WorkItem from "./WorkItem.jsx";

const Experience = () => {
  return (
    <div id="work" className="w-full py-16 bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-600">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-emerald-400 rounded-full mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            My journey as a developer, showcasing my professional growth and expertise in various technologies.
          </p>
        </div>

        <div className="space-y-8">
          {/* Current Job */}
          <WorkItem
            title="Software Developer"
            company="Inometrics Technology Systems Pvt Ltd (Remote)"
            duration="May 2023 – Present"
            responsibility={[
              "Successfully managed software development tasks remotely, demonstrating strong communication and collaboration skills.",
              "Developed and deployed mobile applications for the TN-Forest Department and Green Tamil Nadu Mission using React Native.",
              "Implemented user interface components and navigation features to enhance user experience.",
              "Integrated third-party libraries and APIs to add functionalities to applications.",
              "Collaborated with designers and backend developers to ensure seamless integration of front-end and back-end functionalities.",
              "Utilized React Redux for transient app states and implemented an offline-first approach using react-native-offline.",
              "Tested React Native applications using Android Studio simulator and physical devices.",
            ]}
          />

          {/* Internship */}
          <WorkItem
            title="Frontend Developer (Intern)"
            company="IT Systemhaus der Bundesagentur für Arbeit, Germany"
            duration="February 2023 – April 2023"
            responsibility={[
              "Implemented front-end features for displaying applicant names with varied formatting on the employer's page.",
              "Created a reusable Angular pipe using TypeScript to format applicant names dynamically.",
              "Collaborated on writing automated user acceptance tests (UATs) using Cypress.",
              "Gained familiarity with Jenkins and CI/CD pipelines.",
              "Participated in daily stand-up meetings and provided updates on assigned tasks.",
            ]}
          />

          {/* Previous Job */}
          <WorkItem
            title="Assistant Professor"
            company="The Oxford College of Engineering, India"
            duration="June 2005 – March 2015"
            responsibility={[
              "Lectured undergraduate students on Computer Science and Engineering subjects.",
              "Assisted postgraduate students in analyzing their research.",
              "Received the 100% Result Award for Computer Graphics twice.",
              "Contributed to the design, development, and maintenance of the TOCE college website.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
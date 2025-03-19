import project1Image from "../assets/project1.png";
import project2Image from "../assets/project2.png";
import project3Image from "../assets/project3.jpeg";
import project4Image from "../assets/project4.png";

const projectDetails = [
  {
    title: "GTM Plantation",
    implementation: "React Native, Redux, REST API, Mobile App Development",
    // No image needed - we'll use a colored background
    projectLink: "https://play.google.com/store/apps/details?id=com.greentnmission.gtmplantation",
    description: "Developed a mobile application for the Green Tamil Nadu Mission allowing users to manage and track plantation activities. Implemented features for planning history, land entry, and photo documentation of planting activities.",
    featured: true,
    isMobileApp: true,
    bgColor: "from-green-800 to-emerald-600", // Gradient colors for background
    appIcon: "FaSeedling" // Icon to display
  },
  {
    title: "Tamil Nadu e-Nursery",
    implementation: "React Native, Redux, REST API, Mobile App Development",
    // No image needed - we'll use a colored background
    projectLink: "https://play.google.com/store/apps/details?id=com.tamilnaduenursery",
    description: "Developed a mobile application for the Tamil Nadu Forest Department that helps users browse, search and purchase plants from government nurseries. Implemented features for plant catalog, search functionality, user authentication, and offline support.",
    featured: true,
    isMobileApp: true,
    bgColor: "from-blue-800 to-teal-600", // Gradient colors for background
    appIcon: "FaLeaf" // Icon to display
  },
  {
    title: "Green Roof Builder",
    implementation: "React.js, TailwindCSS, JavaScript",
    image: project4Image,
    projectLink: "https://velampillai.github.io/Green-Roofing-Builders/",
  },
  {
    title: "Bloomy's Junction",
    implementation: "Bootstrap5.0, SASS, HTML5",
    image: project1Image,
    projectLink: "https://velampillai.github.io/BloomysJunction/",
  },
  {
    title: "Anna's Artistry",
    implementation: "React.js, TailwindCSS, JavaScript",
    image: project3Image,
    projectLink: "https://velampillai.github.io/annu-s-artistry/",
  },
  {
    title: "Varaah Pet Store",
    implementation: "React.js, TailwindCSS, JavaScript, Node.js, Express, MongoDB Atlas",
    image: project2Image,
    projectLink: "https://veraah-petstore.onrender.com/",
  },
];

export default projectDetails

import rightArrow from "../assets/images/right-arrow.png";
import webIcon from "../assets/images/web-icon.webp";
import apiIcon from "../assets/images/api-icon.png"; 
import dbIcon from "../assets/images/db-icon.png"; 
import authIcon from "../assets/images/auth-icon.png"; 
import deployIcon from "../assets/images/deploy-icon.png"; 
import bugIcon from "../assets/images/bug-icon.png"; 
import uiuxIcon from "../assets/images/uiux-icon.png"; 

const services = [
  {
    icon: webIcon,
    title: "Full-Stack Web Development",
    desc: "Build modern, responsive, and scalable web apps using the MERN stack with clean UI and functional backend.",
  },
  {
    icon: apiIcon,
    title: "API Development",
    desc: "Design and develop secure REST APIs using Express.js and MongoDB for any frontend or mobile integration.",
  },
  {
    icon: dbIcon,
    title: "Database Design & Integration",
    desc: "Schema planning and database integration using MongoDB and Mongoose, optimized for performance and scale.",
  },
  {
    icon: authIcon,
    title: "Authentication Systems",
    desc: "Implement secure authentication using JWT, sessions, and third-party logins like Google OAuth.",
  },
  {
    icon: deployIcon,
    title: "Deployment & Hosting",
    desc: "Deploy full-stack apps using Vercel, Netlify, Render, or Railway with full environment setup.",
  },
  {
    icon: bugIcon,
    title: "Debugging & Optimization",
    desc: "Fix bugs, resolve performance issues, and optimize both frontend and backend systems.",
  },
];

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'm a Full Stack Developer from Greater Noida, passionate about building real-world applications with modern UI and scalable backend.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:shadow-white dark:hover:bg-darkHover"
          >
            <img src={service.icon} alt={service.title} className="w-10 invert" />
            <h2 className="text-lg my-4 text-gray-700 dark:text-white">
              {service.title}
            </h2>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {service.desc}
            </p>
            <a
              href="https://en.wikipedia.org/wiki/Web_development"
              target="_blank"
              className="flex items-center gap-2 text-sm mt-5"
            >
              Read more <img src={rightArrow} className="w-4" alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

import profilePhoto from "../assets/images/profile_photo.jpg";
import codeIcon from "../assets/images/code-icon.png";
import codeIconDark from "../assets/images/code-icon-dark.png";
import eduIcon from "../assets/images/edu-icon.png";
import eduIconDark from "../assets/images/edu-icon-dark.png";
import projectIcon from "../assets/images/project-icon.png";
import projectIconDark from "../assets/images/project-icon-dark.png";
import vsCodeIcon from "../assets/images/vscode.png";

import gitIcon from "../assets/images/git.png";
import canvaIcon from "../assets/images/Canva-Emblem.png";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center text-lg mb-2 font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="mx-auto max-w-max relative">
          <img
            src={profilePhoto}
            alt=""
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
          I'm Priyanshu Verma, a third-year Computer Science Engineering student at Sharda University (2027). I'm a MERN Stack Developer with a strong grasp of Machine Learning fundamentals and a passion for building real-world full-stack apps. I've solved 400+ DSA problems on LeetCode and worked with technologies like React.js, Node.js, MongoDB, Redux, Tailwind CSS, and more. Always learning, always building.


          </p>
          <ul className="grid 
          grid-cols-1 sm:grid-cols-3 
          lg:grid-cols-2 xl:grid-cols-3  gap-6 max-w-2xl">
      <li className="border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 ">
  <img src={codeIcon} alt="" className="w-7 mt-3 dark:hidden" />
  <img src={codeIconDark} alt="" className="w-7 mt-3 hidden dark:block" />
  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Tech Stack</h3>
  <p className="text-gray-600 text-sm dark:text-white/80">
  JavaScript (ES6+) • TypeScript • React.js • Redux • Node.js • Express.js • MongoDB
  </p>
</li>

<li className="border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50  ">
  <img src={eduIconDark} alt="" className="w-7 mt-3 hidden dark:block" />
  <img src={eduIcon} alt="" className="w-7 mt-3 dark:hidden" />
  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Education</h3>
  <p className="text-gray-600 text-sm dark:text-white/80">
    Computer Science Engineering with Specialization in Artificial Intelligence & Machine Learning
  </p>
</li>

<li className="border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 ">
  <img src={projectIconDark} alt="" className="w-7 mt-3 hidden dark:block" />
  <img src={projectIcon} alt="" className="w-7 mt-3 dark:hidden" />
  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Problem Solving</h3>
  <p className="text-gray-600 text-sm dark:text-white/80">
    Solved 500+ DSA problems on <a
      href="https://leetcode.com/u/Priyanshu_coder114/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      LeetCode
    </a>. Focused on data structures, algorithms, and coding efficiency.
  </p>
</li>

          </ul>

          <h4 className="my-6 text-gray-700 flex justify-center font-bold font-Ovo dark:text-white">Tools I used</h4>

          <ul className="flex items-center justify-center gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-10 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={vsCodeIcon} className="w-5 sm:w-7" alt="" />
            </li>
            <li className="flex items-center justify-center w-10 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={gitIcon} className="w-5 sm:w-7" alt="" />
            </li>
            <li className="flex items-center justify-center w-10 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={canvaIcon} className="w-8 sm:w-14" alt="" />
            </li>
            <li className="flex items-center justify-center w-10 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={"/figma.svg"} className="w-5 sm:w-10" alt="" />
            </li>
            <li className="flex items-center justify-center w-10 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={"/latex.svg"} className="w-5 sm:w-10 invert" alt="" />
            </li>
            <li className="flex items-center justify-center w-10 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={"/mongodb.svg"} className="w-5 sm:w-10" alt="" />
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;

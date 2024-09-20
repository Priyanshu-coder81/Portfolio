import profilePhoto from "../assets/images/profile_photo.jpg";
import codeIcon from "../assets/images/code-icon.png";
import eduIcon from "../assets/images/edu-icon.png";
import projectIcon from "../assets/images/project-icon.png";
import vsCodeIcon from "../assets/images/vscode.png";
import gitIcon from "../assets/images/git.png";
import canvaIcon from "../assets/images/Canva-Emblem.png";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-10">
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
            I'm Priyanshu Verma, currently a second-year Computer Science
            Engineering student at Sharda University in Greater Noida, set to
            graduate in 2027. As I continue my coding adventure, I’ve expanded
            my skills to include JavaScript, React.js, Redux, and Bootstrap,
            along with my foundational knowledge in C, C++, Java, Python, HTML,
            and CSS.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <li className="border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black ">
              <img src={codeIcon} alt="" className="w-7 mt-3" />
              <h3 className="my-4 font-semibold text-gray-700">Languages</h3>
              <p className="text-gray-600 text-sm">
                HTML, CSS(Tailwind , Bootstrap), Javascript, React Js , Redux{" "}
              </p>
            </li>
            <li className="border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black ">
              <img src={eduIcon} alt="" className="w-7 mt-3" />
              <h3 className="my-4 font-semibold text-gray-700">Education</h3>
              <p className="text-gray-600 text-sm">
                Computer Science Engineering with Speclization in Artifical
                Intillegence & Machine Learning{" "}
              </p>
            </li>
            <li className="border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black ">
              <img src={projectIcon} alt="" className="w-7 mt-3" />
              <h3 className="my-4 font-semibold text-gray-700">Projects</h3>
              <p className="text-gray-600 text-sm">
                Built more than 5 projects
              </p>
            </li>
          </ul>

          <h4 className="my-6 text-gray-700 flex justify-center font-bold font-Ovo">Tools I used</h4>

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
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;

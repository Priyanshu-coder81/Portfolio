import handIcon from "../assets/images/hand-icon.png";
import rightArrow from "../assets/images/right-arrow-white.png";
import downloadIcon from "../assets/images/download-icon.png";
import resume from "../assets/MY_RESUME.pdf";
import profilePhoto from "../assets/images/profile_photo.jpg";
const MainHeader = () => {
  return (
    <div className="w-11/12 max-w-3xl  mx-auto h-screen text-center flex flex-col items-center gap-4 justify-center  ">
      <img src={profilePhoto} alt="" className="w-3/12 rounded-full" />
      <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Priyanshu Vema <img src={handIcon} alt="" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg-[66px] font-Ovo">
        Frontend Web Developer || React-Redux
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a Frontend Devloper from Greator Noida, India. Currently Intern at
        CodeSoft
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 ">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20]
          text-white flex items-center gap-2 "
        >
          Contact Me <img src={rightArrow} alt="" />
        </a>

        <a
          href={resume}
          download
          className="px-10 py-3 border border-gray-500 rounded-full  flex items-center gap-2 bg-white "
        >
          My resume <img src={downloadIcon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};
export default MainHeader;

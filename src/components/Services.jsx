import rightArrow from "../assets/images/right-arrow.png";
import webIcon from "../assets/images/web-icon.png";
import graphicIcon from "../assets/images/graphics-icon.png";
const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a Frontend Developer from Greator Noida, Intrest in making
        Interactive UI's
      </p>

      <div className="grid grid-cols-auto my-10 gap-6">
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:shadow-white dark:hover:bg-darkHover">
          <img src={webIcon} alt="" className="w-10 " />
          <h2 className="text-lg my-4 text-gray-700 dark:text-white">
            Web design
          </h2>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Web development is the process of building programming..{" "}
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Web_design"
            target="_blank"
            className="flex items-center gap-2 text-sm mt-5"
          >
            Read more <img src={rightArrow} className="w-4" alt="" />
          </a>
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:shadow-white dark:hover:bg-darkHover ">
          <img src={graphicIcon} alt="" className="w-10 " />
          <h2 className="text-lg my-4 text-gray-700 dark:text-white">
            Graphic design
          </h2>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Graphic design is the art of creating visual communications, using
            ....
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Graphic_design"
            target="_blank"
            className="flex items-center gap-2 text-sm mt-5"
          >
            Read more <img src={rightArrow} className="w-4" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Services;

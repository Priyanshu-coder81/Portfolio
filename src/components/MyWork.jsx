
import sendIcon from "../assets/images/send-icon.png";
import rightArrowBold from "../assets/images/right-arrow-bold.png";
import myntra from "../assets/images/myntra-background.png"
import netflix from "../assets/images/netflix-background.jpg"
import rock from "../assets/images/rock.png"
import tic from "../assets/images/tic-tac-toe.webp"
const MyWork = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5">
        <div
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
          style={{ backgroundImage: `url(${myntra})` }}
        >
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
    
            <div className="mr-0.5">
              <h2 className="font-semibold leading-5">Myntra Clone  </h2>
              <p className="text-sm text-gray-700">Web Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-lime-300 transition">
            <img src={sendIcon} className="w-4" alt="" />
            </div>
          </div>
        </div>
        <div
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
          style={{ backgroundImage: `url(${netflix})` }}
        >
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            {" "}
            <div>
              <h2 className="font-semibold leading-5">Netflix Clone</h2>
              <p className="text-sm text-gray-700">Web design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-lime-300 transition">
            <img src={sendIcon} className="w-4" alt="" />
            </div>
          </div>
        </div>
        <div
          className="aspect-square bg-no-repeat bg-cover  rounded-lg relative cursor-pointer group "
          style={{ backgroundImage: `url(${rock})` }}
        >
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            {" "}
            <div>
              <h2 className="font-semibold leading-5">Rock_P_S Game</h2>
              <p className="text-sm text-gray-700">Web design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-lime-300 transition">
            <img src={sendIcon} className="w-4" alt="" />
            </div>
          </div>
        </div>
        <div
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
          style={{ backgroundImage: `url(${tic})` }}
        >
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            {" "}
            <div>
              <h2 className="font-semibold leading-5">Frontend Project</h2>
              <p className="text-sm text-gray-700">Web design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-lime-300 transition">
            <img src={sendIcon} className="w-4" alt="" />
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff]">Show more <img src={rightArrowBold} alt="" className="w-4" /></a>
    </div>
  );
};
export default MyWork;

import closeBlack from "../assets/images/close-black.png";
import NavList from "./NavList";
const MobileNavBar = ({elementRef}) => {

    const handleOnClickImage = () => {
        elementRef.current.classList.remove("right-0");
        elementRef.current.classList.add("-right-64");
      };
  return (
    <ul
      ref={elementRef}
      id="sideMenu"
      className={`flex  md:hidden flex-col gap-4 px-10 py-20 fixed top-0 -right-64 bottom-0 w-64 z-50 h-screen bg-rose-50 trasition duration-500 font-Ovo`}
    >
      <div className="absolute right-6 top-6" onClick={handleOnClickImage}>
        <img src={closeBlack} alt="" className="w-5 curson-pointer" />
      </div>

      <NavList handleOnClickImage={handleOnClickImage} />
    </ul>
  );
};
export default MobileNavBar;

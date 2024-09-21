import arrow from "../assets/images/arrow-icon.png";
import arrowDark from "../assets/images/arrow-icon-dark.png";
import moon from "../assets/images/moon_icon.png";
import sun from "../assets/images/sun_icon.png";
import menuBlack from "../assets/images/menu-black.png";
import menuWhite from "../assets/images/menu-white.png";
import backgroundImage from "../assets/images/header-bg-color.png";
import NavList from "./NavList";
import { useEffect, useRef } from "react";

import logo from "../assets/images/nameLogo.png";

import MobileNavBar from "./MobileNavBar";

const Header = () => {
  const elementRef = useRef("");
  const elementRef2 = useRef("");
  const elementRef3 = useRef("");

  const handleOnClick = () => {
    elementRef.current.classList.add("right-0");
    elementRef.current.classList.remove("-right-64");
  };

  /* Code for blur background in nav-bar when scroll  */
  useEffect(() => {
    const handleOnScroll = () => {
      if (scrollY > 50) {
        elementRef2.current.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        elementRef3.current.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "shadow-sm",
          "dark:border",
          "dark:bordr-white/50",
          "dark:bg-transparent"
        );
      } else {
        elementRef2.current.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme"
        );
        elementRef3.current.classList.add(
          "bg-white",
          "bg-opacity-50",
          "shadow-sm",
          "dark:border",
          "dark:bordr-white/70",
          "dark:bg-transparent"
        );
      }
    };

    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  function toogleTheme() {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  }

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] ">
        <img src={backgroundImage} alt="" className="w-full" />
      </div>
      <nav
        className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"
        ref={elementRef2}
      >
        <img
          src={logo}
          alt="Image of logo"
          className="w-40 cursor-pointer lg:mr-10 mr-8 xl:mr-12"
        />
        <ul
          className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/50 dark:bg-transparent"
          ref={elementRef3}
        >
          <NavList />
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={toogleTheme}>
            <img src={moon} alt="" className="w-6 dark:hidden" />
            <img src={sun} alt="" className="w-6 hidden dark:block" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 "
          >
            Contact{" "}
            <img src={arrow} alt="Image of sun" className="w-3 dark:hidden" />
            <img
              src={arrowDark}
              alt="Image of sun"
              className="w-3 hidden dark:block"
            />
          </a>
          <button className="block ml-3 md:hidden" onClick={handleOnClick}>
            <img src={menuBlack} alt="" className="w-6 dark:hidden" />
            <img src={menuWhite} alt="" className="w-6 hidden dark:block" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      <MobileNavBar elementRef={elementRef} handleOnClick={handleOnClick} />
    </>
  );
};

export default Header;

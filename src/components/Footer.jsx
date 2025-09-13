import nameLogo from "../assets/images/nameLogo.png";
import mailIcon from "../assets/images/mail_icon.png";
import mailIconDark from "../assets/images/mail_icon_dark.png";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaGithub, } from "react-icons/fa6";

import { TbBrandLeetcode } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <img src={nameLogo} alt="" className="w-64 mx-auto mb-3 " />
        <div className="w-max flex items-center gap-2 mx-auto">
          <img src={mailIcon} alt="" className="w-6 dark:hidden" />
          <img src={mailIconDark} alt="" className="w-6 hidden dark:block" />
          vpriyanshu864@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t bordr-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2024 Priyanshu Verma. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">

          <li>
            <a href="https://www.linkedin.com/in/priyanshu-verma-a12ba829a/">
            <BiLogoLinkedinSquare className="size-7" />


            </a>
          </li>

          <li>
            <a href="https://github.com/Priyanshu-coder81">
            <FaGithub className="size-7" />

            </a>
          </li>
          <li>
            <a href="https://x.com/PriyanshuV82847">
            <BsTwitterX className="size-6" />


            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/Priyanshu_coder114/">
            <TbBrandLeetcode className="size-7" />

            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};
export default Footer;

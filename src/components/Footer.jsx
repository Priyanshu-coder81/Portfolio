import nameLogo from "../assets/images/nameLogo.png";
import mailIcon from "../assets/images/mail_icon.png";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <img src={nameLogo} alt="" className="w-64 mx-auto mb-3 " />
        <div className="w-max flex items-center gap-2 mx-auto">
          <img src={mailIcon} alt="" className="w-6" />
          vpriyanshu864@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t bordr-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2024 Priyanshu Verma. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">

          <li>
            <a href="https://www.linkedin.com/in/priyanshu-verma-a12ba829a/">
           LinkedIn

            </a>
          </li>

          <li>
            <a href="https://github.com/Priyanshu-coder81">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/priyanshu_verma_4u/">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/Priyanshu_coder114/">
              LeetCode
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};
export default Footer;

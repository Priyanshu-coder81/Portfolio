import { useRef } from "react";
import footerImage from "../assets/images/footer-bg-color.png";
import rightArrowWhite from "../assets/images/right-arrow-white.png";
const Contact = () => {
  const textRef = useRef(null);
  const inputRef = useRef(null);
  const emailRef = useRef(null);
  const handleOnSubmit = () => {
    textRef.current.value= "";
    inputRef.current.value = "";
    emailRef.current.value = "";
  }
  return (
    <div
      id="contact"
      className={`w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-[length:90%_auto] bg-center bg-[url(${footerImage})] dark:bg-none`}
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect With me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>
      <form onSubmit={handleOnSubmit}
        action="https://api.web3forms.com/submit" method="post"
        className="max-w-2xl mx-auto " 
      >
        <input
          type="hidden"
          name="access_key"
          value="" 
        />

        <div className="grid grid-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="flex1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            required ref={inputRef}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your E-mail"
            className="flex1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90"
            required ref={emailRef}
          />
        </div>
        <textarea
          name="message"
          id=""
          rows="6"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 bg-white rounded-md mb-6  dark:bg-darkHover/30 dark:border-white/90"
          required
          ref={textRef}
        ></textarea>
        <button className="py-3 px-9 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover" type="submit" >
          Submit now <img src={rightArrowWhite} alt="" className="w-4"  />
        </button>
      </form>
    </div>
  );
};
export default Contact;

import footerImage from "../assets/images/footer-bg-color.png";
import rightArrowWhite from "../assets/images/right-arrow-white.png";
const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-[length:90%_auto] bg-center"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect With me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>
      <form action="" className="max-w-2xl mx-auto ">
        <div className="grid grid-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            className="flex1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            placeholder="Enter your E-mail"
            className="flex1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          name=""
          id=""
          rows="6"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 bg-white rounded-md mb-6"
        ></textarea>
        <button className="py-3 px-9 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">
          Submit now <img src={rightArrowWhite} alt="" className="w-4" />
        </button>
      </form>
    </div>
  );
};
export default Contact;

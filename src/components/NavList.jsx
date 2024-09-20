const NavList = ({ handleOnClickImage }) => {
  return (
    <>
      <li>
        <a href="#top" className="hover:underline
        hover:underline-offset-8  hover: decoration-lime-400 " onClick={handleOnClickImage}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:underline
        hover:underline-offset-8  hover: decoration-lime-400 " onClick={handleOnClickImage}>
          About Me
        </a>
      </li>
      <li>
        <a href="#services"  className="hover:underline
        hover:underline-offset-8  hover: decoration-lime-400 " onClick={handleOnClickImage}>
          Services
        </a>
      </li>
      <li>
        <a href="#work" className="hover:underline
        hover:underline-offset-8  hover: decoration-lime-400 " onClick={handleOnClickImage}>
          My Work
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:underline
        hover:underline-offset-8  hover: decoration-lime-400 " onClick={handleOnClickImage}>
          Contact Me
        </a>
      </li>
    </>
  );
};

export default NavList;

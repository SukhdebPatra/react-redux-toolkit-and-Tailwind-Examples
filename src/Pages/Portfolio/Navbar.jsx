import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img
          src="src/assets/sukhdebPatralogo.jpg"
          className="mx-2 w-10"
          alt="logo"
        /> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          className=""
          href="https://www.linkedin.com/in/sukhdeb-patra-86774919b/"
        >
          {" "}
          <FaLinkedin />
        </a>
        <a href="https://github.com/SukhdebPatra">
          {" "}
          <FaGithub />
        </a>

        {/* <FaSquareXTwitter /> */}
        {/* <FaInstagram /> */}
      </div>
    </nav>
  );
};

export default Navbar;

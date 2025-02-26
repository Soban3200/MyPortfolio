import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 ">
      <footer className="flex-col p-4 shadow-md bg-white">
        <ul className="flex justify-center gap-10 text-xl text-gray-800">
          <li className="hover:text-gray-600 transition-colors"><a href="#about">About</a></li>
          <li className="hover:text-gray-600 transition-colors"><a href="#skills">Skills</a></li>
          <li className="hover:text-gray-600 transition-colors"><a href="#projects">Projects</a></li>
          <li className="hover:text-gray-600 transition-colors"><a href="#contact">Contact</a></li>
        </ul>
        <div className="text-center text-gray-500 mt-4 text-sm">
          © {new Date().getFullYear()} Soban's Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

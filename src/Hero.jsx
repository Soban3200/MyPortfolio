import React from "react";
import Myimage1 from "./assets/MyImage1.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-full w-full mx-auto relative top-12 xl:px-16 px-8 flex flex-col md:flex-row gap-8 justify-center items-center pt-8 pb-16">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="w-72 h-72 rounded-full object-cover shadow-lg"
          src={Myimage1}
          alt="My Profile"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4">
        <h2 className="text-xl text-gray-600">Hello, I am</h2>
        <h2 className="text-3xl font-semibold">SOBAN BABU</h2>
        <p className="text-2xl text-gray-600">
          I'm a web developer and Computer repair technician.
        </p>

        {/* Buttons Section */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => {
              document.querySelector("#contact").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-4 py-2 shadow-[inset_0_0_0_2px_#616467] text-black rounded-full tracking-widest uppercase font-bold bg-transparent  hover:text-blue-600 transition duration-200 "
          >
            Contact Info
          </button>

          <a
            href="/CV.pdf"
            download="Soban_Babu_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 shadow-[inset_0_0_0_2px_#616467] text-black rounded-full tracking-widest uppercase font-bold bg-transparent  hover:text-blue-600  transition duration-200">
              Download CV
            </button>
          </a>
          <a href="https://drive.google.com/file/d/1mvXFxLUb7iiemHOSqFUTyfxbaSAy85XQ/view?usp=drivesdk">
            <button className="px-4 py-2 shadow-[inset_0_0_0_2px_#616467] text-black rounded-full tracking-widest uppercase font-bold bg-transparent  hover:text-blue-600  transition duration-200">
              Download My App
            </button>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center w-1/2 space-x-7 mt-2">
          <a
            href="https://github.com/Soban3200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={45}
              className="hover:text-gray-700 transition duration-200"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/soban3200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={45}
              className="hover:text-blue-600 transition duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

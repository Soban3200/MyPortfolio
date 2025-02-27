import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="px-4 py-10 ">
      <div className="text-center mb-5">
        <h5 className="text-lg text-gray-600">Get In Touch</h5>
        <h1 className="text-3xl font-semibold text-gray-800">Contact Me</h1>
      </div>

      <div className="flex justify-center">
        <div className="border rounded-lg flex flex-wrap justify-around items-center w-full max-w-md p-4 gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <IoMdMail className="text-xl" />
            <a
              href="mailto:Soban3200@gmail.com"
              className="text-sm break-words"
            >
              Soban3200@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FaWhatsapp className="text-xl text-green-500" />
            <a
              href="https://wa.me/9080259788"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              9080259788
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

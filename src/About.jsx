import React from "react";
import Myimage2 from "./assets/MyImage2.jpg";
import experience from "./assets/experience.png";
import education from "./assets/education.png";

const About = () => {
  return (
    <>
      {/* Main Container */}
      <h1 id="about" className="text-center  text-3xl mt-20 ">
        About Me
      </h1>
      <div className="flex flex-col  md:flex-row  mt-16 p-4 gap-4">
        {/* Left Side - Image */}
        <div className="md:w-1/3  p-2 w-full flex justify-center md:justify-start">
          <img
            src={Myimage2}
            className="w-80 h-80 mx-auto rounded-lg object-cover"
            alt="Profile"
          />
        </div>

        {/* Right Side - Details */}
        <div className="md:w-2/3 w-full flex justify-center flex-col gap-4">
          {/* Right Side First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 text-center p-4 rounded-lg">
              <img
                src={experience}
                className="mx-auto w-10"
                alt="Centered Image"
              />

              <h1 className="text-xl font-semibold">Experience</h1>
              <p className="text-sm text-gray-600">2 + Years</p>
              <p className="text-sm text-gray-600">Computer Technician</p>
            </div>
            <div className="border-2 p-4 rounded-lg text-center">
              <img
                src={education}
                className="mx-auto w-10"
                alt="Centered Image"
              />
              <h1 className="text-xl font-semibold">Education</h1>
              <p className="text-sm text-gray-600">
                B.E Computer Science and Engineering
              </p>
            </div>
          </div>

          {/* Right Side Second Row */}
          <div className=" p-4 rounded-lg">
            <p className="text-sm font-semibold text-gray-600">
              I'm Soban Babu, a former Computer Technician now pursuing a career
              in Web Development. My background in tech support has honed my
              problem-solving skills, and I'm now focused on building responsive
              web applications using the MERN stack and Tailwind CSS.
              Additionally, I'm learning React Native to expand my skills in
              mobile app development. I'm excited to bring my technical
              expertise and passion for coding to both web and mobile
              development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

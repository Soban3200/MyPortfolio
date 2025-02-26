import React from "react";

const Card = () => {
  return (
    <a
      href="https://bennyqsystemsprojectfrontend.onrender.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative flex flex-col my-6 bg-white border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-56 m-2.5 overflow-hidden rounded-md">
          <img
            src="https://images.unsplash.com/photo-1545156521-3d4a50e24347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="eCommerce Project"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <div className="mb-4 rounded-full bg-green-600 py-0.5 px-2.5 text-xs text-white w-28 text-center">
            Deployed on Render
          </div>
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">
            BennyQ Systems eCommerce
          </h6>
          <p className="text-slate-600 leading-normal">
            Full-stack eCommerce platform with product listings, search,
            filtering, and order management. Built using MongoDB, Express,
            React, and Node.js.
          </p>
        </div>

        <div className="flex items-center justify-between p-4 border-t">
          <div className="flex items-center">
            <img
              alt="Project Owner"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              className="relative inline-block h-8 w-8 rounded-full"
            />
            <div className="flex flex-col ml-3 text-sm">
              <span className="text-slate-800 font-semibold">
                BennyQ Systems
              </span>
              <span className="text-slate-600">eCommerce Project</span>
            </div>
          </div>
          <div>
            <a
              href="https://bennyqsystemsprojectfrontend.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
            >
              Visit Site →
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;

import React from "react";

const IntrectivityClasses = () => {
  return (
    <>
      <div className="text-center text-3xl text-rose-600">
        Intrectivity Classes
      </div>{" "}
      <button className="bg-blue-600 rounded-lg p-2 m-2 text-white hover:bg-yellow-950">
        login
      </button>
      <button className="bg-blue-700 rounded-lg p-2 m-2 text-white hover:bg-slate-950 hover:p[20px]">
        login
      </button>
      <button className="bg-blue-700 rounded-lg p-2 m-2 text-white focus:bg-yellow-600 ">
        Focus
      </button>
      <button className="bg-blue-700 rounded-lg p-2 m-2 text-white active:bg-red-600 ">
        Active
      </button>
      <button className="bg-blue-700 rounded-lg p-2 m-2 text-white focus:bg-yellow-600 active:bg-red-600 hover:bg-slate-950">
        All three
      </button>
      <div className="mt-2">
        <a href="" className="group">
          <h1 className="group-hover:bg-black group-hover:text-white ">
            heading click
          </h1>
          <p className="group-hover:bg-black group-hover:text-white ">
            para click
          </p>
        </a>
      </div>
    </>
  );
};

export default IntrectivityClasses;

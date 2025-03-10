import React from "react";

const TransitionAndTransform = () => {
  return (
    <>
      {" "}
      <div className="text-center mb-3 text-4xl p-1">
        Transition And Transform
      </div>
      <hr />
      <div className=""></div>
      <button className="bg-blue-600 m-10 p-2 mt-2 ml-2 text-white rounded hover:bg-blue-950">
        Login
      </button>
      <button className="bg-blue-600 m-10 p-2 mt-2 ml-2 text-white rounded hover:bg-red-200 transition duration-1000">
        Sign Up
      </button>
      <button className="bg-blue-600 m-10 p-2 mt-2 ml-2 text-white rounded hover:opacity-5 transition duration-1000">
        Buttun 3
      </button>
      <button className="bg-red-600 m-10 p-2 mt-2 ml-2 text-white rounded hover:rotate-180 transition duration-1000">
        Button 4
      </button>
      <button className="bg-cyan-600 m-10 p-2 mt-2 ml-2 text-white rounded hover:scale-50 transition duration-1000">
        Button 4
      </button>
      <button className="bg-cyan-600 m-10 p-2 mt-2 ml-2 text-white rounded hover:scale-150 transition-transform duration-1000">
        Button 5
      </button>
      <button className="bg-cyan-600 m-10 p-2 mt-2 ml-2 text-white rounded hover:scale-x-150 transition-transform duration-1000">
        Button 6
      </button>
      <button className="bg-cyan-600 m-10 p-2 mt-2 ml-2 text-white rounded hover:scale-x-150 hover:scale-y-50 transition-transform duration-1000">
        Button 7
      </button>
      <img
        src="Images/scott-carroll-favQn8WgRyk-unsplash.jpg"
        alt=""
        className="w-56 m-32 hover:rotate-45 hover:scale-125 transtion-transform duration-700 "
      />
    </>
  );
};

export default TransitionAndTransform;

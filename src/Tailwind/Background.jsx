import React from "react";

const Background = () => {
  return (
    <>
      {" "}
      <div className="text-center">Background</div>
      <div className="bg-red-500  mt-2 bg-[url(https://images.pexels.com/photos/8022977/pexels-photo-8022977.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load)] bg-no-repeat bg-center mb-3">
        Hello tailwind
      </div>
      <div className="gradient bg-gradient-to-b to-blue-500 from-red-900 size-96 mb-3"></div>
      <div className="gradient bg-gradient-to-l to-blue-500 from-red-900 size-96 mb-3"></div>
      <div className="gradient bg-gradient-to-tr to-yellow-500 from-blue-900 size-96"></div>
      <div className="size-96 m-32 shadow-amber-600 mt-3 shadow-2xl"></div>
      <div className="  size-96 m-32 shadow-inner shadow-amber-600 mt-3 "></div>
    </>
  );
};

export default Background;

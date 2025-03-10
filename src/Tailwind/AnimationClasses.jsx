import React from "react";

const AnimationClasses = () => {
  return (
    <>
      <div className="text-center text-2xl text-purple-700 mb-2">
        AnimationClasses
      </div>{" "}
      <div className="size-20 ml-10 bg-red-600 rounded-full animate-bounce"></div>
      <hr />
      <div className="size-20 ml-10 mt-4 bg-red-600  mb-3 animate-spin"></div>
      <hr />
      <br />
      <img
        className="w-32 ml-44 mt-7 animate-spin"
        src="Images/james-mcgill-kMU_2u2Ap2g-unsplash.jpg"
        alt=""
      />
      <br />
      <div className="size-10 ml-10 bg-red-600 rounded-full animate-ping"></div>
      <div className="size-10  ml-44 bg-red-600 rounded-full animate-pulse"></div>
      <img
        src="Images/geranimo-yKiLWMWquKE-unsplash.jpg"
        alt=""
        className="w-32 m-32 animate-pulse"
      />
    </>
  );
};

export default AnimationClasses;

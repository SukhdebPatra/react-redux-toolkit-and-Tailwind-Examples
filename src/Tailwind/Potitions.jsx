import React from "react";

const Potitions = () => {
  return (
    <>
      {/* <div className="text-center text-pink-500"> Potitions</div>
      <div className=" bg-red-300 size-40 absolute bottom-0 right-0"></div>
      <div className=" bg-green-300 size-40 absolute bottom-0 left-0"></div>
      <div className=" bg-green-300 size-40 absolute top-0 right-0"></div>
      <div className=" bg-red-300 size-40 absolute top-0 "></div> */}
      <div className="relative">
        <div className="bg-green-500 size-80 relative"></div>
        <div className="bg-green-900 size-36 inset-20 absolute"></div> 
      </div>
      <div className="relative">
        <div className="bg-rose-400 size-96  text-white ">
          <h1 className="bg-slate-800 fixed">Test</h1>
        </div>
      </div>
    </>
  );
};

export default Potitions;

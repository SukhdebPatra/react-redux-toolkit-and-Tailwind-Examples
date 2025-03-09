import React from "react";

const GridClasses = () => {
  return (
    <>
      <div className="text-center text-3xl  bg-cyan-400 mb-3 p-2 mt-3">
        Grid with tailwind css
      </div>
      <hr />
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-red-300 p-10 border border-purple-800 col-span-2"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800 row-span-6"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800 row-span-4"></div>
        <div className="bg-red-300 p-10 border border-purple-800 row-span-3"></div>
        <div className="bg-red-300 p-10 border border-purple-800 col-span-3"></div>
        <div className="bg-red-300 p-10 border border-purple-800 col-span-4"></div>
      </div>
      <hr />

      <div className="text-lime-300 text-3xl text-center bg-slate-600 mt-3">
        Responsive using sccren size 'item's to be fit"
      </div>
      <div className="grid grid-cols-4 gap-2 mt-3 md:grid-cols-4 sm:grid-cols-1">
        <div className="bg-red-300 p-10 border border-purple-800 "></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800 "></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800"></div>
        <div className="bg-red-300 p-10 border border-purple-800 "></div>
        <div className="bg-red-300 p-10 border border-purple-800 "></div>
        <div className="bg-red-300 p-10 border border-purple-800 "></div>
        <div className="bg-red-300 p-10 border border-purple-800 "></div>
      </div>
    </>
  );
};

export default GridClasses;

import React from "react";

const DarkMode = () => {
  const handleCick = () => {
    // alert("clicked");
    document.getElementById("root");
  };
  return (
    <>
      {/* <div className="text-center text-2xl text-indigo-300 mb-2">DarkMode</div>{" "}
      <div>
        <h1 className="text-4xl dark:bg-slate-800 dark:text-white">
          Dark mode Test using system dark mode on or of with tailwind
        </h1>
        <p className="text-4xl">code step by step</p>
      </div> */}
      <div className="flex m-20 border border-slate-600 p-3 dark:bg-slate-800 dark:text-white ">
        <div className="bg-blue-300 size-12"></div>
        <p className="text-2xl ml-10 p-2"> Box With dark mode</p>
      </div>
      <div className="text-center text-2xl"> Button click dark mode</div>
      <button
        onClick={handleCick}
        className="p-2 m-2 bg-slate-950 rounded-md text-cyan-300 hover:bg-red-900"
      >
        Apply Dark Mode
      </button>
    </>
  );
};

export default DarkMode;

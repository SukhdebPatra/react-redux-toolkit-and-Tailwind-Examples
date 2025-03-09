import React from "react";

const Container = () => {
  return (
    <>
      <div className="bg-cyan-300">
        <ul className="flex  [&>*]:p-2 [&>*]:text-yellow-900 text-2xl">
          <li>Home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
      <div className="text-center bg-slate-500 text-yellow-400 mt-2 text-2xl container">
        Container
      </div>
    </>
  );
};

export default Container;

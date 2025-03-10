import React from "react";

const TailwindButton = () => {
  return (
    <>
      <div className="mt-2 mb-2 text-center text-2xl text-cyan-700 border border-spacing-2">
        TailwindButton
      </div>
      <div className="container">
        <button className="btn btn-primary">Primary</button>
        <button className="btn ">secondary</button>
        <button className="btn btn-sucess ">sucess</button>
        <button className="btn btn-danger">danger</button>
        <button className="btn btn-warning">warning</button>
        <button className="btn">info</button>
        <button className="btn">light</button>
        <button className="btn">dark</button>
      </div>
    </>
  );
};

export default TailwindButton;

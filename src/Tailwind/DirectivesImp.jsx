import React from "react";

const DirectivesImp = () => {
  return (
    <>
      <div>DirectivesImp</div>{" "}
      <div className="m-5">
        <button className="bg-red-600 rounded-lg p-2  text-white  hover:bg-blue-400 hover:text-red-900">
          Submit
        </button>

        {/* making components like boostrap  chnages made in index.js file */}
        <button className="btn-primary ml-2">Sign UP</button>
        <button className="btn-primary ml-2">Sign in</button>
        <h2 className="bg-background-blue">Class</h2>
      </div>
    </>
  );
};

export default DirectivesImp;

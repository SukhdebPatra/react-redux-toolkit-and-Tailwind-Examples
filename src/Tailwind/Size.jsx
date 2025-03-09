import React from "react";

const Size = () => {
  return (
    <>
      <h5 className="text-center text-4xl text-fuchsia-600 bg-slate-300 underline mb-4">
        Size
      </h5>
      {/* <div className="w-50 h-90 bg-amber-200">code step by step</div> */}
      <br />
      <div className="size-50 bg-amber-200">code step by step</div>
      <div className="size-60 bg-amber-300">code step by step</div>
      <div className="size-70 bg-amber-400">code step by step</div>
      <div className="size-fit bg-amber-500">code step by step</div>
      <div className="size-full bg-amber-600 hover:size-3/6">
        code step by step
      </div>
    </>
  );
};

export default Size;

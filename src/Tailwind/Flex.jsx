import React from "react";

const Flex = () => {
  return (
    <>
      <div className="text-center text-3xl text-fuchsia-600">Flex</div>
      <hr />
      <div className="bg-gray-200  flex">
        <div className="bg-red-300 size-20"></div>
        <div className="bg-blue-300 size-20"></div>
        <div className="bg-yellow-300 size-20"></div>
        <div className="bg-green-300 size-20"></div>
      </div>
      <hr />
      {/* <div className="bg-gray-200  flex mt-3 items-center justify-center">
        <div className="bg-red-300 size-20"></div>
        <div className="bg-blue-300 size-20"></div>
        <div className="bg-yellow-300 size-20"></div>
        <div className="bg-green-300 size-20"></div>
      </div>
      <hr />
      <div className="bg-gray-200  flex mt-3 items-center justify-between">
        <div className="bg-red-300 size-20"></div>
        <div className="bg-blue-300 size-20"></div>
        <div className="bg-yellow-300 size-20"></div>
        <div className="bg-green-300 size-20"></div>
      </div>
      <hr />
      <div className="bg-gray-200  flex mt-3 items-center justify-around">
        <div className="bg-red-300 size-20"></div>
        <div className="bg-blue-300 size-20"></div>
        <div className="bg-yellow-300 size-20"></div>
        <div className="bg-green-300 size-20"></div>
      </div>
      <hr /> */}
      {/* <div className="bg-gray-200 flex flex-col mt-3 items-center justify-between">
        <div className="bg-red-300 size-20"></div>
        <div className="bg-blue-300 size-20"></div>
        <div className="bg-yellow-300 size-20"></div>
        <div className="bg-green-300 size-20"></div>
      </div>
      <hr /> */}
      <div className="bg-gray-200 flex mt-3 flex-wrap flex-col sm:flex-row">
        <div className="bg-red-300 size-32"></div>
        <div className="bg-blue-300 size-32"></div>
        <div className="bg-yellow-300 size-32"></div>
        <div className="bg-green-300 size-32"></div>
        <div className="bg-red-300 size-32"></div>
        <div className="bg-blue-300 size-32"></div>
        <div className="bg-yellow-300 size-32"></div>
        <div className="bg-green-200 size-32"></div>
        <div className="bg-red-200 size-32"></div>
        <div className="bg-blue-200 size-32"></div>
        <div className="bg-yellow-200 size-32"></div>
        <div className="bg-green-200 size-32">uysgfuygsuyg</div>
      </div>
    </>
  );
};

export default Flex;

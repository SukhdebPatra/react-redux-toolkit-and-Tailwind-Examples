import React from "react";

const DialogBox = () => {
  return (
    <>
      <div className="text-red-900 text-2xl text-center font-bold">
        DialogBox
      </div>{" "}
      <div className="bg-gray-400 fixed inset-0">
        <div className="fixed inset-0 ">
          <div className="flex h-full justify-center items-center">
            <div className="bg-white w-[512px] text-left shadow-xl rounded relative">
              <div className="p-5 ">
                <div className="flex items-start ">
                  <img
                    className="w-8"
                    src="Images/sung-jin-woo-solo-leveling-arise-4k-wallpaper-uhdpaper.com-188@5@d.jpg"
                    alt=""
                  />
                  <div className="ml-4">
                    <h3 className="text-gray-900 font-semibold ">
                      Deativate Account
                    </h3>
                    <div className="m-2">
                        <p className="text-sm text-gray-600">are you sure</p> 
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-row-reverse px-4 py-3">
                <button className="bg-red-600 rounded-md text-white font-semibold ml-3 px-3 py-2 hover:bg-red-500">
                  Deactivate
                </button>
                <button className="bg-white rounded-md font-semibold ml-3 shadow-sm ring-1 ring-inset ring-gray-300 px-3 py-2 hover:bg-gray-50">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default DialogBox;

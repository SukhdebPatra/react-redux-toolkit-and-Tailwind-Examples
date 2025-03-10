import React from "react";

const GoogleUiClone = () => {
  return (
    <>
      <header className="flex justify-between text-[14px]">
        <div className="flex p-5 text-center justify-start">
          <div className="flex space-x-3">
            <a className="text-gray-900 hover:underline" href="">
              About
            </a>
            <a className="text-gray-900 hover:underline" href="">
              Store
            </a>
          </div>
        </div>
        <div className="flex p-4 text-center justify-start">
          <div className="flex space-x-4">
            <a className="text-gray-900 hover:underline" href="">
              Gmail
            </a>
            <a className="text-gray-900 hover:underline" href="">
              Images
            </a>
            <svg
              className="pointer"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#434343"
            >
              <path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm0-80h560L520-492v-268h-80v268L200-200Zm280-280Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#434343"
            >
              <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#434343"
            >
              <path d="M360-390q-21 0-35.5-14.5T310-440q0-21 14.5-35.5T360-490q21 0 35.5 14.5T410-440q0 21-14.5 35.5T360-390Zm240 0q-21 0-35.5-14.5T550-440q0-21 14.5-35.5T600-490q21 0 35.5 14.5T650-440q0 21-14.5 35.5T600-390ZM480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93Zm0 80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5ZM177-581q51-29 89-75t57-103q-51 29-89 75t-57 103Zm249-214Zm-103 36Z" />
            </svg>
          </div>
        </div>
      </header>
      <main className="flex items-center justify-center flex-col">
        <img
          className="h-24 mb-8"
          src="Images/pngimg.com - google_PNG19644.png"
          alt=""
        />
        <div className="w-full max-w-[37rem]">
          <div className="relative">
            <input
              type="text"
              className="w-full border bg-gray-100 rounded-full py-3 px-5"
              //   placeholder="search"
              name=""
              id=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#434343"
              className="left-3 top-4 absolute"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
            <svg
              className="right-12 top-4 absolute"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#434343"
            >
              <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z" />
            </svg>
            <svg
              className="right-3 top-4 absolute"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#434343"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h160v80H200Zm400 0v-80h160v-160h80v160q0 33-23.5 56.5T760-120H600ZM120-600v-160q0-33 23.5-56.5T200-840h160v80H200v160h-80Zm640 0v-160H600v-80h160q33 0 56.5 23.5T840-760v160h-80ZM480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120Z" />
            </svg>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-5">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded py-2 px-4 ">
            Google Search
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded py-2 px-4 ">
            {" "}
            I'm Felling Lucky{" "}
          </button>
        </div>
        <div className="flex justify-between text-[13px]">
          <div className="flex p-4 text-center justify-start">
            <div className="flex space-x-4">
              <span>Google offered in: </span>
              <a className="text-blue-700 hover:underline" href="">
                हिन्दी
              </a>
              <a className="text-blue-700 hover:underline" href="">
                বাংলা
              </a>
              <a className="text-blue-700 hover:underline" href="">
                తెలుగు
              </a>
              <a className="text-blue-700 hover:underline" href="">
                मराठी
              </a>
              <a className="text-blue-700 hover:underline" href="">
                தமிழ்
              </a>
              <a className="text-blue-700 hover:underline" href="">
                ગુજરાતી
              </a>
              <a className="text-blue-700 hover:underline" href="">
                ಕನ್ನಡ
              </a>
              <a className="text-blue-700 hover:underline" href="">
                മലയാളം
              </a>
              <a className="text-blue-700 hover:underline" href="">
                ਪੰਜਾਬੀ
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 absolute bottom-0 w-full text-gray-700 px-5 text-[14px] ">
        <div>
          <div className="border-b border-gray-300   py-2">India</div>
          <div className="flex justify-between py-3">
            <ul className="flex space-x-4">
              <li>
                <a href="">Advertising</a>{" "}
              </li>
              <li>
                <a href="">Business</a>{" "}
              </li>
              <li>
                <a href="">How Search works</a>{" "}
              </li>
            </ul>
            <ul className="flex space-x-4"> 
              <li>
                <a href="">Privacy</a>{" "}
              </li>
              <li>
                <a href="">Terms</a>{" "}
              </li>
              <li>
                <a href="">Setting</a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GoogleUiClone;

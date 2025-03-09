import React from "react";

const FilterImages = () => {
  return (
    <>
      <div className="text-center mb-3 mt-3  bg-sky-900 text-lime-500 text-2xl">
        FilterImages
      </div>{" "}
      <img
        className="size-40"
        src="Images\geranimo-yKiLWMWquKE-unsplash.jpg"
        alt=""
      />
      <img
        className="blur mt-5 mb-3 size-40"
        src="Images\geranimo-yKiLWMWquKE-unsplash.jpg"
        alt=""
      />
      <img
        className="blur-sm mt-5 mb-3 size-40"
        src="Images\geranimo-yKiLWMWquKE-unsplash.jpg"
        alt=""
      />
      <img
        className="blur-md mt-5 mb-3 size-40"
        src="Images\geranimo-yKiLWMWquKE-unsplash.jpg"
        alt=""
      />
      <img
        className="blur-xl mt-5 mb-3 size-40"
        src="Images\geranimo-yKiLWMWquKE-unsplash.jpg"
        alt=""
      />
      <h1 className="blur-sm text-4xl mb-2">BLur image</h1>
      <img
        className="size-60 mb-3 "
        src="Images/scott-carroll-favQn8WgRyk-unsplash.jpg"
        alt=""
      />
      <h2 className="text-4xl text-red-700 text-center">Brightness</h2>
      <img
        className="size-60 mb-3 brightness-50"
        src="Images/scott-carroll-favQn8WgRyk-unsplash.jpg"
        alt=""
      />
      <img
        className="size-60 mb-3 brightness-200"
        src="Images/scott-carroll-favQn8WgRyk-unsplash.jpg"
        alt=""
      />
      <img
        className="size-60 mb-3 brightness-150"
        src="Images/scott-carroll-favQn8WgRyk-unsplash.jpg"
        alt=""
      />
      <h2 className="text-4xl text-red-700 text-center">Contras</h2>
      <img
        className="size-60 mb-3 contrast-100"
        src="Images/james-mcgill-kMU_2u2Ap2g-unsplash.jpg"
        alt=""
      />
      <img
        className="size-60 mb-3 contrast-150"
        src="Images/james-mcgill-kMU_2u2Ap2g-unsplash.jpg"
        alt=""
      />
      <img
        className="size-60 mb-3 contrast-200"
        src="Images/james-mcgill-kMU_2u2Ap2g-unsplash.jpg"
        alt=""
      />
      <h2 className="text-4xl text-red-700 text-center">Greyskale</h2>
      <img
        className="size-60 mb-3 grayscale"
        src="Images/james-mcgill-kMU_2u2Ap2g-unsplash.jpg"
        alt=""
      />
      <img
        className="size-60 mb-3 invert"
        src="Images/james-mcgill-kMU_2u2Ap2g-unsplash.jpg"
        alt=""
      />
      <h2 className="text-4xl text-red-700 text-center">Hue</h2>
      <img
        className="size-60 mb-3 hue-rotate-60"
        src="Images/james-mcgill-kMU_2u2Ap2g-unsplash.jpg"
        alt=""
      />
       <img
        className="size-60 mb-3 hue-rotate-180"
        src="Images/james-mcgill-kMU_2u2Ap2g-unsplash.jpg"
        alt=""
      />
    </>
  );
};

export default FilterImages;

import React from "react";

const Columns = () => {
  return (
    <>
      <div className="text-center text-3xl text-red-300">Columns</div> <hr />
      {/* <div className="container"> */}
      <div className="columns-2 mt-3 mb-3 gap-0">
        <h1 className="bg-green-400">Heading 1</h1>
        <h1 className="bg-red-300">Heading 2</h1>
        <h1 className="bg-yellow-300">Heading 3</h1>
      </div>
      {/* </div> */}
      <hr />
      {/* <div className="columns-4 md:columns-2 lg:columns-4 sm:columns-1 ">
        <img src="Images/austin-neill-kQzFr1JqSKM-unsplash.jpg" alt="" />
        <img src="Images/geranimo-yKiLWMWquKE-unsplash.jpg" alt="" />
        <img src="Images/austin-neill-kQzFr1JqSKM-unsplash.jpg" alt="" />
        <img src="Images/geranimo-yKiLWMWquKE-unsplash.jpg" alt="" />
      </div> */}
      <hr />
      {/* make it auto responsive */}
      {/* <div className="columns-sm">
        <img src="Images/austin-neill-kQzFr1JqSKM-unsplash.jpg" alt="" />
        <img src="Images/geranimo-yKiLWMWquKE-unsplash.jpg" alt="" />
        <img src="Images/austin-neill-kQzFr1JqSKM-unsplash.jpg" alt="" />
        <img src="Images/geranimo-yKiLWMWquKE-unsplash.jpg" alt="" />
      </div> */}
    </>
  );
};

export default Columns;

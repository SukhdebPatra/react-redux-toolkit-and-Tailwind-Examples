import React from "react";

const PhotoGalary = () => {
  return (
    <>
      {/* we are using to much same  classes so it's good practice to make custom class or component. made changes in index.js {img-galary is a custom component}  */}
      <div className="text-center font-bold text-rose-900 mt-2 mb-2">
        Photo Galary
      </div>{" "}
      <div className="container mx-auto mt-5 flex flex-wrap gap-2 ">
        <img
          className="w-60 hover:scale-110 transition duration-1000 hover:brightness-125 border border-blue-300 rounded hover:border-2 hover:border-blue-200"
          src="Images/anime-girl-with-glasses-flower-4k-wallpaper-uhdpaper.com-230@0@k.jpg"
          alt=""
        />
  
        <img
          className="w-60 hover:scale-110 transition duration-1000 hover:brightness-125 border border-blue-300 rounded hover:border-2 hover:border-blue-200"
          src="Images/anime-girl-driving-retrowave-4k-wallpaper-uhdpaper.com-294@0@j.jpg"
          alt=""
        />

        <img
          className="w-60 img-galary"
          src="Images/beautiful-anime-girl-cake-cafe-4k-wallpaper-uhdpaper.com-667@0@j.jpg"
          alt=""
        />
        <img
          className="w-60 img-galary"
          src="Images/sakura-cherry-blossom-naruto-anime-4k-wallpaper-uhdpaper.com-526@5@c.jpg"
          alt=""
        />
        <img
          className="w-60 img-galary"
          src="Images/beautiful-anime-girl-fantasy-4k-wallpaper-uhdpaper.com-670@0@j.jpg"
          alt=""
        />
            <img
          className="w-60 img-galary"
          src="Images/sakura-cherry-blossom-naruto-anime-4k-wallpaper-uhdpaper.com-526@5@c.jpg"
          alt=""
        />
             <img
          className="w-60 img-galary"
          src="Images/anime-girl-with-glasses-flower-4k-wallpaper-uhdpaper.com-230@0@k.jpg"
          alt=""
        />
           <img
          className="w-60 img-galary"
          src="Images/beautiful-anime-girl-cake-cafe-4k-wallpaper-uhdpaper.com-667@0@j.jpg"
          alt=""
        />
             <img
          className="w-60 img-galary"
          src="Images/anime-girl-driving-retrowave-4k-wallpaper-uhdpaper.com-294@0@j.jpg"
          alt=""
        />

      </div>
    </>
  );
};

export default PhotoGalary;

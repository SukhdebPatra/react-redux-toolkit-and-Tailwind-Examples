import React from "react";

export default function Width() {
  {
    const reverse = (str) => {
      let string = "";
      for (let i = str.length - 1; i >= 0; i--) {
        string += str[i];
      }
      return string;
    };
    console.log(reverse("hi from reverse"), "from");

    let arr = [4, 23, 2, 35];
    let data = arr.filter((num) => num < 20);
    console.log(data);
  }

  return (
    <>
      <h1 className="bg-pink-400">test width</h1>
      <h1 className="bg-pink-500">test width</h1>
      <span className="bg-cyan-500">HI tesy</span>
      <br />
      <div className="bg-pink-500"> Hi there</div>
      <div className="bg-pink-700 max-w-80"> Hi there</div>
      <div className="bg-pink-700 min-w-100 w-22"> Hi there</div>
      <div className="bg-pink-900 w-95"> Hi there</div>
      <div className="bg-green-900 w-95"> Hi there</div>
      <div className="bg-green-200 w-[10px] hover:w-20">Hello</div>
    </>
  );
}

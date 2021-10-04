import React from "react";
import Bookshelves from "../Bookshelves";
import Pooaday from "../Pooaday";
import Progressing from "../Progressing";

function Work() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-dosis"
      style={{ background: "#FEFEFE" }}
      id="work"
    >
      <h1 className="text-5xl mt-5 font-bold">Work</h1>
      <p className="text-gray-600 text-2xl font-dosis mb-10">
        Projects I have done or contributed to
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12">
        <Pooaday />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12">
        <Progressing />
      </div>
      {/* <div className="flex flex-col md:flex-row justify-between items-center w-11/12">
        <Bookshelves />
      </div> */}
    </div>
  );
}

export default Work;

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../../content";

function Stacks() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-dosis"
      id="stack"
    >
      <h1 className="text-5xl font-bold">Stack I Use</h1>
      <div className="flex flex-wrap justify-center">
        {content.stack.tech.map((tech, index) => {
          return (
            <span
              key={index}
              className={`${
                index % 2 === 0 ? "animate-float" : "animate-refloat"
              } w-40 h-40 bg-white shadow-2xl m-2 rounded-lg flex items-center p-5 mt-10`}
            >
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">
        {content.stack.desc}
      </p>
      <p className="w-5/12 md:max-w-xl text-xl text-center mt-10">
        {content.stack.credit}
      </p>
      <button>
        <a
          href="https://youtu.be/8vQeMZbUt98"
          rel="noreferrer"
          target="_blank"
          className="px-20 py-2 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl"
        >
          <p className="text-2xl">Watch here</p>
        </a>
      </button>
    </div>
  );
}

export default Stacks;

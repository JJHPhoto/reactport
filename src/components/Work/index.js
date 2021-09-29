import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../../content";
import useWindowPosition from "../../hook/useWindowPosition";

function Work() {
  const animated = useWindowPosition("header", 0.6);
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-dosis"
      style={{ background: "#FEFEFE" }}
      id="work"
    >
      <h1 className="text-5xl mt-5 font-bold">{content.work.title}</h1>
      <p className="text-gray-600 text-2xl font-dosis mb-10">
        Projects I have done or contributed to
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12">
        {content.work.projects.map((projects, index) => {
          return (
            <div>
              <div
                key={index}
                className={`m-10 transition durtaion-2000 ease-in-out z-10 md:w-4/5 w-4/5`}
              >
                <LazyLoadImage src={projects.img} alt={projects.alt} />
                <div
                  key={index}
                  className={`transition duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block`}
                  style={{
                    border: "1px solid #e5ecf9",
                    transform: animated
                      ? "translate(-10%, 0%) rotate3d(0.540, -0.95, 0 22deg) rotateZ(7deg)"
                      : "",
                    boxShadow:
                      "35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <ProjectDetail />
                </div>
                {/* <div className="flex justify-center items-center md:hidden">
                  <ProjectDetail />
                </div> */}
              </div>
              {/* <span
                key={index}
                className={`transition duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block`}
                style={{
                  border: "1px solid #e5ecf9",
                  transform: animated
                    ? "translate(-10%, 0%) rotate3d(0.540, -0.95, 0 22deg) rotateZ(7deg)"
                    : "",
                  boxShadow:
                    "35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)",
                }}
              >
                <ProjectDetail />
              </span> */}
              {/* <div className="flex justify-center items-center md:hidden">
                <ProjectDetail />
              </div> */}
            </div>
          );
        })}

        {/* <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.img}
          alt="Pooaday mobile view"
          className="m-10 transition durtaion-2000 ease-in-out z-10 md:w-4/5 w-4/5"
        /> */}
        {/* <div
          className="transition duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
          style={{
            border: "1px solid #e5ecf9",
            transform: animated
              ? "translate(-10%, 0%) rotate3d(0.540, -0.95, 0 22deg) rotateZ(7deg)"
              : "",
            boxShadow:
              "35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)",
          }}
        >
          <ProjectDetail />
        </div>
        <div className="flex justify-center items-center md:hidden">
          <ProjectDetail />
        </div> */}
      </div>
    </div>
  );
}

const ProjectDetail = () => {
  const animated = useWindowPosition("header", 0.6);
  return (
    <div>
      <h1
        className={` ${
          animated ? "" : "translate-y-10 opacity-0"
        } transform transition duration-2000 inline-block m-4 font dosis text-xl font-bold`}
      >
        {content.work.projectName}
      </h1>
      <p
        className={` ${
          animated ? "" : "translate-y-10 opacity-0"
        } transform transition duration-2000 inline-block w-11/12 m-4 text-xl font-dosis`}
      >
        {content.work.desc}
      </p>
      <button>
        <a
          href="https://pooaday.herokuapp.com"
          rel="noreferrer"
          target="_blank"
          className={`${
            animated ? "" : "translate-y-10 opacity-0"
          } transform transition duration-2000 px-20 py-2 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
        >
          <p className="text-2xl">Live App</p>
        </a>
      </button>
    </div>
  );
};

export default Work;

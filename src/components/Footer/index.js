import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../../content";
// import useWindowPosition from "../../hook/useWindowPosition";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiTwotoneMail,
} from "react-icons/ai";

function Footer() {
  // const animated = useWindowPosition("header", 0.6, 4);
  return (
    <div
      className=" min-h-screen  flex justify-center items-center  "
      id="footer"
    >
      <div
        style={{
          minHeight: "50vh",
          background: "#3f2a59",
        }}
        className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
      >
        <LazyLoadImage
          effect="blur"
          src={content.contact.headshot}
          placeholderSrc={content.contact.placeholder}
          alt="profile"
          width="300px"
          className="mt-10 rounded-xl transtion duration-2000 ease-in-out mx-auto"
        />
        <div className="font-dosis w-4/5 md:w-2/5 mt-5">
          <h1 className="text-5xl text-white font-bold">
            {content.contact.title}
          </h1>
          <p className="w-11/12 md:max-w-xl text-xl text-white mt-5">
            {content.contact.desc}
          </p>
          <div className="flex flex-wrap mt-6 text-5xl text-white">
            <a
              href="https://github.com/JJHPhoto"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/joshuajhaller/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://twitter.com/jpixtwit"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="mailto:phone@joshuajhaller.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiTwotoneMail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

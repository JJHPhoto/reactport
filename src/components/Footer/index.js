import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../../content";
// import useWindowPosition from "../hook/useWindowPosition";
// import "./Footer.css";

function Footer() {
  return (
    <div
      className=" min-h-screen  flex justify-center items-center  "
      id="footer"
    >
      <div
        style={{
          minHeight: "50vh",
          background: "#091C29",
        }}
        className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
      >
        <LazyLoadImage
          effect="blur"
          src={content.contact.headshot}
          placeholderSrc={content.contact.placeholder}
          alt="profile"
          width="300px"
          className="mt-10 transtion duration-2000 ease-in-out mx-auto"
        />
      </div>
    </div>
  );
}

export default Footer;

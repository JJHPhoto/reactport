import React from "react";
import { Link as ScrollLink } from "react-scroll";
import content from "../../content";

function Navbar() {
  return (
    <div
      style={{
        background: "#3f2a59",
      }}
      className="font-dosis fixed top-0 w-screen z-40"
    >
      <div className="flex items-center justify-between w-10/12 mx-auto py-3">
        <ScrollLink
          to="header"
          smooth={true}
          className="text-3xl font-bold text-white flex-1 cursor-pointer"
        >
          <h1 className="text-3xl font-bold">
            {content.nav.logo}{" "}
            <span className="w-3 h-3 bg-pink-500 inline-block rounded-full"></span>{" "}
          </h1>
        </ScrollLink>
        <div className="text-white text-xl">
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span key={index} className="text-xl mr-4">
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

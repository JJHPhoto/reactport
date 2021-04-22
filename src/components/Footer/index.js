import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer pt-3">
      {/* <a class="btn btn-primary btn-rounded" href="#!" role="button">
        <i class="fab fa-twitter me-2"></i>Twitter
      </a> */}
      <a
        class="btn btn-primary btn-rounded mx-1 pb-1"
        // style={{background-color: #0082ca}}
        // need to figure out color style
        href="#!"
        role="button"
      >
        <i class="fab fa-linkedin-in fa-2x"></i>
      </a>
      <a
        class="btn btn-primary btn-rounded mx-1 pb-1"
        // style="background-color: #55acee"
        href="#!"
        role="button"
      >
        <i class="fab fa-twitter fa-2x"></i>
      </a>
      <a
        class="btn btn-primary btn-rounded mx-1 pb-1"
        // style="background-color: #55acee"
        href="#!"
        role="button"
      >
        <i class="fab fa-github fa-2x"></i>
      </a>
      <a
        class="btn btn-primary btn-rounded mx-1 pb-1"
        // style="background-color: #55acee"
        href="#!"
        role="button"
      >
        <i class="fab fa-instagram fa-2x"></i>
      </a>
      <a
        class="btn btn-primary btn-rounded mx-1 pb-1"
        // style="background-color: #55acee"
        href="#!"
        role="button"
      >
        <i class="fab fa-behance fa-2x"></i>
      </a>
      <h6 class="py-3">© Joshua J Haller 2021</h6>
    </div>
  );
}

export default Footer;

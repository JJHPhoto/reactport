import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer pt-3">
      <a
        class="btn btn-primary btn-rounded btn-sm mx-1 pb-1"
        href="https://www.linkedin.com/in/joshuajhaller/"
        role="button"
      >
        <i class="fab fa-linkedin-in fa-2x"></i>
      </a>
      <a
        class="btn btn-primary btn-rounded btn-sm mx-1 pb-1"
        href="https://twitter.com/jpixtwit"
        role="button"
      >
        <i class="fab fa-twitter fa-2x"></i>
      </a>
      <a
        class="btn btn-primary btn-rounded btn-sm mx-1 pb-1"
        href="https://github.com/JJHPhoto"
        role="button"
      >
        <i class="fab fa-github fa-2x"></i>
      </a>
      <h6 class="py-3">© Joshua J Haller 2021</h6>
    </div>
  );
}

export default Footer;

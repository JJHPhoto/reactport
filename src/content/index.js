import headerImg from "./headshotTibet.png";
import mongodbImg from "./tech logos-mongodb.png";
import express from "./logo_express.png";
import nodeImg from "./tech logos-node.jpg";
import reactImg from "./tech logos-react.png";
import headshot from "./headshot.jpg";
import placeholder from "./placeholder.jpg";
import pooaday from "./pooadayMobileView.png";

export default {
  nav: {
    logo: "JJH",
    links: [
      { text: "Work", to: "work" },
      { text: "Contact", to: "footer" },
    ],
  },
  header: {
    img: headerImg,
    text: ["Hi!", "I'm Joshua Haller", "I'm a "],
    btnText: "Learn More",
    placeholder: placeholder,
  },
  work: {
    title: "Work",
    img: pooaday,
    imgPlaceholder: pooaday,
    projectName: "Pooaday",
    desc: "We are building an application to track daily bowel movements in a fun, non-graphic way. With this app, we hope to help users develop healthier habits. ",
  },
  stack: {
    title: "Stack",
    tech: [
      {
        img: mongodbImg,
        alt: "mongodb",
      },
      {
        img: express,
        alt: "express",
      },
      {
        img: reactImg,
        alt: "react",
      },
      {
        img: nodeImg,
        alt: "node",
      },
    ],
    desc: "I use the MERN stack for a majority of my projects. I have also used frameworks like Bootstrap, Bulma and Handlebars.",
    credit:
      "This portfolio was based off of Daily Web Coding's React Portfolio video on Youtube.",
  },
  contact: {
    title: "Find me!",
    desc: "I am a Full Stack Web Developer with a background in Photography and Graphic Design. I recently graduated with a certificate in Full Stack Web Development from the University of Washington. If you like what you see, please reach out to me on the socials provided or email me.",
    headshot: headshot,
  },
};

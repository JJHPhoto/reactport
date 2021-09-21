import headerImg from "./headshotTibet.png";
// import bootstrapImg from "./bootstrap.png";
import mongodbImg from "./tech logos-mongodb.png";
import express from "./logo_express.png";
import nodeImg from "./tech logos-node.jpg";
import reactImg from "./tech logos-react.png";
import git from "./logo_git.png";
import linkedIn from "./logo_linkedIn.png";
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
    title: "My Projects",
    img: pooaday,
    imgPlaceholder: pooaday,
    projectName: "Pooaday",
    desc: "We are building an application to track daily bowel movements in a fun, non-graphic way. With this app, we hope to help users develop healthier habits. ",
    githubIcon: git,
    // will use an array once I can figure out carousel/slider option I want to make.
    // projects: [
    //   {
    //     img: pooadayImg,
    //     alt: "pooadayLogo",
    //   },
    // ],
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
    desc: "Full Stack Web Developer with a background in Photography and Graphic Design. Certificate in Full Stack Web Development from the University of Washington. Creative, driven, reliable, quick learner, productive working remotely, excellent communication skills from years working with diverse teams.",
    // Figure out how to get this to work or use react-icons?
    // socials: [
    //   {
    //     alt: "github",
    //     img: git,
    //     href: "https://github.com/JJHPhoto",
    //   },
    //   {
    //     alt: "linkedIn",
    //     img: linkedIn,
    //     // link: "https://www.linkedin.com/in/joshuajhaller/",
    //   },
    // ],
    headshot: headshot,
  },
};

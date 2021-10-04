import headerImg from "./headshotTibet.png";
import mongodbImg from "./tech logos-mongodb.png";
import express from "./logo_express.png";
import nodeImg from "./tech logos-node.jpg";
import reactImg from "./tech logos-react.png";
import headshot from "./headshot.jpg";
import placeholder from "./placeholder.jpg";
import pooaday from "./pooadayMobileView.png";
import progressing from "./progressingMobileView.png";
import bookshelves from "./bookshelvesMobileView.png";

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
  pooaday: {
    projectName: "Pooaday",
    img: pooaday,
    imgPlaceholder: pooaday,
    desc: "For users who are in recovery from an illness, like cancer, tracking bowel movements is a daily task. Pooaday made this easy with its user-friendly design. Pooaday could also be used by parents of toddlers who often need to track bowel movements, feeding times and sleep patterns. ",
  },
  progressing: {
    projectName: "Progressing",
    img: progressing,
    imgPlaceholder: progressing,
    desc: "If you have ever wanted an app that allows you to create customized goals, Progressing is the app for you. Progressing lets you create your goals and then break those goals down into individual tasks. These are then tracked in your dashboard where you can see your progress and also create new goals.",
  },
  bookshelves: {
    projectName: "My Bookshelves",
    img: bookshelves,
    imgPlaceholder: bookshelves,
    desc: "Bookshelves description.",
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

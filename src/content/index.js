import headerImg from "./headshotTibet.png";
import bootstrapImg from "./bootstrap.png";
import mongodbImg from "./tech logos-mongodb.png";
import nodeImg from "./tech logos-node.jpg";
import reactImg from "./tech logos-react.png";
import git from "./logo_git.png";
import linkedIn from "./logo_linkedIn.png";
import headshot from "./headshot.jpg";
import placeholder from "./placeholder.jpg";

export default {
  nav: {
    logo: "JH",
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
    title: "Projects",
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
        img: bootstrapImg,
        alt: "bootstrap",
      },
      {
        img: mongodbImg,
        alt: "mongodb",
      },
      {
        img: nodeImg,
        alt: "node",
      },
      {
        img: reactImg,
        alt: "react",
      },
    ],
    desc: "I use the MERN stack for a majority of my projects. I have also used frameworks like Bootstrap, Bulma and Handlebars.",
  },
  contact: {
    title: "Find me!",
    desc: "Full Stack Web Developer with a background in Photography and Graphic Design. Certificate in Full Stack Web Development from the University of Washington. Creative, driven, reliable, quick learner, productive working remotely, excellent communication skills from years working with diverse teams.",
    socials: [
      {
        alt: "github",
        img: git,
        // link: "https://github.com/JJHPhoto",
      },
      {
        alt: "linkedIn",
        img: linkedIn,
        // link: "https://www.linkedin.com/in/joshuajhaller/",
      },
    ],
    headshot: headshot,
  },
};

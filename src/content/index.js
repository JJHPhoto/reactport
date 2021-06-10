import headerImg from "./banner-fog-city.jpg";
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
      { text: "Work", to: "mywork" },
      { text: "Contact", to: "Footer" },
    ],
  },
  header: {
    img: headerImg,
    text: ["Hi!", "I'm Joshua Haller", "I'm a "],
    btnText: "Learn More",
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
    desc: "These are the stacks I'm most familiar with.",
  },
  contact: {
    title: "Find me!",
    desc: "Full Stack Web Developer with a background in Photography and Graphic Design. Certificate in Full Stack Web Development from the University of Washington. Creative, driven, reliable, quick learner, productive working remotely, excellent communication skills from years working with diverse teams.",
    socials: [
      {
        alt: "github",
        img: git,
      },
      {
        alt: "linkedIn",
        img: linkedIn,
      },
    ],
    headshot: headshot,
    placeholder: placeholder,
  },
};

import headerImg from "./banner-fog-city.jpg";
import bootstrapImg from "./bootstrap.png";
import mongodbImg from "./tech logos-mongodb.png";
import nodeImg from "./tech logos-node.jpg";
import reactImg from "./tech logos-react.png";

export default {
  nav: {
    logo: "JH",
    links: [
      { text: "Work", to: "mywork" },
      { text: "Contact", to: "mycontact" },
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
};

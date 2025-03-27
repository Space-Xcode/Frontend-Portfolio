import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
     nameEng: "Projects",
     hash: "#projects",
   },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "React.js",
    description:
      "React.js is a javascript library for building user interfaces.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/image1.png",
    link: "https://www.google.com",
  },
  {
    title: "Next.js",
    description:
      "Next.js, state management (React query, Redux), or advanced hooks.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/image2.png",
    link: "https://www.google.com",
  },
  {
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is an open-secure, utility first CSS framework that enable developers to build custom user interface rapidly.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/image3.png",
    link: "https://www.google.com",
  },
  {
    title: "Node.js",
    description:
      "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/image4.png",
    link: "https://www.google.com",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Prisma",
  "MongoDB",
  "Redux Toolkit",
  "Express",
  "Framer Motion",
];

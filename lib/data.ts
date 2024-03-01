import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import jotion from "@/public/jotion.png";
import ploo from "@/public/ploo.png";
import terminal from "@/public/terminal.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of Florida Computer Science Student",
    location: "Gainesville, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
  {
    title: "Front-End Developer",
    location: "Gainesville, FL",
    description:
      "I worked as a front-end developer for a semester as part of a group project for the Active Learning Program at the University of Florida.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Digital Publishing Intern",
    location: "Remote",
    description:
      "I'm currently working as a digital publishing intern at Math Nation. I'm responsible for creating and maintaining the study materials and guides for students.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ploo",
    description:
      "Clone of the popular streaming platform Twitch. It has features like live chat, video player, and user authentication.",
    tags: ["React", "Next.js 13", "Prisma", "Tailwind", "Socket.io", "MySQL"],
    imageUrl: ploo,
  },
  {
    title: "Jotion",
    description:
      "Clone of the popular notetaking app Notion. It has features like drag and drop, rich text editing, and dark mode.",
    tags: ["React", "Next.js 13", "Convex", "Tailwind", "Clerk", "shadcn"],
    imageUrl: jotion,
  },
  {
    title: "Terminal Portfolio",
    description:
      "A linux terminal based portfolio website. It has features like command line interface, dark mode, and responsive design. Built using LiveTerm.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: terminal,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Java",
  "C++",
  "Data Structures",
  "Algorithms",
] as const;

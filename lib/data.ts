import React from "react";

import { FaCode, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import jotion from "@/public/jotion.png";
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
    title: "Software Engineer Intern",
    location: "Jacksonville, FL",
    description:
      "Developed full-stack features using Java, Spring, and TypeScript at Intercontinental Exchange, supporting the transition from legacy COBOL systems to a modern MSP DX platform. Improved code coverage by 35% through test-driven development and reduced user onboarding time by 4 months.",
    icon: React.createElement(FaCode),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "Gainesville, FL",
    description:
      "I worked as a front-end developer for a semester as part of a group project for the Active Learning Program at the University of Florida.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "University of Florida Computer Science Student",
    location: "Gainesville, FL",
    description:
      "I am currently pursuing a Bachelor's degree in Computer Science at the University of Florida. I am expected to graduate in May 2025.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Jotion",
    description:
      "Clone of the popular notetaking app Notion. It has features like drag and drop, rich text editing, and dark mode.",
    tags: ["React", "Next.js 13", "Convex", "Tailwind", "Clerk", "shadcn"],
    imageUrl: jotion,
    projectUrl: "https://jotion-tlandtroop.vercel.app",
  },
  {
    title: "Terminal Portfolio",
    description:
      "A linux terminal based portfolio website. It has features like command line interface, dark mode, and responsive design. Built using LiveTerm.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: terminal,
    projectUrl: "https://terminal-tlandtroop.vercel.app",
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
  "Docker",
  "Azure DevOps",
  "Express",
  "SQL",
  "Python",
  "Framer Motion",
  "Java",
  "Spring",
  "REST APIs",
  "JUnit",
  "Jest",
  "Material UI",
  "C++",
  "AWS",
  "Test Driven Development",
  "Agile",
  "Visual Studio Code",
  "Intellij IDEA",
] as const;

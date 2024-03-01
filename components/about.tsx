"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.5, delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently a student at the University of Florida studying{" "}
        <span className="font-medium">Computer Science</span>. I am passionate
        about <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, TailwindCSS, and Typescript
        </span>
        . I am also familiar with MongoDB and Prisma. I am always looking to
        learn new technologies and improve my skills. I am currently looking for
        an <span className="font-medium">internship or full time position</span>{" "}
        as a software engineer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my puppy. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">the Italian language and culture</span>.
        I'm also learning how to play the guitar.
      </p>
    </motion.section>
  );
}

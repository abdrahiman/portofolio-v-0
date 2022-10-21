import { AiOutlineGithub } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Img1 from "../imgs/Rectangle 10.jpg";
import Img2 from "../imgs/Group 40.png";
import Img3 from "../imgs/Group 21 (1).jpg";
import Sides from "./sides";
import { useState } from "react";

export default function Skills() {
  let [projects] = useState([
    {
      img: Img1,
      title: "find trend",
      des: "this a lannding page for a fake socaity about finding trends anywhere",
      tags: ["HTML", "CSS", "Js"],
      gitUrl: "/",
      liveUrl: "findtrend-landing.netlify.app",
    },
    {
      img: Img2,
      title: "eXStore",
      des: "a landing page for a games store",
      tags: ["HTML", "SCSS", "Js", "bootstarp"],
      gitUrl: "/",
      liveUrl: "/",
    },
    {
      img: Img3,
      title: "Fodo",
      des: "a landing page for a food restarent",
      tags: ["HTML", "CSS"],
      gitUrl: "/",
      liveUrl: "/",
    },
  ]);
  return (
    <motion.div className="work relative" exit={{ opacity: 0 }}>
      <Sides />
      <h2>Work</h2>
      <main>
        <Splide
          options={{
            arrows: false,
            arrowPath: false,
            gap: "1rem",
            perPage: 2,
            drag: "free",
            breakpoints: {
              760: {
                perPage: 1,
                gap: "2rem",
              },
            },
          }}
        >
          {projects.forEach((project) => (
            <SplideSlide>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="box flex items-start justify-start gap-1 flex-col"
              >
                <img src={project.img} alt="" />
                <div className="text">
                  <h3>{project.title}</h3>
                  <p className="des">{project.des}</p>
                  <div className="line"></div>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span>{tag}</span>
                    ))}
                  </div>
                  <div className="foot">
                    <a className="git" href={project.gitUrl}>
                      <AiOutlineGithub />
                    </a>
                    <a className="live" href={project.liveUrl}>
                      Visit
                    </a>
                  </div>
                </div>
              </motion.div>
            </SplideSlide>
          ))}
        </Splide>
        <h5>
          grap to see more <BiRightArrowAlt />
        </h5>
      </main>
    </motion.div>
  );
}

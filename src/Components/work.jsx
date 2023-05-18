import { AiOutlineGithub } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Img1 from "../imgs/Rectangle 10.jpg";
import Img2 from "../imgs/Group 40.png";
import Img3 from "../imgs/Group 21 (1).jpg";
import Img0 from "../imgs/Screenshot 2023-05-18 091500.png";

import Sides from "./sides";
import { useState } from "react";

export default function Work() {
  let [projects] = useState([
    {
      img: Img0,
      title: "Hamesh Blog",
      des: "my personal arabic blog to",
      tags: ["React", "Next js", "tailwind", "mongoose"],
      gitUrl: "https://github.com/iabderrahim/hamesh",
      liveUrl: "https://hamesh.vercel.app",
    },
    {
      img: Img1,
      title: "find trend",
      des: "landing page",
      tags: ["HTML", "CSS", "Js"],
      gitUrl: "https://github.com/iabderrahim/find-trend",
      liveUrl: "https://findtrend-landing.netlify.app",
    },
    {
      img: Img2,
      title: "eXStore",
      des: "landing pages",
      tags: ["HTML", "SCSS", "Js", "bootstarp"],
      gitUrl: "https://github.com/iabderrahim/eXStore",
      liveUrl: "/",
    },
    {
      img: Img3,
      title: "Fodo",
      des: "landing page",
      tags: ["HTML", "CSS"],
      gitUrl: "https://github.com/iabderrahim/Food-Delivery-Landing-Page",
      liveUrl: "/",
    },
  ]);
  return (
    <motion.div className="work relative" exit={{ opacity: 0 }}>
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
          {projects.map((project) => (
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
                    <a className="git" target="_blank" href={project.gitUrl}>
                      <AiOutlineGithub />
                    </a>
                    <a className="live" target="_blank" href={project.liveUrl}>
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

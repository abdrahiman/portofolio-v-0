import { AiOutlineGithub } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Img from "../assest/26a179ba89e9421b9b389566a2aae379.png";
import Img1 from "../assest/Rectangle 10.jpg";
import Img2 from "../assest/Group 40.png";
import Img3 from "../assest/Group 21 (1).jpg";
import Sides from "./sides";

export default function Skills() {
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
          <SplideSlide>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="box flex items-start justify-start gap-1 flex-col"
            >
              <img src={Img1} alt="" />
              <div className="text">
                <h3>find trend</h3>
                <p className="des">
                  this a lannding page for a fake socaity about finding trends
                  anywhere
                </p>
                <div className="line"></div>
                <div className="tags">
                  <span>Html</span>
                  <span>Scss</span>
                  <span>Js</span>
                </div>
                <div className="foot">
                  <a
                    className="git"
                    href="https://github.com/abderrahim101/find-trend"
                  >
                    <AiOutlineGithub />
                  </a>
                  <a className="live" href="findtrend-landing.netlify.app">
                    Visit
                  </a>
                </div>
              </div>
            </motion.div>
          </SplideSlide>
          <SplideSlide>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="box flex items-start justify-start gap-1 flex-col"
            >
              <img src={Img2} alt="" />
              <div className="text">
                <h3>eXstore</h3>
                <p className="des">a landing page for a games store</p>
                <div className="line"></div>
                <div className="tags">
                  <span>Html</span>
                  <span>Css</span>
                  <span>Bootstrap</span>
                </div>
                <div className="foot">
                  <a
                    className="git"
                    href="https://github.com/abderrahim101/eXStore"
                  >
                    <AiOutlineGithub />
                  </a>
                  <a className="live" href="exstore.netlify.app">
                    Visit
                  </a>
                </div>
              </div>
            </motion.div>
          </SplideSlide>
          <SplideSlide>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="box flex items-start justify-start gap-1 flex-col"
            >
              <img src={Img3} alt="" />
              <div className="text">
                <h3>front end developer</h3>
                <p className="des">
                  It is build on top of the bl blbn bl React JS, with
                  styledComponents .
                </p>
                <div className="line"></div>
                <div className="tags">
                  <span>Html</span>
                  <span>Api</span>
                  <span>React</span>
                </div>
                <div className="foot">
                  <a className="git">
                    <AiOutlineGithub />
                  </a>
                  <a className="live" href="/">
                    Visit
                  </a>
                </div>
              </div>
            </motion.div>
          </SplideSlide>
          <SplideSlide>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="box flex items-start justify-start gap-1 flex-col"
            >
              <img src={Img} alt="" />
              <div className="text">
                <h3>front end developer</h3>
                <p className="des">
                  It is build on top of the bl blbn bl React JS, with
                  styledComponents .
                </p>
                <div className="line"></div>
                <div className="tags">
                  <span>Html</span>
                  <span>Api</span>
                  <span>React</span>
                </div>
                <div className="foot">
                  <a className="git">
                    <AiOutlineGithub />
                  </a>
                  <a className="live" href="/">
                    Visit
                  </a>
                </div>
              </div>
            </motion.div>
          </SplideSlide>
          <SplideSlide>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="box flex items-start justify-start gap-1 flex-col"
            >
              <img src={Img} alt="" />
              <div className="text">
                <h3>front end developer</h3>
                <p className="des">
                  It is build on top of the bl blbn bl React JS, with
                  styledComponents .
                </p>
                <div className="line"></div>
                <div className="tags">
                  <span>Html</span>
                  <span>Api</span>
                  <span>React</span>
                </div>
                <div className="foot">
                  <a className="git">
                    <AiOutlineGithub />
                  </a>
                  <a className="live" href="/">
                    Visit
                  </a>
                </div>
              </div>
            </motion.div>
          </SplideSlide>
        </Splide>
        <h5>
          grap to see more <BiRightArrowAlt />
        </h5>
      </main>
    </motion.div>
  );
}
